"use server"; // to define server actions

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { deleteBooking, updateGuest } from "./data-service";

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

export async function deleteGuestBooking(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");
  // const id = formData.get("id");

  console.log(formData);
  // await deleteBooking();
}
