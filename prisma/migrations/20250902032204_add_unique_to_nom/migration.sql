/*
  Warnings:

  - A unique constraint covering the columns `[nom]` on the table `Referentiel` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Referentiel_nom_key` ON `Referentiel`(`nom`);
