import type { TeamSeed } from "./types";

export const virginiaTechBasketball2013: TeamSeed = {
  slug: "virginia-tech-basketball-2013",
  name: "Virginia Tech Hokies",
  season: "2012-2013",
  sport: "Men's Basketball",
  school: "Virginia Tech",
  conference: "ACC",
  accomplishment: "2012-2013 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/259.png",
  mascotName: "Hokie",
  people: [
    {
      slug:"erick-green-vt",firstName:"Erick",lastName:"Green",birthYear:1991,hometown:"United States",highSchool:"United States",
      bio:"Senior. Led ACC in scoring 25 PPG.",
      status:{occupationType:"RETIRED_ATHLETE",currentTitle:"Retired",location:"United States",statusNote:"Led ACC in scoring at 25.0 PPG. #46 pick by Jazz.",sourceUrl:"https://en.wikipedia.org/wiki/Erick_Green"},
      membership:{role:"PLAYER",jerseyNumber:11,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:25,reboundsPerGame:3.5,assistsPerGame:4},
      seasonStats:[{level:"COLLEGE",teamName:"Virginia Tech Hokies",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:25,reboundsPerGame:3.5,assistsPerGame:4}],
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
        { level: "COACHING", teamName: "Virginia Tech Hokies", season: "2012-2013", yearLabel: "2012-2013", sortOrder: 205 },
      ],
      careerEvents: [],
    },
  ],
};
