import type { TeamSeed } from "./types";

export const virginiaTechBasketball2012: TeamSeed = {
  slug: "virginia-tech-basketball-2012",
  name: "Virginia Tech Hokies",
  season: "2011-2012",
  sport: "Men's Basketball",
  school: "Virginia Tech",
  conference: "ACC",
  accomplishment: "2011-2012 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/259.png",
  mascotName: "Hokie",
  people: [
    {
      slug:"erick-green-vt",firstName:"Erick",lastName:"Green",birthYear:1991,hometown:"United States",highSchool:"United States",
      bio:"Junior guard emerging.",
      status:{occupationType:"RETIRED_ATHLETE",currentTitle:"Retired",location:"United States",statusNote:"2013 ACC leading scorer. #46 pick by Jazz.",sourceUrl:"https://en.wikipedia.org/wiki/Erick_Green"},
      membership:{role:"PLAYER",jerseyNumber:11,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:13.5,reboundsPerGame:3,assistsPerGame:3},
      seasonStats:[{level:"COLLEGE",teamName:"Virginia Tech Hokies",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:13.5,reboundsPerGame:3,assistsPerGame:3}],
      careerEvents:[],
    },
    {
      slug: "seth-greenberg",
      firstName: "Seth",
      lastName: "Greenberg",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Energetic coach who made VT competitive but couldn't break through to NCAA Tournament consistently.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Now ESPN analyst.",
        sourceUrl: "https://en.wikipedia.org/wiki/Seth_Greenberg",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2009-2012" },
      seasonStats: [
        { level: "COACHING", teamName: "Virginia Tech Hokies", season: "2011-2012", yearLabel: "2011-2012", sortOrder: 204 },
      ],
      careerEvents: [],
    },
  ],
};
