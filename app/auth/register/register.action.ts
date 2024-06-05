"use server";

import { signIn } from "@/lib/auth";
import { action } from "@/lib/safe-action";
import { AuthError } from "next-auth";
import { registerSheme } from "../auth.sheme";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";

export const doRegister = action(registerSheme, async (data) => {
  try {
    const existUser = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existUser) {
      throw new Error("impossible de creer un compte donnee invalide");
    }

    const passwordHash = await bcrypt.hash(data.password, 10);

    const user = await prisma.user.create({
      data: {
        ...data,
        password: passwordHash,
      },
    });

    revalidatePath("/");

    return {
      message: "Vous etes connectée avec succès et connecté avec sucess",
      user,
    };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          throw new Error("Credentials invalides");
        default:
          throw new Error("Quelque chose s'est mal passé");
      }
    }
  }
});
