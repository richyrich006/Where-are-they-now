#!/usr/bin/env npx tsx
/**
 * Generate seed file entries from roster JSON data.
 * Compares against an existing seed file to find missing players.
 *
 * Usage:
 *   npx tsx prisma/scripts/generate-seed.ts --roster prisma/data/duke-basketball-2001.json
 *   npx tsx prisma/scripts/generate-seed.ts --roster prisma/data/usc-football-2005.json --seed prisma/seeds/usc-football-2005.ts
 */

import * as fs from "fs";
import * as path from "path";

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

type RosterData = {
  team: string;
  school: string;
  sport: string;
  season: number;
  players: RosterPlayer[];
};

function slugify(firstName: string, lastName: string): string {
  return `${firstName}-${lastName}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function extractExistingSlugs(seedFilePath: string): Set<string> {
  if (!fs.existsSync(seedFilePath)) return new Set();
  const content = fs.readFileSync(seedFilePath, "utf-8");
  const slugs = new Set<string>();
  const matches = content.matchAll(/slug:\s*["']([^"']+)["']/g);
  for (const m of matches) slugs.add(m[1]);
  return slugs;
}

function generateEntry(p: RosterPlayer, sport: string): string {
  const slug = slugify(p.firstName, p.lastName);
  const position = p.position || "Unknown";

  return `    {
      slug: "${slug}",
      firstName: "${p.firstName}",
      lastName: "${p.lastName}",
      hometown: ${p.hometown ? `"${p.hometown}"` : "undefined"},
      isFeatured: false,
      bio: "${p.fullName} played ${position} for the team.",
      status: {
        occupationType: "OTHER",
        currentTitle: "Unknown",
        statusNote: "Post-college career information not yet researched. ${p.classYear ? `Was a ${p.classYear} on the team.` : ""}",
      },
      membership: {
        role: "PLAYER",
        ${p.jerseyNumber != null ? `jerseyNumber: ${p.jerseyNumber},` : ""}
        position: "${position}",
        statsNote: "${p.classYear || "Roster member"}",
      },
      careerEvents: [],
    },`;
}

async function main() {
  const args = process.argv.slice(2);
  const rosterArg =
    args.find((a) => a.startsWith("--roster="))?.split("=")[1] ||
    args[args.indexOf("--roster") + 1];
  const seedArg =
    args.find((a) => a.startsWith("--seed="))?.split("=")[1] ||
    (args.indexOf("--seed") >= 0 ? args[args.indexOf("--seed") + 1] : undefined);

  if (!rosterArg) {
    console.error("Usage: npx tsx generate-seed.ts --roster prisma/data/team-sport-year.json [--seed prisma/seeds/team-file.ts]");
    process.exit(1);
  }

  const roster: RosterData = JSON.parse(fs.readFileSync(rosterArg, "utf-8"));
  console.log(`\nRoster: ${roster.team} ${roster.sport} ${roster.season} (${roster.players.length} players)`);

  // Find existing slugs if seed file provided
  const existingSlugs = seedArg ? extractExistingSlugs(seedArg) : new Set<string>();
  console.log(`Existing seed has ${existingSlugs.size} slugs`);

  // Find missing players
  const missing = roster.players.filter((p) => {
    const slug = slugify(p.firstName, p.lastName);
    return !existingSlugs.has(slug);
  });

  console.log(`\nMissing ${missing.length} players:\n`);

  if (missing.length === 0) {
    console.log("All players are already in the seed file!");
    return;
  }

  // Generate entries
  const entries = missing.map((p) => generateEntry(p, roster.sport));

  console.log("=== Copy these entries into your seed file ===\n");
  console.log(entries.join("\n"));
  console.log("\n=== End of entries ===");

  // Also save to a file
  const outFile = rosterArg.replace(".json", "-missing.txt");
  fs.writeFileSync(outFile, entries.join("\n"));
  console.log(`\nAlso saved to: ${outFile}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
