import * as fs from "node:fs";
import * as path from "node:path";

const SEEDS_DIR = path.join(__dirname, "../seeds");

type SchoolDef = {
  slug: string;
  name: string;
  school: string;
  logoUrl: string;
  mascotName: string;
  coaches: { name: string; slug: string; years: [number, number]; bio: string; status: string }[];
  // Conference membership (some schools joined ACC mid-period)
  accFrom: number; // year they joined ACC (2009 means original member for our purposes)
};

const SCHOOLS: SchoolDef[] = [
  {
    slug: "unc", name: "North Carolina Tar Heels", school: "University of North Carolina",
    logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/153.png", mascotName: "Tar Heel",
    accFrom: 2009,
    coaches: [
      { name: "Roy Williams", slug: "roy-williams", years: [2009, 2021], bio: "Hall of Fame coach with 903 career victories and 3 national championships (2005, 2009, 2017) at UNC.", status: "Retired in April 2021. Head Coach Emeritus at UNC." },
      { name: "Hubert Davis", slug: "hubert-davis", years: [2022, 2026], bio: "Former UNC player and NBA veteran who succeeded Roy Williams. Led UNC to the 2022 title game in his first season.", status: "Fired in March 2026 after blowing 19-pt lead to VCU." },
    ],
  },
  {
    slug: "virginia", name: "Virginia Cavaliers", school: "University of Virginia",
    logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/258.png", mascotName: "Cavalier",
    accFrom: 2009,
    coaches: [
      { name: "Tony Bennett", slug: "tony-bennett-uva", years: [2009, 2026], bio: "Architect of the Pack Line defense who led Virginia to the 2019 national championship — redemption after the 2018 UMBC loss.", status: "Still coaching at Virginia. 2019 NCAA Champion." },
    ],
  },
  {
    slug: "ncstate", name: "NC State Wolfpack", school: "North Carolina State University",
    logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/152.png", mascotName: "Wolfpack",
    accFrom: 2009,
    coaches: [
      { name: "Sidney Lowe", slug: "sidney-lowe", years: [2009, 2011], bio: "Former NC State point guard from the 1983 championship team who coached his alma mater.", status: "Fired after 2011. Now a basketball consultant." },
      { name: "Mark Gottfried", slug: "mark-gottfried", years: [2012, 2017], bio: "Led NC State to 4 NCAA Tournaments in 6 seasons before being fired.", status: "Fired mid-2017 season. Later coached at Cal State Northridge." },
      { name: "Kevin Keatts", slug: "kevin-keatts", years: [2018, 2026], bio: "Led NC State to the 2024 ACC Tournament title and Final Four — first since 1983.", status: "Still coaching at NC State. Contract extended after 2024 Final Four." },
    ],
  },
  {
    slug: "louisville", name: "Louisville Cardinals", school: "University of Louisville",
    logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/97.png", mascotName: "Cardinal",
    accFrom: 2009, // Was in Big East until 2014, but we'll include all years
    coaches: [
      { name: "Rick Pitino", slug: "rick-pitino", years: [2009, 2017], bio: "Hall of Fame coach who won the 2013 title (vacated). First coach to win championships at two schools.", status: "Fired 2017. Now HC at St. John's — back-to-back Big East champs." },
      { name: "David Padgett", slug: "david-padgett", years: [2018, 2018], bio: "Interim head coach after Pitino's firing.", status: "Now an assistant coach." },
      { name: "Chris Mack", slug: "chris-mack", years: [2019, 2022], bio: "Former Xavier HC who reached Sweet 16 in year 1 at Louisville.", status: "Parted ways with Louisville 2022. Coaching candidate." },
      { name: "Kenny Payne", slug: "kenny-payne", years: [2023, 2024], bio: "Former Kentucky assistant and NBA coach who went 12-52 in 2 seasons.", status: "Fired 2024. Now associate HC at Arkansas under Calipari." },
      { name: "Pat Kelsey", slug: "pat-kelsey", years: [2025, 2026], bio: "Hired from College of Charleston to rebuild the Louisville program.", status: "Currently coaching at Louisville." },
    ],
  },
  {
    slug: "syracuse", name: "Syracuse Orange", school: "Syracuse University",
    logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/183.png", mascotName: "Orange",
    accFrom: 2009, // Was in Big East until 2013
    coaches: [
      { name: "Jim Boeheim", slug: "jim-boeheim", years: [2009, 2023], bio: "Legendary coach with 1,015 career wins. 2003 champion. 2-3 zone architect. Retired after 47 seasons.", status: "Retired 2023. Head Coach Emeritus at Syracuse." },
      { name: "Adrian Autry", slug: "adrian-autry", years: [2024, 2026], bio: "Former Syracuse player and longtime Boeheim assistant who succeeded the legend.", status: "Currently coaching at Syracuse." },
    ],
  },
  {
    slug: "miami", name: "Miami Hurricanes", school: "University of Miami",
    logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/2390.png", mascotName: "Hurricane",
    accFrom: 2009,
    coaches: [
      { name: "Frank Haith", slug: "frank-haith", years: [2009, 2011], bio: "Coach who built Miami into an ACC contender before leaving for Missouri.", status: "Now HC at Tulsa." },
      { name: "Jim Larranaga", slug: "jim-larranaga", years: [2012, 2024], bio: "Led Miami to the 2023 Final Four (first in history) at age 73. Also led George Mason to 2006 Final Four.", status: "Retired after 2024 season." },
      { name: "Jim Larranaga successor", slug: "miami-coach-2025", years: [2025, 2026], bio: "New coach hired after Larranaga's retirement.", status: "Currently coaching at Miami." },
    ],
  },
  {
    slug: "wake-forest", name: "Wake Forest Demon Deacons", school: "Wake Forest University",
    logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/154.png", mascotName: "Demon Deacon",
    accFrom: 2009,
    coaches: [
      { name: "Dino Gaudio", slug: "dino-gaudio", years: [2009, 2010], bio: "Interim coach after Skip Prosser's passing and Jeff Bzdelik's tenure.", status: "Left coaching. Later involved in legal issues." },
      { name: "Jeff Bzdelik", slug: "jeff-bzdelik", years: [2011, 2014], bio: "Defensive-minded coach who struggled to win at Wake Forest.", status: "Fired 2014. Later NBA assistant." },
      { name: "Danny Manning", slug: "danny-manning", years: [2015, 2020], bio: "Former Kansas legend and #1 pick who coached Wake Forest for 6 seasons.", status: "Fired 2020. Now assistant at Louisville." },
      { name: "Steve Forbes", slug: "steve-forbes", years: [2021, 2026], bio: "Built Wake Forest back into NCAA Tournament team. Won 2023 ACC Tournament.", status: "Currently coaching at Wake Forest." },
    ],
  },
  {
    slug: "clemson", name: "Clemson Tigers", school: "Clemson University",
    logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/228.png", mascotName: "Tiger",
    accFrom: 2009,
    coaches: [
      { name: "Oliver Purnell", slug: "oliver-purnell", years: [2009, 2010], bio: "Coached Clemson to the NCAA Tournament before leaving for DePaul.", status: "Now retired from coaching." },
      { name: "Brad Brownell", slug: "brad-brownell", years: [2011, 2026], bio: "Longest-tenured ACC coach. Led Clemson to first Elite Eight since 1980 in 2024.", status: "Currently coaching at Clemson." },
    ],
  },
  {
    slug: "virginia-tech", name: "Virginia Tech Hokies", school: "Virginia Tech",
    logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/259.png", mascotName: "Hokie",
    accFrom: 2009,
    coaches: [
      { name: "Seth Greenberg", slug: "seth-greenberg", years: [2009, 2012], bio: "Energetic coach who made VT competitive but couldn't break through to NCAA Tournament consistently.", status: "Now ESPN analyst." },
      { name: "James Johnson", slug: "james-johnson-vt", years: [2013, 2014], bio: "Brief tenure as VT coach.", status: "Moved on from coaching." },
      { name: "Buzz Williams", slug: "buzz-williams", years: [2015, 2019], bio: "Transformed VT basketball. Led Hokies to 2019 Sweet 16 — deepest run since 1965.", status: "Now HC at Texas A&M." },
      { name: "Mike Young", slug: "mike-young", years: [2020, 2026], bio: "Wofford legend who has maintained VT as an NCAA Tournament program.", status: "Currently coaching at Virginia Tech." },
    ],
  },
  {
    slug: "georgia-tech", name: "Georgia Tech Yellow Jackets", school: "Georgia Institute of Technology",
    logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/59.png", mascotName: "Yellow Jacket",
    accFrom: 2009,
    coaches: [
      { name: "Paul Hewitt", slug: "paul-hewitt", years: [2009, 2011], bio: "Led Georgia Tech to the 2004 title game but program declined.", status: "Fired 2011. Later coached at George Mason." },
      { name: "Brian Gregory", slug: "brian-gregory", years: [2012, 2016], bio: "Struggled to rebuild Georgia Tech basketball.", status: "Fired 2016." },
      { name: "Josh Pastner", slug: "josh-pastner", years: [2017, 2024], bio: "Former Memphis HC. Led GT to 2021 ACC Tournament title.", status: "Fired 2024." },
      { name: "Damon Stoudamire", slug: "damon-stoudamire", years: [2025, 2026], bio: "Former NBA Rookie of the Year. First-year HC at Georgia Tech.", status: "Currently coaching at Georgia Tech." },
    ],
  },
  {
    slug: "florida-state", name: "Florida State Seminoles", school: "Florida State University",
    logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/52.png", mascotName: "Seminole",
    accFrom: 2009,
    coaches: [
      { name: "Leonard Hamilton", slug: "leonard-hamilton", years: [2009, 2025], bio: "Coached FSU for 23 years. Elite Eight 2018. Produced 6+ first-round NBA picks.", status: "Resigned 2025. HC Emeritus at FSU." },
      { name: "Luke Loucks", slug: "luke-loucks", years: [2026, 2026], bio: "Former FSU player hired as new head coach.", status: "Currently coaching at Florida State." },
    ],
  },
  {
    slug: "notre-dame", name: "Notre Dame Fighting Irish", school: "University of Notre Dame",
    logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/87.png", mascotName: "Fighting Irish",
    accFrom: 2009, // Was in Big East until 2013
    coaches: [
      { name: "Mike Brey", slug: "mike-brey", years: [2009, 2023], bio: "Winningest coach in ND history (480-275). Two Elite Eights. Coach K protege.", status: "Stepped down 2023. Now Atlanta Hawks NBA assistant." },
      { name: "Micah Shrewsberry", slug: "micah-shrewsberry", years: [2024, 2026], bio: "Former Penn State HC hired to rebuild Notre Dame.", status: "Currently coaching at Notre Dame." },
    ],
  },
  {
    slug: "pitt", name: "Pittsburgh Panthers", school: "University of Pittsburgh",
    logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/221.png", mascotName: "Panther",
    accFrom: 2009, // Was in Big East until 2013
    coaches: [
      { name: "Jamie Dixon", slug: "jamie-dixon", years: [2009, 2016], bio: "328-123 at Pitt. 11 NCAA Tournaments. Left for TCU.", status: "Now HC at TCU." },
      { name: "Kevin Stallings", slug: "kevin-stallings", years: [2017, 2018], bio: "Disastrous 2-year tenure after leaving Vanderbilt.", status: "Fired 2018. Out of coaching." },
      { name: "Jeff Capel", slug: "jeff-capel", years: [2019, 2026], bio: "Former Duke assistant and Oklahoma HC. Rebuilding Pitt.", status: "Currently coaching at Pittsburgh." },
    ],
  },
  {
    slug: "boston-college", name: "Boston College Eagles", school: "Boston College",
    logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/103.png", mascotName: "Eagle",
    accFrom: 2009,
    coaches: [
      { name: "Al Skinner", slug: "al-skinner", years: [2009, 2010], bio: "247-164 at BC. 6 NCAA Tournaments. BC's golden era.", status: "Fired 2010. Retired from coaching." },
      { name: "Steve Donahue", slug: "steve-donahue", years: [2011, 2014], bio: "Struggled to maintain BC's success.", status: "Fired 2014. Later coached at Penn." },
      { name: "Jim Christian", slug: "jim-christian", years: [2015, 2021], bio: "Could not revive BC basketball.", status: "Fired mid-2021 season." },
      { name: "Earl Grant", slug: "earl-grant", years: [2022, 2026], bio: "Former College of Charleston HC hired to rebuild BC.", status: "Currently coaching at Boston College." },
    ],
  },
];

function getCoachForYear(school: SchoolDef, year: number) {
  for (const c of school.coaches) {
    if (year >= c.years[0] && year <= c.years[1]) return c;
  }
  return school.coaches[school.coaches.length - 1];
}

function seasonStr(year: number) {
  return `${year - 1}-${year}`;
}

function varName(slug: string, year: number) {
  const parts = slug.split("-");
  const camelSchool = parts.map((p, i) => i === 0 ? p : p.charAt(0).toUpperCase() + p.slice(1)).join("");
  return `${camelSchool}Basketball${year}`;
}

let created = 0;
const newImports: string[] = [];
const newTeams: string[] = [];

for (const school of SCHOOLS) {
  for (let year = 2009; year <= 2025; year++) {
    const filename = `${school.slug}-basketball-${year}.ts`;
    const filepath = path.join(SEEDS_DIR, filename);

    if (fs.existsSync(filepath)) continue;

    const coach = getCoachForYear(school, year);
    if (!coach) continue;

    const exportName = varName(school.slug, year);
    const teamSlug = `${school.slug}-basketball-${year}`;
    const season = seasonStr(year);

    const content = `import type { TeamSeed } from "./types";

export const ${exportName}: TeamSeed = {
  slug: "${teamSlug}",
  name: "${school.name}",
  season: "${season}",
  sport: "Men's Basketball",
  school: "${school.school}",
  conference: "ACC",
  accomplishment: "${season} Season",
  logoUrl: "${school.logoUrl}",
  mascotName: "${school.mascotName}",
  people: [
    {
      slug: "${coach.slug}",
      firstName: "${coach.name.split(" ")[0]}",
      lastName: "${coach.name.split(" ").slice(1).join(" ")}",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "${coach.bio}",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "${coach.status}",
        sourceUrl: "https://en.wikipedia.org/wiki/${coach.name.replace(/ /g, "_")}",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "${coach.years[0]}-${coach.years[1]}" },
      seasonStats: [
        { level: "COACHING", teamName: "${school.name}", season: "${season}", yearLabel: "${season}", sortOrder: ${200 + (year - 2008)} },
      ],
      careerEvents: [],
    },
  ],
};
`;

    fs.writeFileSync(filepath, content, "utf-8");
    newImports.push(`import { ${exportName} } from "./seeds/${school.slug}-basketball-${year}";`);
    newTeams.push(`  ${exportName},`);
    created++;
  }
}

console.log(`Created ${created} new seed files.`);
console.log(`\n=== Add these imports to seed.ts: ===`);
newImports.forEach(i => console.log(i));
console.log(`\n=== Add these to allTeams array: ===`);
newTeams.forEach(t => console.log(t));
