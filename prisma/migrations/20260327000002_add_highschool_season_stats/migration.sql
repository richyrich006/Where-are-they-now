-- Add highSchool to Person
ALTER TABLE "Person" ADD COLUMN "highSchool" TEXT;

-- Create SeasonStats table
CREATE TABLE "SeasonStats" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "membershipId" INTEGER NOT NULL,
    "season" TEXT NOT NULL,
    "yearLabel" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL,
    "gamesPlayed" INTEGER,
    "pointsPerGame" REAL,
    "reboundsPerGame" REAL,
    "assistsPerGame" REAL,
    CONSTRAINT "SeasonStats_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "TeamMembership" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- Index for fast lookup by membership
CREATE INDEX "SeasonStats_membershipId_idx" ON "SeasonStats"("membershipId");
