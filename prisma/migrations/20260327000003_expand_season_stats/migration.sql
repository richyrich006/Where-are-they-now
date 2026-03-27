-- Drop old SeasonStats (wrong FK + missing columns)
DROP TABLE IF EXISTS "SeasonStats";

-- Recreate with personId FK, level, teamName, and full stat columns
CREATE TABLE "SeasonStats" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "personId" INTEGER NOT NULL,
    "level" TEXT NOT NULL,
    "teamName" TEXT NOT NULL,
    "season" TEXT NOT NULL,
    "yearLabel" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL,
    "gamesPlayed" INTEGER,
    "minutesPerGame" REAL,
    "pointsPerGame" REAL,
    "reboundsPerGame" REAL,
    "assistsPerGame" REAL,
    "stealsPerGame" REAL,
    "blocksPerGame" REAL,
    "fieldGoalPct" REAL,
    "threePointPct" REAL,
    "freeThrowPct" REAL,
    CONSTRAINT "SeasonStats_personId_fkey"
        FOREIGN KEY ("personId") REFERENCES "Person" ("id")
        ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE INDEX "SeasonStats_personId_idx" ON "SeasonStats"("personId");
