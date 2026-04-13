import type { TeamSeed } from "./types";

export const clemsonBasketball2016: TeamSeed = {
  slug: "clemson-basketball-2016",
  name: "Clemson Tigers",
  season: "2015-2016",
  sport: "Men's Basketball",
  school: "Clemson University",
  conference: "ACC",
  accomplishment: "2015-2016 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/228.png",
  mascotName: "Tiger",
  people: [
    {
      slug:"jaron-blossomgame",firstName:"Jaron",lastName:"Blossomgame",birthYear:1993,hometown:"United States",highSchool:"United States",
      bio:"Junior star.",
      status:{occupationType:"RETIRED_ATHLETE",currentTitle:"Retired",location:"United States",statusNote:"Drafted #59 by Spurs.",sourceUrl:"https://en.wikipedia.org/wiki/Jaron_Blossomgame"},
      membership:{role:"PLAYER",jerseyNumber:5,position:"Forward",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:17.5,reboundsPerGame:6.5,assistsPerGame:2},
      seasonStats:[{level:"COLLEGE",teamName:"Clemson Tigers",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:17.5,reboundsPerGame:6.5,assistsPerGame:2}],
      careerEvents:[],
    },
    {
      slug:"donte-grantham",firstName:"Donte",lastName:"Grantham",birthYear:1995,hometown:"United States",highSchool:"United States",
      bio:"Sophomore.",
      status:{occupationType:"RETIRED_ATHLETE",currentTitle:"Retired",location:"United States",statusNote:"Played overseas. Versatile forward.",sourceUrl:"https://en.wikipedia.org/wiki/Donte_Grantham"},
      membership:{role:"PLAYER",jerseyNumber:15,position:"Forward",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:9,reboundsPerGame:4,assistsPerGame:2},
      seasonStats:[{level:"COLLEGE",teamName:"Clemson Tigers",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:9,reboundsPerGame:4,assistsPerGame:2}],
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
        { level: "COACHING", teamName: "Clemson Tigers", season: "2015-2016", yearLabel: "2015-2016", sortOrder: 208 },
      ],
      careerEvents: [],
    },
  ],
};
