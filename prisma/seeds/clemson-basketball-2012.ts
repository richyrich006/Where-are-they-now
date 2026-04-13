import type { TeamSeed } from "./types";

export const clemsonBasketball2012: TeamSeed = {
  slug: "clemson-basketball-2012",
  name: "Clemson Tigers",
  season: "2011-2012",
  sport: "Men's Basketball",
  school: "Clemson University",
  conference: "ACC",
  accomplishment: "2011-2012 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/228.png",
  mascotName: "Tiger",
  people: [
    {
      slug:"kj-mcdaniels",firstName:"K.J.",lastName:"McDaniels",birthYear:1993,hometown:"United States",highSchool:"United States",
      bio:"Freshman. Future NBA player.",
      status:{occupationType:"RETIRED_ATHLETE",currentTitle:"Retired",location:"United States",statusNote:"#32 pick. Played for 76ers, Rockets, Nets.",sourceUrl:"https://en.wikipedia.org/wiki/K.J._McDaniels"},
      membership:{role:"PLAYER",jerseyNumber:32,position:"Forward",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:8,reboundsPerGame:4,assistsPerGame:0.5},
      seasonStats:[{level:"COLLEGE",teamName:"Clemson Tigers",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:8,reboundsPerGame:4,assistsPerGame:0.5}],
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
        { level: "COACHING", teamName: "Clemson Tigers", season: "2011-2012", yearLabel: "2011-2012", sortOrder: 204 },
      ],
      careerEvents: [],
    },
  ],
};
