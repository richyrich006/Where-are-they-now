import type { TeamSeed } from "./types";

export const clemsonBasketball2018: TeamSeed = {
  slug: "clemson-basketball-2018",
  name: "Clemson Tigers",
  season: "2017-2018",
  sport: "Men's Basketball",
  school: "Clemson University",
  conference: "ACC",
  accomplishment: "2017-2018 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/228.png",
  mascotName: "Tiger",
  people: [
    {
      slug:"marcquise-reed",firstName:"Marcquise",lastName:"Reed",birthYear:1996,hometown:"United States",highSchool:"United States",
      bio:"Junior guard and team leader.",
      status:{occupationType:"RETIRED_ATHLETE",currentTitle:"Retired",location:"United States",statusNote:"Leading scorer for Clemson.",sourceUrl:"https://en.wikipedia.org/wiki/Marcquise_Reed"},
      membership:{role:"PLAYER",jerseyNumber:2,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:16,reboundsPerGame:3.5,assistsPerGame:3},
      seasonStats:[{level:"COLLEGE",teamName:"Clemson Tigers",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:16,reboundsPerGame:3.5,assistsPerGame:3}],
      careerEvents:[],
    },
    {
      slug:"shelton-mitchell-clem",firstName:"Shelton",lastName:"Mitchell",birthYear:1996,hometown:"United States",highSchool:"United States",
      bio:"Junior PG.",
      status:{occupationType:"RETIRED_ATHLETE",currentTitle:"Retired",location:"United States",statusNote:"3-year starter at Clemson.",sourceUrl:"https://en.wikipedia.org/wiki/Shelton_Mitchell"},
      membership:{role:"PLAYER",jerseyNumber:4,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:13,reboundsPerGame:3,assistsPerGame:4},
      seasonStats:[{level:"COLLEGE",teamName:"Clemson Tigers",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:13,reboundsPerGame:3,assistsPerGame:4}],
      careerEvents:[],
    },
    {
      slug: "brad-brownell",
      firstName: "Brad",
      lastName: "Brownell",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Longest-tenured ACC coach. Led Clemson to first Elite Eight since 1980 in 2024.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Currently coaching at Clemson.",
        sourceUrl: "https://en.wikipedia.org/wiki/Brad_Brownell",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2011-2026" },
      seasonStats: [
        { level: "COACHING", teamName: "Clemson Tigers", season: "2017-2018", yearLabel: "2017-2018", sortOrder: 210 },
      ],
      careerEvents: [],
    },
  ],
};
