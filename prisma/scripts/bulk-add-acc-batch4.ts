import * as fs from "node:fs";
import * as path from "node:path";
const SEEDS_DIR = path.join(__dirname, "../seeds");
type P = { slug: string; firstName: string; lastName: string; birthYear: number; position: string; jerseyNumber: number; bio: string; occupationType: string; currentTitle: string; location: string; statusNote: string; ppg: number; rpg: number; apg: number; };
function ins(fp: string, ps: P[], tn: string, s: string) {
  let c = fs.readFileSync(fp,"utf-8"); const ex = new Set([...c.matchAll(/slug: "([^"]+)"/g)].map(m=>m[1]));
  const np = ps.filter(p=>!ex.has(p.slug)); if(!np.length) return 0;
  const hi = c.indexOf('role: "HEAD_COACH"'); if(hi===-1) return 0;
  const os = c.substring(0,hi).lastIndexOf("    {"); if(os===-1) return 0;
  const e = np.map(p=>`    {
      slug:"${p.slug}",firstName:"${p.firstName}",lastName:"${p.lastName}",birthYear:${p.birthYear},hometown:"United States",highSchool:"United States",
      bio:"${p.bio.replace(/"/g,'\\"')}",
      status:{occupationType:"${p.occupationType}",currentTitle:"${p.currentTitle.replace(/"/g,'\\"')}",location:"${p.location}",statusNote:"${p.statusNote.replace(/"/g,'\\"')}",sourceUrl:"https://en.wikipedia.org/wiki/${p.firstName}_${p.lastName.replace(/ /g,'_')}"},
      membership:{role:"PLAYER",jerseyNumber:${p.jerseyNumber},position:"${p.position}",yearsAtSchool:"${s}",gamesPlayed:33,pointsPerGame:${p.ppg},reboundsPerGame:${p.rpg},assistsPerGame:${p.apg}},
      seasonStats:[{level:"COLLEGE",teamName:"${tn}",season:"${s}",yearLabel:"${s}",sortOrder:201,gamesPlayed:33,pointsPerGame:${p.ppg},reboundsPerGame:${p.rpg},assistsPerGame:${p.apg}}],
      careerEvents:[],
    },`).join("\n");
  c = c.substring(0,os)+e+"\n"+c.substring(os); fs.writeFileSync(fp,c,"utf-8"); return np.length;
}
function proc(slug:string, data:Record<number,P[]>) {
  let t=0; for(const[y,ps] of Object.entries(data)){
    const fp=path.join(SEEDS_DIR,`${slug}-basketball-${y}.ts`); if(!fs.existsSync(fp)) continue;
    const c=fs.readFileSync(fp,"utf-8"); const nm=c.match(/name: "([^"]+)"/); const sm=c.match(/season: "([^"]+)"/);
    if(!nm||!sm) continue; const a=ins(fp,ps,nm[1],sm[2]); if(a>0){console.log(`  ${slug}-${y} +${a}`);t+=a;}
  } return t;
}
const p=(s:string,f:string,l:string,by:number,pos:string,jn:number,bio:string,ot:string,ct:string,loc:string,sn:string,pp:number,rp:number,ap:number):P=>({slug:s,firstName:f,lastName:l,birthYear:by,position:pos,jerseyNumber:jn,bio,occupationType:ot,currentTitle:ct,location:loc,statusNote:sn,ppg:pp,rpg:rp,apg:ap});

const wakeForest:Record<number,P[]>={
  2009:[p("jeff-teague-wf","Jeff","Teague",1988,"Guard",0,"Sophomore. #19 pick. 13-yr NBA career.","ACTIVE_PRO_ATHLETE","Guard","United States","#19 pick by Hawks. 13 NBA seasons. 3x 15+ PPG.",18.0,3.0,4.0),p("james-johnson-wf","James","Johnson",1987,"Forward",1,"Senior forward. Played 13 NBA seasons.","RETIRED_ATHLETE","Retired","United States","Undrafted but 13 NBA seasons. Known for martial arts.",11.0,6.0,2.0)],
  2010:[p("al-farouq-aminu","Al-Farouq","Aminu",1990,"Forward",1,"Freshman. #8 pick by Clippers.","RETIRED_ATHLETE","Retired","United States","#8 pick. 10 NBA seasons with Clippers, Pelicans, Blazers, Magic.",12.0,6.5,1.5),p("ishmael-smith","Ishmael","Smith",1988,"Guard",10,"Senior PG.","RETIRED_ATHLETE","Retired","United States","Played briefly in NBA and overseas.",12.0,3.0,4.5)],
  2011:[p("al-farouq-aminu","Al-Farouq","Aminu",1990,"Forward",1,"Sophomore.","RETIRED_ATHLETE","Retired","United States","#8 pick. 10 NBA seasons.",12.5,7.0,1.5)],
  2012:[p("cj-harris-wf","C.J.","Harris",1989,"Guard",11,"Senior guard.","RETIRED_ATHLETE","Retired","United States","4-year starter. Played overseas.",14.0,3.0,3.0)],
  2013:[p("cj-harris-wf","C.J.","Harris",1989,"Guard",11,"5th-year senior.","RETIRED_ATHLETE","Retired","United States","Led Wake in scoring final 2 years.",14.5,3.0,3.0)],
  2014:[p("devin-thomas-wf","Devin","Thomas",1993,"Forward",2,"Junior forward.","RETIRED_ATHLETE","Retired","United States","Played overseas.",13.0,7.0,1.5)],
  2015:[p("devin-thomas-wf","Devin","Thomas",1993,"Forward",2,"Senior captain.","RETIRED_ATHLETE","Retired","United States","Senior leader.",14.0,8.0,1.5)],
  2016:[p("john-collins-wf","John","Collins",1997,"Forward",20,"Freshman. Future #19 pick and NBA All-Star candidate.","ACTIVE_PRO_ATHLETE","Forward","United States","#19 pick by Hawks. Averaged 20+ PPG. $125M contract.",7.3,4.0,0.5)],
  2017:[p("john-collins-wf","John","Collins",1997,"Forward",20,"Sophomore star. #19 pick.","ACTIVE_PRO_ATHLETE","Forward","United States","#19 pick. $125M contract with Hawks/Jazz/Spurs.",15.0,7.5,1.5),p("bryant-crawford","Bryant","Crawford",1996,"Guard",13,"Sophomore guard.","RETIRED_ATHLETE","Retired","United States","3-year starter. Played overseas.",14.0,3.5,5.5)],
  2018:[p("bryant-crawford","Bryant","Crawford",1996,"Guard",13,"Junior guard and floor general.","RETIRED_ATHLETE","Retired","United States","3-year starter at Wake Forest.",15.5,4.0,6.0)],
  2019:[p("bryant-crawford","Bryant","Crawford",1996,"Guard",13,"Senior captain.","RETIRED_ATHLETE","Retired","United States","Wake Forest career assists leader.",15.0,3.5,5.5),p("brandon-childress","Brandon","Childress",1997,"Guard",0,"Junior guard. Son of NFL player.","RETIRED_ATHLETE","Retired","United States","Son of NFL's Randall Childress.",11.0,2.0,3.5)],
  2020:[p("brandon-childress","Brandon","Childress",1997,"Guard",0,"Senior captain.","RETIRED_ATHLETE","Retired","United States","Son of NFL player Randall Childress.",13.0,2.5,4.0)],
  2021:[p("daivien-williamson","Daivien","Williamson",1999,"Guard",4,"Sophomore guard.","OTHER","Professional","United States","Developed into scorer at Wake Forest.",14.0,2.5,2.0)],
  2022:[p("jake-laravia","Jake","LaRavia",2001,"Forward",0,"Sophomore. #19 pick by Grizzlies.","ACTIVE_PRO_ATHLETE","Forward","Memphis, TN","#19 pick by Grizzlies in 2022. NBA rotation player.",14.5,6.5,3.5),p("alondes-williams-wf","Alondes","Williams",1999,"Guard",10,"Grad transfer. All-ACC.","ACTIVE_PRO_ATHLETE","Pro Player","United States","All-ACC as grad transfer from Oklahoma.",18.5,6.5,5.0)],
  2023:[p("tyree-appleby","Tyree","Appleby",1999,"Guard",1,"Grad transfer. ACC Tournament MVP.","RETIRED_ATHLETE","Retired","United States","2023 ACC Tournament MVP. Led upset wins.",13.0,3.0,5.5)],
  2024:[p("hunter-sallis","Hunter","Sallis",2003,"Guard",22,"Junior. First-Team All-ACC.","STUDENT","2025 NBA Draft","United States","2x First-Team All-ACC. First since Tim Duncan.",17.0,5.0,2.5)],
};

const clemson:Record<number,P[]>={
  2009:[p("terrence-oglesby","Terrence","Oglesby",1986,"Guard",24,"Senior sharpshooter.","RETIRED_ATHLETE","Retired","United States","3-point specialist. Played overseas.",11.0,2.0,1.5),p("trevor-booker-clem","Trevor","Booker",1987,"Forward",35,"Sophomore forward. Future NBA player.","RETIRED_ATHLETE","Retired","United States","#23 pick by Wizards. 8 NBA seasons.",12.0,7.0,1.0)],
  2010:[p("trevor-booker-clem","Trevor","Booker",1987,"Forward",35,"Junior star. #23 pick in 2010.","RETIRED_ATHLETE","Retired","United States","#23 pick. 8 NBA seasons with Wizards, Jazz, Nets, Pacers.",15.0,8.5,1.5),p("demontez-stitt","Demontez","Stitt",1988,"Guard",2,"Senior PG.","RETIRED_ATHLETE","Retired","United States","4-year starter. Played overseas.",12.0,3.0,4.0)],
  2011:[p("trevor-booker-clem","Trevor","Booker",1987,"Forward",35,"Senior. #23 pick by Wizards.","RETIRED_ATHLETE","Retired","United States","8 NBA seasons. Physical rebounder.",16.0,9.0,2.0)],
  2012:[p("kj-mcdaniels","K.J.","McDaniels",1993,"Forward",32,"Freshman. Future NBA player.","RETIRED_ATHLETE","Retired","United States","#32 pick. Played for 76ers, Rockets, Nets.",8.0,4.0,0.5)],
  2013:[p("kj-mcdaniels","K.J.","McDaniels",1993,"Forward",32,"Sophomore forward.","RETIRED_ATHLETE","Retired","United States","#32 pick by 76ers. NBA career.",12.0,5.5,1.0)],
  2014:[p("kj-mcdaniels","K.J.","McDaniels",1993,"Forward",32,"Junior. #32 pick. ACC DPOY.","RETIRED_ATHLETE","Retired","United States","ACC DPOY. #32 pick. Played for 76ers, Rockets.",17.0,7.0,2.0),p("jaron-blossomgame","Jaron","Blossomgame",1993,"Forward",5,"Freshman forward.","RETIRED_ATHLETE","Retired","United States","#59 pick by Spurs. G League career.",6.0,3.5,0.5)],
  2015:[p("jaron-blossomgame","Jaron","Blossomgame",1993,"Forward",5,"Sophomore developing.","RETIRED_ATHLETE","Retired","United States","#59 pick by Spurs in 2017.",12.0,5.5,1.5)],
  2016:[p("jaron-blossomgame","Jaron","Blossomgame",1993,"Forward",5,"Junior star.","RETIRED_ATHLETE","Retired","United States","Drafted #59 by Spurs.",17.5,6.5,2.0),p("donte-grantham","Donte","Grantham",1995,"Forward",15,"Sophomore.","RETIRED_ATHLETE","Retired","United States","Played overseas. Versatile forward.",9.0,4.0,2.0)],
  2017:[p("jaron-blossomgame","Jaron","Blossomgame",1993,"Forward",5,"Senior. #59 pick.","RETIRED_ATHLETE","Retired","United States","Drafted by Spurs after senior year.",18.0,7.0,2.5),p("marcquise-reed","Marcquise","Reed",1996,"Guard",2,"Sophomore guard.","RETIRED_ATHLETE","Retired","United States","Transferred from Robert Morris. Became starter.",11.0,3.0,2.0)],
  2018:[p("marcquise-reed","Marcquise","Reed",1996,"Guard",2,"Junior guard and team leader.","RETIRED_ATHLETE","Retired","United States","Leading scorer for Clemson.",16.0,3.5,3.0),p("shelton-mitchell-clem","Shelton","Mitchell",1996,"Guard",4,"Junior PG.","RETIRED_ATHLETE","Retired","United States","3-year starter at Clemson.",13.0,3.0,4.0)],
  2019:[p("marcquise-reed","Marcquise","Reed",1996,"Guard",2,"Senior captain.","RETIRED_ATHLETE","Retired","United States","Clemson's go-to scorer.",15.5,4.0,3.5)],
  2020:[p("aamir-simms","Aamir","Simms",1998,"Forward",25,"Junior forward and team leader.","RETIRED_ATHLETE","Retired","United States","3-year starter. ACC All-Conference.",13.0,7.0,2.5)],
  2021:[p("aamir-simms","Aamir","Simms",1998,"Forward",25,"Senior. All-ACC honorable mention.","RETIRED_ATHLETE","Retired","United States","4-year player. Team leader.",13.5,6.0,3.0)],
  2022:[p("pj-hall-clemson","PJ","Hall",2002,"Center",24,"Freshman center emerging.","ACTIVE_PRO_ATHLETE","Center (two-way)","Charlotte, NC","Now Hornets two-way contract. 2024 Elite Eight star.",8.0,4.0,0.5)],
  2023:[p("pj-hall-clemson","PJ","Hall",2002,"Center",24,"Sophomore developing.","ACTIVE_PRO_ATHLETE","Center (two-way)","Charlotte, NC","2024 Elite Eight. Now Hornets.",13.0,5.0,1.0),p("chase-hunter","Chase","Hunter",2001,"Guard",1,"Sophomore PG.","ACTIVE_PRO_ATHLETE","Pro Player","United States","4-year starter. Elite Eight PG.",10.0,2.5,3.5)],
  2025:[p("chase-hunter","Chase","Hunter",2001,"Guard",1,"5th-yr senior after Elite Eight.","ACTIVE_PRO_ATHLETE","Pro Player","United States","Returned after Elite Eight run.",14.5,3.5,5.0),p("ian-schieffelin","Ian","Schieffelin",2002,"Forward",5,"Senior forward. Do-everything player.","STUDENT","2025 Draft prospect","Clemson, SC","Versatile forward. 2025 draft prospect.",12.0,8.0,3.5)],
};

let gt=0;
console.log("Wake Forest:"); gt+=proc("wake-forest",wakeForest);
console.log("Clemson:"); gt+=proc("clemson",clemson);
console.log(`\nDone. +${gt} players.`);
