// Standalone runner for the player update poller.
//
// Usage:
//   npx tsx prisma/scripts/poll-updates.ts
//
// Schedule via cron:
//   0 */6 * * * cd /path/to/repo && npx tsx prisma/scripts/poll-updates.ts >> poller.log 2>&1
//
// Or via systemd timer / GitHub Actions / Vercel Cron.

import { runAllProviders } from "@/lib/poller";

async function main() {
  const results = await runAllProviders();
  console.log("Poll complete:");
  for (const r of results) {
    console.log(
      `  [${r.provider}] proposed=${r.proposed} applied=${r.applied} skipped=${r.skipped}`,
    );
  }
}

main()
  .catch((e) => {
    console.error("Poller failed:", e);
    process.exit(1);
  })
  .finally(() => process.exit(0));
