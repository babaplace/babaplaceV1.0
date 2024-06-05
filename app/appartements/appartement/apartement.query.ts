import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const getAllAppartements = async (limit?: number) =>
  await prisma.appartement.findMany({
    take: limit ? limit : undefined,
    orderBy: { createdAt: "desc" },
  });

export type allAppartementType = Prisma.PromiseReturnType<
  typeof getAllAppartements
>;

export const getAppartmentById = async (id: string) =>
  await prisma.appartement.findUnique({
    where: {
      id,
    },
  });

export type appartmentByIdType = Prisma.PromiseReturnType<
  typeof getAppartmentById
>;

export const getAllAppartementsWithImages = async (limit?: number) => {
  const appartements = await prisma.appartement.findMany({
    take: limit ? limit : undefined,
    orderBy: { createdAt: "desc" },
    include: {
      medias: true,
    },
  });
  return appartements;
};

export type allAppartementsWithImagesType = Prisma.PromiseReturnType<
  typeof getAllAppartementsWithImages
>;

export const getAppartementByIdWithMedias = async (id: string) =>
  await prisma.appartement.findUnique({
    where: {
      id,
    },
    include: {
      medias: true,
    },
  });

export type appartementByIdWithMediasType = Prisma.PromiseReturnType<
  typeof getAppartementByIdWithMedias
>;
