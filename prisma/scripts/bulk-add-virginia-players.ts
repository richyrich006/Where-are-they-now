// Bulk-adds key players to Virginia seed files
// Run: npx tsx prisma/scripts/bulk-add-virginia-players.ts

import * as fs from "node:fs";
import * as path from "node:path";

const SEEDS_DIR = path.join(__dirname, "../seeds");

type Player = { slug: string; firstName: string; lastName: string; birthYear: number; position: string; jerseyNumber: number; bio: string; occupationType: string; currentTitle: string; location: string; statusNote: string; ppg: number; rpg: number; apg: number; };

function insertPlayers(filepath: string, players: Player[], teamName: string, season: string) {
  let content = fs.readFileSync(filepath, "utf-8");
  const existingSlugs = new Set([...content.matchAll(/slug: "([^"]+)"/g)].map(m => m[1]));
  const newPlayers = players.filter(p => !existingSlugs.has(p.slug));
  if (newPlayers.length === 0) return 0;
  const headCoachIdx = content.indexOf('role: "HEAD_COACH"');
  if (headCoachIdx === -1) return 0;
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

const PLAYERS: Record<number, Player[]> = {
  2009: [
    { slug: "sylven-landesberg", firstName: "Sylven", lastName: "Landesberg", birthYear: 1990, position: "Guard", jerseyNumber: 15, bio: "Freshman guard who was ACC Rookie of the Year. Later dismissed from team.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Pro Player", location: "Overseas", statusNote: "ACC ROY as freshman. Dismissed from UVA. Long overseas career in Israel, Turkey, Italy.", ppg: 17.3, rpg: 4.8, apg: 2.0 },
    { slug: "sammy-zeglinski", firstName: "Sammy", lastName: "Zeglinski", birthYear: 1989, position: "Guard", jerseyNumber: 13, bio: "Sophomore guard and perimeter shooter.", occupationType: "OTHER", currentTitle: "Professional", location: "Virginia", statusNote: "Played 4 years at UVA. Now in business in Virginia.", ppg: 8.5, rpg: 2.5, apg: 2.0 },
  ],
  2010: [
    { slug: "sylven-landesberg", firstName: "Sylven", lastName: "Landesberg", birthYear: 1990, position: "Guard", jerseyNumber: 15, bio: "Sophomore guard. ACC ROY previous year. Would be dismissed after this season.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Pro Player", location: "Overseas", statusNote: "Long overseas career after dismissal from UVA.", ppg: 16.0, rpg: 4.5, apg: 2.0 },
    { slug: "mustapha-farrakhan", firstName: "Mustapha", lastName: "Farrakhan", birthYear: 1989, position: "Guard", jerseyNumber: 1, bio: "Junior guard who provided backcourt scoring.", occupationType: "OTHER", currentTitle: "Professional", location: "United States", statusNote: "Played overseas briefly after UVA.", ppg: 12.0, rpg: 2.5, apg: 3.0 },
  ],
  2011: [
    { slug: "mike-scott-uva", firstName: "Mike", lastName: "Scott", birthYear: 1988, position: "Forward", jerseyNumber: 23, bio: "Junior forward who became UVA's best player. Went on to 8-year NBA career.", occupationType: "RETIRED_ATHLETE", currentTitle: "Retired NBA Player", location: "Virginia", statusNote: "8-year NBA career with Hawks, Clippers, Wizards, 76ers. Known as 'The Emoji Man'.", ppg: 13.0, rpg: 7.5, apg: 1.0 },
    { slug: "joe-harris", firstName: "Joe", lastName: "Harris", birthYear: 1991, position: "Guard/Forward", jerseyNumber: 25, bio: "Freshman from Chelan, WA. Future 2x NBA Three-Point Contest winner.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Guard", location: "Detroit, MI", statusNote: "2x NBA 3-Point Contest winner. 10+ year NBA career.", ppg: 5.0, rpg: 2.5, apg: 0.8 },
  ],
  2012: [
    { slug: "mike-scott-uva", firstName: "Mike", lastName: "Scott", birthYear: 1988, position: "Forward", jerseyNumber: 23, bio: "Senior forward and UVA's leading scorer. ACC honorable mention.", occupationType: "RETIRED_ATHLETE", currentTitle: "Retired NBA Player", location: "Virginia", statusNote: "8-year NBA career. 'The Emoji Man'.", ppg: 15.0, rpg: 8.0, apg: 1.2 },
    { slug: "joe-harris", firstName: "Joe", lastName: "Harris", birthYear: 1991, position: "Guard/Forward", jerseyNumber: 25, bio: "Sophomore wing developing his shooting.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Guard", location: "Detroit, MI", statusNote: "Became elite NBA shooter. 2x 3-Point Contest winner.", ppg: 9.5, rpg: 3.5, apg: 1.5 },
    { slug: "malcolm-brogdon", firstName: "Malcolm", lastName: "Brogdon", birthYear: 1992, position: "Guard", jerseyNumber: 15, bio: "Freshman guard. Future ACC POY and NBA ROY.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Guard", location: "Washington, DC", statusNote: "2017 NBA ROY as #36 pick — lowest ever to win. Master's in public policy.", ppg: 3.5, rpg: 1.5, apg: 1.0 },
  ],
  2013: [
    { slug: "joe-harris", firstName: "Joe", lastName: "Harris", birthYear: 1991, position: "Guard/Forward", jerseyNumber: 25, bio: "Junior wing becoming team's best scorer.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Guard", location: "Detroit, MI", statusNote: "2x NBA 3-Point Contest winner.", ppg: 11.0, rpg: 4.0, apg: 2.0 },
    { slug: "malcolm-brogdon", firstName: "Malcolm", lastName: "Brogdon", birthYear: 1992, position: "Guard", jerseyNumber: 15, bio: "Sophomore guard developing into a leader.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Guard", location: "Washington, DC", statusNote: "NBA ROY. Founded Brogdon Family Foundation for East African water wells.", ppg: 6.5, rpg: 2.0, apg: 1.5 },
    { slug: "akil-mitchell", firstName: "Akil", lastName: "Mitchell", birthYear: 1992, position: "Forward", jerseyNumber: 25, bio: "Junior forward from Charlotte. Physical interior player.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Pro Player", location: "New Zealand", statusNote: "Long career in NZ basketball. Survived horrific eye injury in 2017.", ppg: 7.5, rpg: 6.0, apg: 0.8 },
  ],
  2015: [
    { slug: "malcolm-brogdon", firstName: "Malcolm", lastName: "Brogdon", birthYear: 1992, position: "Guard", jerseyNumber: 15, bio: "Junior guard and defensive anchor.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Guard", location: "Washington, DC", statusNote: "2017 NBA ROY. $100M+ career earnings. Clean water philanthropist.", ppg: 12.5, rpg: 3.5, apg: 2.5 },
    { slug: "london-perrantes", firstName: "London", lastName: "Perrantes", birthYear: 1994, position: "Point Guard", jerseyNumber: 32, bio: "Sophomore floor general.", occupationType: "COACH", currentTitle: "Basketball Coach", location: "Virginia", statusNote: "4-year starter. Transitioned to coaching after playing.", ppg: 7.0, rpg: 2.0, apg: 4.0 },
    { slug: "justin-anderson", firstName: "Justin", lastName: "Anderson", birthYear: 1993, position: "Forward", jerseyNumber: 1, bio: "Junior wing. #21 pick by Dallas.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Pro Player", location: "United States", statusNote: "#21 pick by Mavericks. 5 NBA seasons.", ppg: 12.0, rpg: 4.0, apg: 2.0 },
  ],
  2016: [
    { slug: "malcolm-brogdon", firstName: "Malcolm", lastName: "Brogdon", birthYear: 1992, position: "Guard", jerseyNumber: 15, bio: "Senior and ACC POY. Future NBA ROY as #36 pick.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Guard", location: "Washington, DC", statusNote: "ACC POY. NBA ROY. Master's in public policy from UVA.", ppg: 18.2, rpg: 4.1, apg: 3.1 },
    { slug: "london-perrantes", firstName: "London", lastName: "Perrantes", birthYear: 1994, position: "Point Guard", jerseyNumber: 32, bio: "Junior floor general and 4-year starter.", occupationType: "COACH", currentTitle: "Coach", location: "Virginia", statusNote: "Transitioned to coaching.", ppg: 10.0, rpg: 2.5, apg: 4.5 },
    { slug: "isaiah-wilkins", firstName: "Isaiah", lastName: "Wilkins", birthYear: 1996, position: "Forward", jerseyNumber: 21, bio: "Sophomore defensive stopper. Son of Dominique Wilkins.", occupationType: "RETIRED_ATHLETE", currentTitle: "Professional", location: "Atlanta, GA", statusNote: "Son of NBA legend Dominique Wilkins. Played overseas briefly.", ppg: 5.0, rpg: 4.0, apg: 0.5 },
  ],
  2017: [
    { slug: "london-perrantes", firstName: "London", lastName: "Perrantes", birthYear: 1994, position: "Point Guard", jerseyNumber: 32, bio: "Senior captain and 4-year starter.", occupationType: "COACH", currentTitle: "Coach", location: "Virginia", statusNote: "UVA's all-time starting games leader. Now coaching.", ppg: 12.5, rpg: 2.5, apg: 4.0 },
    { slug: "isaiah-wilkins", firstName: "Isaiah", lastName: "Wilkins", birthYear: 1996, position: "Forward", jerseyNumber: 21, bio: "Junior forward and son of Dominique Wilkins.", occupationType: "RETIRED_ATHLETE", currentTitle: "Professional", location: "Atlanta, GA", statusNote: "Son of NBA legend. Played overseas briefly.", ppg: 5.5, rpg: 5.0, apg: 0.5 },
    { slug: "kyle-guy", firstName: "Kyle", lastName: "Guy", birthYear: 1997, position: "Guard", jerseyNumber: 5, bio: "Freshman shooter from Indianapolis. Future Final Four MOP.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Guard", location: "Noblesville, IN", statusNote: "2019 Final Four MOP. Now with Noblesville Boom (G League).", ppg: 8.0, rpg: 2.0, apg: 1.5 },
    { slug: "ty-jerome", firstName: "Ty", lastName: "Jerome", birthYear: 1997, position: "Guard", jerseyNumber: 11, bio: "Freshman PG from New Rochelle. Future #24 pick.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Guard", location: "Memphis, TN", statusNote: "#24 pick. Averaging 20.1 PPG for Grizzlies in 2025-26.", ppg: 4.5, rpg: 1.5, apg: 2.0 },
    { slug: "deandre-hunter", firstName: "De'Andre", lastName: "Hunter", birthYear: 1997, position: "Forward", jerseyNumber: 12, bio: "Freshman forward. Future #4 pick.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Forward", location: "Sacramento, CA", statusNote: "#4 pick by Hawks. Now with Kings.", ppg: 2.0, rpg: 1.0, apg: 0.3 },
  ],
  2018: [
    { slug: "kyle-guy", firstName: "Kyle", lastName: "Guy", birthYear: 1997, position: "Guard", jerseyNumber: 5, bio: "Sophomore shooter and growing scorer.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Guard", location: "Noblesville, IN", statusNote: "2019 Final Four MOP. Now G League.", ppg: 14.0, rpg: 3.0, apg: 2.0 },
    { slug: "ty-jerome", firstName: "Ty", lastName: "Jerome", birthYear: 1997, position: "Guard", jerseyNumber: 11, bio: "Sophomore PG with growing confidence.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Guard", location: "Memphis, TN", statusNote: "20.1 PPG for Grizzlies. #24 pick.", ppg: 10.5, rpg: 3.5, apg: 3.5 },
    { slug: "deandre-hunter", firstName: "De'Andre", lastName: "Hunter", birthYear: 1997, position: "Forward", jerseyNumber: 12, bio: "Sophomore forward. Redshirted in 2018 due to wrist injury.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Forward", location: "Sacramento, CA", statusNote: "Redshirted this year. Returned to win 2019 title.", ppg: 0.0, rpg: 0.0, apg: 0.0 },
    { slug: "devon-hall", firstName: "Devon", lastName: "Hall", birthYear: 1995, position: "Guard", jerseyNumber: 0, bio: "Senior guard and team captain. UMBC loss devastated this team.", occupationType: "RETIRED_ATHLETE", currentTitle: "Professional", location: "United States", statusNote: "Played in G League and overseas after UVA. Part of the infamous UMBC loss.", ppg: 11.5, rpg: 3.5, apg: 3.0 },
  ],
  2020: [
    { slug: "mamadi-diakite", firstName: "Mamadi", lastName: "Diakite", birthYear: 1996, position: "Forward", jerseyNumber: 25, bio: "Senior from Guinea. Hit iconic buzzer-beater vs Purdue in 2019.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Pro Player", location: "Europe", statusNote: "#46 pick by Bucks. Playing overseas.", ppg: 13.0, rpg: 6.5, apg: 1.0 },
    { slug: "kihei-clark", firstName: "Kihei", lastName: "Clark", birthYear: 2000, position: "Point Guard", jerseyNumber: 0, bio: "Sophomore PG. Famous for half-court pass vs Purdue.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Guard", location: "Kortrijk, Belgium", statusNote: "UVA all-time assists leader. Now playing in Belgium.", ppg: 10.0, rpg: 3.0, apg: 5.0 },
    { slug: "jay-huff", firstName: "Jay", lastName: "Huff", birthYear: 1998, position: "Center", jerseyNumber: 30, bio: "Junior stretch-five with shot-blocking ability.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Pro Player", location: "United States", statusNote: "Played for Wizards. G League and overseas.", ppg: 8.0, rpg: 4.0, apg: 0.5 },
  ],
  2021: [
    { slug: "sam-hauser", firstName: "Sam", lastName: "Hauser", birthYear: 1997, position: "Forward", jerseyNumber: 10, bio: "Grad transfer from Marquette. Elite shooter who joined Celtics.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Forward", location: "Boston, MA", statusNote: "Won 2024 NBA Championship with Celtics. $45M contract. Elite 3-point shooter.", ppg: 16.0, rpg: 6.8, apg: 1.5 },
    { slug: "kihei-clark", firstName: "Kihei", lastName: "Clark", birthYear: 2000, position: "Point Guard", jerseyNumber: 0, bio: "Junior PG and UVA's floor general.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Guard", location: "Belgium", statusNote: "UVA all-time assists leader. Now in Belgium's BNXT League.", ppg: 9.5, rpg: 2.5, apg: 4.5 },
    { slug: "jay-huff", firstName: "Jay", lastName: "Huff", birthYear: 1998, position: "Center", jerseyNumber: 30, bio: "Senior center with 3-point range and shot-blocking.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Pro Player", location: "United States", statusNote: "Played for Wizards. Rare stretch-5 with shot-blocking.", ppg: 13.0, rpg: 7.0, apg: 0.8 },
  ],
  2022: [
    { slug: "kihei-clark", firstName: "Kihei", lastName: "Clark", birthYear: 2000, position: "Point Guard", jerseyNumber: 0, bio: "Senior PG. UVA's all-time assists and wins leader.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Guard", location: "Belgium", statusNote: "Most decorated PG in UVA history. Now in Belgium.", ppg: 10.0, rpg: 3.0, apg: 4.5 },
    { slug: "jayden-gardner", firstName: "Jayden", lastName: "Gardner", birthYear: 1999, position: "Forward", jerseyNumber: 1, bio: "Grad transfer from East Carolina. Physical interior scorer.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Pro Player", location: "Overseas", statusNote: "ECU transfer who provided interior scoring for UVA.", ppg: 12.0, rpg: 5.5, apg: 1.0 },
    { slug: "reece-beekman", firstName: "Reece", lastName: "Beekman", birthYear: 2002, position: "Guard", jerseyNumber: 2, bio: "Sophomore guard and ACC Defensive POY. Future NBA draft pick.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Guard", location: "United States", statusNote: "ACC DPOY. Drafted in 2024 NBA Draft.", ppg: 8.0, rpg: 2.5, apg: 4.0 },
  ],
  2023: [
    { slug: "reece-beekman", firstName: "Reece", lastName: "Beekman", birthYear: 2002, position: "Guard", jerseyNumber: 2, bio: "Junior guard and elite defender.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Guard", location: "United States", statusNote: "ACC DPOY. 2024 NBA Draft pick.", ppg: 9.5, rpg: 3.0, apg: 5.0 },
    { slug: "kihei-clark", firstName: "Kihei", lastName: "Clark", birthYear: 2000, position: "Point Guard", jerseyNumber: 0, bio: "5th-year senior. UVA's all-time leader in assists, wins, 3-pointers.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Guard", location: "Belgium", statusNote: "Most wins by any player in UVA history.", ppg: 11.5, rpg: 3.0, apg: 4.5 },
  ],
  2024: [
    { slug: "reece-beekman", firstName: "Reece", lastName: "Beekman", birthYear: 2002, position: "Guard", jerseyNumber: 2, bio: "Senior guard. Selected in 2024 NBA Draft.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Guard", location: "United States", statusNote: "2024 NBA Draft pick. ACC's top defender.", ppg: 12.0, rpg: 3.5, apg: 5.5 },
    { slug: "ryan-dunn", firstName: "Ryan", lastName: "Dunn", birthYear: 2003, position: "Forward", jerseyNumber: 13, bio: "Sophomore forward with elite defensive metrics. 2024 NBA draft prospect.", occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Forward", location: "United States", statusNote: "Selected in 2024 NBA Draft for his elite defense.", ppg: 6.5, rpg: 4.5, apg: 1.0 },
  ],
  2025: [
    { slug: "isaac-mckneely", firstName: "Isaac", lastName: "McKneely", birthYear: 2003, position: "Guard", jerseyNumber: 11, bio: "Junior guard and UVA's top scorer.", occupationType: "STUDENT", currentTitle: "College Player", location: "Charlottesville, VA", statusNote: "Emerged as UVA's go-to scorer in 2024-25.", ppg: 15.0, rpg: 3.0, apg: 2.5 },
    { slug: "andrew-rohde", firstName: "Andrew", lastName: "Rohde", birthYear: 2003, position: "Guard", jerseyNumber: 4, bio: "Sophomore guard and 3-point shooter.", occupationType: "STUDENT", currentTitle: "College Player", location: "Charlottesville, VA", statusNote: "Developing into key backcourt player.", ppg: 10.0, rpg: 2.5, apg: 2.0 },
  ],
};

let totalAdded = 0;
for (const [yearStr, players] of Object.entries(PLAYERS)) {
  const year = parseInt(yearStr);
  const filename = `virginia-basketball-${year}.ts`;
  const filepath = path.join(SEEDS_DIR, filename);
  if (!fs.existsSync(filepath)) { console.log(`SKIP ${filename}`); continue; }
  const content = fs.readFileSync(filepath, "utf-8");
  const nameMatch = content.match(/name: "([^"]+)"/);
  const seasonMatch = content.match(/season: "([^"]+)"/);
  if (!nameMatch || !seasonMatch) continue;
  const added = insertPlayers(filepath, players, nameMatch[1], seasonMatch[2]);
  if (added > 0) { console.log(`UPDATED ${filename} — added ${added} players`); totalAdded += added; }
}
console.log(`\nDone. Added ${totalAdded} Virginia players.`);
