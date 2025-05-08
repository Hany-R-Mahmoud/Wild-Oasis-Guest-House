"use server"; // to define server actions

import { signIn, signOut } from "./auth";
import { updateGuest } from "./data-service";

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function updateProfile(formData) {
  // console.log(formData);
  await updateGuest(formData.id, {
    nationalID: formData.nationalID,
    nationality: formData.nationality,
  });
}
