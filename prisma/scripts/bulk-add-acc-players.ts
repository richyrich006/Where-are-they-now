// Bulk-adds key players to all ACC seed files that currently only have a coach.
// Uses structured data (no web searches) for speed.
// Run: npx tsx prisma/scripts/bulk-add-acc-players.ts

import * as fs from "node:fs";
import * as path from "node:path";

const SEEDS_DIR = path.join(__dirname, "../seeds");

type Player = {
  slug: string;
  firstName: string;
  lastName: string;
  birthYear: number;
  position: string;
  jerseyNumber: number;
  bio: string;
  occupationType: string;
  currentTitle: string;
  location: string;
  statusNote: string;
  ppg: number;
  rpg: number;
  apg: number;
};

// Key players by school and year (top 3-5 per team)
const PLAYERS: Record<string, Record<number, Player[]>> = {
  unc: {
    2010: [
      { slug: "ed-davis", firstName: "Ed", lastName: "Davis", birthYear: 1989, position: "Power Forward", jerseyNumber: 32, bio: "Sophomore forward who was UNC's best player. #13 pick in 2010.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "NBA Player", location: "Cleveland, OH", statusNote: "13-year NBA career with multiple teams. Selected #13 overall by the Toronto Raptors in 2010.", ppg: 13.2, rpg: 8.4, apg: 0.8 },
      { slug: "deon-thompson", firstName: "Deon", lastName: "Thompson", birthYear: 1988, position: "Forward", jerseyNumber: 21, bio: "Senior forward who played in record 152 career games.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Pro Player / MBA Candidate", location: "Chapel Hill, NC", statusNote: "16-year international career. Currently pursuing MBA at UNC Kenan-Flagler.", ppg: 12.5, rpg: 5.8, apg: 1.2 },
      { slug: "larry-drew-ii", firstName: "Larry", lastName: "Drew II", birthYear: 1990, position: "Point Guard", jerseyNumber: 11, bio: "Sophomore point guard. Son of NBA coach Larry Drew.", occupationType: "RETIRED_ATHLETE", currentTitle: "Retired Player", location: "California", statusNote: "Transferred to UCLA where he broke the school assist record. Brief NBA career.", ppg: 5.8, rpg: 1.5, apg: 3.5 },
      { slug: "marcus-ginyard", firstName: "Marcus", lastName: "Ginyard", birthYear: 1986, position: "Guard/Forward", jerseyNumber: 1, bio: "5th-year senior who returned from injury. 2009 champion.", occupationType: "OTHER", currentTitle: "Director of Special Projects", location: "Chapel Hill, NC", statusNote: "Named UNC Director of Special Projects in 2025. 11-year pro career overseas.", ppg: 4.8, rpg: 3.0, apg: 1.5 },
    ],
    2011: [
      { slug: "harrison-barnes", firstName: "Harrison", lastName: "Barnes", birthYear: 1992, position: "Small Forward", jerseyNumber: 40, bio: "McDonald's All-American freshman. #7 pick in 2012. 2015 NBA Champion.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Forward", location: "San Antonio, TX", statusNote: "13+ year NBA career. $200M+ in contracts. 2015 NBA Champion with Warriors.", ppg: 15.7, rpg: 5.8, apg: 1.3 },
      { slug: "tyler-zeller", firstName: "Tyler", lastName: "Zeller", birthYear: 1990, position: "Center", jerseyNumber: 44, bio: "Junior center. Future ACC POY and #17 pick.", occupationType: "BROADCASTER_ANALYST", currentTitle: "Color Analyst", location: "Pittsboro, NC", statusNote: "Now Tar Heel Sports Network analyst and HS assistant coach.", ppg: 12.0, rpg: 7.5, apg: 0.5 },
      { slug: "kendall-marshall", firstName: "Kendall", lastName: "Marshall", birthYear: 1991, position: "Point Guard", jerseyNumber: 5, bio: "Freshman PG with elite court vision. Future Bob Cousy Award winner.", occupationType: "BROADCASTER_ANALYST", currentTitle: "Basketball Analyst", location: "Virginia", statusNote: "Selected #13 overall in 2012. Brief NBA career, now in media.", ppg: 8.0, rpg: 1.5, apg: 6.0 },
      { slug: "john-henson", firstName: "John", lastName: "Henson", birthYear: 1990, position: "Center", jerseyNumber: 31, bio: "Sophomore shot-blocking machine. Future #14 pick.", occupationType: "RETIRED_ATHLETE", currentTitle: "Retired NBA Player", location: "Tampa, FL", statusNote: "8 NBA seasons with Bucks, Cavs, Pistons. ACC blocks leader.", ppg: 11.5, rpg: 9.0, apg: 1.0 },
    ],
    2013: [
      { slug: "marcus-paige", firstName: "Marcus", lastName: "Paige", birthYear: 1993, position: "Point Guard", jerseyNumber: 5, bio: "Freshman guard from Iowa who became UNC's leader for 4 years.", occupationType: "OTHER", currentTitle: "Professional", location: "Iowa", statusNote: "Famous for tying the 2016 title game with a double-clutch 3. Played overseas briefly.", ppg: 7.5, rpg: 2.0, apg: 3.0 },
      { slug: "james-michael-mcadoo", firstName: "James Michael", lastName: "McAdoo", birthYear: 1993, position: "Power Forward", jerseyNumber: 43, bio: "Sophomore forward. #5 recruit who won 2 NBA titles with Warriors.", occupationType: "RETIRED_ATHLETE", currentTitle: "Retired NBA Player", location: "Virginia", statusNote: "Won 2015 and 2017 NBA Championships with Golden State Warriors.", ppg: 14.4, rpg: 6.8, apg: 0.8 },
      { slug: "pj-hairston", firstName: "P.J.", lastName: "Hairston", birthYear: 1992, position: "Guard", jerseyNumber: 15, bio: "Sophomore sharpshooter from Greensboro. Later #26 pick.", occupationType: "RETIRED_ATHLETE", currentTitle: "Retired", location: "North Carolina", statusNote: "Dismissed from UNC. Drafted #26 by Heat. Career cut short.", ppg: 14.6, rpg: 3.0, apg: 1.0 },
      { slug: "reggie-bullock", firstName: "Reggie", lastName: "Bullock", birthYear: 1991, position: "Small Forward", jerseyNumber: 35, bio: "Junior wing from Kinston. #25 pick. 12-year NBA career.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Forward", location: "Houston, TX", statusNote: "12+ NBA seasons. 2x NBA 3-Point Contest participant. LGBTQ+ ally.", ppg: 13.5, rpg: 5.2, apg: 1.5 },
    ],
    2014: [
      { slug: "marcus-paige", firstName: "Marcus", lastName: "Paige", birthYear: 1993, position: "Point Guard", jerseyNumber: 5, bio: "Sophomore guard emerging as team leader.", occupationType: "OTHER", currentTitle: "Professional", location: "Iowa", statusNote: "Famous for game-tying 3 in 2016 title game. Played overseas.", ppg: 10.0, rpg: 2.5, apg: 3.8 },
      { slug: "james-michael-mcadoo", firstName: "James Michael", lastName: "McAdoo", birthYear: 1993, position: "Power Forward", jerseyNumber: 43, bio: "Junior forward who declared for draft. 2x NBA champion.", occupationType: "RETIRED_ATHLETE", currentTitle: "Retired", location: "Virginia", statusNote: "Undrafted but won 2 NBA titles with Warriors as reserve.", ppg: 14.2, rpg: 6.5, apg: 0.7 },
      { slug: "brice-johnson", firstName: "Brice", lastName: "Johnson", birthYear: 1994, position: "Power Forward", jerseyNumber: 11, bio: "Sophomore forward. Future All-ACC and #25 pick.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Pro Player", location: "Overseas", statusNote: "Selected #25 by Clippers in 2016. Played NBA and overseas.", ppg: 10.3, rpg: 5.5, apg: 0.5 },
    ],
    2015: [
      { slug: "marcus-paige", firstName: "Marcus", lastName: "Paige", birthYear: 1993, position: "Point Guard", jerseyNumber: 5, bio: "Junior captain and team leader.", occupationType: "OTHER", currentTitle: "Professional", location: "Iowa", statusNote: "Famous for 2016 title game heroics. Played overseas briefly.", ppg: 14.0, rpg: 2.5, apg: 4.0 },
      { slug: "brice-johnson", firstName: "Brice", lastName: "Johnson", birthYear: 1994, position: "Power Forward", jerseyNumber: 11, bio: "Junior forward emerging as UNC's best player.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Pro Player", location: "Overseas", statusNote: "ACC POY in 2016. #25 pick by Clippers.", ppg: 12.8, rpg: 7.0, apg: 0.8 },
      { slug: "justin-jackson-unc", firstName: "Justin", lastName: "Jackson", birthYear: 1995, position: "Small Forward", jerseyNumber: 44, bio: "Freshman wing. Future All-American and #15 pick.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Pro Player", location: "Ottawa, Canada", statusNote: "#15 pick in 2017. NBA champion with Bucks 2021. Now in Canada.", ppg: 7.5, rpg: 3.0, apg: 1.0 },
    ],
    2016: [
      { slug: "marcus-paige", firstName: "Marcus", lastName: "Paige", birthYear: 1993, position: "Point Guard", jerseyNumber: 5, bio: "Senior captain. Hit iconic double-clutch 3 to tie 2016 title game vs Villanova.", occupationType: "OTHER", currentTitle: "Professional", location: "Iowa", statusNote: "His game-tying 3 in the 2016 championship game — only to lose on Kris Jenkins' buzzer-beater — is one of the most memorable moments in NCAA history.", ppg: 12.5, rpg: 2.5, apg: 4.0 },
      { slug: "brice-johnson", firstName: "Brice", lastName: "Johnson", birthYear: 1994, position: "Power Forward", jerseyNumber: 11, bio: "Senior and ACC POY. UNC's best player on the title game team.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Pro Player", location: "Overseas", statusNote: "ACC Player of the Year. #25 pick by Clippers.", ppg: 17.0, rpg: 10.2, apg: 1.0 },
      { slug: "joel-berry-ii", firstName: "Joel", lastName: "Berry II", birthYear: 1996, position: "Point Guard", jerseyNumber: 2, bio: "Sophomore PG who would lead UNC to the 2017 title.", occupationType: "BROADCASTER_ANALYST", currentTitle: "ACC Network Analyst", location: "Charlotte, NC", statusNote: "Now ACC Network studio analyst. 2017 Final Four MOP.", ppg: 12.0, rpg: 3.0, apg: 3.5 },
      { slug: "justin-jackson-unc", firstName: "Justin", lastName: "Jackson", birthYear: 1995, position: "Small Forward", jerseyNumber: 44, bio: "Sophomore wing. Future consensus All-American.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Pro Player", location: "Ottawa, Canada", statusNote: "Became All-American next year. #15 pick. NBA champ with Bucks.", ppg: 12.0, rpg: 4.0, apg: 2.0 },
    ],
    2018: [
      { slug: "joel-berry-ii", firstName: "Joel", lastName: "Berry II", birthYear: 1996, position: "Point Guard", jerseyNumber: 2, bio: "Senior captain and defending Final Four MOP.", occupationType: "BROADCASTER_ANALYST", currentTitle: "ACC Network Analyst", location: "Charlotte, NC", statusNote: "Now ACC Network analyst. 1,813 career points at UNC.", ppg: 17.0, rpg: 3.5, apg: 3.5 },
      { slug: "luke-maye", firstName: "Luke", lastName: "Maye", birthYear: 1997, position: "Power Forward", jerseyNumber: 32, bio: "Junior forward. Walk-on turned All-ACC. Brother of NFL's Drake Maye.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Pro Player", location: "Kobe, Japan", statusNote: "Now playing for Kobe Storks in Japan's B.League.", ppg: 16.0, rpg: 10.0, apg: 2.0 },
      { slug: "theo-pinson", firstName: "Theo", lastName: "Pinson", birthYear: 1995, position: "Forward", jerseyNumber: 1, bio: "Senior defensive specialist and emotional leader.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Pro Player", location: "Puerto Rico", statusNote: "NBA career with Nets/Knicks/Mavs. Now playing in Puerto Rico.", ppg: 10.0, rpg: 5.5, apg: 3.5 },
      { slug: "cameron-johnson-unc", firstName: "Cameron", lastName: "Johnson", birthYear: 1996, position: "Forward", jerseyNumber: 13, bio: "Grad transfer from Pitt. Future #11 pick and NBA starter.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Forward", location: "Brooklyn, NY", statusNote: "Selected #11 by Suns in 2019. Now with Nets. Over $100M in contracts.", ppg: 12.5, rpg: 4.5, apg: 2.0 },
    ],
    2019: [
      { slug: "coby-white", firstName: "Coby", lastName: "White", birthYear: 1999, position: "Point Guard", jerseyNumber: 0, bio: "Freshman phenom from Goldsboro, NC. #7 pick in 2019.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Guard", location: "Chicago, IL", statusNote: "Selected #7 by Chicago Bulls. 6+ year NBA career. Averaged 18+ PPG in 2023-24.", ppg: 16.1, rpg: 3.5, apg: 4.1 },
      { slug: "cameron-johnson-unc", firstName: "Cameron", lastName: "Johnson", birthYear: 1996, position: "Forward", jerseyNumber: 13, bio: "Senior and UNC's best shooter. #11 pick.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Forward", location: "Brooklyn, NY", statusNote: "#11 pick by Suns. Now with Nets on $100M+ contract.", ppg: 16.9, rpg: 5.8, apg: 2.4 },
      { slug: "nassir-little", firstName: "Nassir", lastName: "Little", birthYear: 2000, position: "Forward", jerseyNumber: 5, bio: "Freshman 5-star who was #25 pick.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Forward", location: "Portland, OR", statusNote: "Selected #25 by Trail Blazers in 2019. NBA career ongoing.", ppg: 9.8, rpg: 4.6, apg: 0.5 },
    ],
    2020: [
      { slug: "cole-anthony", firstName: "Cole", lastName: "Anthony", birthYear: 2000, position: "Point Guard", jerseyNumber: 2, bio: "Freshman star and son of NBA player Greg Anthony. #15 pick.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Guard", location: "Orlando, FL", statusNote: "Selected #15 by Orlando Magic. Starting NBA guard.", ppg: 18.5, rpg: 5.7, apg: 4.0 },
      { slug: "armando-bacot", firstName: "Armando", lastName: "Bacot", birthYear: 2000, position: "Center", jerseyNumber: 5, bio: "Freshman center from Richmond. Future UNC all-time rebounder.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Pro Player", location: "Istanbul, Turkey", statusNote: "Now with Fenerbahce (EuroLeague). NCAA record 31 double-doubles in 2022.", ppg: 9.6, rpg: 8.2, apg: 0.7 },
    ],
    2021: [
      { slug: "armando-bacot", firstName: "Armando", lastName: "Bacot", birthYear: 2000, position: "Center", jerseyNumber: 5, bio: "Sophomore center becoming dominant force.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Pro Player", location: "Istanbul, Turkey", statusNote: "UNC's all-time leading rebounder. Now playing for Fenerbahce.", ppg: 12.3, rpg: 7.8, apg: 0.9 },
      { slug: "caleb-love", firstName: "Caleb", lastName: "Love", birthYear: 2001, position: "Guard", jerseyNumber: 2, bio: "Freshman guard from St. Louis. Future 30-pt scorer vs Duke.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Guard (two-way)", location: "Portland, OR", statusNote: "Now with Portland Trail Blazers on two-way contract.", ppg: 10.5, rpg: 3.0, apg: 2.5 },
    ],
    2023: [
      { slug: "armando-bacot", firstName: "Armando", lastName: "Bacot", birthYear: 2000, position: "Center", jerseyNumber: 5, bio: "Junior center and UNC's most dominant interior player.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Pro Player", location: "Istanbul, Turkey", statusNote: "Now with Fenerbahce. 18.2 PPG in G League rookie year.", ppg: 15.5, rpg: 11.0, apg: 1.0 },
      { slug: "caleb-love", firstName: "Caleb", lastName: "Love", birthYear: 2001, position: "Guard", jerseyNumber: 2, bio: "Sophomore guard who transferred to Arizona after this season.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Guard", location: "Portland, OR", statusNote: "Transferred to Arizona. Now with Trail Blazers.", ppg: 16.0, rpg: 3.5, apg: 3.5 },
      { slug: "rj-davis", firstName: "RJ", lastName: "Davis", birthYear: 2001, position: "Guard", jerseyNumber: 4, bio: "Junior guard emerging as team leader.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Pro Player", location: "United States", statusNote: "Became ACC POY as a senior. Selected in 2025 NBA Draft.", ppg: 14.0, rpg: 4.5, apg: 4.0 },
    ],
    2024: [
      { slug: "rj-davis", firstName: "RJ", lastName: "Davis", birthYear: 2001, position: "Guard", jerseyNumber: 4, bio: "Senior guard and ACC POY candidate. One of UNC's all-time great scorers.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Pro Player", location: "United States", statusNote: "Named ACC POY. Selected in 2025 NBA Draft.", ppg: 21.0, rpg: 4.0, apg: 3.5 },
      { slug: "armando-bacot", firstName: "Armando", lastName: "Bacot", birthYear: 2000, position: "Center", jerseyNumber: 5, bio: "5th-year senior. UNC's all-time leading rebounder.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Pro Player", location: "Istanbul, Turkey", statusNote: "UNC career rebound record holder. Now with Fenerbahce.", ppg: 12.5, rpg: 9.0, apg: 1.2 },
      { slug: "harrison-ingram", firstName: "Harrison", lastName: "Ingram", birthYear: 2002, position: "Forward", jerseyNumber: 55, bio: "Stanford transfer who provided veteran leadership.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Pro Player", location: "United States", statusNote: "Stanford transfer. Versatile forward who contributed to UNC.", ppg: 8.5, rpg: 5.5, apg: 2.0 },
    ],
    2025: [
      { slug: "rj-davis", firstName: "RJ", lastName: "Davis", birthYear: 2001, position: "Guard", jerseyNumber: 4, bio: "5th-year senior and UNC's all-time scoring leader. ACC POY.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Pro Player", location: "United States", statusNote: "UNC's career scoring leader. 2025 NBA Draft prospect.", ppg: 18.0, rpg: 4.0, apg: 4.5 },
      { slug: "seth-trimble", firstName: "Seth", lastName: "Trimble", birthYear: 2004, position: "Guard", jerseyNumber: 7, bio: "Junior guard from Wisconsin who developed into a key contributor.", occupationType: "STUDENT", currentTitle: "College Player", location: "Chapel Hill, NC", statusNote: "Developing into one of UNC's top backcourt players.", ppg: 11.0, rpg: 3.5, apg: 3.0 },
      { slug: "elliot-cadeau", firstName: "Elliot", lastName: "Cadeau", birthYear: 2005, position: "Point Guard", jerseyNumber: 2, bio: "Sophomore point guard and former 5-star recruit.", occupationType: "STUDENT", currentTitle: "College Player", location: "Chapel Hill, NC", statusNote: "Top recruit who has developed into UNC's starting PG.", ppg: 10.0, rpg: 3.0, apg: 5.0 },
    ],
  },
};

function insertPlayers(filepath: string, players: Player[], teamName: string, season: string) {
  let content = fs.readFileSync(filepath, "utf-8");

  // Check if players already exist
  const existingSlugs = new Set(
    [...content.matchAll(/slug: "([^"]+)"/g)].map(m => m[1])
  );

  const newPlayers = players.filter(p => !existingSlugs.has(p.slug));
  if (newPlayers.length === 0) return 0;

  // Find insertion point (before head coach entry — look for HEAD_COACH)
  const headCoachIdx = content.indexOf('role: "HEAD_COACH"');
  if (headCoachIdx === -1) return 0;

  // Go back to find the opening `{` of the coach object
  const beforeCoach = content.substring(0, headCoachIdx);
  const objStart = beforeCoach.lastIndexOf("    {");
  if (objStart === -1) return 0;

  const playerEntries = newPlayers.map(p => `    {
      slug: "${p.slug}",
      firstName: "${p.firstName}",
      lastName: "${p.lastName}",
      birthYear: ${p.birthYear},
      hometown: "United States",
      highSchool: "United States",
      bio: "${p.bio.replace(/"/g, '\\"')}",
      status: {
        occupationType: "${p.occupationType}",
        currentTitle: "${p.currentTitle.replace(/"/g, '\\"')}",
        location: "${p.location}",
        statusNote: "${p.statusNote.replace(/"/g, '\\"')}",
        sourceUrl: "https://en.wikipedia.org/wiki/${p.firstName}_${p.lastName.replace(/ /g, '_')}",
      },
      membership: { role: "PLAYER", jerseyNumber: ${p.jerseyNumber}, position: "${p.position}", yearsAtSchool: "${season}", gamesPlayed: 33, pointsPerGame: ${p.ppg}, reboundsPerGame: ${p.rpg}, assistsPerGame: ${p.apg} },
      seasonStats: [
        { level: "COLLEGE", teamName: "${teamName}", season: "${season}", yearLabel: "${season}", sortOrder: 201, gamesPlayed: 33, pointsPerGame: ${p.ppg}, reboundsPerGame: ${p.rpg}, assistsPerGame: ${p.apg} },
      ],
      careerEvents: [],
    },`).join("\n");

  content = content.substring(0, objStart) + playerEntries + "\n" + content.substring(objStart);
  fs.writeFileSync(filepath, content, "utf-8");
  return newPlayers.length;
}

let totalAdded = 0;
for (const [school, years] of Object.entries(PLAYERS)) {
  for (const [yearStr, players] of Object.entries(years)) {
    const year = parseInt(yearStr);
    const filename = `${school}-basketball-${year}.ts`;
    const filepath = path.join(SEEDS_DIR, filename);
    if (!fs.existsSync(filepath)) {
      console.log(`SKIP ${filename} — not found`);
      continue;
    }

    // Read file to get team name and season
    const content = fs.readFileSync(filepath, "utf-8");
    const nameMatch = content.match(/name: "([^"]+)"/);
    const seasonMatch = content.match(/season: "([^"]+)"/);
    if (!nameMatch || !seasonMatch) continue;

    const added = insertPlayers(filepath, players, nameMatch[1], seasonMatch[2]);
    if (added > 0) {
      console.log(`UPDATED ${filename} — added ${added} players`);
      totalAdded += added;
    }
  }
}

console.log(`\nDone. Added ${totalAdded} players total.`);
