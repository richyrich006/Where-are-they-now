import type { TeamSeed } from "./types";

export const clemsonBasketball2011: TeamSeed = {
  slug: "clemson-basketball-2011",
  name: "Clemson Tigers",
  season: "2010-2011",
  sport: "Men's Basketball",
  school: "Clemson University",
  conference: "ACC",
  accomplishment: "2010-2011 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/228.png",
  mascotName: "Tiger",
  people: [
    {
      slug:"trevor-booker-clem",firstName:"Trevor",lastName:"Booker",birthYear:1987,hometown:"United States",highSchool:"United States",
      bio:"Senior. #23 pick by Wizards.",
      status:{occupationType:"RETIRED_ATHLETE",currentTitle:"Retired",location:"United States",statusNote:"8 NBA seasons. Physical rebounder.",sourceUrl:"https://en.wikipedia.org/wiki/Trevor_Booker"},
      membership:{role:"PLAYER",jerseyNumber:35,position:"Forward",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:16,reboundsPerGame:9,assistsPerGame:2},
      seasonStats:[{level:"COLLEGE",teamName:"Clemson Tigers",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:16,reboundsPerGame:9,assistsPerGame:2}],
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
        { level: "COACHING", teamName: "Clemson Tigers", season: "2010-2011", yearLabel: "2010-2011", sortOrder: 203 },
      ],
      careerEvents: [],
    },
  ],
};
