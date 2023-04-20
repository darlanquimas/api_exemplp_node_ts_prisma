/*
  Warnings:

  - You are about to drop the `customer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `customer_address` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `customer_contact` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "customer_address" DROP CONSTRAINT "customer_address_customer_id_fkey";

-- DropForeignKey
ALTER TABLE "customer_contact" DROP CONSTRAINT "customer_contact_customer_id_fkey";

-- DropTable
DROP TABLE "customer";

-- DropTable
DROP TABLE "customer_address";

-- DropTable
DROP TABLE "customer_contact";
