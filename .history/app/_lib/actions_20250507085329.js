"use server"; // to define server actions

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import {
  deleteBooking,
  getBookings,
  updateBooking,
  updateGuest,
} from "./data-service";

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

export async function updateReservation(id, formData) {
  // regular check if user is authenticated
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingsIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingsIds.includes(id))
    throw new Error("You are not allowed to edit this booking");

  const numGuests = formData.get("numGuests");

  await updateBooking(id);

  revalidatePath(`/account/reservations/edit/${id}`);
}
