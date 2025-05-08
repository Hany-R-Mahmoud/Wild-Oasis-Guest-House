"use server"; // to define server actions

import { auth, signIn, signOut } from "./auth";
import { updateGuest } from "./data-service";

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
  console.log(session);

  await updateGuest(session.user.guestId, {
    nationalID: formData.nationalID,
    nationality: formData.nationality,
  });
}
