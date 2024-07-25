/*
  Warnings:

  - You are about to drop the column `propertyId` on the `Image` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_appartmentId_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_roomId_fkey";

-- AlterTable
ALTER TABLE "Image" DROP COLUMN "propertyId",
ADD COLUMN     "appartementId" TEXT,
ADD COLUMN     "roomId" TEXT;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_appartementId_fkey" FOREIGN KEY ("appartementId") REFERENCES "Appartment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE SET NULL ON UPDATE CASCADE;
