"use server";

import { action } from "@/lib/safe-action";
import { contactShemePartneriat } from "./contact.sheme";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const doSendContactPartenariat = action(
  contactShemePartneriat,
  async (data) => {
    try {
      const contact = await prisma.contact.create({
        data: { ...data },
      });
      revalidatePath("/partnariat");
      return {
        message: "Réquête envoyer avec succès",
      };
    } catch (error) {
      throw new Error("Impossible d'envoyer ! ");
    }
  }
);
