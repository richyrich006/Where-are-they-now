-- Add linkedInUrl to CurrentStatus
ALTER TABLE "CurrentStatus" ADD COLUMN "linkedInUrl" TEXT;

-- Add logoUrl and mascotName to Team
ALTER TABLE "Team" ADD COLUMN "logoUrl" TEXT;
ALTER TABLE "Team" ADD COLUMN "mascotName" TEXT;

-- Add college stats columns to TeamMembership
ALTER TABLE "TeamMembership" ADD COLUMN "gamesPlayed" INTEGER;
ALTER TABLE "TeamMembership" ADD COLUMN "pointsPerGame" REAL;
ALTER TABLE "TeamMembership" ADD COLUMN "reboundsPerGame" REAL;
ALTER TABLE "TeamMembership" ADD COLUMN "assistsPerGame" REAL;
