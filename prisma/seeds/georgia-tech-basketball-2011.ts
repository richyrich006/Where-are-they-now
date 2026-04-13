import type { TeamSeed } from "./types";

export const georgiaTechBasketball2011: TeamSeed = {
  slug: "georgia-tech-basketball-2011",
  name: "Georgia Tech Yellow Jackets",
  season: "2010-2011",
  sport: "Men's Basketball",
  school: "Georgia Institute of Technology",
  conference: "ACC",
  accomplishment: "2010-2011 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/59.png",
  mascotName: "Yellow Jacket",
  people: [
    {
      slug:"iman-shumpert",firstName:"Iman",lastName:"Shumpert",birthYear:1990,hometown:"United States",highSchool:"United States",
      bio:"Junior star. #17 pick. DWTS winner.",
      status:{occupationType:"RETIRED_ATHLETE",currentTitle:"Media Personality",location:"Los Angeles, CA",statusNote:"#17 pick. 2016 NBA champ. Won Dancing with the Stars 2021.",sourceUrl:"https://en.wikipedia.org/wiki/Iman_Shumpert"},
      membership:{role:"PLAYER",jerseyNumber:1,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:17,reboundsPerGame:6,assistsPerGame:3.5},
      seasonStats:[{level:"COLLEGE",teamName:"Georgia Tech Yellow Jackets",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:17,reboundsPerGame:6,assistsPerGame:3.5}],
      careerEvents:[],
    },
    {
      slug: "paul-hewitt",
      firstName: "Paul",
      lastName: "Hewitt",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Led Georgia Tech to the 2004 title game but program declined.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Fired 2011. Later coached at George Mason.",
        sourceUrl: "https://en.wikipedia.org/wiki/Paul_Hewitt",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2009-2011" },
      seasonStats: [
        { level: "COACHING", teamName: "Georgia Tech Yellow Jackets", season: "2010-2011", yearLabel: "2010-2011", sortOrder: 203 },
      ],
      careerEvents: [],
    },
  ],
};
