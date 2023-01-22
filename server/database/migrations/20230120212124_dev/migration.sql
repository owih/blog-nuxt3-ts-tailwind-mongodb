-- CreateTable
CREATE TABLE "Skill" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Subskill" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "skillId" INTEGER NOT NULL,
    "basic" BOOLEAN NOT NULL,
    "name" TEXT NOT NULL,
    CONSTRAINT "Subskill_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Skill_name_key" ON "Skill"("name");
