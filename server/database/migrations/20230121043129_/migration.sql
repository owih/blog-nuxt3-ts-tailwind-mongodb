/*
  Warnings:

  - You are about to drop the `About` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Education` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Experience` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "About";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Education";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Experience";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Portfolio" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "preview" TEXT NOT NULL,
    "gif" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Tecnology" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "PortfolioOnTecnologies" (
    "portfolioId" INTEGER NOT NULL,
    "tecnologyId" INTEGER NOT NULL,
    "assignedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    PRIMARY KEY ("portfolioId", "tecnologyId"),
    CONSTRAINT "PortfolioOnTecnologies_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "Portfolio" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PortfolioOnTecnologies_tecnologyId_fkey" FOREIGN KEY ("tecnologyId") REFERENCES "Tecnology" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
