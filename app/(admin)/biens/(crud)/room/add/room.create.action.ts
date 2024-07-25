"use server";

import { authAction } from "@/lib/safe-action";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { RoomScheme } from "@/src/types/room.sheme";

export const doCreateRoom = authAction(
  RoomScheme,
  async (data, sessionUser) => {
    if (!sessionUser.session.user.email) {
      throw new Error("Impossible de creer cet Chambre");
    }

    const user = await prisma.user.findUnique({
      where: { email: sessionUser.session.user.email },
    });

    if (!user) {
      throw new Error("Impossible de creer cet Chambre");
    }

    let address = await prisma.address.findFirst({
      where: {
        ...data.basicInfoRoomScheme,
      },
    });

    if (!address) {
      address = await prisma.address.create({
        data: { ...data.basicInfoRoomScheme },
      });
    }

    const room = await prisma.room.create({
      data: {
        ownerId: user.id,
        description: data.additionalInfoRoomScheme.description,
        addressId: address.id,
        price: data.financialInfoRoomScheme.price,
        caution: data.financialInfoRoomScheme.caution,
        surface: data.additionalInfoRoomScheme.surface,
        amenities: data.equipementRoomSheme,
        images: {
          createMany: {
            data: data.imagesStepRoomSheme.map((image) => ({
              url: image.file,
              propertyType: "room",
            })),
          },
        },
      },
    });

    if (!room) {
      throw new Error("Impossible");
    }

    revalidatePath("/");

    return {
      room,
      message: "Chambre cree avec succes",
    };
  }
);
