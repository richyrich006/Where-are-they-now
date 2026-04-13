import type { TeamSeed } from "./types";

export const georgiaTechBasketball2021: TeamSeed = {
  slug: "georgia-tech-basketball-2021",
  name: "Georgia Tech Yellow Jackets",
  season: "2020-2021",
  sport: "Men's Basketball",
  school: "Georgia Institute of Technology",
  conference: "ACC",
  accomplishment: "2020-2021 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/59.png",
  mascotName: "Yellow Jacket",
  people: [
    {
      slug:"jose-alvarado",firstName:"Jose",lastName:"Alvarado",birthYear:1998,hometown:"United States",highSchool:"United States",
      bio:"Senior. ACC leader. Undrafted NBA gem.",
      status:{occupationType:"ACTIVE_PRO_ATHLETE",currentTitle:"Guard",location:"New Orleans, LA",statusNote:"Undrafted but became Pelicans starter. 'Grand Theft' nickname.",sourceUrl:"https://en.wikipedia.org/wiki/Jose_Alvarado"},
      membership:{role:"PLAYER",jerseyNumber:10,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:17,reboundsPerGame:4,assistsPerGame:4.5},
      seasonStats:[{level:"COLLEGE",teamName:"Georgia Tech Yellow Jackets",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:17,reboundsPerGame:4,assistsPerGame:4.5}],
      careerEvents:[],
    },
    {
      slug:"moses-wright",firstName:"Moses",lastName:"Wright",birthYear:1998,hometown:"United States",highSchool:"United States",
      bio:"Senior. ACC POY. Won ACC Tournament.",
      status:{occupationType:"RETIRED_ATHLETE",currentTitle:"Retired",location:"United States",statusNote:"2021 ACC POY and ACC Tournament champs. Played for Cavs.",sourceUrl:"https://en.wikipedia.org/wiki/Moses_Wright"},
      membership:{role:"PLAYER",jerseyNumber:5,position:"Forward",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:17.5,reboundsPerGame:8,assistsPerGame:2},
      seasonStats:[{level:"COLLEGE",teamName:"Georgia Tech Yellow Jackets",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:17.5,reboundsPerGame:8,assistsPerGame:2}],
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
        { level: "COACHING", teamName: "Georgia Tech Yellow Jackets", season: "2020-2021", yearLabel: "2020-2021", sortOrder: 213 },
      ],
      careerEvents: [],
    },
  ],
};
