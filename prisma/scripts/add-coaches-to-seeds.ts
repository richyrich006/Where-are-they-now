// Batch-adds assistant coaches to seed files that are missing them.
// Run: npx tsx prisma/scripts/add-coaches-to-seeds.ts

import * as fs from "node:fs";
import * as path from "node:path";

const SEEDS_DIR = path.join(__dirname, "../seeds");

// Coach entries to insert (as TypeScript source strings)
const WOJO = `    {
      slug: "steve-wojciechowski",
      firstName: "Steve",
      lastName: "Wojciechowski",
      birthYear: 1976,
      hometown: "Baltimore, MD",
      highSchool: "Cardinal Gibbons High School, Baltimore, MD",
      bio: "Associate Head Coach under Coach K. Former Duke PG (1994-98) and one of the most intense competitors in program history.",
      status: {
        occupationType: "COACH",
        currentTitle: "Assistant Coach",
        currentEmployer: "Utah Jazz",
        league: "NBA",
        location: "Salt Lake City, UT",
        statusNote: "After 15 years on Duke's staff (1999-2014), Wojciechowski became head coach at Marquette (2014-2021, 124-93). He then coached the Salt Lake City Stars G League team (41-17) before joining the Utah Jazz NBA coaching staff in June 2025.",
        sourceUrl: "https://en.wikipedia.org/wiki/Steve_Wojciechowski",
      },
      membership: { role: "ASSISTANT_COACH", position: "Associate Head Coach", yearsAtSchool: "1999-2014" },
      careerEvents: [],
    },`;

const COLLINS = `    {
      slug: "chris-collins",
      firstName: "Chris",
      lastName: "Collins",
      birthYear: 1975,
      hometown: "Northbrook, IL",
      highSchool: "Glenbrook North High School, Northbrook, IL",
      bio: "Associate Head Coach under Coach K and son of NBA coach Doug Collins. Former Duke player (1993-96) who spent 13 years on staff.",
      status: {
        occupationType: "COACH",
        currentTitle: "Head Men's Basketball Coach",
        currentEmployer: "Northwestern University",
        location: "Evanston, IL",
        statusNote: "After 13 years at Duke (2000-2013), Collins became Northwestern's head coach and is the only coach in the program's 120-year history to lead them to the NCAA Tournament. Extended through 2030 in April 2025.",
        sourceUrl: "https://en.wikipedia.org/wiki/Chris_Collins_(basketball)",
      },
      membership: { role: "ASSISTANT_COACH", position: "Associate Head Coach", yearsAtSchool: "2000-2013" },
      careerEvents: [],
    },`;

const ANTIGUA = `    {
      slug: "orlando-antigua",
      firstName: "Orlando",
      lastName: "Antigua",
      birthYear: 1975,
      hometown: "New York, NY",
      highSchool: "George Washington High School, New York, NY",
      bio: "Dominican-American assistant who followed Calipari from Memphis. Top recruiter, especially with international talent. First Dominican-born D1 coach.",
      status: {
        occupationType: "COACH",
        currentTitle: "Associate Head Coach",
        currentEmployer: "University of Illinois",
        location: "Champaign, IL",
        statusNote: "Antigua was a Kentucky assistant (2009-2014, 2021-2024), sandwiching stints as South Florida HC and Illinois associate HC. After Calipari left for Arkansas in 2024, Antigua returned to Illinois under Brad Underwood.",
        sourceUrl: "https://en.wikipedia.org/wiki/Orlando_Antigua",
      },
      membership: { role: "ASSISTANT_COACH", position: "Assistant Coach", yearsAtSchool: "2009-2014" },
      careerEvents: [],
    },`;

const K_PAYNE = `    {
      slug: "kenny-payne",
      firstName: "Kenny",
      lastName: "Payne",
      birthYear: 1966,
      hometown: "Louisville, KY",
      highSchool: "Shawnee High School, Louisville, KY",
      bio: "Kentucky's primary big-man developer for a decade. Former NBA player and Louisville native. His post coaching was key to multiple lottery picks.",
      status: {
        occupationType: "COACH",
        currentTitle: "Associate Head Coach",
        currentEmployer: "University of Arkansas",
        location: "Fayetteville, AR",
        statusNote: "After 10 years as Kentucky assistant (2010-2020), Payne became Louisville HC but was fired in 2024 after going 12-52. He reunited with Calipari at Arkansas as associate HC.",
        sourceUrl: "https://en.wikipedia.org/wiki/Kenny_Payne",
      },
      membership: { role: "ASSISTANT_COACH", position: "Associate Head Coach", yearsAtSchool: "2010-2020" },
      careerEvents: [],
    },`;

// Map file patterns to which coaches to add
const COACH_MAP: Record<string, string[]> = {
  // Duke 2001-2008: Wojo + Collins (both were on staff)
  "duke-basketball-2001": [WOJO, COLLINS],
  "duke-basketball-2002": [WOJO, COLLINS],
  "duke-basketball-2003": [WOJO, COLLINS],
  "duke-basketball-2004": [WOJO, COLLINS],
  "duke-basketball-2005": [WOJO, COLLINS],
  "duke-basketball-2006": [WOJO, COLLINS],
  "duke-basketball-2007": [WOJO, COLLINS],
  "duke-basketball-2008": [WOJO, COLLINS],
  // Duke 2010-2013: Wojo + Collins + Nate James (already in 2009)
  "duke-basketball-2010": [WOJO, COLLINS],
  "duke-basketball-2011": [WOJO, COLLINS],
  "duke-basketball-2012": [WOJO, COLLINS],
  "duke-basketball-2013": [WOJO, COLLINS],
  // Duke 2014: Wojo left, Capel joined — skip (complex)
  // Kentucky 2010-2015: Antigua + Payne
  "kentucky-basketball-2010": [ANTIGUA, K_PAYNE],
  "kentucky-basketball-2011": [ANTIGUA, K_PAYNE],
  "kentucky-basketball-2013": [ANTIGUA, K_PAYNE],
  "kentucky-basketball-2014": [ANTIGUA, K_PAYNE],
  "kentucky-basketball-2015": [ANTIGUA, K_PAYNE],
  // Kentucky 2016-2020: Payne stayed, Antigua left
  "kentucky-basketball-2016": [K_PAYNE],
  "kentucky-basketball-2017": [K_PAYNE],
  "kentucky-basketball-2018": [K_PAYNE],
  "kentucky-basketball-2019": [K_PAYNE],
  "kentucky-basketball-2020": [K_PAYNE],
};

let edited = 0;
for (const [filename, coaches] of Object.entries(COACH_MAP)) {
  const filepath = path.join(SEEDS_DIR, `${filename}.ts`);
  if (!fs.existsSync(filepath)) {
    console.log(`SKIP ${filename} — file not found`);
    continue;
  }

  let content = fs.readFileSync(filepath, "utf-8");

  // Check if coaches already exist
  const hasWojo = content.includes('"steve-wojciechowski"');
  const hasCollins = content.includes('"chris-collins"');
  const hasAntigua = content.includes('"orlando-antigua"');
  const hasPayne = content.includes('"kenny-payne"');

  const toInsert: string[] = [];
  for (const coach of coaches) {
    if (coach.includes("steve-wojciechowski") && hasWojo) continue;
    if (coach.includes("chris-collins") && hasCollins) continue;
    if (coach.includes("orlando-antigua") && hasAntigua) continue;
    if (coach.includes("kenny-payne") && hasPayne) continue;
    toInsert.push(coach);
  }

  if (toInsert.length === 0) {
    console.log(`SKIP ${filename} — coaches already present`);
    continue;
  }

  // Find the head coach entry and insert before it
  const headCoachPatterns = [
    '      slug: "mike-krzyzewski",',
    '      slug: "john-calipari",',
  ];

  let insertPoint = -1;
  for (const pattern of headCoachPatterns) {
    const idx = content.indexOf(pattern);
    if (idx !== -1) {
      // Go back to find the opening `{` of this object
      const linesBefore = content.substring(0, idx).lastIndexOf("    {");
      if (linesBefore !== -1) {
        insertPoint = linesBefore;
      }
      break;
    }
  }

  if (insertPoint === -1) {
    console.log(`SKIP ${filename} — could not find head coach entry`);
    continue;
  }

  const insertion = toInsert.join("\n") + "\n";
  content = content.substring(0, insertPoint) + insertion + content.substring(insertPoint);

  fs.writeFileSync(filepath, content, "utf-8");
  console.log(`UPDATED ${filename} — added ${toInsert.length} coach(es)`);
  edited++;
}

console.log(`\nDone. Edited ${edited} files.`);
