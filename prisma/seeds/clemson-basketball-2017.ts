import type { TeamSeed } from "./types";

export const clemsonBasketball2017: TeamSeed = {
  slug: "clemson-basketball-2017",
  name: "Clemson Tigers",
  season: "2016-2017",
  sport: "Men's Basketball",
  school: "Clemson University",
  conference: "ACC",
  accomplishment: "2016-2017 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/228.png",
  mascotName: "Tiger",
  people: [
    {
      slug:"jaron-blossomgame",firstName:"Jaron",lastName:"Blossomgame",birthYear:1993,hometown:"United States",highSchool:"United States",
      bio:"Senior. #59 pick.",
      status:{occupationType:"RETIRED_ATHLETE",currentTitle:"Retired",location:"United States",statusNote:"Drafted by Spurs after senior year.",sourceUrl:"https://en.wikipedia.org/wiki/Jaron_Blossomgame"},
      membership:{role:"PLAYER",jerseyNumber:5,position:"Forward",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:18,reboundsPerGame:7,assistsPerGame:2.5},
      seasonStats:[{level:"COLLEGE",teamName:"Clemson Tigers",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:18,reboundsPerGame:7,assistsPerGame:2.5}],
      careerEvents:[],
    },
    {
      slug:"marcquise-reed",firstName:"Marcquise",lastName:"Reed",birthYear:1996,hometown:"United States",highSchool:"United States",
      bio:"Sophomore guard.",
      status:{occupationType:"RETIRED_ATHLETE",currentTitle:"Retired",location:"United States",statusNote:"Transferred from Robert Morris. Became starter.",sourceUrl:"https://en.wikipedia.org/wiki/Marcquise_Reed"},
      membership:{role:"PLAYER",jerseyNumber:2,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:11,reboundsPerGame:3,assistsPerGame:2},
      seasonStats:[{level:"COLLEGE",teamName:"Clemson Tigers",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:11,reboundsPerGame:3,assistsPerGame:2}],
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
        { level: "COACHING", teamName: "Clemson Tigers", season: "2016-2017", yearLabel: "2016-2017", sortOrder: 209 },
      ],
      careerEvents: [],
    },
  ],
};
