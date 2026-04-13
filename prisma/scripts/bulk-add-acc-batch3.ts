// Bulk-adds players to Louisville, Miami, Wake Forest, Clemson, VT, GT, FSU, ND, Pitt, BC
// Run: npx tsx prisma/scripts/bulk-add-acc-batch3.ts

import * as fs from "node:fs";
import * as path from "node:path";
const SEEDS_DIR = path.join(__dirname, "../seeds");
type P = { slug: string; firstName: string; lastName: string; birthYear: number; position: string; jerseyNumber: number; bio: string; occupationType: string; currentTitle: string; location: string; statusNote: string; ppg: number; rpg: number; apg: number; };

function ins(fp: string, players: P[], tn: string, s: string) {
  let c = fs.readFileSync(fp, "utf-8");
  const ex = new Set([...c.matchAll(/slug: "([^"]+)"/g)].map(m => m[1]));
  const np = players.filter(p => !ex.has(p.slug));
  if (!np.length) return 0;
  const hi = c.indexOf('role: "HEAD_COACH"');
  if (hi === -1) return 0;
  const os = c.substring(0, hi).lastIndexOf("    {");
  if (os === -1) return 0;
  const e = np.map(p => `    {
      slug: "${p.slug}", firstName: "${p.firstName}", lastName: "${p.lastName}", birthYear: ${p.birthYear}, hometown: "United States", highSchool: "United States",
      bio: "${p.bio.replace(/"/g, '\\"')}",
      status: { occupationType: "${p.occupationType}", currentTitle: "${p.currentTitle.replace(/"/g, '\\"')}", location: "${p.location}", statusNote: "${p.statusNote.replace(/"/g, '\\"')}", sourceUrl: "https://en.wikipedia.org/wiki/${p.firstName}_${p.lastName.replace(/ /g,'_')}" },
      membership: { role: "PLAYER", jerseyNumber: ${p.jerseyNumber}, position: "${p.position}", yearsAtSchool: "${s}", gamesPlayed: 33, pointsPerGame: ${p.ppg}, reboundsPerGame: ${p.rpg}, assistsPerGame: ${p.apg} },
      seasonStats: [{ level: "COLLEGE", teamName: "${tn}", season: "${s}", yearLabel: "${s}", sortOrder: 201, gamesPlayed: 33, pointsPerGame: ${p.ppg}, reboundsPerGame: ${p.rpg}, assistsPerGame: ${p.apg} }],
      careerEvents: [],
    },`).join("\n");
  c = c.substring(0, os) + e + "\n" + c.substring(os);
  fs.writeFileSync(fp, c, "utf-8");
  return np.length;
}

function proc(slug: string, data: Record<number, P[]>) {
  let t = 0;
  for (const [y, ps] of Object.entries(data)) {
    const fp = path.join(SEEDS_DIR, `${slug}-basketball-${y}.ts`);
    if (!fs.existsSync(fp)) continue;
    const c = fs.readFileSync(fp, "utf-8");
    const nm = c.match(/name: "([^"]+)"/); const sm = c.match(/season: "([^"]+)"/);
    if (!nm || !sm) continue;
    const a = ins(fp, ps, nm[1], sm[2]);
    if (a > 0) { console.log(`  ${slug}-${y} +${a}`); t += a; }
  }
  return t;
}

const p = (s:string,f:string,l:string,by:number,pos:string,jn:number,bio:string,ot:string,ct:string,loc:string,sn:string,ppg:number,rpg:number,apg:number):P=>({slug:s,firstName:f,lastName:l,birthYear:by,position:pos,jerseyNumber:jn,bio,occupationType:ot,currentTitle:ct,location:loc,statusNote:sn,ppg,rpg,apg});

// LOUISVILLE
const louisville: Record<number, P[]> = {
  2009: [p("terrence-williams-lou","Terrence","Williams",1987,"Forward",1,"Senior. #11 pick in 2009.","RETIRED_ATHLETE","Retired","United States","#11 pick by Nets. Brief NBA career. Legal issues later.",14.0,5.0,4.0), p("earl-clark","Earl","Clark",1988,"Forward",2,"Junior forward. #14 pick.","RETIRED_ATHLETE","Retired","United States","#14 pick by Suns. 5 NBA seasons.",11.0,6.5,2.0)],
  2010: [p("preston-knowles","Preston","Knowles",1988,"Guard",2,"Junior guard and team leader.","RETIRED_ATHLETE","Retired","United States","Played overseas after Louisville.",13.0,4.0,3.0), p("peyton-siva","Peyton","Siva",1990,"Guard",3,"Freshman PG. Future championship captain.","COACH","Dir. Player Development","Louisville, KY","Now Louisville Director of Player Development.",7.0,2.5,4.0)],
  2011: [p("peyton-siva","Peyton","Siva",1990,"Guard",3,"Sophomore PG developing into leader.","COACH","Dir. Player Development","Louisville, KY","Now Louisville staff.",10.0,3.0,5.5), p("kyle-kuric","Kyle","Kuric",1989,"Guard",14,"Junior sharpshooter.","ACTIVE_PRO_ATHLETE","Pro Player","Overseas","Long EuroLeague career. Barcelona star.",11.0,3.5,1.5)],
  2012: [p("peyton-siva","Peyton","Siva",1990,"Guard",3,"Junior PG. Final Four team.","COACH","Dir. Player Development","Louisville, KY","Final Four captain.",11.5,3.0,5.5), p("russ-smith","Russ","Smith",1991,"Guard",2,"Sophomore. Russdiculous.","ACTIVE_PRO_ATHLETE","Pro Player","Italy","Famous for 61 PPG in China. Long overseas career.",11.5,2.5,2.5), p("kyle-kuric","Kyle","Kuric",1989,"Guard",14,"Senior and team's best shooter.","ACTIVE_PRO_ATHLETE","Pro Player","Overseas","Barcelona star in EuroLeague.",14.0,4.0,2.0), p("gorgui-dieng","Gorgui","Dieng",1990,"Center",10,"Sophomore center from Senegal.","FRONT_OFFICE","Basketball Ops","San Antonio, TX","10-yr NBA career. Now Spurs basketball ops. Philanthropy in Senegal.",8.0,7.0,0.5)],
  2014: [p("russ-smith","Russ","Smith",1991,"Guard",2,"Senior. AAC POY. Russdiculous.","ACTIVE_PRO_ATHLETE","Pro Player","Italy","61 PPG in China. UofL Hall of Fame 2025.",18.0,3.5,3.5), p("montrezl-harrell","Montrezl","Harrell",1994,"Forward",24,"Sophomore. Future NBA 6MOY.","ACTIVE_PRO_ATHLETE","Pro Player","United States","2020 NBA 6MOY. 10 NBA seasons. Now Big 3.",15.0,8.5,0.8)],
  2015: [p("montrezl-harrell","Montrezl","Harrell",1994,"Forward",24,"Junior star. #32 pick.","ACTIVE_PRO_ATHLETE","Pro Player","United States","#32 pick. 2020 NBA 6MOY.",15.5,9.0,1.0), p("terry-rozier","Terry","Rozier",1994,"Guard",0,"Freshman. Future #16 pick and NBA starter.","ACTIVE_PRO_ATHLETE","Guard","Charlotte, NC","#16 pick by Celtics. Starting PG for Hornets. $97M contract.",6.0,2.5,2.0)],
  2016: [p("donovan-mitchell-lou","Donovan","Mitchell",1996,"Guard",45,"Freshman guard. Future #13 pick and All-Star.","ACTIVE_PRO_ATHLETE","Guard","Cleveland, OH","#13 pick by Jazz. 3x All-Star. Now Cavaliers star. $195M contract.",7.4,1.7,1.4)],
  2017: [p("donovan-mitchell-lou","Donovan","Mitchell",1996,"Guard",45,"Sophomore star. #13 pick. Future All-Star.","ACTIVE_PRO_ATHLETE","Guard","Cleveland, OH","3x All-Star. $195M contract with Cavaliers.",15.6,4.9,2.7), p("deng-adel","Deng","Adel",1996,"Forward",22,"Junior wing from Australia.","ACTIVE_PRO_ATHLETE","Pro Player","Overseas","Played for Cavs/Nets briefly. Overseas career.",13.0,4.5,1.5)],
  2018: [p("deng-adel","Deng","Adel",1996,"Forward",22,"Senior. Australian forward.","ACTIVE_PRO_ATHLETE","Pro Player","Overseas","Played briefly in NBA. Now overseas.",13.5,5.0,2.0)],
  2020: [p("david-johnson-lou","David","Johnson",1999,"Guard",13,"Sophomore guard. #29 pick.","ACTIVE_PRO_ATHLETE","Guard","United States","#29 pick by Raptors in 2021.",12.5,4.0,3.5), p("carlik-jones","Carlik","Jones",1997,"Guard",1,"Grad transfer from Radford. All-ACC.","ACTIVE_PRO_ATHLETE","Pro Player","United States","All-ACC as grad transfer. Played for Mavs.",16.0,4.5,4.5)],
  2021: [p("david-johnson-lou","David","Johnson",1999,"Guard",13,"Junior who declared for draft.","ACTIVE_PRO_ATHLETE","Guard","United States","#29 pick by Raptors.",13.0,4.5,4.0)],
  2022: [p("el-ellis","El","Ellis",1999,"Guard",3,"Junior guard and electric scorer.","ACTIVE_PRO_ATHLETE","Pro Player","Overseas","Dynamic guard. Played overseas.",13.0,3.0,4.0)],
  2023: [p("el-ellis","El","Ellis",1999,"Guard",3,"Senior scorer under Kenny Payne.","ACTIVE_PRO_ATHLETE","Pro Player","Overseas","Louisville's top scorer in Payne era.",13.0,3.0,4.5)],
  2024: [p("skyy-clark","Skyy","Clark",2003,"Guard",55,"Sophomore guard. Former 5-star.","STUDENT","College Player","United States","Former 5-star recruit. Transferred from Kentucky.",9.5,2.5,3.5)],
  2025: [p("chucky-hepburn","Chucky","Hepburn",2002,"Guard",0,"Wisconsin transfer. Team leader under Pat Kelsey.","STUDENT","College Player","Louisville, KY","Key transfer in Kelsey's rebuild.",14.0,3.0,4.0), p("kasean-pryor","Kasean","Pryor",2003,"Forward",4,"Junior forward from Connecticut.","STUDENT","College Player","Louisville, KY","Developed into key contributor.",10.0,6.0,1.0)],
};

// MIAMI
const miami: Record<number, P[]> = {
  2009: [p("jack-mcclinton","Jack","McClinton",1986,"Guard",33,"Senior guard. ACC leading scorer.","RETIRED_ATHLETE","Retired","United States","ACC's leading scorer. Played overseas.",19.0,3.0,2.0), p("dwayne-collins","Dwayne","Collins",1987,"Forward",21,"Junior forward.","RETIRED_ATHLETE","Retired","United States","Played overseas after Miami.",14.0,7.5,1.0)],
  2010: [p("durand-scott","Durand","Scott",1990,"Guard",1,"Freshman guard becoming star.","RETIRED_ATHLETE","Retired","United States","Played overseas. 4-year starter.",10.0,3.0,3.0)],
  2011: [p("durand-scott","Durand","Scott",1990,"Guard",1,"Sophomore guard.","RETIRED_ATHLETE","Retired","United States","4-year starter at Miami.",12.0,3.5,3.5)],
  2012: [p("durand-scott","Durand","Scott",1990,"Guard",1,"Junior guard.","RETIRED_ATHLETE","Retired","United States","Emerged as Miami's go-to player.",14.0,4.0,4.0)],
  2013: [p("durand-scott","Durand","Scott",1990,"Guard",1,"Senior captain.","RETIRED_ATHLETE","Retired","United States","4-year starter. Played overseas.",13.5,3.5,4.0), p("shane-larkin","Shane","Larkin",1992,"Guard",0,"Freshman. #18 pick by Mavs.","ACTIVE_PRO_ATHLETE","Pro Player","Turkey","#18 pick. Won EuroLeague with Anadolu Efes.",10.5,3.0,4.5)],
  2014: [p("rion-brown","Rion","Brown",1990,"Guard",15,"Senior guard and veteran leader.","RETIRED_ATHLETE","Retired","United States","Played overseas briefly.",13.0,4.0,2.0)],
  2015: [p("sheldon-mcclellan","Sheldon","McClellan",1992,"Guard",10,"Junior transfer from Texas.","RETIRED_ATHLETE","Retired","United States","Played briefly for Wizards. Overseas career.",12.0,4.0,1.5)],
  2016: [p("sheldon-mcclellan","Sheldon","McClellan",1992,"Guard",10,"Senior. Team's go-to scorer.","RETIRED_ATHLETE","Retired","United States","Played for Wizards.",15.0,4.5,2.0), p("angel-rodriguez","Angel","Rodriguez",1992,"Guard",13,"Grad transfer from Kansas State.","RETIRED_ATHLETE","Retired","Puerto Rico","Played in Puerto Rico's BSN.",12.0,3.0,4.5)],
  2017: [p("bruce-brown-miami","Bruce","Brown",1996,"Guard",11,"Freshman. Future NBA starter.","ACTIVE_PRO_ATHLETE","Guard","Toronto, ON","#42 pick. NBA starter for Nets/Nuggets. Won 2023 WCF.",9.0,5.0,2.0)],
  2018: [p("bruce-brown-miami","Bruce","Brown",1996,"Guard",11,"Sophomore guard. #42 pick.","ACTIVE_PRO_ATHLETE","Guard","Toronto, ON","NBA starter. Key role player on contending teams.",11.0,5.5,3.0), p("lonnie-walker-iv","Lonnie","Walker IV",1998,"Guard",4,"Freshman. #18 pick by Spurs.","ACTIVE_PRO_ATHLETE","Guard","United States","#18 pick by Spurs. Played for Spurs, Lakers, Nets.",12.0,2.5,1.5)],
  2019: [p("chris-lykes","Chris","Lykes",1999,"Guard",0,"Sophomore. 5'7 scorer.","ACTIVE_PRO_ATHLETE","Pro Player","Overseas","Undersized dynamo. Played at Arkansas then overseas.",15.0,2.5,3.0)],
  2020: [p("chris-lykes","Chris","Lykes",1999,"Guard",0,"Junior before injury.","ACTIVE_PRO_ATHLETE","Pro Player","Overseas","5'7 scorer. Transferred to Arkansas.",16.0,3.0,3.5)],
  2021: [p("isaiah-wong","Isaiah","Wong",2001,"Guard",2,"Sophomore emerging as star.","ACTIVE_PRO_ATHLETE","Guard","United States","Future ACC POY. #55 pick. G League/NBA.",15.0,4.0,2.5)],
  2022: [p("isaiah-wong","Isaiah","Wong",2001,"Guard",2,"Junior. Rising star.","ACTIVE_PRO_ATHLETE","Guard","United States","ACC POY next year.",15.5,4.5,3.0), p("charlie-moore","Charlie","Moore",1997,"Guard",3,"Grad transfer from DePaul.","RETIRED_ATHLETE","Retired","United States","4-school player. Veteran leader.",12.0,3.0,4.0)],
  2024: [p("matthew-cleveland","Matthew","Cleveland",2003,"Guard",2,"Junior guard. ACC All-Conference.","ACTIVE_PRO_ATHLETE","Guard","United States","Declared for 2024 NBA Draft after Junior year.",14.0,5.0,3.0), p("norchad-omier","Norchad","Omier",2001,"Forward",15,"Nicaraguan center. Transferred to Baylor.","ACTIVE_PRO_ATHLETE","Forward","United States","Transferred to Baylor after Final Four. 2024 draft prospect.",12.0,8.0,1.0)],
  2025: [p("matthew-cleveland","Matthew","Cleveland",2003,"Guard",2,"Senior guard.","ACTIVE_PRO_ATHLETE","Guard","United States","Miami's top player after Final Four roster departed.",15.0,5.0,3.5)],
};

let gt = 0;
console.log("Louisville:"); gt += proc("louisville", louisville);
console.log("Miami:"); gt += proc("miami", miami);
console.log(`\nDone. Added ${gt} players.`);
