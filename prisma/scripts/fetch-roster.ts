#!/usr/bin/env npx tsx
/**
 * Fetch complete roster for a college team from ESPN's public API.
 *
 * Usage (run on YOUR local machine, not in cloud):
 *   npx tsx prisma/scripts/fetch-roster.ts --team duke --sport basketball --season 2001
 *   npx tsx prisma/scripts/fetch-roster.ts --team usc --sport football --season 2005
 *   npx tsx prisma/scripts/fetch-roster.ts --team alabama --sport football --season 2015
 *
 * Output: prisma/data/{team}-{sport}-{season}.json
 */

import * as fs from "fs";
import * as path from "path";

const teamIds = JSON.parse(
  fs.readFileSync(path.join(__dirname, "team-ids.json"), "utf-8")
);

type RosterPlayer = {
  firstName: string;
  lastName: string;
  fullName: string;
  jerseyNumber: number | null;
  position: string;
  height: string | null;
  weight: number | null;
  classYear: string | null;
  hometown: string | null;
  headshotUrl: string | null;
};

async function fetchESPNRoster(
  sport: "basketball" | "football",
  espnTeamId: number,
  season: number
): Promise<RosterPlayer[]> {
  const sportPath =
    sport === "basketball"
      ? "basketball/mens-college-basketball"
      : "football/college-football";

  const url = `https://site.api.espn.com/apis/site/v2/sports/${sportPath}/teams/${espnTeamId}/roster?season=${season}`;
  console.log(`Fetching: ${url}`);

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`ESPN API returned ${res.status}: ${await res.text()}`);
  }

  const data = await res.json();
  const players: RosterPlayer[] = [];

  // ESPN groups athletes by position category
  const groups = data.athletes || [];
  for (const group of groups) {
    const items = group.items || [];
    for (const athlete of items) {
      const firstName = athlete.firstName || "";
      const lastName = athlete.lastName || "";
      const fullName = athlete.fullName || athlete.displayName || `${firstName} ${lastName}`;
      const jersey = athlete.jersey ? parseInt(athlete.jersey) : null;
      const position = athlete.position?.abbreviation || athlete.position?.name || "";
      const height = athlete.height ? `${Math.floor(athlete.height / 12)}-${athlete.height % 12}` : null;
      const weight = athlete.weight || null;

      // Try to get class year / experience
      let classYear: string | null = null;
      if (athlete.experience?.displayValue) {
        classYear = athlete.experience.displayValue;
      }

      // Hometown from birthPlace
      let hometown: string | null = null;
      if (athlete.birthPlace) {
        const parts = [athlete.birthPlace.city, athlete.birthPlace.state, athlete.birthPlace.country]
          .filter(Boolean);
        hometown = parts.join(", ");
      }

      const headshotUrl = athlete.headshot?.href || null;

      players.push({
        firstName,
        lastName,
        fullName,
        jerseyNumber: jersey,
        position,
        height,
        weight,
        classYear,
        hometown,
        headshotUrl,
      });
    }
  }

  // Some ESPN responses have a flat array instead of grouped
  if (players.length === 0 && data.athletes && !Array.isArray(data.athletes[0]?.items)) {
    for (const athlete of data.athletes) {
      if (athlete.fullName || athlete.displayName) {
        players.push({
          firstName: athlete.firstName || "",
          lastName: athlete.lastName || "",
          fullName: athlete.fullName || athlete.displayName || "",
          jerseyNumber: athlete.jersey ? parseInt(athlete.jersey) : null,
          position: athlete.position?.abbreviation || "",
          height: null,
          weight: athlete.weight || null,
          classYear: athlete.experience?.displayValue || null,
          hometown: null,
          headshotUrl: athlete.headshot?.href || null,
        });
      }
    }
  }

  return players;
}

async function main() {
  const args = process.argv.slice(2);
  const teamArg = args.find((a) => a.startsWith("--team="))?.split("=")[1] ||
    args[args.indexOf("--team") + 1];
  const sportArg = (args.find((a) => a.startsWith("--sport="))?.split("=")[1] ||
    args[args.indexOf("--sport") + 1]) as "basketball" | "football";
  const seasonArg = args.find((a) => a.startsWith("--season="))?.split("=")[1] ||
    args[args.indexOf("--season") + 1];

  if (!teamArg || !sportArg || !seasonArg) {
    console.error("Usage: npx tsx fetch-roster.ts --team duke --sport basketball --season 2001");
    process.exit(1);
  }

  const teamConfig = teamIds[sportArg]?.[teamArg];
  if (!teamConfig) {
    console.error(`Unknown team: ${teamArg} for sport: ${sportArg}`);
    console.error(`Available teams:`, Object.keys(teamIds[sportArg] || {}));
    process.exit(1);
  }

  const season = parseInt(seasonArg);
  console.log(`\nFetching ${teamConfig.name} ${sportArg} roster for ${season}...`);

  const players = await fetchESPNRoster(sportArg, teamConfig.espnId, season);

  console.log(`\nFound ${players.length} players:\n`);
  for (const p of players) {
    console.log(
      `  #${p.jerseyNumber ?? "?"} ${p.fullName} - ${p.position} (${p.classYear ?? "?"})`
    );
  }

  // Save to JSON
  const dataDir = path.join(__dirname, "..", "data");
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

  const outFile = path.join(dataDir, `${teamArg}-${sportArg}-${season}.json`);
  const output = {
    team: teamConfig.name,
    school: teamConfig.school,
    sport: sportArg,
    season,
    fetchedAt: new Date().toISOString(),
    playerCount: players.length,
    players,
  };

  fs.writeFileSync(outFile, JSON.stringify(output, null, 2));
  console.log(`\nSaved to ${outFile}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
