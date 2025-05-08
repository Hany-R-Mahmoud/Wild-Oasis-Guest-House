"use server"; // to define server actions

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import {
  createBooking,
  deleteBooking,
  getBookings,
  updateBooking,
  updateGuest,
} from "./data-service";
import { redirect } from "next/navigation";

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function updateProfile(formData) {
  // console.log(formData);

  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error(
      "National ID should be between 6 - 12 alphanumeric characters"
    );

  const updatedData = { nationalID, nationality, countryFlag };

  await updateGuest(session.user.guestId, updatedData);

  // const { data, error } = await supabase
  //   .from("guests")
  //   .update(updatedData)
  //   .eq("id", session.user.guestId);

  // if (error) {
  //   console.error(error);
  //   throw new Error("Guest could not be updated");
  // }

  revalidatePath("/account/profile");
}

export async function deleteReservation(bookingId) {
  // for testing useOptimistic
  // await new Promise((res) => setTimeout(res, 2000));
  // throw new Error();

  // regular check if user is authenticated
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  // any logged in user, would be able to delete any bookings , even if it is not his,
  //to control that, we have to make sure that the bookingId given is related to one of his bookings

  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingsIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingsIds.includes(bookingId))
    throw new Error("You are not allowed to delete this booking");

  await deleteBooking(bookingId);

  revalidatePath("/account/reservations");
}

export async function updateReservation(formData) {
  // regular check if user is authenticated
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const bookingId = Number(formData.get("bookingId"));

  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingsIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingsIds.includes(bookingId))
    throw new Error("You are not allowed to edit this booking");

  // const numGuests = formData.get("numGuests");
  // const observations = formData.get("observations");
  // const updatedData = { numGuests, observations };
  const updatedData = {
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
  };

  // console.log(updatedData);

  await updateBooking(bookingId, updatedData);

  revalidatePath(`/account/reservations/edit/${bookingId}`);
  revalidatePath(`/account/reservations`);
  redirect("/account/reservations");
}

export async function createReservation(bookingData, formData) {
  //regular check for authentication
  const session = await auth();
  if (!session) throw new Error("You must be logged in");
  console.log(bookingData);
  const newBooking = {
    ...bookingData,
    guestId: session.user.guestId,
    numGuests: Number(formData?.get("numGuests")),
    observations: formData?.get("observations").slice(0, 1000),
    extrasPrice: 0,
    totalPrice: bookingData.cabinPrice,
    isPaid: false,
    hasBreakfast: false,
    status: "unconfirmed",
  };

  await createBooking(newBooking);

  revalidatePath(`/cabins/${bookingData.id}`);
  revalidatePath(`/account/reservations`);
  redirect("/account/reservations");
}
