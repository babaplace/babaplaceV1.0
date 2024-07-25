/*
  Warnings:

  - You are about to drop the column `advancePayment` on the `Room` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Room" DROP COLUMN "advancePayment",
ADD COLUMN     "caution" DOUBLE PRECISION;
