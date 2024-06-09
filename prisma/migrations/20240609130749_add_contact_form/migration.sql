-- CreateEnum
CREATE TYPE "role" AS ENUM ('agence', 'bailleur', 'client');

-- CreateEnum
CREATE TYPE "subjectContact" AS ENUM ('partneriat', 'contact');

-- CreateTable
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL,
    "role" "role" NOT NULL DEFAULT 'client',
    "name" TEXT,
    "email" TEXT NOT NULL,
    "message" TEXT,
    "subject" "subjectContact" NOT NULL DEFAULT 'contact',

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);
