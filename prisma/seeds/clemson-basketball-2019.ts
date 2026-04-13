import type { TeamSeed } from "./types";

export const clemsonBasketball2019: TeamSeed = {
  slug: "clemson-basketball-2019",
  name: "Clemson Tigers",
  season: "2018-2019",
  sport: "Men's Basketball",
  school: "Clemson University",
  conference: "ACC",
  accomplishment: "2018-2019 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/228.png",
  mascotName: "Tiger",
  people: [
    {
      slug:"marcquise-reed",firstName:"Marcquise",lastName:"Reed",birthYear:1996,hometown:"United States",highSchool:"United States",
      bio:"Senior captain.",
      status:{occupationType:"RETIRED_ATHLETE",currentTitle:"Retired",location:"United States",statusNote:"Clemson's go-to scorer.",sourceUrl:"https://en.wikipedia.org/wiki/Marcquise_Reed"},
      membership:{role:"PLAYER",jerseyNumber:2,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:15.5,reboundsPerGame:4,assistsPerGame:3.5},
      seasonStats:[{level:"COLLEGE",teamName:"Clemson Tigers",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:15.5,reboundsPerGame:4,assistsPerGame:3.5}],
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
        { level: "COACHING", teamName: "Clemson Tigers", season: "2018-2019", yearLabel: "2018-2019", sortOrder: 211 },
      ],
      careerEvents: [],
    },
  ],
};
