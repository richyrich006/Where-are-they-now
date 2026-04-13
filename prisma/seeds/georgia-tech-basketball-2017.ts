import type { TeamSeed } from "./types";

export const georgiaTechBasketball2017: TeamSeed = {
  slug: "georgia-tech-basketball-2017",
  name: "Georgia Tech Yellow Jackets",
  season: "2016-2017",
  sport: "Men's Basketball",
  school: "Georgia Institute of Technology",
  conference: "ACC",
  accomplishment: "2016-2017 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/59.png",
  mascotName: "Yellow Jacket",
  people: [
    {
      slug:"josh-okogie",firstName:"Josh",lastName:"Okogie",birthYear:1998,hometown:"United States",highSchool:"United States",
      bio:"Sophomore. #20 pick in 2018.",
      status:{occupationType:"ACTIVE_PRO_ATHLETE",currentTitle:"Guard",location:"United States",statusNote:"#20 pick. Defensive specialist in NBA.",sourceUrl:"https://en.wikipedia.org/wiki/Josh_Okogie"},
      membership:{role:"PLAYER",jerseyNumber:5,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:15,reboundsPerGame:5.5,assistsPerGame:2.5},
      seasonStats:[{level:"COLLEGE",teamName:"Georgia Tech Yellow Jackets",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:15,reboundsPerGame:5.5,assistsPerGame:2.5}],
      careerEvents:[],
    },
    {
      slug:"ben-lammers",firstName:"Ben",lastName:"Lammers",birthYear:1995,hometown:"United States",highSchool:"United States",
      bio:"Junior. ACC DPOY.",
      status:{occupationType:"ACTIVE_PRO_ATHLETE",currentTitle:"Pro Player",location:"Overseas",statusNote:"ACC DPOY. Playing overseas in EuroLeague.",sourceUrl:"https://en.wikipedia.org/wiki/Ben_Lammers"},
      membership:{role:"PLAYER",jerseyNumber:44,position:"Center",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:11,reboundsPerGame:8.5,assistsPerGame:1},
      seasonStats:[{level:"COLLEGE",teamName:"Georgia Tech Yellow Jackets",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:11,reboundsPerGame:8.5,assistsPerGame:1}],
      careerEvents:[],
    },
    {
      slug: "josh-pastner",
      firstName: "Josh",
      lastName: "Pastner",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Former Memphis HC. Led GT to 2021 ACC Tournament title.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Fired 2024.",
        sourceUrl: "https://en.wikipedia.org/wiki/Josh_Pastner",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2017-2024" },
      seasonStats: [
        { level: "COACHING", teamName: "Georgia Tech Yellow Jackets", season: "2016-2017", yearLabel: "2016-2017", sortOrder: 209 },
      ],
      careerEvents: [],
    },
  ],
};
