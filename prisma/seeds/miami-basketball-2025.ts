import type { TeamSeed } from "./types";

export const miamiBasketball2025: TeamSeed = {
  slug: "miami-basketball-2025",
  name: "Miami Hurricanes",
  season: "2024-2025",
  sport: "Men's Basketball",
  school: "University of Miami",
  conference: "ACC",
  accomplishment: "2024-2025 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/2390.png",
  mascotName: "Hurricane",
  people: [
    {
      slug: "matthew-cleveland", firstName: "Matthew", lastName: "Cleveland", birthYear: 2003, hometown: "United States", highSchool: "United States",
      bio: "Senior guard.",
      status: { occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Guard", location: "United States", statusNote: "Miami's top player after Final Four roster departed.", sourceUrl: "https://en.wikipedia.org/wiki/Matthew_Cleveland" },
      membership: { role: "PLAYER", jerseyNumber: 2, position: "Guard", yearsAtSchool: "undefined", gamesPlayed: 33, pointsPerGame: 15, reboundsPerGame: 5, assistsPerGame: 3.5 },
      seasonStats: [{ level: "COLLEGE", teamName: "Miami Hurricanes", season: "undefined", yearLabel: "undefined", sortOrder: 201, gamesPlayed: 33, pointsPerGame: 15, reboundsPerGame: 5, assistsPerGame: 3.5 }],
      careerEvents: [],
    },
    {
      slug: "miami-coach-2025",
      firstName: "Jim",
      lastName: "Larranaga successor",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "New coach hired after Larranaga's retirement.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Currently coaching at Miami.",
        sourceUrl: "https://en.wikipedia.org/wiki/Jim_Larranaga_successor",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2025-2026" },
      seasonStats: [
        { level: "COACHING", teamName: "Miami Hurricanes", season: "2024-2025", yearLabel: "2024-2025", sortOrder: 217 },
      ],
      careerEvents: [],
    },
  ],
};
