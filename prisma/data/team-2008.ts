import { TeamFile } from "./types";

const team2008: TeamFile = {
  team: {
    slug: "duke-basketball-2008",
    name: "Duke Blue Devils",
    season: "2007-2008",
    sport: "Men's Basketball",
    school: "Duke University",
    conference: "ACC",
    accomplishment: "28-6, NCAA Second Round",
    logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/150.png",
    mascotName: "Blue Devil",
  },
  players: [
    {
      slug: "kyle-singler",
      firstName: "Kyle",
      lastName: "Singler",
      birthYear: 1988,
      hometown: "Medford, OR",
      highSchool: "South Medford High School, Medford, OR",
      isFeatured: false,
      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/202713.png",
      bio: "A four-year Duke legend who won the 2010 Final Four Most Outstanding Player award and set Duke records for games played (148) and games started (147). Ranks 4th in Duke history with 2,392 career points.",
      status: {
        occupationType: "RETIRED_ATHLETE",
        currentTitle: "Retired Basketball Player",
        location: "Medford, OR",
        statusNote:
          "A 2007 McDonald's All-American who became one of Duke's all-time greats. Won the 2010 NCAA Championship and was named Final Four Most Outstanding Player (20.0 PPG, 9.0 RPG in the Final Four). Set Duke records for games played (148) and started (147), with 2,392 career points (4th all-time), 1,007 rebounds (6th), and 4,887 minutes. Two-time First-Team All-ACC and two-time ACC Tournament MVP. Selected #33 overall by the Detroit Pistons in 2011. Had a 6-year NBA career with Detroit and Oklahoma City (356 games, 6.5 PPG). Announced retirement October 17, 2019. Inducted into the Medford Sports Hall of Fame in 2022. Has runs a youth basketball tournament in southern Oregon benefiting Kids Unlimited.",
        sourceUrl: "https://en.wikipedia.org/wiki/Kyle_Singler",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 12,
        position: "Forward",
        yearsAtSchool: "2007-2011",
        statsNote: "2010 Final Four MOP • 2,392 pts (4th all-time) • 148 games (Duke record) • 2x ACC Tournament MVP",
      },
      seasonStats: [
        { level: "HIGH_SCHOOL", teamName: "South Medford HS", season: "2006-07", yearLabel: "Senior", sortOrder: 101, pointsPerGame: 29.3, reboundsPerGame: 10.6 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2007-08", yearLabel: "Freshman", sortOrder: 201, gamesPlayed: 36, pointsPerGame: 13.3, reboundsPerGame: 5.9, assistsPerGame: 1.5, fieldGoalPct: 0.440 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2008-09", yearLabel: "Sophomore", sortOrder: 202, gamesPlayed: 37, pointsPerGame: 16.5, reboundsPerGame: 6.5, fieldGoalPct: 0.440 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2009-10", yearLabel: "Junior", sortOrder: 203, gamesPlayed: 40, pointsPerGame: 17.7, reboundsPerGame: 7.0, assistsPerGame: 2.5, fieldGoalPct: 0.440 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2010-11", yearLabel: "Senior", sortOrder: 204, gamesPlayed: 37, pointsPerGame: 16.9, reboundsPerGame: 6.8, assistsPerGame: 1.6 },
        { level: "PROFESSIONAL", teamName: "Detroit Pistons", season: "2012-15", yearLabel: "2012-15", sortOrder: 301, gamesPlayed: 240, pointsPerGame: 7.5, reboundsPerGame: 3.2 },
        { level: "PROFESSIONAL", teamName: "Oklahoma City Thunder", season: "2015-18", yearLabel: "2015-18", sortOrder: 302, gamesPlayed: 116, pointsPerGame: 4.3, reboundsPerGame: 2.3 },
      ],
      careerEvents: [
        { year: 2010, title: "Won NCAA Championship; named Final Four Most Outstanding Player", eventType: "CHAMPIONSHIP" },
        { year: 2011, title: "Selected #33 overall by the Detroit Pistons", eventType: "DRAFT" },
        { year: 2019, title: "Announced retirement from professional basketball", eventType: "RETIREMENT" },
        { year: 2022, title: "Inducted into Medford Sports Hall of Fame", eventType: "AWARD" },
      ],
    },
    {
      slug: "nolan-smith",
      firstName: "Nolan",
      lastName: "Smith",
      birthYear: 1988,
      hometown: "Upper Marlboro, MD",
      highSchool: "Oak Hill Academy, Mouth of Wilson, VA",
      isFeatured: false,
      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/202768.png",
      bio: "Son of the late Derek Smith (NBA player who died of cardiac arrest in 1996). Became the 2011 ACC Player of the Year and Consensus First-Team All-American at Duke before being drafted #21 overall. Now a college head coach at Tennessee State.",
      status: {
        occupationType: "COACH",
        currentTitle: "Head Coach",
        currentEmployer: "Tennessee State University",
        league: "NCAA Division I (Ohio Valley Conference)",
        location: "Nashville, TN",
        statusNote:
          "Son of late NBA player Derek Smith. Led Oak Hill Academy to a 40-1 record before four years at Duke, capped by winning the 2011 ACC Player of the Year and Consensus First-Team All-American as a senior (20.6 PPG, 4.5 RPG, 5.1 APG). Was part of the 2010 NCAA Championship team. Selected #21 overall by the Portland Trail Blazers in 2011 but his NBA career was brief (84 games, 3.3 PPG). Transitioned to coaching — Duke special assistant (2016), Duke assistant (2021), Louisville assistant (2022), Memphis assistant (2024). Named head coach of Tennessee State University in July 2025, winning the OVC Coach of the Year in his debut season.",
        sourceUrl: "https://en.wikipedia.org/wiki/Nolan_Smith",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 2,
        position: "Guard",
        yearsAtSchool: "2007-2011",
        statsNote: "2011 ACC POY • Consensus All-American • 2010 NCAA Champion • #21 pick • Now TSU head coach",
      },
      seasonStats: [
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2007-08", yearLabel: "Freshman", sortOrder: 201, gamesPlayed: 34, pointsPerGame: 5.9, reboundsPerGame: 1.5, assistsPerGame: 1.3 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2008-09", yearLabel: "Sophomore", sortOrder: 202, gamesPlayed: 37, pointsPerGame: 8.4, reboundsPerGame: 2.2, assistsPerGame: 1.7 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2009-10", yearLabel: "Junior", sortOrder: 203, gamesPlayed: 40, pointsPerGame: 17.4, reboundsPerGame: 3.5, assistsPerGame: 4.0 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2010-11", yearLabel: "Senior", sortOrder: 204, gamesPlayed: 37, pointsPerGame: 20.6, reboundsPerGame: 4.5, assistsPerGame: 5.1 },
        { level: "PROFESSIONAL", teamName: "Portland Trail Blazers", season: "2011-13", yearLabel: "2011-13", sortOrder: 301, gamesPlayed: 84, pointsPerGame: 3.3, assistsPerGame: 1.2 },
      ],
      careerEvents: [
        { year: 2010, title: "Won NCAA Championship with Duke", eventType: "CHAMPIONSHIP" },
        { year: 2011, title: "Named ACC Player of the Year; selected #21 overall by Portland", eventType: "DRAFT" },
        { year: 2016, title: "Joined Duke coaching staff as special assistant", eventType: "COACHING_HIRE" },
        { year: 2025, title: "Named head coach of Tennessee State University", eventType: "COACHING_HIRE" },
      ],
    },
    {
      slug: "taylor-king",
      firstName: "Taylor",
      lastName: "King",
      birthYear: 1988,
      hometown: "Fountain Valley, CA",
      highSchool: "Mater Dei High School, Santa Ana, CA",
      isFeatured: false,
      bio: "A 2007 McDonald's All-American who scored 3,216 career points in high school (3rd in California history). Left Duke after his freshman year and transferred to Villanova before playing professionally in Canada and Europe.",
      status: {
        occupationType: "RETIRED_ATHLETE",
        currentTitle: "Retired Basketball Player",
        statusNote:
          "Scored 3,216 career points at Mater Dei High School (3rd in California history) and was a 2007 McDonald's All-American. Averaged 5.9 PPG at Duke as a freshman, scoring 20 in his debut but leaving after one season. Transferred to Villanova (7.4 PPG, 5.3 RPG in 2009-10) before transferring again to Concordia (NAIA). Played professionally in Canada (London Lightning, Quebec Kebs) and England (Cheshire Phoenix, where he led the BBL in scoring at 20.1 PPG in 2014-15). Retired from basketball after the 2017-18 season.",
        sourceUrl: "https://en.wikipedia.org/wiki/Taylor_King",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 20,
        position: "Forward",
        yearsAtSchool: "2007-2008",
        statsNote: "McDonald's All-American • 3,216 pts at Mater Dei (3rd in CA history) • Left after freshman year",
      },
      seasonStats: [
        { level: "HIGH_SCHOOL", teamName: "Mater Dei High School", season: "2006-07", yearLabel: "Senior", sortOrder: 101, pointsPerGame: 28.0 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2007-08", yearLabel: "Freshman", sortOrder: 201, gamesPlayed: 34, pointsPerGame: 5.9, reboundsPerGame: 2.0, assistsPerGame: 0.6, threePointPct: 0.340 },
      ],
      careerEvents: [
        { year: 2008, title: "Left Duke after freshman year; transferred to Villanova", eventType: "OTHER" },
        { year: 2014, title: "Led British Basketball League in scoring (20.1 PPG) with Cheshire Phoenix", eventType: "AWARD" },
        { year: 2018, title: "Retired from professional basketball", eventType: "RETIREMENT" },
      ],
    },
  ],
};

export default team2008;
