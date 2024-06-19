"use server";

import { prisma } from "@/lib/prisma";
import { action } from "@/lib/safe-action";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const doBookingVisiteSheme = z.object({
  name: z.string(),
  date: z.date(),
  phone: z.string(),
  appartementId: z.string(),
});

export const doBookingVisite = action(doBookingVisiteSheme, async (data) => {
  try {
    const bookingVisite = await prisma.bookingVisite.create({
      data: {
        name: data.name,
        datevisite: data.date,
        phone: data.phone,
        appartementId: data.appartementId,
      },
    });

    console.log(bookingVisite);

    revalidatePath(`/discover/${data.appartementId}`);
    return {
      bookingVisite,
      message: "Reservation envoyé",
    };
  } catch (error) {
    throw new Error("Impossible de reserver ! Veuillez ressayer");
  }
});
