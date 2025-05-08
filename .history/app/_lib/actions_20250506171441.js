"use server"; // to define server actions

import { signIn, signOut } from "./auth";
import { updateGuest } from "./data-service";

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function updateProfile(id, updatedFields) {
  console.log("update profile");
  await updateGuest(id, {
    nationalID: updatedFields.nationalID,
    country: updatedFields.country,
  });
}
