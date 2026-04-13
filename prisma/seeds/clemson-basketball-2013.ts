import type { TeamSeed } from "./types";

export const clemsonBasketball2013: TeamSeed = {
  slug: "clemson-basketball-2013",
  name: "Clemson Tigers",
  season: "2012-2013",
  sport: "Men's Basketball",
  school: "Clemson University",
  conference: "ACC",
  accomplishment: "2012-2013 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/228.png",
  mascotName: "Tiger",
  people: [
    {
      slug:"kj-mcdaniels",firstName:"K.J.",lastName:"McDaniels",birthYear:1993,hometown:"United States",highSchool:"United States",
      bio:"Sophomore forward.",
      status:{occupationType:"RETIRED_ATHLETE",currentTitle:"Retired",location:"United States",statusNote:"#32 pick by 76ers. NBA career.",sourceUrl:"https://en.wikipedia.org/wiki/K.J._McDaniels"},
      membership:{role:"PLAYER",jerseyNumber:32,position:"Forward",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:12,reboundsPerGame:5.5,assistsPerGame:1},
      seasonStats:[{level:"COLLEGE",teamName:"Clemson Tigers",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:12,reboundsPerGame:5.5,assistsPerGame:1}],
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
        { level: "COACHING", teamName: "Clemson Tigers", season: "2012-2013", yearLabel: "2012-2013", sortOrder: 205 },
      ],
      careerEvents: [],
    },
  ],
};
