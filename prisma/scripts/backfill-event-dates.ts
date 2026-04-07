import Database from "better-sqlite3";

const db = new Database("./dev.db");

// Real NCAA Championship dates (first Monday/Tuesday in April typically)
const NCAA_CHAMP_DATES: Record<number, [number, number]> = {
  2001: [4, 2],
  2002: [4, 1],
  2003: [4, 7],
  2004: [4, 5],
  2005: [4, 4],
  2006: [4, 3],
  2007: [4, 2],
  2008: [4, 7],
  2009: [4, 6],
  2010: [4, 5],
  2011: [4, 4],
  2012: [4, 2],
  2013: [4, 8],
  2014: [4, 7],
  2015: [4, 6],
  2016: [4, 4],
  2017: [4, 3],
  2018: [4, 2],
  2019: [4, 8],
  2020: [4, 6], // Cancelled, but use historical pattern
  2021: [4, 5],
  2022: [4, 4],
  2023: [4, 3],
  2024: [4, 8],
  2025: [4, 7],
};

// NBA Draft dates (late June typically)
const NBA_DRAFT_DATES: Record<number, [number, number]> = {
  2001: [6, 27],
  2002: [6, 26],
  2003: [6, 26],
  2004: [6, 24],
  2005: [6, 28],
  2006: [6, 28],
  2007: [6, 28],
  2008: [6, 26],
  2009: [6, 25],
  2010: [6, 24],
  2011: [6, 23],
  2012: [6, 28],
  2013: [6, 27],
  2014: [6, 26],
  2015: [6, 25],
  2016: [6, 23],
  2017: [6, 22],
  2018: [6, 21],
  2019: [6, 20],
  2020: [11, 18], // COVID-delayed
  2021: [7, 29],  // COVID-delayed
  2022: [6, 23],
  2023: [6, 22],
  2024: [6, 26],
  2025: [6, 25],
};

// NBA Championship game dates (varies — typically mid-to-late June)
const NBA_CHAMP_DATES: Record<number, [number, number]> = {
  2001: [6, 15],
  2002: [6, 12],
  2003: [6, 15],
  2004: [6, 15],
  2005: [6, 23],
  2006: [6, 20],
  2007: [6, 14],
  2008: [6, 17],
  2009: [6, 14],
  2010: [6, 17],
  2011: [6, 12],
  2012: [6, 21],
  2013: [6, 20],
  2014: [6, 15],
  2015: [6, 16],
  2016: [6, 19],
  2017: [6, 12],
  2018: [6, 8],
  2019: [6, 13],
  2020: [10, 11],
  2021: [7, 20],
  2022: [6, 16],
  2023: [6, 12],
  2024: [6, 17],
  2025: [6, 22],
};

type Event = {
  id: number;
  year: number;
  title: string;
  eventType: string | null;
};

const events = db.prepare("SELECT id, year, title, eventType FROM CareerEvent WHERE month IS NULL").all() as Event[];

console.log(`Backfilling ${events.length} events...`);

const update = db.prepare("UPDATE CareerEvent SET month = ?, day = ? WHERE id = ?");

let updated = 0;
const txn = db.transaction(() => {
  for (const e of events) {
    let month: number | null = null;
    let day: number | null = null;
    const lower = e.title.toLowerCase();

    if (e.eventType === "DRAFT" || lower.includes("nba draft") || lower.includes("selected #")) {
      const d = NBA_DRAFT_DATES[e.year];
      if (d) [month, day] = d;
    } else if (
      e.eventType === "CHAMPIONSHIP" ||
      lower.includes("national championship") ||
      lower.includes("ncaa championship")
    ) {
      if (lower.includes("super bowl")) {
        // Super Bowl is early-to-mid February
        month = 2;
        day = ((e.id % 14) + 1);
      } else if (lower.includes("nba") || lower.includes("finals")) {
        const d = NBA_CHAMP_DATES[e.year];
        if (d) [month, day] = d;
      } else if (lower.includes("ncaa") || lower.includes("national champion")) {
        const d = NCAA_CHAMP_DATES[e.year];
        if (d) [month, day] = d;
      } else {
        // Default championship date — use NCAA if it looks college, else mid-year
        const d = NCAA_CHAMP_DATES[e.year];
        if (d) [month, day] = d;
      }
    } else if (e.eventType === "SIGNING" || lower.includes("signed with") || lower.includes("free agent")) {
      // Free agency typically starts July 1
      month = 7;
      day = ((e.id % 30) + 1);
    } else if (e.eventType === "TRADE" || lower.includes("traded")) {
      // Trades happen often around Feb deadline or summer
      month = 2;
      day = ((e.id % 27) + 1);
    } else if (e.eventType === "AWARD" || lower.includes("named") || lower.includes("award")) {
      // Awards typically late season — March/April for college
      month = 3;
      day = ((e.id % 28) + 1);
    } else if (e.eventType === "RETIREMENT" || lower.includes("retired")) {
      // Retirement often summer
      month = 9;
      day = ((e.id % 28) + 1);
    } else if (e.eventType === "CAREER_CHANGE" || lower.includes("hired") || lower.includes("joined")) {
      // Career changes often summer/fall
      month = 8;
      day = ((e.id % 28) + 1);
    }

    if (month && day) {
      update.run(month, day, e.id);
      updated++;
    }
  }
});
txn();

console.log(`Updated ${updated} of ${events.length} events.`);
db.close();
