-- Add month/day to CareerEvent
ALTER TABLE "CareerEvent" ADD COLUMN "month" INTEGER;
ALTER TABLE "CareerEvent" ADD COLUMN "day" INTEGER;

-- Create Submission table
CREATE TABLE "Submission" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "personSlug" TEXT,
    "personName" TEXT,
    "submitterName" TEXT,
    "submitterEmail" TEXT,
    "field" TEXT NOT NULL,
    "currentValue" TEXT,
    "suggestedValue" TEXT NOT NULL,
    "reason" TEXT,
    "sourceUrl" TEXT,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reviewedAt" DATETIME
);

-- Create PlayerLocation table
CREATE TABLE "PlayerLocation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "personId" INTEGER NOT NULL,
    "city" TEXT NOT NULL,
    "region" TEXT,
    "country" TEXT NOT NULL DEFAULT 'USA',
    "latitude" REAL NOT NULL,
    "longitude" REAL NOT NULL
);
CREATE UNIQUE INDEX "PlayerLocation_personId_key" ON "PlayerLocation"("personId");
