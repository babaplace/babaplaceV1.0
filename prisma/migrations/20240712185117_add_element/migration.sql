/*
  Warnings:

  - The values [RUNNING_WATER,ELECTRICITY,INTERNET_ACCESS] on the enum `ApartmentAmenityEnum` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `street` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `zipCode` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `advancePayment` on the `Appartment` table. All the data in the column will be lost.
  - You are about to drop the column `numberBathrooms` on the `Appartment` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ApartmentAmenityEnum_new" AS ENUM ('BALCONY', 'SECURITY_GUARD', 'JARDIN', 'TERRASSE', 'ESPACE_VERT', 'PISCINE', 'ELEVATOR', 'SHARED_BATHROOM', 'PRIVATE_BATHROOM', 'SHARED_KITCHEN', 'PRIVATE_KITCHEN', 'LIVING_ROOM', 'TOILET', 'CLIMATISATION', 'CLOSED_RESIDENCE', 'SECURITY');
ALTER TABLE "Appartment" ALTER COLUMN "amenities" TYPE "ApartmentAmenityEnum_new"[] USING ("amenities"::text::"ApartmentAmenityEnum_new"[]);
ALTER TYPE "ApartmentAmenityEnum" RENAME TO "ApartmentAmenityEnum_old";
ALTER TYPE "ApartmentAmenityEnum_new" RENAME TO "ApartmentAmenityEnum";
DROP TYPE "ApartmentAmenityEnum_old";
COMMIT;

-- AlterTable
ALTER TABLE "Address" DROP COLUMN "street",
DROP COLUMN "zipCode",
ADD COLUMN     "address" TEXT,
ALTER COLUMN "country" SET DEFAULT 'Maroc';

-- AlterTable
ALTER TABLE "Appartment" DROP COLUMN "advancePayment",
DROP COLUMN "numberBathrooms",
ADD COLUMN     "caution" DOUBLE PRECISION;
