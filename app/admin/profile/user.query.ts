import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const getUserWithAppartement = async (email: string) =>
  await prisma.user.findUnique({
    where: { email: email },
    include: { appartements: true },
  });

export type userWithAppartementType = Prisma.PromiseReturnType<
  typeof getUserWithAppartement
>;
