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

  const nationalID = formData.get("nationalID");
  const x = formData.get("nationality");
  console.log(x.split("%").at(0));

  await updateGuest(session.user.guestId, {
    nationalID: nationalID,
    nationality: x,
  });
}
