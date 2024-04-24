/*
  Warnings:

  - The primary key for the `tasks` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_tasks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "activity" TEXT NOT NULL,
    "isChecked" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_tasks" ("activity", "id", "isChecked") SELECT "activity", "id", "isChecked" FROM "tasks";
DROP TABLE "tasks";
ALTER TABLE "new_tasks" RENAME TO "tasks";
CREATE UNIQUE INDEX "tasks_activity_key" ON "tasks"("activity");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
