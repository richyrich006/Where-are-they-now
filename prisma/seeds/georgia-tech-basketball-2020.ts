import type { TeamSeed } from "./types";

export const georgiaTechBasketball2020: TeamSeed = {
  slug: "georgia-tech-basketball-2020",
  name: "Georgia Tech Yellow Jackets",
  season: "2019-2020",
  sport: "Men's Basketball",
  school: "Georgia Institute of Technology",
  conference: "ACC",
  accomplishment: "2019-2020 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/59.png",
  mascotName: "Yellow Jacket",
  people: [
    {
      slug:"jose-alvarado",firstName:"Jose",lastName:"Alvarado",birthYear:1998,hometown:"United States",highSchool:"United States",
      bio:"Junior captain.",
      status:{occupationType:"ACTIVE_PRO_ATHLETE",currentTitle:"Guard",location:"New Orleans, LA",statusNote:"Pelicans fan fav. Undrafted steal.",sourceUrl:"https://en.wikipedia.org/wiki/Jose_Alvarado"},
      membership:{role:"PLAYER",jerseyNumber:10,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:14,reboundsPerGame:3.5,assistsPerGame:4},
      seasonStats:[{level:"COLLEGE",teamName:"Georgia Tech Yellow Jackets",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:14,reboundsPerGame:3.5,assistsPerGame:4}],
      careerEvents:[],
    },
    {
      slug:"moses-wright",firstName:"Moses",lastName:"Wright",birthYear:1998,hometown:"United States",highSchool:"United States",
      bio:"Junior forward. Future ACC POY.",
      status:{occupationType:"RETIRED_ATHLETE",currentTitle:"Retired",location:"United States",statusNote:"2021 ACC POY. Played for Cavs.",sourceUrl:"https://en.wikipedia.org/wiki/Moses_Wright"},
      membership:{role:"PLAYER",jerseyNumber:5,position:"Forward",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:13,reboundsPerGame:7,assistsPerGame:1.5},
      seasonStats:[{level:"COLLEGE",teamName:"Georgia Tech Yellow Jackets",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:13,reboundsPerGame:7,assistsPerGame:1.5}],
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
        { level: "COACHING", teamName: "Georgia Tech Yellow Jackets", season: "2019-2020", yearLabel: "2019-2020", sortOrder: 212 },
      ],
      careerEvents: [],
    },
  ],
};
