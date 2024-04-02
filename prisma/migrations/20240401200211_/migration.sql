/*
  Warnings:

  - You are about to drop the column `cancelled_at` on the `project` table. All the data in the column will be lost.
  - You are about to drop the column `forecasted_at` on the `project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `project` DROP COLUMN `cancelled_at`,
    DROP COLUMN `forecasted_at`,
    MODIFY `started_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
