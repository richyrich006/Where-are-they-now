import * as fs from "node:fs";
import * as path from "node:path";
const SEEDS_DIR = path.join(__dirname, "../seeds");
type P={slug:string;firstName:string;lastName:string;birthYear:number;position:string;jerseyNumber:number;bio:string;occupationType:string;currentTitle:string;location:string;statusNote:string;ppg:number;rpg:number;apg:number};
function ins(fp:string,ps:P[],tn:string,s:string){let c=fs.readFileSync(fp,"utf-8");const ex=new Set([...c.matchAll(/slug: "([^"]+)"/g)].map(m=>m[1]));const np=ps.filter(p=>!ex.has(p.slug));if(!np.length)return 0;const hi=c.indexOf('role: "HEAD_COACH"');if(hi===-1)return 0;const os=c.substring(0,hi).lastIndexOf("    {");if(os===-1)return 0;const e=np.map(p=>`    {
      slug:"${p.slug}",firstName:"${p.firstName}",lastName:"${p.lastName}",birthYear:${p.birthYear},hometown:"United States",highSchool:"United States",
      bio:"${p.bio.replace(/"/g,'\\"')}",
      status:{occupationType:"${p.occupationType}",currentTitle:"${p.currentTitle.replace(/"/g,'\\"')}",location:"${p.location}",statusNote:"${p.statusNote.replace(/"/g,'\\"')}",sourceUrl:"https://en.wikipedia.org/wiki/${p.firstName}_${p.lastName.replace(/ /g,'_')}"},
      membership:{role:"PLAYER",jerseyNumber:${p.jerseyNumber},position:"${p.position}",yearsAtSchool:"${s}",gamesPlayed:33,pointsPerGame:${p.ppg},reboundsPerGame:${p.rpg},assistsPerGame:${p.apg}},
      seasonStats:[{level:"COLLEGE",teamName:"${tn}",season:"${s}",yearLabel:"${s}",sortOrder:201,gamesPlayed:33,pointsPerGame:${p.ppg},reboundsPerGame:${p.rpg},assistsPerGame:${p.apg}}],
      careerEvents:[],
    },`).join("\n");c=c.substring(0,os)+e+"\n"+c.substring(os);fs.writeFileSync(fp,c,"utf-8");return np.length;}
function proc(slug:string,data:Record<number,P[]>){let t=0;for(const[y,ps] of Object.entries(data)){const fp=path.join(SEEDS_DIR,`${slug}-basketball-${y}.ts`);if(!fs.existsSync(fp))continue;const c=fs.readFileSync(fp,"utf-8");const nm=c.match(/name: "([^"]+)"/);const sm=c.match(/season: "([^"]+)"/);if(!nm||!sm)continue;const a=ins(fp,ps,nm[1],sm[2]);if(a>0){console.log(`  ${slug}-${y} +${a}`);t+=a;}}return t;}
const p=(s:string,f:string,l:string,by:number,pos:string,jn:number,bio:string,ot:string,ct:string,loc:string,sn:string,pp:number,rp:number,ap:number):P=>({slug:s,firstName:f,lastName:l,birthYear:by,position:pos,jerseyNumber:jn,bio,occupationType:ot,currentTitle:ct,location:loc,statusNote:sn,ppg:pp,rpg:rp,apg:ap});

const vt:Record<number,P[]>={
  2009:[p("malcolm-delaney","Malcolm","Delaney",1989,"Guard",23,"Sophomore guard. Future EuroLeague star.","ACTIVE_PRO_ATHLETE","Pro Player","Overseas","Played for Hawks. Won EuroLeague MVP. Long career in Europe.",14.0,3.0,4.5),p("jeff-allen-vt","Jeff","Allen",1987,"Forward",0,"Senior forward.","RETIRED_ATHLETE","Retired","United States","Played overseas.",12.0,7.0,1.5)],
  2010:[p("malcolm-delaney","Malcolm","Delaney",1989,"Guard",23,"Junior star. ACC All-Conference.","ACTIVE_PRO_ATHLETE","Pro Player","Overseas","EuroLeague MVP. Played for Hawks in NBA.",17.0,3.5,5.0)],
  2011:[p("malcolm-delaney","Malcolm","Delaney",1989,"Guard",23,"Senior. All-ACC.","ACTIVE_PRO_ATHLETE","Pro Player","Overseas","NBA stint with Hawks. EuroLeague MVP.",19.5,4.0,5.5),p("dorenzo-hudson","Dorenzo","Hudson",1989,"Guard",5,"Senior guard.","RETIRED_ATHLETE","Retired","United States","4-year starter. Played overseas briefly.",15.0,4.0,2.0)],
  2012:[p("erick-green-vt","Erick","Green",1991,"Guard",11,"Junior guard emerging.","RETIRED_ATHLETE","Retired","United States","2013 ACC leading scorer. #46 pick by Jazz.",13.5,3.0,3.0)],
  2013:[p("erick-green-vt","Erick","Green",1991,"Guard",11,"Senior. Led ACC in scoring 25 PPG.","RETIRED_ATHLETE","Retired","United States","Led ACC in scoring at 25.0 PPG. #46 pick by Jazz.",25.0,3.5,4.0)],
  2014:[p("ben-emelogu","Ben","Emelogu",1993,"Guard",15,"Junior guard.","OTHER","Professional","United States","Played in Europe briefly.",10.0,2.5,2.0)],
  2015:[p("ahmed-hill","Ahmed","Hill",1996,"Guard",13,"Freshman guard.","RETIRED_ATHLETE","Retired","Georgia","4-year starter under Buzz Williams.",6.0,2.5,1.0)],
  2016:[p("zach-leday","Zach","LeDay",1993,"Forward",32,"Junior forward. Transfer from USF.","ACTIVE_PRO_ATHLETE","Pro Player","Overseas","Won EuroLeague title with Olympiacos.",12.5,7.0,1.5),p("seth-allen-vt","Seth","Allen",1993,"Guard",4,"Senior guard. Maryland transfer.","RETIRED_ATHLETE","Retired","United States","Solid veteran leader.",14.0,3.0,3.5)],
  2017:[p("zach-leday","Zach","LeDay",1993,"Forward",32,"Senior. All-ACC.","ACTIVE_PRO_ATHLETE","Pro Player","Overseas","EuroLeague champion with Olympiacos.",16.0,7.5,2.0),p("ahmed-hill","Ahmed","Hill",1996,"Guard",13,"Junior shooter.","RETIRED_ATHLETE","Retired","Georgia","Became key starter.",10.5,3.0,1.5)],
  2018:[p("nickeil-alexander-walker","Nickeil","Alexander-Walker",1998,"Guard",4,"Freshman star. #17 pick.","ACTIVE_PRO_ATHLETE","Guard","Minneapolis, MN","#17 pick. Shai's cousin. NBA career ongoing.",16.0,4.0,3.0),p("ahmed-hill","Ahmed","Hill",1996,"Guard",13,"Senior.","RETIRED_ATHLETE","Retired","Georgia","4-year player.",11.5,3.0,1.5)],
  2020:[p("tyrece-radford","Tyrece","Radford",2000,"Guard",23,"Sophomore guard.","STUDENT","College Player","United States","Transferred to Texas A&M. ACC contributor.",11.0,5.0,2.0),p("nahiem-alleyne","Nahiem","Alleyne",2000,"Guard",4,"Sophomore guard.","STUDENT","College Player","United States","Played at VT then UConn.",10.0,4.0,2.0)],
  2021:[p("keve-aluma","Keve","Aluma",1997,"Forward",22,"Junior. Wofford transfer. All-ACC.","RETIRED_ATHLETE","Retired","United States","All-ACC. Transferred from Wofford with Mike Young.",15.5,7.5,1.5),p("nahiem-alleyne","Nahiem","Alleyne",2000,"Guard",4,"Junior guard.","STUDENT","College Player","United States","VT starter. Later UConn transfer.",11.0,4.0,2.5)],
  2022:[p("keve-aluma","Keve","Aluma",1997,"Forward",22,"Senior captain.","RETIRED_ATHLETE","Retired","United States","All-ACC. 4th-year player across Wofford and VT.",15.0,7.0,2.0),p("hunter-cattoor","Hunter","Cattoor",2000,"Guard",0,"Junior sharpshooter.","STUDENT","College Player","United States","Elite 3-point shooter.",10.5,3.0,2.5)],
  2023:[p("hunter-cattoor","Hunter","Cattoor",2000,"Guard",0,"Senior shooter.","STUDENT","College Player","United States","VT's career 3-point leader.",13.0,3.5,3.0),p("grant-basile","Grant","Basile",1999,"Forward",21,"Grad transfer from Wright State.","RETIRED_ATHLETE","Retired","United States","Productive grad transfer.",14.5,5.5,1.5)],
  2024:[p("sean-pedulla","Sean","Pedulla",2001,"Guard",3,"Junior guard. All-ACC candidate.","STUDENT","College Player","United States","Dynamic guard. Transferred from VT.",15.0,3.0,4.5)],
  2025:[p("myles-wilmoth","Myles","Wilmoth",2001,"Forward",24,"Senior forward.","STUDENT","College Player","Blacksburg, VA","Key contributor under Mike Young.",11.0,6.0,1.5)],
};

const gt:Record<number,P[]>={
  2009:[p("gani-lawal","Gani","Lawal",1988,"Forward",31,"Sophomore forward from Nigeria.","ACTIVE_PRO_ATHLETE","Pro Player","South America","#46 pick by Suns. Nigerian national team.",11.0,7.5,0.5),p("lewis-clinch","Lewis","Clinch",1988,"Guard",30,"Junior guard.","OTHER","Professional","United States","Role player at GT.",8.0,2.0,3.0)],
  2011:[p("iman-shumpert","Iman","Shumpert",1990,"Guard",1,"Junior star. #17 pick. DWTS winner.","RETIRED_ATHLETE","Media Personality","Los Angeles, CA","#17 pick. 2016 NBA champ. Won Dancing with the Stars 2021.",17.0,6.0,3.5)],
  2012:[p("glen-rice-jr","Glen","Rice Jr.",1991,"Guard",41,"Junior guard. Son of Glen Rice.","RETIRED_ATHLETE","Retired","United States","Son of NBA All-Star Glen Rice. Played briefly for Wizards.",11.0,4.0,2.5)],
  2013:[p("robert-carter","Robert","Carter",1993,"Forward",4,"Sophomore forward.","RETIRED_ATHLETE","Retired","United States","Transferred to Maryland.",10.0,6.0,1.0)],
  2014:[p("marcus-georges-hunt","Marcus","Georges-Hunt",1993,"Guard",3,"Junior guard.","RETIRED_ATHLETE","Retired","United States","Played briefly for Timberwolves.",14.0,5.0,2.0)],
  2015:[p("marcus-georges-hunt","Marcus","Georges-Hunt",1993,"Guard",3,"Senior captain.","RETIRED_ATHLETE","Retired","United States","Brief NBA stint with Timberwolves.",15.0,5.0,2.5)],
  2016:[p("josh-okogie","Josh","Okogie",1998,"Guard",5,"Freshman guard. Future #20 pick.","ACTIVE_PRO_ATHLETE","Guard","United States","#20 pick by Timberwolves. 5+ NBA seasons.",8.0,4.0,1.5)],
  2017:[p("josh-okogie","Josh","Okogie",1998,"Guard",5,"Sophomore. #20 pick in 2018.","ACTIVE_PRO_ATHLETE","Guard","United States","#20 pick. Defensive specialist in NBA.",15.0,5.5,2.5),p("ben-lammers","Ben","Lammers",1995,"Center",44,"Junior. ACC DPOY.","ACTIVE_PRO_ATHLETE","Pro Player","Overseas","ACC DPOY. Playing overseas in EuroLeague.",11.0,8.5,1.0)],
  2018:[p("josh-okogie","Josh","Okogie",1998,"Guard",5,"Sophomore star who declared.","ACTIVE_PRO_ATHLETE","Guard","United States","#20 pick by Timberwolves. Elite defender.",18.0,6.0,2.5),p("jose-alvarado","Jose","Alvarado",1998,"Guard",10,"Freshman guard from Brooklyn.","ACTIVE_PRO_ATHLETE","Guard","New Orleans, LA","Undrafted. Became Pelicans fan favorite. 'Grand Theft Alvarado'.",8.5,2.5,2.0)],
  2019:[p("jose-alvarado","Jose","Alvarado",1998,"Guard",10,"Sophomore. Developing into star.","ACTIVE_PRO_ATHLETE","Guard","New Orleans, LA","Fan favorite 'Grand Theft Alvarado' for Pelicans.",12.0,3.5,3.5),p("james-banks-iii","James","Banks III",1998,"Center",1,"Junior shot-blocker.","RETIRED_ATHLETE","Retired","United States","ACC blocks leader.",7.0,5.5,0.5)],
  2020:[p("jose-alvarado","Jose","Alvarado",1998,"Guard",10,"Junior captain.","ACTIVE_PRO_ATHLETE","Guard","New Orleans, LA","Pelicans fan fav. Undrafted steal.",14.0,3.5,4.0),p("moses-wright","Moses","Wright",1998,"Forward",5,"Junior forward. Future ACC POY.","RETIRED_ATHLETE","Retired","United States","2021 ACC POY. Played for Cavs.",13.0,7.0,1.5)],
  2021:[p("jose-alvarado","Jose","Alvarado",1998,"Guard",10,"Senior. ACC leader. Undrafted NBA gem.","ACTIVE_PRO_ATHLETE","Guard","New Orleans, LA","Undrafted but became Pelicans starter. 'Grand Theft' nickname.",17.0,4.0,4.5),p("moses-wright","Moses","Wright",1998,"Forward",5,"Senior. ACC POY. Won ACC Tournament.","RETIRED_ATHLETE","Retired","United States","2021 ACC POY and ACC Tournament champs. Played for Cavs.",17.5,8.0,2.0)],
  2022:[p("michael-devoe","Michael","Devoe",1999,"Guard",0,"Senior guard. Prolific scorer.","ACTIVE_PRO_ATHLETE","Pro Player","Overseas","Played overseas. GT scoring leader.",18.0,4.0,3.0)],
  2023:[p("miles-kelly","Miles","Kelly",2002,"Guard",13,"Sophomore guard.","STUDENT","College Player","United States","Emerging scorer at GT.",13.0,4.0,2.0)],
  2024:[p("miles-kelly","Miles","Kelly",2002,"Guard",13,"Junior. Team leader.","STUDENT","College Player","United States","GT's top scorer under Pastner.",16.0,4.5,2.5)],
  2025:[p("baye-ndongo","Baye","Ndongo",2004,"Forward",11,"Freshman. Former 5-star from Senegal.","STUDENT","College Player","Atlanta, GA","5-star recruit from Senegal. Stoudamire's first big recruit.",12.0,7.0,1.0)],
};

let total=0;
console.log("Virginia Tech:"); total+=proc("virginia-tech",vt);
console.log("Georgia Tech:"); total+=proc("georgia-tech",gt);
console.log(`\nDone. +${total} players.`);
