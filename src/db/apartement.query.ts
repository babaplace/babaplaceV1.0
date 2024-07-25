import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const getAllAppartements = async (limit?: number) =>
  await prisma.appartment.findMany({
    take: limit ? limit : undefined,
    orderBy: { createdAt: "desc" },
  });

export type allAppartementType = Prisma.PromiseReturnType<
  typeof getAllAppartements
>;

export const getAppartmentById = async (id: string) =>
  await prisma.appartment.findUnique({
    where: {
      id,
    },
  });

export type appartmentByIdType = Prisma.PromiseReturnType<
  typeof getAppartmentById
>;

export const getAllAppartementsWithImages = async (limit?: number) => {
  const appartements = await prisma.appartment.findMany({
    take: limit ? limit : undefined,
    orderBy: { createdAt: "desc" },
    // where: {
    //   status: {
    //     NOT: {
    //       status: "occuped",
    //     },
    //   },
    // },
    include: {
      images: true,
      address: true,
      availability: true,
    },
  });
  return appartements;
};

export type allAppartementsWithImagesType = Prisma.PromiseReturnType<
  typeof getAllAppartementsWithImages
>;

export const getAppartementByIdWithMedias = async (id: string) =>
  await prisma.appartment.findUnique({
    where: {
      id,
    },
    include: {
      images: true,
      address: true,
      availability: true,
    },
  });

export type appartementByIdWithMediasType = Prisma.PromiseReturnType<
  typeof getAppartementByIdWithMedias
>;

export const getAppartementByIdWithMediasUser = async (
  id: string,
  userId: string
) => {
  return await prisma.appartment.findUnique({
    where: {
      id,
      ownerId: userId,
    },
    include: {
      images: true,
      address: true,
      availability: true,
    },
  });
};

export type appartementByIdWithMediasUserType = Prisma.PromiseReturnType<
  typeof getAppartementByIdWithMediasUser
>;
