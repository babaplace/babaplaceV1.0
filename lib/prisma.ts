import { PrismaClient } from "@prisma/client";
import { auth } from "./auth";
import { Session } from "next-auth";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

export const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const getUserSession = async () => {
  const session = await auth();
  const user = await prisma.user.findUnique({
    where: { email: session?.user.email ?? "" },
  });

  return {
    ...session,
    userId: user?.id,
  };
};
