import type { TeamSeed } from "./types";

export const miamiBasketball2018: TeamSeed = {
  slug: "miami-basketball-2018",
  name: "Miami Hurricanes",
  season: "2017-2018",
  sport: "Men's Basketball",
  school: "University of Miami",
  conference: "ACC",
  accomplishment: "2017-2018 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/2390.png",
  mascotName: "Hurricane",
  people: [
    {
      slug: "bruce-brown-miami", firstName: "Bruce", lastName: "Brown", birthYear: 1996, hometown: "United States", highSchool: "United States",
      bio: "Sophomore guard. #42 pick.",
      status: { occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Guard", location: "Toronto, ON", statusNote: "NBA starter. Key role player on contending teams.", sourceUrl: "https://en.wikipedia.org/wiki/Bruce_Brown" },
      membership: { role: "PLAYER", jerseyNumber: 11, position: "Guard", yearsAtSchool: "undefined", gamesPlayed: 33, pointsPerGame: 11, reboundsPerGame: 5.5, assistsPerGame: 3 },
      seasonStats: [{ level: "COLLEGE", teamName: "Miami Hurricanes", season: "undefined", yearLabel: "undefined", sortOrder: 201, gamesPlayed: 33, pointsPerGame: 11, reboundsPerGame: 5.5, assistsPerGame: 3 }],
      careerEvents: [],
    },
    {
      slug: "lonnie-walker-iv", firstName: "Lonnie", lastName: "Walker IV", birthYear: 1998, hometown: "United States", highSchool: "United States",
      bio: "Freshman. #18 pick by Spurs.",
      status: { occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Guard", location: "United States", statusNote: "#18 pick by Spurs. Played for Spurs, Lakers, Nets.", sourceUrl: "https://en.wikipedia.org/wiki/Lonnie_Walker_IV" },
      membership: { role: "PLAYER", jerseyNumber: 4, position: "Guard", yearsAtSchool: "undefined", gamesPlayed: 33, pointsPerGame: 12, reboundsPerGame: 2.5, assistsPerGame: 1.5 },
      seasonStats: [{ level: "COLLEGE", teamName: "Miami Hurricanes", season: "undefined", yearLabel: "undefined", sortOrder: 201, gamesPlayed: 33, pointsPerGame: 12, reboundsPerGame: 2.5, assistsPerGame: 1.5 }],
      careerEvents: [],
    },
    {
      slug: "jim-larranaga",
      firstName: "Jim",
      lastName: "Larranaga",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Led Miami to the 2023 Final Four (first in history) at age 73. Also led George Mason to 2006 Final Four.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Retired after 2024 season.",
        sourceUrl: "https://en.wikipedia.org/wiki/Jim_Larranaga",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2012-2024" },
      seasonStats: [
        { level: "COACHING", teamName: "Miami Hurricanes", season: "2017-2018", yearLabel: "2017-2018", sortOrder: 210 },
      ],
      careerEvents: [],
    },
  ],
};
