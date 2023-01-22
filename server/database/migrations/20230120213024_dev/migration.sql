-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Subskill" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "skillId" INTEGER NOT NULL,
    "basic" BOOLEAN NOT NULL DEFAULT false,
    "pinned" BOOLEAN DEFAULT false,
    "name" TEXT NOT NULL,
    CONSTRAINT "Subskill_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Subskill" ("basic", "id", "name", "skillId") SELECT "basic", "id", "name", "skillId" FROM "Subskill";
DROP TABLE "Subskill";
ALTER TABLE "new_Subskill" RENAME TO "Subskill";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
