// Provider interface for player update sources.
//
// To plug in a real sports API:
//   1. Implement UpdateProvider for the source (NBA Stats, ESPN, basketball-reference, etc.)
//   2. Add it to PROVIDERS in lib/poller/index.ts
//   3. Run `npx tsx prisma/scripts/poll-updates.ts` (or schedule via cron)
//
// Each provider returns proposed updates. The runner diffs them against current
// CurrentStatus rows, applies changes, and writes a PlayerUpdate audit row.

export type ProposedUpdate = {
  personSlug: string;
  field: "currentTitle" | "currentEmployer" | "league" | "location" | "statusNote" | "sourceUrl";
  newValue: string;
  source: string;
};

export interface UpdateProvider {
  name: string;
  /** Fetch current updates. Should be idempotent. */
  fetchUpdates(): Promise<ProposedUpdate[]>;
}
