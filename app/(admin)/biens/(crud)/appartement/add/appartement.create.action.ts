"use server";

import { authAction } from "@/lib/safe-action";
import { appartementScheme } from "../../../../../../src/types/appartement.sheme";
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

    const amenities = [...data.equipementSheme, ...data.espaceAnnexeSheme];

    let address = await prisma.address.findFirst({
      where: {
        ...data.basicInfoScheme,
      },
    });

    if (!address) {
      address = await prisma.address.create({
        data: { ...data.basicInfoScheme },
      });
    }

    const appartement = await prisma.appartment.create({
      data: {
        ownerId: user.id,
        description: data.additionalInfoScheme.description,
        addressId: address.id,
        price: Number(data.financialInfoScheme.price),
        caution: Number(data.financialInfoScheme.caution),
        surface: data.detailsSheme.surface,
        numberRooms: Number(data.detailsSheme.numberRooms),
        numberMaxFloor: Number(data.detailsSheme.numberMaxFloor),
        numberUnitsPerFloor: Number(data.detailsSheme.numberUnitsPerFloor),
        amenities: amenities,
        images: {
          createMany: {
            data: data.imagesStepSheme.map((image) => ({
              url: image.file,
              propertyType: "Appartment",
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
