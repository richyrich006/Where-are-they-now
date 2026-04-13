import type { TeamSeed } from "./types";

export const georgiaTechBasketball2019: TeamSeed = {
  slug: "georgia-tech-basketball-2019",
  name: "Georgia Tech Yellow Jackets",
  season: "2018-2019",
  sport: "Men's Basketball",
  school: "Georgia Institute of Technology",
  conference: "ACC",
  accomplishment: "2018-2019 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/59.png",
  mascotName: "Yellow Jacket",
  people: [
    {
      slug:"jose-alvarado",firstName:"Jose",lastName:"Alvarado",birthYear:1998,hometown:"United States",highSchool:"United States",
      bio:"Sophomore. Developing into star.",
      status:{occupationType:"ACTIVE_PRO_ATHLETE",currentTitle:"Guard",location:"New Orleans, LA",statusNote:"Fan favorite 'Grand Theft Alvarado' for Pelicans.",sourceUrl:"https://en.wikipedia.org/wiki/Jose_Alvarado"},
      membership:{role:"PLAYER",jerseyNumber:10,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:12,reboundsPerGame:3.5,assistsPerGame:3.5},
      seasonStats:[{level:"COLLEGE",teamName:"Georgia Tech Yellow Jackets",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:12,reboundsPerGame:3.5,assistsPerGame:3.5}],
      careerEvents:[],
    },
    {
      slug:"james-banks-iii",firstName:"James",lastName:"Banks III",birthYear:1998,hometown:"United States",highSchool:"United States",
      bio:"Junior shot-blocker.",
      status:{occupationType:"RETIRED_ATHLETE",currentTitle:"Retired",location:"United States",statusNote:"ACC blocks leader.",sourceUrl:"https://en.wikipedia.org/wiki/James_Banks_III"},
      membership:{role:"PLAYER",jerseyNumber:1,position:"Center",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:7,reboundsPerGame:5.5,assistsPerGame:0.5},
      seasonStats:[{level:"COLLEGE",teamName:"Georgia Tech Yellow Jackets",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:7,reboundsPerGame:5.5,assistsPerGame:0.5}],
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
        { level: "COACHING", teamName: "Georgia Tech Yellow Jackets", season: "2018-2019", yearLabel: "2018-2019", sortOrder: 211 },
      ],
      careerEvents: [],
    },
  ],
};
