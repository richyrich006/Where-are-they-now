import type { TeamSeed } from "./types";

export const virginiaTechBasketball2014: TeamSeed = {
  slug: "virginia-tech-basketball-2014",
  name: "Virginia Tech Hokies",
  season: "2013-2014",
  sport: "Men's Basketball",
  school: "Virginia Tech",
  conference: "ACC",
  accomplishment: "2013-2014 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/259.png",
  mascotName: "Hokie",
  people: [
    {
      slug:"ben-emelogu",firstName:"Ben",lastName:"Emelogu",birthYear:1993,hometown:"United States",highSchool:"United States",
      bio:"Junior guard.",
      status:{occupationType:"OTHER",currentTitle:"Professional",location:"United States",statusNote:"Played in Europe briefly.",sourceUrl:"https://en.wikipedia.org/wiki/Ben_Emelogu"},
      membership:{role:"PLAYER",jerseyNumber:15,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:10,reboundsPerGame:2.5,assistsPerGame:2},
      seasonStats:[{level:"COLLEGE",teamName:"Virginia Tech Hokies",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:10,reboundsPerGame:2.5,assistsPerGame:2}],
      careerEvents:[],
    },
    {
      slug: "james-johnson-vt",
      firstName: "James",
      lastName: "Johnson",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Brief tenure as VT coach.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Moved on from coaching.",
        sourceUrl: "https://en.wikipedia.org/wiki/James_Johnson",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2013-2014" },
      seasonStats: [
        { level: "COACHING", teamName: "Virginia Tech Hokies", season: "2013-2014", yearLabel: "2013-2014", sortOrder: 206 },
      ],
      careerEvents: [],
    },
  ],
};
