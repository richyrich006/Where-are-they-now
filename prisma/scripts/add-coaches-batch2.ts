import * as fs from "node:fs";
import * as path from "node:path";

const SEEDS_DIR = path.join(__dirname, "../seeds");

const COACHES: Record<string, string> = {
  "jeff-capel": `    {
      slug: "jeff-capel",
      firstName: "Jeff",
      lastName: "Capel",
      birthYear: 1975,
      hometown: "Fayetteville, NC",
      highSchool: "South View High School, Hope Mills, NC",
      bio: "Former Duke point guard (1993-97) who returned to Coach K's staff after head coaching stints at VCU and Oklahoma. Later became head coach at Pitt.",
      status: { occupationType: "COACH", currentTitle: "Head Men's Basketball Coach", currentEmployer: "University of Pittsburgh", location: "Pittsburgh, PA", statusNote: "After serving as Duke assistant (2011-2018), Capel became head coach at Pittsburgh where he has rebuilt the Panthers program in the ACC. Previously was head coach at VCU (2002-06) and Oklahoma (2006-11). His father Jeff Capel II was also a college basketball coach.", sourceUrl: "https://en.wikipedia.org/wiki/Jeff_Capel" },
      membership: { role: "ASSISTANT_COACH", position: "Associate Head Coach", yearsAtSchool: "2011-2018" },
      careerEvents: [{ year: 2018, title: "Named head coach at University of Pittsburgh", eventType: "CAREER_CHANGE" }],
    },`,
  "antigua": `    {
      slug: "orlando-antigua",
      firstName: "Orlando",
      lastName: "Antigua",
      birthYear: 1975,
      hometown: "New York, NY",
      highSchool: "George Washington High School, New York, NY",
      bio: "Dominican-American assistant who followed Calipari from Memphis. Elite recruiter, especially with international talent.",
      status: { occupationType: "COACH", currentTitle: "Associate Head Coach", currentEmployer: "University of Illinois", location: "Champaign, IL", statusNote: "Kentucky assistant (2009-2014, 2021-2024). After Calipari left for Arkansas in 2024, returned to Illinois under Brad Underwood. First Dominican-born D1 coach in history.", sourceUrl: "https://en.wikipedia.org/wiki/Orlando_Antigua" },
      membership: { role: "ASSISTANT_COACH", position: "Associate Coach", yearsAtSchool: "2021-2024" },
      careerEvents: [],
    },`,
  "chin-coleman": `    {
      slug: "chin-coleman",
      firstName: "Chin",
      lastName: "Coleman",
      birthYear: 1979,
      hometown: "Chicago, IL",
      highSchool: "Chicago, IL",
      bio: "Assistant coach who came to Kentucky from Illinois alongside Orlando Antigua in 2021. Known as an elite recruiter and player developer.",
      status: { occupationType: "COACH", currentTitle: "Assistant Coach", currentEmployer: "Kentucky basketball program", location: "Lexington, KY", statusNote: "Coleman joined Kentucky's staff in 2021 after working at Illinois. He remained on staff through Calipari's final season and the transition to Mark Pope. Known for his recruiting connections in the Midwest and South.", sourceUrl: "https://ukathletics.com/sports/mbball/roster/coach/chin-coleman/" },
      membership: { role: "ASSISTANT_COACH", position: "Assistant Coach", yearsAtSchool: "2021-2024" },
      careerEvents: [],
    },`,
  "kevin-keatts-asst": `    {
      slug: "kevin-keatts",
      firstName: "Kevin",
      lastName: "Keatts",
      birthYear: 1972,
      hometown: "Norfolk, VA",
      highSchool: "Maury High School, Norfolk, VA",
      bio: "Louisville's associate head coach and top recruiter who later became head coach at UNC-Wilmington and NC State, where he led the Wolfpack to the 2024 Final Four.",
      status: { occupationType: "COACH", currentTitle: "Head Men's Basketball Coach", currentEmployer: "NC State University", location: "Raleigh, NC", statusNote: "After 3 years on Pitino's Louisville staff (2011-2014), Keatts became HC at UNC-Wilmington (2014-17, 72-28) then NC State (2017-present). He led NC State to the 2024 ACC Tournament title and Final Four — the school's first since 1983. A key member of Rick Pitino's coaching tree.", sourceUrl: "https://en.wikipedia.org/wiki/Kevin_Keatts" },
      membership: { role: "ASSISTANT_COACH", position: "Associate Head Coach", yearsAtSchool: "2011-2014" },
      careerEvents: [{ year: 2014, title: "Named head coach at UNC-Wilmington", eventType: "CAREER_CHANGE" }, { year: 2024, title: "Led NC State to Final Four", eventType: "MILESTONE" }],
    },`,
  "steve-robinson": `    {
      slug: "steve-robinson-unc",
      firstName: "Steve",
      lastName: "Robinson",
      birthYear: 1957,
      hometown: "Roanoke, VA",
      highSchool: "Radford University (played at)",
      bio: "Roy Williams' most trusted assistant who followed him from Kansas. Master recruiter who helped build three championship teams at UNC.",
      status: { occupationType: "RETIRED_COACH", currentTitle: "Retired Assistant Coach", location: "North Carolina", statusNote: "Served 18 years as assistant under Roy Williams at UNC (2003-2021), winning 3 national titles. Not retained when Hubert Davis became head coach. Previously HC at Tulsa and Florida State.", sourceUrl: "https://goheels.com/sports/mens-basketball/roster/coaches/steve-robinson/691" },
      membership: { role: "ASSISTANT_COACH", position: "Associate Head Coach", yearsAtSchool: "2003-2021" },
      careerEvents: [],
    },`,
  "tony-bennett-asst": `    {
      slug: "ron-sanchez",
      firstName: "Ron",
      lastName: "Sanchez",
      birthYear: 1973,
      hometown: "New York, NY",
      highSchool: "New York, NY",
      bio: "Tony Bennett's associate head coach and defensive mastermind who helped architect the Pack Line defense that won the 2019 national championship.",
      status: { occupationType: "COACH", currentTitle: "Head Men's Basketball Coach", currentEmployer: "Charlotte 49ers", location: "Charlotte, NC", statusNote: "After serving as Virginia's associate head coach (2009-2019), Sanchez became head coach at Charlotte in 2019. He was a key figure in building the Pack Line defensive system that made Virginia the nation's top defense and ultimately won the 2019 national title.", sourceUrl: "https://en.wikipedia.org/wiki/Ron_Sanchez_(basketball)" },
      membership: { role: "ASSISTANT_COACH", position: "Associate Head Coach", yearsAtSchool: "2009-2019" },
      careerEvents: [{ year: 2019, title: "Won NCAA Championship as Virginia assistant", eventType: "CHAMPIONSHIP" }, { year: 2019, title: "Named head coach at Charlotte", eventType: "CAREER_CHANGE" }],
    },`,
  "bernie-fine": `    {
      slug: "gerry-mcnamara",
      firstName: "Gerry",
      lastName: "McNamara",
      birthYear: 1983,
      hometown: "Scranton, PA",
      highSchool: "Bishop Hannan High School, Scranton, PA",
      bio: "Former Syracuse star guard (2002-06) who became Jim Boeheim's top assistant. Known as one of the greatest players in Syracuse history — hit 6 threes in the 2003 title game.",
      status: { occupationType: "COACH", currentTitle: "Assistant Coach", currentEmployer: "Syracuse University", location: "Syracuse, NY", statusNote: "After a brief professional career, McNamara joined Boeheim's coaching staff and has been a Syracuse assistant since 2011. He is widely considered the leading candidate to eventually become Syracuse's head coach. As a player, he hit 6 three-pointers in the 2003 national championship game against Kansas.", sourceUrl: "https://en.wikipedia.org/wiki/Gerry_McNamara" },
      membership: { role: "ASSISTANT_COACH", position: "Assistant Coach", yearsAtSchool: "2011-present" },
      careerEvents: [],
    },`,
};

const FILE_COACHES: Record<string, string[]> = {
  "duke-basketball-2014": ["jeff-capel"],
  "kentucky-basketball-2021": ["antigua", "chin-coleman"],
  "kentucky-basketball-2022": ["antigua", "chin-coleman"],
  "kentucky-basketball-2023": ["antigua", "chin-coleman"],
  "kentucky-basketball-2024": ["antigua", "chin-coleman"],
  "kentucky-basketball-2025": ["chin-coleman"],
  "kentucky-basketball-2026": ["chin-coleman"],
  "louisville-basketball-2013": ["kevin-keatts-asst"],
  "unc-basketball-2017": ["steve-robinson"],
  "unc-basketball-2022": ["steve-robinson"],
  "virginia-basketball-2019": ["tony-bennett-asst"],
  "syracuse-basketball-2016": ["bernie-fine"],
  "florida-basketball-2004": ["steve-robinson"],
  "florida-basketball-2005": ["steve-robinson"],
};

const headCoachSlugs = [
  "mike-krzyzewski", "john-calipari", "roy-williams", "rick-pitino",
  "tony-bennett-uva", "jim-boeheim", "billy-donovan", "rick-barnes",
  "hubert-davis", "jim-larranaga", "kevin-keatts", "steve-forbes",
  "brad-brownell", "buzz-williams", "mark-pope", "kevin-boyle",
  "pete-carroll", "nick-saban", "kirby-smart", "steve-sarkisian",
];

let edited = 0;
for (const [filename, coachKeys] of Object.entries(FILE_COACHES)) {
  const filepath = path.join(SEEDS_DIR, `${filename}.ts`);
  if (!fs.existsSync(filepath)) { console.log(`SKIP ${filename}`); continue; }

  let content = fs.readFileSync(filepath, "utf-8");
  const toInsert: string[] = [];

  for (const key of coachKeys) {
    const entry = COACHES[key];
    if (!entry) { console.log(`  WARN: no coach template for ${key}`); continue; }
    const slugMatch = entry.match(/slug: "([^"]+)"/);
    if (slugMatch && content.includes(`"${slugMatch[1]}"`)) continue;
    toInsert.push(entry);
  }

  if (toInsert.length === 0) { console.log(`SKIP ${filename} — already has coaches`); continue; }

  let insertPoint = -1;
  for (const slug of headCoachSlugs) {
    const pattern = `slug: "${slug}"`;
    const idx = content.indexOf(pattern);
    if (idx !== -1) {
      const objStart = content.substring(0, idx).lastIndexOf("    {");
      if (objStart !== -1) { insertPoint = objStart; break; }
    }
  }

  if (insertPoint === -1) { console.log(`SKIP ${filename} — no head coach found`); continue; }

  content = content.substring(0, insertPoint) + toInsert.join("\n") + "\n" + content.substring(insertPoint);
  fs.writeFileSync(filepath, content, "utf-8");
  console.log(`UPDATED ${filename} — added ${toInsert.length} coach(es)`);
  edited++;
}

console.log(`\nDone. Edited ${edited} files.`);
