-- CreateTable
CREATE TABLE "About" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "image" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Experience" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Education" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL
);
