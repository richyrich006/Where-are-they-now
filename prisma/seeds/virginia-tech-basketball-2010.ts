import type { TeamSeed } from "./types";

export const virginiaTechBasketball2010: TeamSeed = {
  slug: "virginia-tech-basketball-2010",
  name: "Virginia Tech Hokies",
  season: "2009-2010",
  sport: "Men's Basketball",
  school: "Virginia Tech",
  conference: "ACC",
  accomplishment: "2009-2010 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/259.png",
  mascotName: "Hokie",
  people: [
    {
      slug:"malcolm-delaney",firstName:"Malcolm",lastName:"Delaney",birthYear:1989,hometown:"United States",highSchool:"United States",
      bio:"Junior star. ACC All-Conference.",
      status:{occupationType:"ACTIVE_PRO_ATHLETE",currentTitle:"Pro Player",location:"Overseas",statusNote:"EuroLeague MVP. Played for Hawks in NBA.",sourceUrl:"https://en.wikipedia.org/wiki/Malcolm_Delaney"},
      membership:{role:"PLAYER",jerseyNumber:23,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:17,reboundsPerGame:3.5,assistsPerGame:5},
      seasonStats:[{level:"COLLEGE",teamName:"Virginia Tech Hokies",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:17,reboundsPerGame:3.5,assistsPerGame:5}],
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
        { level: "COACHING", teamName: "Virginia Tech Hokies", season: "2009-2010", yearLabel: "2009-2010", sortOrder: 202 },
      ],
      careerEvents: [],
    },
  ],
};
