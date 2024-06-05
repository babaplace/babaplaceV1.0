/*
  Warnings:

  - You are about to drop the column `statusId` on the `appartement` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[appartementId]` on the table `appartementStatus` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `appartementId` to the `appartementStatus` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "appartement" DROP CONSTRAINT "appartement_statusId_fkey";

-- DropIndex
DROP INDEX "appartement_statusId_key";

-- AlterTable
ALTER TABLE "appartement" DROP COLUMN "statusId";

-- AlterTable
ALTER TABLE "appartementStatus" ADD COLUMN     "appartementId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "appartementStatus_appartementId_key" ON "appartementStatus"("appartementId");

-- AddForeignKey
ALTER TABLE "appartementStatus" ADD CONSTRAINT "appartementStatus_appartementId_fkey" FOREIGN KEY ("appartementId") REFERENCES "appartement"("id") ON DELETE CASCADE ON UPDATE CASCADE;
