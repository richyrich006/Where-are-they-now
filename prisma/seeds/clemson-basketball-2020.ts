import type { TeamSeed } from "./types";

export const clemsonBasketball2020: TeamSeed = {
  slug: "clemson-basketball-2020",
  name: "Clemson Tigers",
  season: "2019-2020",
  sport: "Men's Basketball",
  school: "Clemson University",
  conference: "ACC",
  accomplishment: "2019-2020 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/228.png",
  mascotName: "Tiger",
  people: [
    {
      slug:"aamir-simms",firstName:"Aamir",lastName:"Simms",birthYear:1998,hometown:"United States",highSchool:"United States",
      bio:"Junior forward and team leader.",
      status:{occupationType:"RETIRED_ATHLETE",currentTitle:"Retired",location:"United States",statusNote:"3-year starter. ACC All-Conference.",sourceUrl:"https://en.wikipedia.org/wiki/Aamir_Simms"},
      membership:{role:"PLAYER",jerseyNumber:25,position:"Forward",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:13,reboundsPerGame:7,assistsPerGame:2.5},
      seasonStats:[{level:"COLLEGE",teamName:"Clemson Tigers",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:13,reboundsPerGame:7,assistsPerGame:2.5}],
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
        { level: "COACHING", teamName: "Clemson Tigers", season: "2019-2020", yearLabel: "2019-2020", sortOrder: 212 },
      ],
      careerEvents: [],
    },
  ],
};
