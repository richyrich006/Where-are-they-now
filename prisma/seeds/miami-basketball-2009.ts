import type { TeamSeed } from "./types";

export const miamiBasketball2009: TeamSeed = {
  slug: "miami-basketball-2009",
  name: "Miami Hurricanes",
  season: "2008-2009",
  sport: "Men's Basketball",
  school: "University of Miami",
  conference: "ACC",
  accomplishment: "2008-2009 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/2390.png",
  mascotName: "Hurricane",
  people: [
    {
      slug: "jack-mcclinton", firstName: "Jack", lastName: "McClinton", birthYear: 1986, hometown: "United States", highSchool: "United States",
      bio: "Senior guard. ACC leading scorer.",
      status: { occupationType: "RETIRED_ATHLETE", currentTitle: "Retired", location: "United States", statusNote: "ACC's leading scorer. Played overseas.", sourceUrl: "https://en.wikipedia.org/wiki/Jack_McClinton" },
      membership: { role: "PLAYER", jerseyNumber: 33, position: "Guard", yearsAtSchool: "undefined", gamesPlayed: 33, pointsPerGame: 19, reboundsPerGame: 3, assistsPerGame: 2 },
      seasonStats: [{ level: "COLLEGE", teamName: "Miami Hurricanes", season: "undefined", yearLabel: "undefined", sortOrder: 201, gamesPlayed: 33, pointsPerGame: 19, reboundsPerGame: 3, assistsPerGame: 2 }],
      careerEvents: [],
    },
    {
      slug: "dwayne-collins", firstName: "Dwayne", lastName: "Collins", birthYear: 1987, hometown: "United States", highSchool: "United States",
      bio: "Junior forward.",
      status: { occupationType: "RETIRED_ATHLETE", currentTitle: "Retired", location: "United States", statusNote: "Played overseas after Miami.", sourceUrl: "https://en.wikipedia.org/wiki/Dwayne_Collins" },
      membership: { role: "PLAYER", jerseyNumber: 21, position: "Forward", yearsAtSchool: "undefined", gamesPlayed: 33, pointsPerGame: 14, reboundsPerGame: 7.5, assistsPerGame: 1 },
      seasonStats: [{ level: "COLLEGE", teamName: "Miami Hurricanes", season: "undefined", yearLabel: "undefined", sortOrder: 201, gamesPlayed: 33, pointsPerGame: 14, reboundsPerGame: 7.5, assistsPerGame: 1 }],
      careerEvents: [],
    },
    {
      slug: "frank-haith",
      firstName: "Frank",
      lastName: "Haith",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Coach who built Miami into an ACC contender before leaving for Missouri.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Now HC at Tulsa.",
        sourceUrl: "https://en.wikipedia.org/wiki/Frank_Haith",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2009-2011" },
      seasonStats: [
        { level: "COACHING", teamName: "Miami Hurricanes", season: "2008-2009", yearLabel: "2008-2009", sortOrder: 201 },
      ],
      careerEvents: [],
    },
  ],
};
