import type { TeamSeed } from "./types";

export const bostonCollegeBasketball2021: TeamSeed = {
  slug: "boston-college-basketball-2021",
  name: "Boston College Eagles",
  season: "2020-2021",
  sport: "Men's Basketball",
  school: "Boston College",
  conference: "ACC",
  accomplishment: "2020-2021 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/103.png",
  mascotName: "Eagle",
  people: [
    {
      slug: "jim-christian",
      firstName: "Jim",
      lastName: "Christian",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Could not revive BC basketball.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Fired mid-2021 season.",
        sourceUrl: "https://en.wikipedia.org/wiki/Jim_Christian",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2015-2021" },
      seasonStats: [
        { level: "COACHING", teamName: "Boston College Eagles", season: "2020-2021", yearLabel: "2020-2021", sortOrder: 213 },
      ],
      careerEvents: [],
    },
  ],
};
