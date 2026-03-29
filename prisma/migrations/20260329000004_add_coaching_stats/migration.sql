-- Add coaching record columns and allow COACHING as a stat level
ALTER TABLE "SeasonStats" ADD COLUMN "wins" INTEGER;
ALTER TABLE "SeasonStats" ADD COLUMN "losses" INTEGER;
ALTER TABLE "SeasonStats" ADD COLUMN "tournamentResult" TEXT;
