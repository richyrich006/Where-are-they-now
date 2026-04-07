import type { UpdateProvider, ProposedUpdate } from "../types";

// NBA roster provider.
//
// Hits the NBA's public CDN endpoint for the league-wide player index and
// detects when a player's team has changed since the last poll. The
// runner only persists fields that actually differ from the DB.
//
// This provider is conservative: it only updates `currentEmployer` and
// `league` for players whose slug matches an existing person in our DB.
//
// Set NBA_POLLER_DISABLED=1 to skip this provider (e.g. in tests / CI).
export class NbaRosterProvider implements UpdateProvider {
  name = "nba-roster";

  async fetchUpdates(): Promise<ProposedUpdate[]> {
    if (process.env.NBA_POLLER_DISABLED) return [];

    const url = "https://stats.nba.com/stats/playerindex?LeagueID=00&Season=2025-26";
    try {
      const res = await fetch(url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
          Referer: "https://www.nba.com/",
        },
      });
      if (!res.ok) {
        console.warn(`[nba-roster] HTTP ${res.status}`);
        return [];
      }
      const data = (await res.json()) as {
        resultSets?: Array<{
          headers: string[];
          rowSet: unknown[][];
        }>;
      };
      const set = data.resultSets?.[0];
      if (!set) return [];

      const idxFirst = set.headers.indexOf("PLAYER_FIRST_NAME");
      const idxLast = set.headers.indexOf("PLAYER_LAST_NAME");
      const idxTeam = set.headers.indexOf("TEAM_NAME");
      const idxCity = set.headers.indexOf("TEAM_CITY");
      if (idxFirst < 0 || idxLast < 0 || idxTeam < 0) return [];

      const updates: ProposedUpdate[] = [];
      for (const row of set.rowSet) {
        const first = String(row[idxFirst] ?? "");
        const last = String(row[idxLast] ?? "");
        const team = row[idxTeam] != null ? String(row[idxTeam]) : null;
        const city = row[idxCity] != null ? String(row[idxCity]) : null;
        if (!first || !last || !team) continue;

        const slug = `${first}-${last}`
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");

        const employer = city ? `${city} ${team}` : team;

        updates.push(
          { personSlug: slug, field: "currentEmployer", newValue: employer, source: "nba-roster" },
          { personSlug: slug, field: "league", newValue: "NBA", source: "nba-roster" },
        );
      }
      return updates;
    } catch (e) {
      console.warn("[nba-roster] fetch failed:", (e as Error).message);
      return [];
    }
  }
}
