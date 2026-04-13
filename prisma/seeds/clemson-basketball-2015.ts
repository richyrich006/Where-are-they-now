import type { TeamSeed } from "./types";

export const clemsonBasketball2015: TeamSeed = {
  slug: "clemson-basketball-2015",
  name: "Clemson Tigers",
  season: "2014-2015",
  sport: "Men's Basketball",
  school: "Clemson University",
  conference: "ACC",
  accomplishment: "2014-2015 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/228.png",
  mascotName: "Tiger",
  people: [
    {
      slug:"jaron-blossomgame",firstName:"Jaron",lastName:"Blossomgame",birthYear:1993,hometown:"United States",highSchool:"United States",
      bio:"Sophomore developing.",
      status:{occupationType:"RETIRED_ATHLETE",currentTitle:"Retired",location:"United States",statusNote:"#59 pick by Spurs in 2017.",sourceUrl:"https://en.wikipedia.org/wiki/Jaron_Blossomgame"},
      membership:{role:"PLAYER",jerseyNumber:5,position:"Forward",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:12,reboundsPerGame:5.5,assistsPerGame:1.5},
      seasonStats:[{level:"COLLEGE",teamName:"Clemson Tigers",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:12,reboundsPerGame:5.5,assistsPerGame:1.5}],
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
        { level: "COACHING", teamName: "Clemson Tigers", season: "2014-2015", yearLabel: "2014-2015", sortOrder: 207 },
      ],
      careerEvents: [],
    },
  ],
};
