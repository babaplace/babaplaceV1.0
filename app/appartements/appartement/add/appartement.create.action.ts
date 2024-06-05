"use server";

import { authAction } from "@/lib/safe-action";
import { appartementScheme } from "../appartement.sheme";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const doCreateAppartement = authAction(
  appartementScheme,
  async (data, sessionUser) => {
    if (!sessionUser.session.user.email) {
      throw new Error("Impossible de creer cet appartement");
    }

    const user = await prisma.user.findUnique({
      where: { email: sessionUser.session.user.email },
    });

    if (!user) {
      throw new Error("Impossible de creer cet appartement");
    }

    const appartement = await prisma.appartement.create({
      data: {
        ownerId: user.id,
        description: data.additionalInfoScheme.description,
        title: data.basicInfoScheme.title,
        city: data.basicInfoScheme.city,
        address: data.basicInfoScheme.address,
        price: Number(data.financialInfoScheme.price),
        caution: Number(data.financialInfoScheme.caution),
        numberChambres: Number(data.detailsSheme.numberChambres),
        numberSalons: Number(data.detailsSheme.numberSalons),
        numberToilettes: Number(data.detailsSheme.numberToilettes),
        niveauEtage: Number(data.detailsSheme.niveauEtage),
        numberCuisine: Number(data.detailsSheme.Cuisine),
        status: {
          create: {},
        },
        medias: {
          createMany: {
            data: data.imagesStepSheme.map((image) => ({
              url: image.file,
            })),
          },
        },
      },
    });

    if (!appartement) {
      throw new Error("Impossible");
    }

    revalidatePath("/");

    return {
      appartement,
      message: "Appartement cree avec succes",
    };
  }
);
