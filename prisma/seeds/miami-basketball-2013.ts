import type { TeamSeed } from "./types";

export const miamiBasketball2013: TeamSeed = {
  slug: "miami-basketball-2013",
  name: "Miami Hurricanes",
  season: "2012-2013",
  sport: "Men's Basketball",
  school: "University of Miami",
  conference: "ACC",
  accomplishment: "2012-2013 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/2390.png",
  mascotName: "Hurricane",
  people: [
    {
      slug: "durand-scott", firstName: "Durand", lastName: "Scott", birthYear: 1990, hometown: "United States", highSchool: "United States",
      bio: "Senior captain.",
      status: { occupationType: "RETIRED_ATHLETE", currentTitle: "Retired", location: "United States", statusNote: "4-year starter. Played overseas.", sourceUrl: "https://en.wikipedia.org/wiki/Durand_Scott" },
      membership: { role: "PLAYER", jerseyNumber: 1, position: "Guard", yearsAtSchool: "undefined", gamesPlayed: 33, pointsPerGame: 13.5, reboundsPerGame: 3.5, assistsPerGame: 4 },
      seasonStats: [{ level: "COLLEGE", teamName: "Miami Hurricanes", season: "undefined", yearLabel: "undefined", sortOrder: 201, gamesPlayed: 33, pointsPerGame: 13.5, reboundsPerGame: 3.5, assistsPerGame: 4 }],
      careerEvents: [],
    },
    {
      slug: "shane-larkin", firstName: "Shane", lastName: "Larkin", birthYear: 1992, hometown: "United States", highSchool: "United States",
      bio: "Freshman. #18 pick by Mavs.",
      status: { occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Pro Player", location: "Turkey", statusNote: "#18 pick. Won EuroLeague with Anadolu Efes.", sourceUrl: "https://en.wikipedia.org/wiki/Shane_Larkin" },
      membership: { role: "PLAYER", jerseyNumber: 0, position: "Guard", yearsAtSchool: "undefined", gamesPlayed: 33, pointsPerGame: 10.5, reboundsPerGame: 3, assistsPerGame: 4.5 },
      seasonStats: [{ level: "COLLEGE", teamName: "Miami Hurricanes", season: "undefined", yearLabel: "undefined", sortOrder: 201, gamesPlayed: 33, pointsPerGame: 10.5, reboundsPerGame: 3, assistsPerGame: 4.5 }],
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
        { level: "COACHING", teamName: "Miami Hurricanes", season: "2012-2013", yearLabel: "2012-2013", sortOrder: 205 },
      ],
      careerEvents: [],
    },
  ],
};
