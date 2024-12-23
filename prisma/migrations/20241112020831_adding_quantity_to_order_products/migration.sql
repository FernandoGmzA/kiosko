/*
  Warnings:

  - You are about to drop the column `data` on the `Order` table. All the data in the column will be lost.
  - Added the required column `quantity` to the `OrderProducts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "data",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "OrderProducts" ADD COLUMN     "quantity" INTEGER NOT NULL;
