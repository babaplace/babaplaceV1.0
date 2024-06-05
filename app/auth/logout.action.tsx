"use server";

import { signOut } from "@/lib/auth";
import { authAction } from "@/lib/safe-action";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const logoutSheme = z.object({});

export const doLogout = authAction(logoutSheme, async (data, currentUser) => {
  try {
    await signOut({ redirect: false });

    revalidatePath("/");

    return {
      message: "Vous êtes deconnecté",
    };
  } catch (error: any) {
    throw new Error(error);
  }
});
