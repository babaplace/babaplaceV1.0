"use server";

import { authAction } from "@/lib/safe-action";
import { appartementScheme } from "../appartement.sheme";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const doCreateAppartement = authAction(
  appartementScheme,
  async (data, sessionUser) => {
    if (!sessionUser.session.user.id) {
      throw new Error("Impossible de creer cet appartement");
    }

    console.log(data);

    const appartement = await prisma.appartement.create({
      data: {
        ownerId: sessionUser.session.user.id,
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
      throw new Error("Impossible de creer user");
    }

    revalidatePath("/");

    return {
      appartement,
      message: "Appartement cree avec succes",
    };
  }
);
