/*
  Warnings:

  - Added the required column `status` to the `WorkExperience` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- AlterTable
ALTER TABLE "WorkExperience" ADD COLUMN     "status" "Status" NOT NULL;
