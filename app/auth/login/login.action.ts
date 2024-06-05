"use server";

import { signIn } from "@/lib/auth";
import { action } from "@/lib/safe-action";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const doLogin = action(z.string(), async (form) => {
  try {
    const credentials = JSON.parse(form);
    await signIn("credentials", {
      email: credentials.email,
      password: credentials.password,
      redirect: false,
    });

    revalidatePath("/auth/login");
    return {
      message: "Vous etes connectée avec succès",
    };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          throw new Error("Identifiants invalides");
        default:
          throw new Error("Quelque chose s'est mal passé");
      }
    }
  }
});
