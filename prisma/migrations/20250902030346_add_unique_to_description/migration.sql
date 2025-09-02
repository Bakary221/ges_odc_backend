/*
  Warnings:

  - A unique constraint covering the columns `[description]` on the table `Competence` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Competence_description_key` ON `Competence`(`description`);
