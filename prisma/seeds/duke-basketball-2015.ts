import type { TeamSeed } from "./types";

export const dukeBasketball2015: TeamSeed = {
  slug: "duke-basketball-2015",
  name: "Duke Blue Devils",
  season: "2014-2015",
  sport: "Men's Basketball",
  school: "Duke University",
  conference: "ACC",
  accomplishment: "NCAA National Champions",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/150.png",
  mascotName: "Blue Devil",
  people: [
    // ── Players ──────────────────────────────────────────────────────────────
    {
      slug: "jahlil-okafor",
      firstName: "Jahlil",
      lastName: "Okafor",
      birthYear: 1995,
      hometown: "Chicago, IL",
      highSchool: "Whitney Young Magnet High School, Chicago, IL",
      isFeatured: true,
      bio: "One-and-done center who was the ACC Player of the Year and a consensus All-American in 2015. Selected #3 overall in the NBA Draft by the Philadelphia 76ers.",
      status: {
        occupationType: "ACTIVE_PRO_ATHLETE",
        currentTitle: "Professional Basketball Player",
        league: "B.League (Japan)",
        location: "Hokkaido, Japan",
        statusNote:
          "Selected 3rd overall by the Philadelphia 76ers in 2015 and named to the NBA All-Rookie Team after averaging 17.5 PPG. Spent eight seasons in the NBA with Philadelphia, Brooklyn, New Orleans, Detroit, Dallas, Houston, Phoenix, and Indiana before transitioning overseas. In early 2025 he signed a 10-day deal with the Indiana Pacers and finished the season with Levanga Hokkaido in Japan's B.League, where he is currently playing in 2025-26 — continuing a career that has taken him to Spain, Puerto Rico, China, and Japan.",
        sourceUrl: "https://en.wikipedia.org/wiki/Jahlil_Okafor",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 15,
        position: "Center",
        yearsAtSchool: "2014-2015",
        statsNote: "ACC Player of the Year • National Freshman of the Year • 67.6 FG%",
        gamesPlayed: 38,
        pointsPerGame: 17.3,
        reboundsPerGame: 8.5,
        assistsPerGame: 1.3,
      },
      seasonStats: [
        // High School
        { level: "HIGH_SCHOOL", teamName: "Whitney Young Magnet High School", season: "2013-14", yearLabel: "Senior", sortOrder: 101, pointsPerGame: 24.1, reboundsPerGame: 11.3 },
        // College
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2014-15", yearLabel: "Freshman", sortOrder: 201, gamesPlayed: 38, minutesPerGame: 27.4, pointsPerGame: 17.3, reboundsPerGame: 8.5, assistsPerGame: 1.3, stealsPerGame: 0.6, blocksPerGame: 1.4, fieldGoalPct: 0.676, freeThrowPct: 0.638 },
        // NBA
        { level: "PROFESSIONAL", teamName: "Philadelphia 76ers", season: "2015-16", yearLabel: "2015-16", sortOrder: 301, gamesPlayed: 53, minutesPerGame: 30.0, pointsPerGame: 17.5, reboundsPerGame: 7.0, assistsPerGame: 1.2, blocksPerGame: 1.2, fieldGoalPct: 0.508, freeThrowPct: 0.686 },
        { level: "PROFESSIONAL", teamName: "Philadelphia 76ers", season: "2016-17", yearLabel: "2016-17", sortOrder: 302, gamesPlayed: 50, minutesPerGame: 22.7, pointsPerGame: 11.1, reboundsPerGame: 4.7, blocksPerGame: 0.8, fieldGoalPct: 0.519 },
        { level: "PROFESSIONAL", teamName: "76ers / Nets", season: "2017-18", yearLabel: "2017-18", sortOrder: 303, gamesPlayed: 28, minutesPerGame: 12.4, pointsPerGame: 6.3, reboundsPerGame: 2.8, fieldGoalPct: 0.530 },
        { level: "PROFESSIONAL", teamName: "New Orleans Pelicans", season: "2018-19", yearLabel: "2018-19", sortOrder: 304, gamesPlayed: 59, minutesPerGame: 15.8, pointsPerGame: 8.2, reboundsPerGame: 4.7, assistsPerGame: 0.7, stealsPerGame: 0.3, blocksPerGame: 0.7, fieldGoalPct: 0.586, freeThrowPct: 0.663 },
        { level: "PROFESSIONAL", teamName: "Detroit Pistons", season: "2019-20", yearLabel: "2019-20", sortOrder: 305, gamesPlayed: 27, pointsPerGame: 5.4, reboundsPerGame: 2.4, assistsPerGame: 0.5, blocksPerGame: 0.2, fieldGoalPct: 0.616 },
      ],
      careerEvents: [
        {
          year: 2015,
          title: "Won NCAA National Championship with Duke",
          eventType: "CHAMPIONSHIP",
        },
        {
          year: 2015,
          title: "Selected #3 overall by the Philadelphia 76ers",
          eventType: "DRAFT",
          detail: "2015 NBA Draft",
        },
        {
          year: 2017,
          title: "Traded to the Brooklyn Nets",
          eventType: "TRADE",
        },
        {
          year: 2019,
          title: "Signed with the New Orleans Pelicans",
          eventType: "SIGNING",
        },
        {
          year: 2022,
          title: "Signed with Levanga Hokkaido (Japan B.League)",
          eventType: "SIGNING",
        },
      ],
    },
    {
      slug: "tyus-jones",
      firstName: "Tyus",
      lastName: "Jones",
      birthYear: 1996,
      hometown: "Apple Valley, MN",
      highSchool: "Apple Valley High School, Apple Valley, MN",

      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1626145.png",
      isFeatured: true,
      bio: "The heart of the 2015 championship team. Jones scored 23 points in the national title game against Wisconsin to earn Most Outstanding Player honors.",
      status: {
        occupationType: "ACTIVE_PRO_ATHLETE",
        currentTitle: "Point Guard",
        currentEmployer: "Denver Nuggets",
        league: "NBA",
        location: "Denver, CO",
        statusNote:
          "Selected 24th overall by the Charlotte Hornets in 2015 (traded to Minnesota), Jones became one of the NBA's most prized backup point guards over his decade-long career. He set the NBA's all-time single-season assists-to-turnover ratio record (7.04 in 2021-22) with the Memphis Grizzlies and holds the highest career ratio in league history. After stints with Washington and Phoenix, he signed with the Denver Nuggets off the buyout market in March 2026, continuing to prove himself as one of the most efficient playmakers in the league.",
        sourceUrl: "https://en.wikipedia.org/wiki/Tyus_Jones",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 5,
        position: "Point Guard",
        yearsAtSchool: "2014-2015",
        statsNote: "2015 NCAA Tournament Most Outstanding Player • 23 pts in championship game",
        gamesPlayed: 39,
        pointsPerGame: 11.8,
        reboundsPerGame: 3.5,
        assistsPerGame: 5.6,
      },
      seasonStats: [
        // High School
        { level: "HIGH_SCHOOL", teamName: "Apple Valley High School", season: "2013-14", yearLabel: "Senior", sortOrder: 101, pointsPerGame: 25.6, reboundsPerGame: 4.5, assistsPerGame: 8.1, fieldGoalPct: 0.580, threePointPct: 0.440, freeThrowPct: 0.870 },
        // College
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2014-15", yearLabel: "Freshman", sortOrder: 201, gamesPlayed: 39, minutesPerGame: 30.2, pointsPerGame: 11.8, reboundsPerGame: 3.5, assistsPerGame: 5.6, stealsPerGame: 1.5, fieldGoalPct: 0.468, threePointPct: 0.408, freeThrowPct: 0.844 },
        // NBA
        { level: "PROFESSIONAL", teamName: "Minnesota Timberwolves", season: "2015-16", yearLabel: "2015-16", sortOrder: 301, gamesPlayed: 37, minutesPerGame: 15.5, pointsPerGame: 4.2, reboundsPerGame: 1.3, assistsPerGame: 2.9, fieldGoalPct: 0.359, threePointPct: 0.302 },
        { level: "PROFESSIONAL", teamName: "Minnesota Timberwolves", season: "2016-17", yearLabel: "2016-17", sortOrder: 302, gamesPlayed: 60, minutesPerGame: 12.9, pointsPerGame: 3.5, reboundsPerGame: 1.1, assistsPerGame: 2.6, fieldGoalPct: 0.414, threePointPct: 0.356 },
        { level: "PROFESSIONAL", teamName: "Minnesota Timberwolves", season: "2017-18", yearLabel: "2017-18", sortOrder: 303, gamesPlayed: 82, minutesPerGame: 17.9, pointsPerGame: 5.1, reboundsPerGame: 1.6, assistsPerGame: 2.8, fieldGoalPct: 0.457, threePointPct: 0.349 },
        { level: "PROFESSIONAL", teamName: "Minnesota Timberwolves", season: "2018-19", yearLabel: "2018-19", sortOrder: 304, gamesPlayed: 68, minutesPerGame: 22.9, pointsPerGame: 6.9, reboundsPerGame: 2.0, assistsPerGame: 4.8, stealsPerGame: 1.2, fieldGoalPct: 0.415, threePointPct: 0.317 },
        { level: "PROFESSIONAL", teamName: "Memphis Grizzlies", season: "2019-20", yearLabel: "2019-20", sortOrder: 305, gamesPlayed: 65, minutesPerGame: 19.0, pointsPerGame: 7.4, reboundsPerGame: 1.6, assistsPerGame: 4.4, fieldGoalPct: 0.459, threePointPct: 0.379 },
        { level: "PROFESSIONAL", teamName: "Memphis Grizzlies", season: "2020-21", yearLabel: "2020-21", sortOrder: 306, gamesPlayed: 73, pointsPerGame: 8.7, reboundsPerGame: 2.4, assistsPerGame: 4.4, fieldGoalPct: 0.451, threePointPct: 0.392, freeThrowPct: 0.822 },
        { level: "PROFESSIONAL", teamName: "Memphis Grizzlies", season: "2021-22", yearLabel: "2021-22", sortOrder: 307, gamesPlayed: 73, minutesPerGame: 21.2, pointsPerGame: 8.7, reboundsPerGame: 2.4, assistsPerGame: 4.4, fieldGoalPct: 0.444, threePointPct: 0.390, freeThrowPct: 0.818 },
        { level: "PROFESSIONAL", teamName: "Memphis Grizzlies", season: "2022-23", yearLabel: "2022-23", sortOrder: 308, gamesPlayed: 80, minutesPerGame: 24.3, pointsPerGame: 10.3, reboundsPerGame: 2.5, assistsPerGame: 5.2, threePointPct: 0.371 },
        { level: "PROFESSIONAL", teamName: "Washington Wizards", season: "2023-24", yearLabel: "2023-24", sortOrder: 309, gamesPlayed: 66, minutesPerGame: 29.3, pointsPerGame: 12.0, reboundsPerGame: 2.7, assistsPerGame: 7.3, stealsPerGame: 1.1, fieldGoalPct: 0.490, threePointPct: 0.410, freeThrowPct: 0.800 },
        { level: "PROFESSIONAL", teamName: "Phoenix Suns", season: "2024-25", yearLabel: "2024-25", sortOrder: 310, gamesPlayed: 81, minutesPerGame: 26.8, pointsPerGame: 10.2, reboundsPerGame: 2.4, assistsPerGame: 5.3, threePointPct: 0.414, freeThrowPct: 0.895 },
      ],
      careerEvents: [
        {
          year: 2015,
          title: "Named Most Outstanding Player of the 2015 NCAA Tournament",
          eventType: "AWARD",
        },
        {
          year: 2015,
          title: "Selected #24 overall by the Charlotte Hornets, traded to Minnesota Timberwolves",
          eventType: "DRAFT",
        },
        {
          year: 2020,
          title: "Signed with the Memphis Grizzlies",
          eventType: "SIGNING",
        },
        {
          year: 2023,
          title: "Signed with the Phoenix Suns",
          eventType: "SIGNING",
        },
      ],
    },
    {
      slug: "grayson-allen",
      firstName: "Grayson",
      lastName: "Allen",
      birthYear: 1995,
      hometown: "Jacksonville, FL",
      highSchool: "Providence School, Jacksonville, FL",

      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1628960.png",
      isFeatured: true,
      bio: "Came off the bench as a freshman to score 16 points in the national championship game. Stayed at Duke all four years before entering the NBA Draft.",
      status: {
        occupationType: "ACTIVE_PRO_ATHLETE",
        currentTitle: "Shooting Guard",
        currentEmployer: "Phoenix Suns",
        league: "NBA",
        location: "Phoenix, AZ",
        statusNote:
          "Drafted 21st overall by the Utah Jazz in 2018 after a four-year Duke career that included the 2018 ACC Player of the Year award. Traded to Memphis and later signed with Milwaukee, where he won the 2021 NBA Championship alongside Giannis Antetokounmpo. Signed with the Phoenix Suns in 2022, where he has been a consistent three-point threat and defensive contributor. Over eight NBA seasons he has established himself as one of the sharpest shooters in the league.",
        sourceUrl: "https://en.wikipedia.org/wiki/Grayson_Allen",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 3,
        position: "Shooting Guard",
        yearsAtSchool: "2014-2018",
        statsNote: "16 pts in 2015 title game • 4-year starter • 2018 ACC Player of the Year",
      },
      seasonStats: [
        // High School
        { level: "HIGH_SCHOOL", teamName: "Providence School", season: "2013-14", yearLabel: "Senior", sortOrder: 101, pointsPerGame: 22.8, reboundsPerGame: 6.7, assistsPerGame: 4.2 },
        // College
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2014-15", yearLabel: "Freshman", sortOrder: 201, gamesPlayed: 35, pointsPerGame: 4.4, reboundsPerGame: 1.0, assistsPerGame: 0.4 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2015-16", yearLabel: "Sophomore", sortOrder: 202, gamesPlayed: 35, pointsPerGame: 21.6, reboundsPerGame: 4.6, assistsPerGame: 3.5 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2016-17", yearLabel: "Junior", sortOrder: 203, gamesPlayed: 35, pointsPerGame: 14.5, reboundsPerGame: 3.0, assistsPerGame: 3.5 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2017-18", yearLabel: "Senior", sortOrder: 204, gamesPlayed: 37, pointsPerGame: 15.5, reboundsPerGame: 3.3, assistsPerGame: 4.6 },
        // NBA
        { level: "PROFESSIONAL", teamName: "Utah Jazz", season: "2018-19", yearLabel: "2018-19", sortOrder: 301, gamesPlayed: 38, minutesPerGame: 11.0, pointsPerGame: 5.6 },
        { level: "PROFESSIONAL", teamName: "Memphis Grizzlies", season: "2019-20", yearLabel: "2019-20", sortOrder: 302, gamesPlayed: 50, minutesPerGame: 18.9, pointsPerGame: 10.6, reboundsPerGame: 2.2, assistsPerGame: 1.4, stealsPerGame: 0.9, fieldGoalPct: 0.418, threePointPct: 0.391, freeThrowPct: 0.868 },
        { level: "PROFESSIONAL", teamName: "Memphis Grizzlies", season: "2020-21", yearLabel: "2020-21", sortOrder: 303, minutesPerGame: 25.2, pointsPerGame: 10.6, reboundsPerGame: 3.2, assistsPerGame: 2.2, stealsPerGame: 0.9, fieldGoalPct: 0.419, threePointPct: 0.391, freeThrowPct: 0.868 },
        { level: "PROFESSIONAL", teamName: "Milwaukee Bucks", season: "2021-22", yearLabel: "2021-22", sortOrder: 304, gamesPlayed: 66, pointsPerGame: 11.1, reboundsPerGame: 3.4, assistsPerGame: 1.5, fieldGoalPct: 0.448, threePointPct: 0.409, freeThrowPct: 0.866 },
        { level: "PROFESSIONAL", teamName: "Milwaukee Bucks", season: "2022-23", yearLabel: "2022-23", sortOrder: 305, gamesPlayed: 72, pointsPerGame: 10.4, reboundsPerGame: 3.3, stealsPerGame: 0.9, threePointPct: 0.399, freeThrowPct: 0.905 },
        { level: "PROFESSIONAL", teamName: "Phoenix Suns", season: "2023-24", yearLabel: "2023-24", sortOrder: 306, gamesPlayed: 75, minutesPerGame: 33.5, pointsPerGame: 13.5, reboundsPerGame: 3.9, assistsPerGame: 3.0, fieldGoalPct: 0.499, threePointPct: 0.461, freeThrowPct: 0.878 },
        { level: "PROFESSIONAL", teamName: "Phoenix Suns", season: "2024-25", yearLabel: "2024-25", sortOrder: 307, gamesPlayed: 69, minutesPerGame: 24.1, pointsPerGame: 10.6, reboundsPerGame: 3.0, assistsPerGame: 2.1, threePointPct: 0.426 },
        { level: "PROFESSIONAL", teamName: "Phoenix Suns", season: "2025-26", yearLabel: "2025-26", sortOrder: 308, gamesPlayed: 45, pointsPerGame: 17.3, reboundsPerGame: 3.0, assistsPerGame: 4.1, fieldGoalPct: 0.407, threePointPct: 0.356, freeThrowPct: 0.859 },
      ],
      careerEvents: [
        {
          year: 2015,
          title: "Won NCAA National Championship with Duke",
          eventType: "CHAMPIONSHIP",
        },
        {
          year: 2018,
          title: "Selected #21 overall by the Utah Jazz",
          eventType: "DRAFT",
        },
        {
          year: 2021,
          title: "Won NBA Championship with the Milwaukee Bucks",
          eventType: "CHAMPIONSHIP",
        },
        {
          year: 2022,
          title: "Signed with the Phoenix Suns",
          eventType: "SIGNING",
        },
      ],
    },
    {
      slug: "justise-winslow",
      firstName: "Justise",
      lastName: "Winslow",
      birthYear: 1996,
      hometown: "Houston, TX",
      highSchool: "St. John's School, Houston, TX",
      isFeatured: false,
      bio: "A versatile defensive stopper who anchored Duke's perimeter defense during the championship run. Selected 10th overall by the Miami Heat.",
      status: {
        occupationType: "RETIRED_ATHLETE",
        currentTitle: "Retired NBA Player",
        statusNote:
          "Selected 10th overall by the Miami Heat in 2015, Winslow showed great promise as a versatile defender in Miami before a severe left hip injury in 2019 required surgery and derailed his career. He later played for Memphis, Portland, Indiana, and Toronto before a 2023 ankle surgery effectively ended his playing days. He earned over $45 million in career NBA earnings. As of early 2026 he has not played professionally and has made no formal retirement announcement, though his status remains uncertain.",
        sourceUrl: "https://en.wikipedia.org/wiki/Justise_Winslow",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 12,
        position: "Small Forward / Shooting Guard",
        yearsAtSchool: "2014-2015",
        statsNote: "10th overall pick, 2015 NBA Draft • Key defensive stopper",
        gamesPlayed: 39,
        pointsPerGame: 12.6,
        reboundsPerGame: 6.5,
        assistsPerGame: 2.1,
      },
      seasonStats: [
        // High School
        { level: "HIGH_SCHOOL", teamName: "St. John's School", season: "2013-14", yearLabel: "Senior", sortOrder: 101, pointsPerGame: 27.5, reboundsPerGame: 13.6, assistsPerGame: 3.5 },
        // College
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2014-15", yearLabel: "Freshman", sortOrder: 201, gamesPlayed: 39, minutesPerGame: 30.9, pointsPerGame: 12.6, reboundsPerGame: 6.5, assistsPerGame: 2.1, stealsPerGame: 1.4, blocksPerGame: 0.6, fieldGoalPct: 0.441, threePointPct: 0.341, freeThrowPct: 0.685 },
        // NBA
        { level: "PROFESSIONAL", teamName: "Miami Heat", season: "2015-16", yearLabel: "2015-16", sortOrder: 301, gamesPlayed: 73, minutesPerGame: 24.8, pointsPerGame: 5.0, reboundsPerGame: 4.0, assistsPerGame: 1.5, fieldGoalPct: 0.407, threePointPct: 0.231, freeThrowPct: 0.585 },
        { level: "PROFESSIONAL", teamName: "Miami Heat", season: "2016-17", yearLabel: "2016-17", sortOrder: 302, gamesPlayed: 29, minutesPerGame: 25.7, pointsPerGame: 6.5, reboundsPerGame: 4.5, assistsPerGame: 1.7, fieldGoalPct: 0.402, threePointPct: 0.292, freeThrowPct: 0.664 },
        { level: "PROFESSIONAL", teamName: "Miami Heat", season: "2017-18", yearLabel: "2017-18", sortOrder: 303, gamesPlayed: 54, minutesPerGame: 27.3, pointsPerGame: 7.7, reboundsPerGame: 5.5, assistsPerGame: 2.1, fieldGoalPct: 0.429, threePointPct: 0.301, freeThrowPct: 0.622 },
        { level: "PROFESSIONAL", teamName: "Miami Heat", season: "2018-19", yearLabel: "2018-19", sortOrder: 304, gamesPlayed: 75, minutesPerGame: 30.5, pointsPerGame: 11.0, reboundsPerGame: 5.7, assistsPerGame: 4.0, fieldGoalPct: 0.429, threePointPct: 0.310, freeThrowPct: 0.674 },
        { level: "PROFESSIONAL", teamName: "Heat / Grizzlies", season: "2019-20", yearLabel: "2019-20", sortOrder: 305, gamesPlayed: 11, minutesPerGame: 26.8, pointsPerGame: 9.6, reboundsPerGame: 5.4, assistsPerGame: 3.5, fieldGoalPct: 0.437, threePointPct: 0.304, freeThrowPct: 0.655 },
        { level: "PROFESSIONAL", teamName: "LA Clippers", season: "2020-21", yearLabel: "2020-21", sortOrder: 306, gamesPlayed: 37, minutesPerGame: 13.3, pointsPerGame: 4.2, reboundsPerGame: 3.6, assistsPerGame: 1.4, stealsPerGame: 0.6, blocksPerGame: 0.5, fieldGoalPct: 0.446, threePointPct: 0.180, freeThrowPct: 0.613 },
        { level: "PROFESSIONAL", teamName: "Portland Trail Blazers", season: "2022-23", yearLabel: "2022-23", sortOrder: 307, gamesPlayed: 29, minutesPerGame: 26.8, pointsPerGame: 6.8, reboundsPerGame: 5.0, assistsPerGame: 3.4, stealsPerGame: 1.0, blocksPerGame: 0.4, fieldGoalPct: 0.409, threePointPct: 0.310, freeThrowPct: 0.714 },
      ],
      careerEvents: [
        {
          year: 2015,
          title: "Selected #10 overall by the Miami Heat",
          eventType: "DRAFT",
        },
        {
          year: 2020,
          title: "Traded to the Memphis Grizzlies",
          eventType: "TRADE",
        },
        {
          year: 2022,
          title: "Retired from professional basketball due to injuries",
          eventType: "RETIREMENT",
        },
      ],
    },
    {
      slug: "quinn-cook",
      firstName: "Quinn",
      lastName: "Cook",
      birthYear: 1993,
      hometown: "Washington, D.C.",
      highSchool: "DeMatha Catholic High School, Hyattsville, MD",
      isFeatured: false,
      bio: "The senior captain who led Duke's locker room culture during the championship season. Despite going undrafted, Cook carved out a six-year NBA career and won two championships.",
      status: {
        occupationType: "RETIRED_ATHLETE",
        currentTitle: "Retired NBA Player",
        statusNote:
          "Went undrafted in 2015 and earned his NBA shot through the G-League, eventually joining the Golden State Warriors and winning a championship in 2018. Added a second ring with the Los Angeles Lakers in 2020. After his NBA run ended, he pursued overseas opportunities in Russia, China, Puerto Rico, and Saudi Arabia. As of early 2026, Cook is actively seeking his next professional opportunity, stating he wants to play for another five or six years — a testament to the relentless underdog spirit that defined his career.",
        sourceUrl: "https://en.wikipedia.org/wiki/Quinn_Cook",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 2,
        position: "Point Guard",
        yearsAtSchool: "2011-2015",
        statsNote: "Team captain • 4-year starter • 2015 ACC Tournament champion",
      },
      seasonStats: [
        // High School (Oak Hill Academy, VA — McDonald's All-American)
        { level: "HIGH_SCHOOL", teamName: "Oak Hill Academy", season: "2010-11", yearLabel: "Senior", sortOrder: 101, pointsPerGame: 19.1, assistsPerGame: 10.9 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2011-12", yearLabel: "Freshman", sortOrder: 201, gamesPlayed: 33, minutesPerGame: 11.7, pointsPerGame: 4.4, reboundsPerGame: 1.0, assistsPerGame: 1.9, fieldGoalPct: 0.405, threePointPct: 0.250, freeThrowPct: 0.776 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2012-13", yearLabel: "Sophomore", sortOrder: 202, gamesPlayed: 36, pointsPerGame: 11.7, reboundsPerGame: 3.8, assistsPerGame: 5.3, stealsPerGame: 1.4 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2013-14", yearLabel: "Junior", sortOrder: 203, gamesPlayed: 35, pointsPerGame: 11.6, reboundsPerGame: 2.2, assistsPerGame: 4.4, stealsPerGame: 1.3, fieldGoalPct: 0.432, threePointPct: 0.371, freeThrowPct: 0.827 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2014-15", yearLabel: "Senior", sortOrder: 204, gamesPlayed: 39, pointsPerGame: 15.3, reboundsPerGame: 3.4, assistsPerGame: 2.6, stealsPerGame: 1.0, threePointPct: 0.395, freeThrowPct: 0.891 },
        // NBA
        { level: "PROFESSIONAL", teamName: "Dallas Mavericks", season: "2016-17", yearLabel: "2016-17", sortOrder: 301, gamesPlayed: 14, minutesPerGame: 13.4, pointsPerGame: 5.6, reboundsPerGame: 0.5, assistsPerGame: 1.9, fieldGoalPct: 0.500, threePointPct: 0.423, freeThrowPct: 0.400 },
        { level: "PROFESSIONAL", teamName: "Golden State Warriors", season: "2017-18", yearLabel: "2017-18", sortOrder: 302, gamesPlayed: 33, minutesPerGame: 22.4, pointsPerGame: 9.5, reboundsPerGame: 2.5, assistsPerGame: 2.7, fieldGoalPct: 0.484, threePointPct: 0.442, freeThrowPct: 0.880 },
        { level: "PROFESSIONAL", teamName: "Golden State Warriors", season: "2018-19", yearLabel: "2018-19", sortOrder: 303, gamesPlayed: 74, minutesPerGame: 14.3, pointsPerGame: 6.9, reboundsPerGame: 2.1, assistsPerGame: 1.6, fieldGoalPct: 0.465, threePointPct: 0.405, freeThrowPct: 0.769 },
        { level: "PROFESSIONAL", teamName: "Los Angeles Lakers", season: "2019-20", yearLabel: "2019-20", sortOrder: 304, gamesPlayed: 44, minutesPerGame: 11.5, pointsPerGame: 5.1, reboundsPerGame: 1.2, assistsPerGame: 1.1, fieldGoalPct: 0.425, threePointPct: 0.365, freeThrowPct: 0.786 },
        { level: "PROFESSIONAL", teamName: "Lakers / Cavaliers", season: "2020-21", yearLabel: "2020-21", sortOrder: 305, gamesPlayed: 23, minutesPerGame: 6.8, pointsPerGame: 3.3, reboundsPerGame: 0.7, assistsPerGame: 0.8, fieldGoalPct: 0.426, threePointPct: 0.423, freeThrowPct: 0.875 },
      ],
      careerEvents: [
        {
          year: 2015,
          title: "Went undrafted; signed with G-League",
          eventType: "SIGNING",
        },
        {
          year: 2018,
          title: "Won NBA Championship with the Golden State Warriors",
          eventType: "CHAMPIONSHIP",
        },
        {
          year: 2020,
          title: "Won NBA Championship with the Los Angeles Lakers",
          eventType: "CHAMPIONSHIP",
        },
      ],
    },
    {
      slug: "amile-jefferson",
      firstName: "Amile",
      lastName: "Jefferson",
      birthYear: 1994,
      hometown: "Philadelphia, PA",
      highSchool: "Friends' Central School, Wynnewood, PA",
      isFeatured: false,
      bio: "A workhorse power forward who chose to return to Duke multiple times. After a brief NBA career, he transitioned into coaching.",
      status: {
        occupationType: "COACH",
        currentTitle: "Assistant Coach",
        currentEmployer: "Boston Celtics",
        league: "NBA",
        location: "Boston, MA",
        statusNote:
          "Appeared in a program-record 150 games at Duke across five seasons, winning the 2015 national title before a medical redshirt year. Went undrafted in 2017 and played for Orlando and Boston before retiring. Returned to Duke in 2021 as Director of Player Development under Jon Scheyer, then was hired as an assistant coach by the Boston Celtics in July 2023. Won an NBA championship as a Celtics assistant when Boston defeated Dallas in the 2024 Finals — the perfect full-circle to his 2015 NCAA title as a player.",
        sourceUrl: "https://en.wikipedia.org/wiki/Amile_Jefferson",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 21,
        position: "Power Forward",
        yearsAtSchool: "2013-2017",
        statsNote: "4x All-ACC Academic Team • Program-record 150 career games",
      },
      seasonStats: [
        { level: "HIGH_SCHOOL", teamName: "Friends' Central School", season: "2011-12", yearLabel: "Senior", sortOrder: 1, pointsPerGame: 16.5, reboundsPerGame: 10.2, blocksPerGame: 2.1 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2012-13", yearLabel: "Freshman", sortOrder: 201, gamesPlayed: 32, minutesPerGame: 12.7, pointsPerGame: 4.0, reboundsPerGame: 2.9, assistsPerGame: 0.5, stealsPerGame: 0.4, blocksPerGame: 0.5, fieldGoalPct: 0.620, freeThrowPct: 0.575 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2013-14", yearLabel: "Sophomore", sortOrder: 202, gamesPlayed: 35, minutesPerGame: 22.7, pointsPerGame: 6.5, reboundsPerGame: 6.9, assistsPerGame: 1.0, stealsPerGame: 0.5, blocksPerGame: 0.7, fieldGoalPct: 0.644, freeThrowPct: 0.575 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2014-15", yearLabel: "Junior", sortOrder: 203, gamesPlayed: 39, minutesPerGame: 21.3, pointsPerGame: 6.1, reboundsPerGame: 5.8, assistsPerGame: 0.9, stealsPerGame: 0.5, blocksPerGame: 0.8, fieldGoalPct: 0.631, freeThrowPct: 0.550 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2015-16", yearLabel: "Medical RS", sortOrder: 204, gamesPlayed: 9, minutesPerGame: 30.2, pointsPerGame: 11.4, reboundsPerGame: 10.3, assistsPerGame: 0.9, stealsPerGame: 0.5, blocksPerGame: 1.2, fieldGoalPct: 0.683, freeThrowPct: 0.575 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2016-17", yearLabel: "Senior", sortOrder: 205, gamesPlayed: 35, minutesPerGame: 29.7, pointsPerGame: 10.9, reboundsPerGame: 8.4, assistsPerGame: 1.5, stealsPerGame: 0.7, blocksPerGame: 1.9, fieldGoalPct: 0.613, freeThrowPct: 0.629 },
        // NBA (2017-18 was G-League only with MIN; Jefferson joined ORL 2018-19)
        { level: "PROFESSIONAL", teamName: "Orlando Magic", season: "2018-19", yearLabel: "2018-19", sortOrder: 301, gamesPlayed: 12, minutesPerGame: 5.7, pointsPerGame: 2.3, reboundsPerGame: 1.8, assistsPerGame: 0.3, fieldGoalPct: 0.625 },
        { level: "PROFESSIONAL", teamName: "Orlando Magic", season: "2019-20", yearLabel: "2019-20", sortOrder: 302, gamesPlayed: 18, minutesPerGame: 4.1, pointsPerGame: 0.8, reboundsPerGame: 1.3 },
      ],
      careerEvents: [
        {
          year: 2017,
          title: "Signed as undrafted free agent with the Orlando Magic",
          eventType: "SIGNING",
        },
        {
          year: 2019,
          title: "Signed with the Boston Celtics",
          eventType: "SIGNING",
        },
        {
          year: 2022,
          title: "Joined Duke as Director of Player Development under Coach Scheyer",
          eventType: "COACHING_HIRE",
        },
        {
          year: 2024,
          title: "Joined Boston Celtics coaching staff as assistant coach",
          eventType: "COACHING_HIRE",
        },
      ],
    },
    {
      slug: "matt-jones",
      firstName: "Matt",
      lastName: "Jones",
      birthYear: 1994,
      hometown: "Chatsworth, CA",
      highSchool: "DeSoto High School, DeSoto, TX",
      isFeatured: false,
      bio: "A sharpshooting guard who hit a clutch 4-of-7 from three-point range against Gonzaga in the Elite Eight. After a stint in the G-League and overseas, he transitioned to the business world.",
      status: {
        occupationType: "ENTREPRENEUR_BUSINESS",
        currentTitle: "Business Development",
        currentEmployer: "Total Quality Logistics",
        location: "Chicago, IL",
        statusNote:
          "Went undrafted in 2017 and played for the Stockton Kings (G-League) and professionally in Taiwan before transitioning to business. Worked as a commercial real estate broker at JLL in San Francisco and a senior associate at Alumni Ventures' Sports Fund before joining Total Quality Logistics in Chicago in late 2025. Remains connected to Duke athletics through his role on the Duke Alumni Board's Northern California chapter.",
        sourceUrl: "https://en.wikipedia.org/wiki/Matt_Jones_(basketball)",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 13,
        position: "Shooting Guard",
        yearsAtSchool: "2013-2017",
        statsNote: "4-7 from three in Elite Eight vs Gonzaga • South Region All-Tournament Team",
      },
      seasonStats: [
                { level: "HIGH_SCHOOL", teamName: "DeSoto High School", season: "2012-13", yearLabel: "Senior", sortOrder: 1, gamesPlayed: 32, pointsPerGame: 22.5, reboundsPerGame: 5.1, assistsPerGame: 3.2 },
{ level: "COLLEGE", teamName: "Duke Blue Devils", season: "2013-14", yearLabel: "Freshman", sortOrder: 201, gamesPlayed: 32, minutesPerGame: 7.3, pointsPerGame: 1.8, reboundsPerGame: 0.8, assistsPerGame: 0.2, fieldGoalPct: 0.294, threePointPct: 0.143 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2014-15", yearLabel: "Sophomore", sortOrder: 202, gamesPlayed: 39, pointsPerGame: 6.0, reboundsPerGame: 2.3, assistsPerGame: 1.0 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2015-16", yearLabel: "Junior", sortOrder: 203, gamesPlayed: 35, pointsPerGame: 10.4, reboundsPerGame: 2.5, assistsPerGame: 2.2, stealsPerGame: 1.0, threePointPct: 0.415 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2016-17", yearLabel: "Senior", sortOrder: 204, gamesPlayed: 37, minutesPerGame: 32.9, pointsPerGame: 7.0, reboundsPerGame: 2.8, assistsPerGame: 1.4, stealsPerGame: 1.7 },
      ],
      careerEvents: [
        {
          year: 2016,
          title: "Signed with the Reno Bighorns (NBA G-League)",
          eventType: "SIGNING",
        },
        {
          year: 2018,
          title: "Played professionally in Taiwan",
          eventType: "SIGNING",
        },
        {
          year: 2020,
          title: "Joined JLL as commercial real estate broker in Bay Area",
          eventType: "OTHER",
        },
      ],
    },
    {
      slug: "marshall-plumlee",
      firstName: "Marshall",
      lastName: "Plumlee",
      birthYear: 1992,
      hometown: "Warsaw, IN",
      highSchool: "Christ School, Arden, NC",
      isFeatured: true,
      bio: "The youngest of three Plumlee brothers to play at Duke. After his NBA career, Marshall took one of the most extraordinary paths in college basketball history — from the 75th Ranger Regiment to Harvard Business School to Blackstone.",
      status: {
        occupationType: "FRONT_OFFICE",
        currentTitle: "Tactical Opportunities",
        currentEmployer: "Blackstone",
        location: "New York, NY",
        statusNote:
          "After the NBA, commissioned into the U.S. Army and completed Ranger School (2019), then served as Battalion Mortar Platoon Leader with the 75th Ranger Regiment — one of the Army's most elite units — from December 2020 to May 2022. He enrolled at Harvard Business School and simultaneously interned at Blackstone's Tactical Opportunities group in 2022-23. Joined Blackstone full-time in August 2024 as an Associate in Tactical Opportunities and serves on the board of the Special Operations Warrior Foundation. His post-basketball arc — from the NBA to Army Ranger to Harvard to Blackstone — is one of the most remarkable in the history of college sports.",
        sourceUrl: "https://www.linkedin.com/in/marshallplumlee/",
        linkedInUrl: "https://www.linkedin.com/in/marshallplumlee/",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 42,
        position: "Center",
        yearsAtSchool: "2011-2016",
        statsNote: "Team captain • Brother of Mason and Miles Plumlee",
      },
      seasonStats: [
                { level: "HIGH_SCHOOL", teamName: "Christ School", season: "2011-12", yearLabel: "Senior", sortOrder: 1, gamesPlayed: 30, pointsPerGame: 12.4, reboundsPerGame: 9.8, blocksPerGame: 3.2 },
{ level: "COLLEGE", teamName: "Duke Blue Devils", season: "2012-13", yearLabel: "Freshman", sortOrder: 201, gamesPlayed: 25, minutesPerGame: 11.1, pointsPerGame: 1.5, reboundsPerGame: 1.8, assistsPerGame: 0.3 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2013-14", yearLabel: "Sophomore", sortOrder: 202, gamesPlayed: 27, pointsPerGame: 2.2, reboundsPerGame: 2.5, assistsPerGame: 0.4 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2014-15", yearLabel: "Junior", sortOrder: 203, gamesPlayed: 39, minutesPerGame: 9.6, pointsPerGame: 2.2, reboundsPerGame: 2.4, assistsPerGame: 0.3, fieldGoalPct: 0.760, freeThrowPct: 0.710 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2015-16", yearLabel: "Senior", sortOrder: 204, gamesPlayed: 36, minutesPerGame: 30.5, pointsPerGame: 8.3, reboundsPerGame: 8.6, assistsPerGame: 1.1, blocksPerGame: 1.6 },
        // NBA (career: 29 total games, 1.9 PPG, 2.3 RPG, 51.5% FG)
        { level: "PROFESSIONAL", teamName: "New York Knicks", season: "2016-17", yearLabel: "2016-17", sortOrder: 301, gamesPlayed: 21, minutesPerGame: 9.0, pointsPerGame: 1.9, reboundsPerGame: 2.3, fieldGoalPct: 0.515 },
        { level: "PROFESSIONAL", teamName: "Milwaukee Bucks", season: "2017-18", yearLabel: "2017-18", sortOrder: 302, gamesPlayed: 8, minutesPerGame: 6.5, pointsPerGame: 1.8, reboundsPerGame: 2.1, assistsPerGame: 0.3, fieldGoalPct: 0.515 },
      ],
      careerEvents: [
        {
          year: 2016,
          title: "Selected #44 overall by the New York Knicks",
          eventType: "DRAFT",
        },
        {
          year: 2017,
          title: "Commissioned as officer in the New York Army National Guard",
          eventType: "OTHER",
        },
        {
          year: 2019,
          title: "Completed U.S. Army Ranger School",
          eventType: "OTHER",
          detail: "One of the most elite military training courses in the world",
        },
        {
          year: 2020,
          title: "Served as Battalion Mortar Platoon Leader, 75th Ranger Regiment, U.S. Army",
          eventType: "OTHER",
          detail: "Fort Moore, Georgia — Dec 2020 to May 2022",
        },
        {
          year: 2022,
          title: "Enrolled at Harvard Business School; Blackstone Tactical Opportunities summer associate",
          eventType: "STUDENT",
        },
        {
          year: 2024,
          title: "Joined Blackstone full-time — Tactical Opportunities group",
          eventType: "OTHER",
          detail: "New York City",
        },
      ],
    },
    {
      slug: "semi-ojeleye",
      firstName: "Semi",
      lastName: "Ojeleye",
      birthYear: 1995,
      hometown: "Aurora, CO",
      highSchool: "Ottawa High School, Ottawa, KS",
      isFeatured: false,
      bio: "Transferred from Duke to SMU where he became a star before being drafted by the Boston Celtics. Has continued his professional career in European leagues.",
      status: {
        occupationType: "ACTIVE_PRO_ATHLETE",
        currentTitle: "Small Forward / Power Forward",
        currentEmployer: "Crvena zvezda (Red Star Belgrade)",
        league: "EuroLeague / ABA League",
        location: "Belgrade, Serbia",
        statusNote:
          "Transferred from Duke to SMU in December 2014, sat out a full year, then exploded as AAC Player of the Year in 2016-17 (18.9 PPG, 6.8 RPG). Selected 37th overall by the Boston Celtics in 2017, he played 284 NBA games with Boston, Milwaukee, and the LA Clippers. After his NBA run ended in 2022, he built a strong European career with Virtus Bologna in Italy and Valencia Basket in Spain before joining Crvena zvezda (Red Star Belgrade) in the EuroLeague and ABA League in 2025-26.",
        sourceUrl: "https://en.wikipedia.org/wiki/Semi_Ojeleye",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 32,
        position: "Small Forward",
        yearsAtSchool: "2013-2015",
        statsNote: "Transferred to SMU mid-sophomore year • 2017 AAC Player of the Year at SMU",
      },
      seasonStats: [
        // Duke College
                { level: "HIGH_SCHOOL", teamName: "Ottawa High School", season: "2012-13", yearLabel: "Senior", sortOrder: 1, gamesPlayed: 25, pointsPerGame: 24.6, reboundsPerGame: 8.2, assistsPerGame: 2.1 },
{ level: "COLLEGE", teamName: "Duke Blue Devils", season: "2013-14", yearLabel: "Freshman", sortOrder: 201, gamesPlayed: 17, minutesPerGame: 5.0, pointsPerGame: 1.6, reboundsPerGame: 0.9, assistsPerGame: 0.2, fieldGoalPct: 0.500, threePointPct: 0.571, freeThrowPct: 0.909 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2014-15", yearLabel: "Sophomore (partial)", sortOrder: 202, gamesPlayed: 6, minutesPerGame: 10.5, pointsPerGame: 3.0, reboundsPerGame: 2.3, assistsPerGame: 0.2 },
        // SMU College (redshirt year 2015-16; played 2016-17 as AAC Player of the Year)
        { level: "COLLEGE", teamName: "SMU Mustangs", season: "2016-17", yearLabel: "Jr. (SMU)", sortOrder: 203, gamesPlayed: 35, minutesPerGame: 34.1, pointsPerGame: 19.0, reboundsPerGame: 6.9, assistsPerGame: 1.5, stealsPerGame: 0.4, blocksPerGame: 0.4, fieldGoalPct: 0.487, threePointPct: 0.424, freeThrowPct: 0.785 },
        // NBA
        { level: "PROFESSIONAL", teamName: "Boston Celtics", season: "2017-18", yearLabel: "2017-18", sortOrder: 301, gamesPlayed: 73, minutesPerGame: 15.8, pointsPerGame: 2.7, reboundsPerGame: 2.2, assistsPerGame: 0.3, fieldGoalPct: 0.346, threePointPct: 0.320 },
        { level: "PROFESSIONAL", teamName: "Boston Celtics", season: "2018-19", yearLabel: "2018-19", sortOrder: 302, gamesPlayed: 56, minutesPerGame: 10.6, pointsPerGame: 3.3, reboundsPerGame: 1.5, assistsPerGame: 0.4, fieldGoalPct: 0.424, threePointPct: 0.315 },
        { level: "PROFESSIONAL", teamName: "Boston Celtics", season: "2019-20", yearLabel: "2019-20", sortOrder: 303, gamesPlayed: 69, minutesPerGame: 14.6, pointsPerGame: 3.4, reboundsPerGame: 2.1, assistsPerGame: 0.5, fieldGoalPct: 0.408, threePointPct: 0.378 },
        { level: "PROFESSIONAL", teamName: "Boston Celtics", season: "2020-21", yearLabel: "2020-21", sortOrder: 304, gamesPlayed: 56, minutesPerGame: 17.0, pointsPerGame: 4.6, reboundsPerGame: 2.6, assistsPerGame: 0.7, fieldGoalPct: 0.403, threePointPct: 0.367 },
        { level: "PROFESSIONAL", teamName: "Bucks / Clippers", season: "2021-22", yearLabel: "2021-22", sortOrder: 305, gamesPlayed: 20, minutesPerGame: 15.4, pointsPerGame: 2.9, reboundsPerGame: 2.9, fieldGoalPct: 0.255, threePointPct: 0.214 },
      ],
      careerEvents: [
        {
          year: 2016,
          title: "Transferred to SMU",
          eventType: "OTHER",
        },
        {
          year: 2017,
          title: "Selected #37 overall by the Boston Celtics",
          eventType: "DRAFT",
        },
        {
          year: 2021,
          title: "Signed with Virtus Bologna (EuroLeague)",
          eventType: "SIGNING",
        },
        {
          year: 2023,
          title: "Signed with Crvena zvezda (Red Star Belgrade)",
          eventType: "SIGNING",
        },
      ],
    },
    {
      slug: "rasheed-sulaimon",
      firstName: "Rasheed",
      lastName: "Sulaimon",
      birthYear: 1994,
      hometown: "Houston, TX",
      highSchool: "Strake Jesuit College Preparatory, Houston, TX",
      isFeatured: false,
      bio: "A key contributor in the first half of the 2014-15 season before being dismissed from the team in January 2015. He finished his Duke degree in three years, transferred to Maryland for one final season, and went on to build a decade-long professional career in Europe — winning a league MVP award along the way.",
      status: {
        occupationType: "ACTIVE_PRO_ATHLETE",
        currentTitle: "Shooting Guard",
        currentEmployer: "KK Buducnost VOLI",
        league: "ABA Liga",
        location: "Podgorica, Montenegro",
        statusNote:
          "Built a long and productive professional career in Europe since 2016. Played in France, Spain, Turkey, and Lithuania before landing in Montenegro. In 2024-25 won both the Montenegrin National Championship and National Cup with KK Budućnost VOLI, averaging 13.8 PPG on 47.6% shooting in 18 ABA Liga games.",
        sourceUrl: "https://en.wikipedia.org/wiki/Rasheed_Sulaimon",
        linkedInUrl: "https://www.linkedin.com/in/rasheed-sulaimon-3aa0b515a/",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 14,
        position: "Shooting Guard",
        yearsAtSchool: "2012-2015",
        statsNote:
          "Dismissed from team January 2015 • 2012 McDonald's All-American • Transferred to Maryland (2015-16 All-Big Ten honorable mention, 11.3 ppg)",
      },
      seasonStats: [
        // High School
        { level: "HIGH_SCHOOL", teamName: "Strake Jesuit College Preparatory", season: "2011-12", yearLabel: "Senior", sortOrder: 101, gamesPlayed: 31, pointsPerGame: 27.4, reboundsPerGame: 6.4, assistsPerGame: 3.6 },
        // Duke College
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2012-13", yearLabel: "Freshman", sortOrder: 201, gamesPlayed: 36, pointsPerGame: 11.6, reboundsPerGame: 3.4, assistsPerGame: 1.9, threePointPct: 0.371, freeThrowPct: 0.802 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2013-14", yearLabel: "Sophomore", sortOrder: 202, gamesPlayed: 34, pointsPerGame: 9.9, reboundsPerGame: 2.4, assistsPerGame: 2.4, fieldGoalPct: 0.402, threePointPct: 0.410, freeThrowPct: 0.768 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2014-15", yearLabel: "Junior (partial)", sortOrder: 203, gamesPlayed: 20, minutesPerGame: 19.3, pointsPerGame: 7.5, reboundsPerGame: 2.0, assistsPerGame: 1.8, fieldGoalPct: 0.413 },
        // Maryland College
        { level: "COLLEGE", teamName: "Maryland Terrapins", season: "2015-16", yearLabel: "Sr. (Maryland)", sortOrder: 204, gamesPlayed: 36, minutesPerGame: 32.9, pointsPerGame: 11.3, reboundsPerGame: 3.5, assistsPerGame: 3.5, threePointPct: 0.425 },
        // Professional — G-League then European career
        { level: "PROFESSIONAL", teamName: "Greensboro Swarm (NBA G-League)", season: "2016-17", yearLabel: "2016-17", sortOrder: 301, gamesPlayed: 46, pointsPerGame: 12.7, reboundsPerGame: 3.0, assistsPerGame: 2.7 },
        { level: "PROFESSIONAL", teamName: "JDA Dijon (France LNB Pro A)", season: "2017-18", yearLabel: "2017-18", sortOrder: 302, gamesPlayed: 32, pointsPerGame: 11.2, reboundsPerGame: 2.8, assistsPerGame: 2.1 },
        { level: "PROFESSIONAL", teamName: "Levallois Metropolitans (France LNB Pro A)", season: "2018-19", yearLabel: "2018-19", sortOrder: 303, gamesPlayed: 34, pointsPerGame: 12.4, reboundsPerGame: 3.1, assistsPerGame: 2.5 },
        { level: "PROFESSIONAL", teamName: "Zaragoza (Spain ACB)", season: "2019-20", yearLabel: "2019-20", sortOrder: 304, gamesPlayed: 26, pointsPerGame: 11.8, reboundsPerGame: 3.0, assistsPerGame: 2.3, fieldGoalPct: 0.453, threePointPct: 0.378 },
        { level: "PROFESSIONAL", teamName: "JL Bourg (France LNB Pro A)", season: "2021-22", yearLabel: "2021-22", sortOrder: 305, gamesPlayed: 30, pointsPerGame: 15.2, reboundsPerGame: 4.1, assistsPerGame: 2.8, fieldGoalPct: 0.476, threePointPct: 0.392 },
        { level: "PROFESSIONAL", teamName: "Konyaspor (Turkey BSL)", season: "2022-23", yearLabel: "2022-23", sortOrder: 306, gamesPlayed: 23, pointsPerGame: 18.0, reboundsPerGame: 4.7, assistsPerGame: 5.2 },
        { level: "PROFESSIONAL", teamName: "KK Budućnost VOLI (Montenegro ABA Liga)", season: "2024-25", yearLabel: "2024-25", sortOrder: 307, gamesPlayed: 18, pointsPerGame: 13.8, reboundsPerGame: 3.5, assistsPerGame: 2.0, fieldGoalPct: 0.476 },
      ],
      careerEvents: [
        {
          year: 2015,
          title: "Dismissed from Duke basketball team",
          eventType: "OTHER",
        },
        {
          year: 2015,
          title: "Transferred to University of Maryland; earned All-Big Ten honorable mention averaging 11.3 ppg",
          eventType: "OTHER",
        },
        {
          year: 2016,
          title: "Signed with Greensboro Swarm (NBA G-League)",
          eventType: "SIGNING",
        },
        {
          year: 2017,
          title: "Signed with JDA Dijon Bourgogne (France, Pro A)",
          eventType: "SIGNING",
        },
        {
          year: 2020,
          title: "Signed with Baloncesto Zaragoza (Spain, Liga ACB)",
          eventType: "SIGNING",
        },
        {
          year: 2022,
          title: "Signed with JL Bourg en Bresse (France, Pro A)",
          eventType: "SIGNING",
        },
        {
          year: 2022,
          title: "Won league MVP award playing professionally overseas",
          eventType: "AWARD",
        },
        {
          year: 2023,
          title: "Signed with Konyaspor Basketball (Turkey, BSL)",
          eventType: "SIGNING",
        },
        {
          year: 2024,
          title: "Signed with KK Budućnost VOLI (Montenegro, ABA Liga)",
          eventType: "SIGNING",
        },
        {
          year: 2025,
          title: "Won Montenegrin National Championship and National Cup with KK Budućnost VOLI",
          eventType: "CHAMPIONSHIP",
          detail: "13.8 PPG, 47.6% FG in 18 ABA Liga games",
        },
      ],
    },
    {
      slug: "brennan-besser",
      firstName: "Brennan",
      lastName: "Besser",
      birthYear: 1996,
      hometown: "Chicago, IL",
      highSchool: "Latin School of Chicago, Chicago, IL",
      isFeatured: false,
      bio: "A walk-on guard who was part of the 2015 championship roster. After Duke, Besser channeled the walk-on spirit into life — founding 'Walk On! America,' a charity supporting people with intellectual and developmental disabilities (IDD), inspired by his sister Jacqueline. He completed a 3,400-mile cross-country bike ride in 69 days raising over $343,000 for the IDD community.",
      status: {
        occupationType: "ENTREPRENEUR_BUSINESS",
        currentTitle: "Director of Strategic Partnerships and Innovation",
        currentEmployer: "Intersport / ECO STAR LLC",
        location: "Chicago, IL",
        statusNote:
          "Founded 'Walk On! America,' a charity for the IDD community inspired by his sister Jacqueline, who has autism — completing a 3,400-mile cross-country bike ride raising over $343,000. Previously worked at Intersport on NFL and sports marketing. Now serves as CEO of Ecostar Collaborative.",
        sourceUrl:
          "https://www.espn.com/mens-college-basketball/story/_/id/24123073/duke-blue-devils-brennan-besser-completes-bike-ride-america",
        linkedInUrl: "https://www.linkedin.com/in/brennan-besser-10a7921a7/",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 53,
        position: "Guard",
        yearsAtSchool: "2014-2018",
        statsNote: "Walk-on • Part of 2015 national championship team • Political science major",
      },
            seasonStats: [
        { level: "HIGH_SCHOOL", teamName: "Latin School of Chicago", season: "2013-14", yearLabel: "Senior", sortOrder: 1, pointsPerGame: 14.2, reboundsPerGame: 3.5, assistsPerGame: 2.8 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2014-15", yearLabel: "Freshman", sortOrder: 201, gamesPlayed: 1, pointsPerGame: 0.0, reboundsPerGame: 0.0, assistsPerGame: 0.0 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2015-16", yearLabel: "Sophomore", sortOrder: 202, gamesPlayed: 3, pointsPerGame: 0.3 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2016-17", yearLabel: "Junior", sortOrder: 203, gamesPlayed: 5, pointsPerGame: 0.8 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2017-18", yearLabel: "Senior", sortOrder: 204, gamesPlayed: 8, pointsPerGame: 1.1 },
      ],
      careerEvents: [
        {
          year: 2015,
          title: "Won NCAA National Championship with Duke",
          eventType: "CHAMPIONSHIP",
        },
        {
          year: 2018,
          title: "Founded 'Walk On! America' — charity for the IDD community inspired by his sister Jacqueline",
          eventType: "OTHER",
        },
        {
          year: 2018,
          title: "Completed 3,400-mile cross-country bike ride in 69 days, raising over $343,000 for IDD organizations",
          eventType: "OTHER",
        },
        {
          year: 2019,
          title: "Joined Intersport in Chicago as sports business professional",
          eventType: "OTHER",
        },
        {
          year: 2024,
          title: "Became CEO of Ecostar Collaborative",
          eventType: "OTHER",
        },
      ],
    },

    {
      slug: "sean-obi",
      firstName: "Sean",
      lastName: "Obi",
      birthYear: 1994,
      hometown: "Kaduna, Nigeria",
      highSchool: "Greens Farms Academy, Westport, CT",
      isFeatured: false,
      bio: "A 6'9\" transfer from Rice who joined Duke for the 2014-15 championship season but sat out due to NCAA transfer rules. At Rice he averaged 11.4 points and a Conference USA-leading 9.3 rebounds as a freshman. After earning his sociology degree at Duke he graduate-transferred to Maryland for one final season.",
      status: {
        occupationType: "OTHER",
        currentTitle: "Former College Basketball Player",
        statusNote:
          "Sat out the 2014-15 championship season due to NCAA transfer rules, then played limited minutes in 2015-16 before a knee injury ended his 2016-17 season. Graduate-transferred to Maryland (2017-18) to play one final season under coach Mark Turgeon. Was not drafted. Post-basketball career not publicly documented; earned a sociology degree with a marketing minor from Duke.",
        sourceUrl: "https://goduke.com/sports/mens-basketball/roster/sean-obi/4420",
        linkedInUrl: "https://www.linkedin.com/in/sean-obi-4949bb141",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 34,
        position: "Forward / Center",
        yearsAtSchool: "2014-2017",
        statsNote:
          "Sat out 2014-15 (transfer rules) • 6'9\", 270 lbs • C-USA All-Freshman at Rice (11.4 ppg, 9.3 rpg) • Graduate transfer to Maryland (2017-18)",
      },
      seasonStats: [
        { level: "HIGH_SCHOOL", teamName: "Greens Farms Academy", season: "2012-13", yearLabel: "Senior", sortOrder: 1, pointsPerGame: 18.5, reboundsPerGame: 12.0, blocksPerGame: 2.8 },
        // Rice — Conference USA All-Freshman (led CUSA in rebounding)
        { level: "COLLEGE", teamName: "Rice Owls", season: "2013-14", yearLabel: "Freshman", sortOrder: 201, gamesPlayed: 30, minutesPerGame: 26.4, pointsPerGame: 11.4, reboundsPerGame: 9.3, fieldGoalPct: 0.591 },
        // Duke — sat out 2014-15 per NCAA transfer rules; played limited minutes 2015-16 before knee injury
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2015-16", yearLabel: "Sophomore (Transfer)", sortOrder: 202, gamesPlayed: 10, pointsPerGame: 0.5, reboundsPerGame: 1.0 },
      ],
      careerEvents: [
        {
          year: 2014,
          title: "Transferred from Rice University to Duke; sat out 2014-15 per NCAA transfer rules",
          eventType: "OTHER",
        },
        {
          year: 2015,
          title: "Part of Duke's national championship roster (non-playing)",
          eventType: "CHAMPIONSHIP",
        },
        {
          year: 2017,
          title: "Graduate transfer to University of Maryland for final season of eligibility",
          eventType: "OTHER",
        },
      ],
    },
    {
      slug: "sean-kelly",
      firstName: "Sean",
      lastName: "Kelly",
      birthYear: 1993,
      hometown: "Raleigh, NC",
      highSchool: "Ravenscroft School, Raleigh, NC",
      isFeatured: false,
      bio: "A walk-on guard who spent three years as a student manager before earning a spot on the roster his senior year — never having played varsity basketball in high school. His father played at Yale and professionally in France; his older brother Ryan Kelly played at Duke from 2010-13. One of the most unique paths to a national championship in college basketball history.",
      status: {
        occupationType: "OTHER",
        currentTitle: "Admissions Professional",
        currentEmployer: "Carlthorp School",
        location: "Santa Monica, CA",
        statusNote:
          "After graduating from Duke, Kelly worked in admissions at Carlthorp School in Santa Monica, CA, where he became an early advocate for student social media literacy. Also an accomplished distance runner — completed the NYC Marathon and has shared training advice for beginner runners balancing family and work life.",
        sourceUrl:
          "https://thesocialinstitute.com/blog/qa-sean-kelly/",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 42,
        position: "Guard",
        yearsAtSchool: "2011-2015",
        statsNote:
          "Walk-on (former 3-year student manager) • Never played varsity hoops in high school • Brother of Ryan Kelly (Duke 2010-13)",
      },
            seasonStats: [
        { level: "HIGH_SCHOOL", teamName: "Ravenscroft School", season: "Senior", yearLabel: "Senior", sortOrder: 1, pointsPerGame: 5.6, reboundsPerGame: 0.1, assistsPerGame: 2.1 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2014-15", yearLabel: "Senior", sortOrder: 201, gamesPlayed: 8, pointsPerGame: 0.4, reboundsPerGame: 0.1, assistsPerGame: 0.1 },
      ],
      careerEvents: [
        {
          year: 2015,
          title: "Won NCAA National Championship with Duke as a walk-on",
          eventType: "CHAMPIONSHIP",
        },
        {
          year: 2015,
          title: "Joined Carlthorp School (Santa Monica, CA) as admissions associate",
          eventType: "OTHER",
        },
        {
          year: 2023,
          title: "Completed NYC Marathon while working full-time and raising a family",
          eventType: "OTHER",
        },
      ],
    },
    {
      slug: "nick-pagliuca",
      firstName: "Nick",
      lastName: "Pagliuca",
      birthYear: 1994,
      hometown: "Weston, MA",
      highSchool: "Milton Academy, Milton, MA",
      isFeatured: false,
      bio: "A walk-on guard and computer science major who turned down smaller D1 programs to walk on at Duke. His father Steve Pagliuca is a co-owner of the Boston Celtics and a 1977 Duke grad. Nick won the Deryl Hart Award (team's top scholar-athlete), was a National Merit Scholar, and interned at Apple — then went on to Harvard Business School and Palantir Technologies.",
      status: {
        occupationType: "ENTREPRENEUR_BUSINESS",
        currentTitle: "Attorney",
        currentEmployer: "Gill & Chamas LLC",
        location: "Woodbridge, NJ",
        statusNote:
          "After winning a national championship ring and earning the Deryl Hart Award (Duke's top scholar-athlete honor) as a computer science major, Pagliuca attended Harvard Business School. He joined Palantir Technologies in New York, working in data analytics and AI. His father Steve Pagliuca is co-founder of Bain Capital and a Boston Celtics co-owner; his brother Joe was also a Duke walk-on. Nick's path from Milton Academy to Duke computer science to HBS to Palantir reflects exactly the kind of excellence off the court that Coach K prized.",
        sourceUrl: "https://www.bostonglobe.com/metro/regionals/west/2015/04/16/campus-angle-nick-pagliuca-weston-duke-university-basketball/gC95R2oHaumOwKDWsNYjuJ/story.html",
        linkedInUrl: "https://www.linkedin.com/in/nick-pagliuca-6b0a62b3/",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 45,
        position: "Guard",
        yearsAtSchool: "2013-2017",
        statsNote:
          "Walk-on • Computer science major • National Merit Scholar • Deryl Hart Award (top scholar-athlete) • Played in 29 career games including 2015 NCAA Tournament",
      },
            seasonStats: [
        { level: "HIGH_SCHOOL", teamName: "Milton Academy", season: "2012-13", yearLabel: "Senior", sortOrder: 1, pointsPerGame: 12.0, reboundsPerGame: 2.5, assistsPerGame: 3.0 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2013-14", yearLabel: "Freshman", sortOrder: 201, gamesPlayed: 4, pointsPerGame: 0.0 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2014-15", yearLabel: "Sophomore", sortOrder: 202, gamesPlayed: 10, pointsPerGame: 0.0, reboundsPerGame: 0.4 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2015-16", yearLabel: "Junior", sortOrder: 203, gamesPlayed: 8, pointsPerGame: 0.2 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2016-17", yearLabel: "Senior", sortOrder: 204, gamesPlayed: 7, pointsPerGame: 0.4 },
      ],
      careerEvents: [
        {
          year: 2015,
          title: "Won NCAA National Championship with Duke; played in two NCAA Tournament games including semifinal vs Michigan State",
          eventType: "CHAMPIONSHIP",
        },
        {
          year: 2015,
          title: "Interned at Apple in Palo Alto as computer science major",
          eventType: "OTHER",
        },
        {
          year: 2017,
          title: "Won Deryl Hart Award — Duke basketball's top scholar-athlete",
          eventType: "AWARD",
        },
        {
          year: 2018,
          title: "Enrolled at Harvard Business School",
          eventType: "STUDENT",
        },
        {
          year: 2020,
          title: "Joined Palantir Technologies in New York as software/data professional",
          eventType: "OTHER",
        },
      ],
    },

    // ── Coaches ──────────────────────────────────────────────────────────────
    {
      slug: "mike-krzyzewski",
      firstName: "Mike",
      lastName: "Krzyzewski",
      birthYear: 1947,
      hometown: "Chicago, IL",
      highSchool: "Archbishop Weber High School, Chicago, IL",
      isFeatured: true,
      bio: "Known simply as \"Coach K,\" Krzyzewski is the most decorated coach in college basketball history. He won five national championships at Duke and coached the U.S. Olympic team to three gold medals. He retired in 2022 as the all-time wins leader in Division I men's basketball.",
      status: {
        occupationType: "RETIRED_COACH",
        currentTitle: "Special Advisor to the NBA Commissioner",
        currentEmployer: "NBA",
        location: "Durham, NC",
        statusNote:
          "Retired after the 2021-22 season with 1,202 career wins — the all-time Division I record — and five national championships (1991, 1992, 2001, 2010, 2015). In 2023, he was appointed Special Advisor to NBA Commissioner Adam Silver, attending league meetings and counseling executives. He teaches leadership at Duke's Fuqua School of Business, hosts his long-running 'Basketball and Beyond with Coach K' show on SiriusXM, and was inducted into the FIBA Hall of Fame in May 2025.",
        sourceUrl: "https://en.wikipedia.org/wiki/Mike_Krzyzewski",
      },
      membership: {
        role: "HEAD_COACH",
        yearsAtSchool: "1980-2022",
        statsNote:
          "5 NCAA Championships • 1,202 career wins (all-time Division I record) • Naismith Basketball Hall of Fame",
      },
      seasonStats: [
        // Army coaching record (1975-80) — 73-59 total
        { level: "COACHING", teamName: "Army Black Knights", season: "1975-76", yearLabel: "1975-76", sortOrder: 401, wins: 11, losses: 14 },
        { level: "COACHING", teamName: "Army Black Knights", season: "1976-77", yearLabel: "1976-77", sortOrder: 402, wins: 20, losses: 8, tournamentResult: "ECAC" },
        { level: "COACHING", teamName: "Army Black Knights", season: "1977-78", yearLabel: "1977-78", sortOrder: 403, wins: 19, losses: 9, tournamentResult: "NIT" },
        { level: "COACHING", teamName: "Army Black Knights", season: "1978-79", yearLabel: "1978-79", sortOrder: 404, wins: 12, losses: 14 },
        { level: "COACHING", teamName: "Army Black Knights", season: "1979-80", yearLabel: "1979-80", sortOrder: 405, wins: 11, losses: 14 },
        // Duke coaching record (1980-2022) — 1,129-309 in 42 seasons; 5 titles
        { level: "COACHING", teamName: "Duke Blue Devils", season: "1980-81", yearLabel: "1980-81", sortOrder: 411, wins: 17, losses: 13, tournamentResult: "NIT" },
        { level: "COACHING", teamName: "Duke Blue Devils", season: "1981-82", yearLabel: "1981-82", sortOrder: 412, wins: 10, losses: 17 },
        { level: "COACHING", teamName: "Duke Blue Devils", season: "1982-83", yearLabel: "1982-83", sortOrder: 413, wins: 11, losses: 17 },
        { level: "COACHING", teamName: "Duke Blue Devils", season: "1983-84", yearLabel: "1983-84", sortOrder: 414, wins: 24, losses: 10, tournamentResult: "NCAA R32" },
        { level: "COACHING", teamName: "Duke Blue Devils", season: "1984-85", yearLabel: "1984-85", sortOrder: 415, wins: 23, losses: 8, tournamentResult: "NCAA R64" },
        { level: "COACHING", teamName: "Duke Blue Devils", season: "1985-86", yearLabel: "1985-86", sortOrder: 416, wins: 37, losses: 3, tournamentResult: "NCAA Runner-Up" },
        { level: "COACHING", teamName: "Duke Blue Devils", season: "1986-87", yearLabel: "1986-87", sortOrder: 417, wins: 24, losses: 9, tournamentResult: "NCAA Sweet 16" },
        { level: "COACHING", teamName: "Duke Blue Devils", season: "1987-88", yearLabel: "1987-88", sortOrder: 418, wins: 28, losses: 7, tournamentResult: "NCAA Final Four" },
        { level: "COACHING", teamName: "Duke Blue Devils", season: "1988-89", yearLabel: "1988-89", sortOrder: 419, wins: 28, losses: 8, tournamentResult: "NCAA Final Four" },
        { level: "COACHING", teamName: "Duke Blue Devils", season: "1989-90", yearLabel: "1989-90", sortOrder: 420, wins: 29, losses: 9, tournamentResult: "NCAA Runner-Up" },
        { level: "COACHING", teamName: "Duke Blue Devils", season: "1990-91", yearLabel: "1990-91", sortOrder: 421, wins: 32, losses: 7, tournamentResult: "NCAA Champion 🏆" },
        { level: "COACHING", teamName: "Duke Blue Devils", season: "1991-92", yearLabel: "1991-92", sortOrder: 422, wins: 34, losses: 2, tournamentResult: "NCAA Champion 🏆" },
        { level: "COACHING", teamName: "Duke Blue Devils", season: "1992-93", yearLabel: "1992-93", sortOrder: 423, wins: 24, losses: 8, tournamentResult: "NCAA R32" },
        { level: "COACHING", teamName: "Duke Blue Devils", season: "1993-94", yearLabel: "1993-94", sortOrder: 424, wins: 28, losses: 6, tournamentResult: "NCAA Runner-Up" },
        { level: "COACHING", teamName: "Duke Blue Devils", season: "1994-95", yearLabel: "1994-95", sortOrder: 425, wins: 13, losses: 18 },
        { level: "COACHING", teamName: "Duke Blue Devils", season: "1995-96", yearLabel: "1995-96", sortOrder: 426, wins: 18, losses: 13, tournamentResult: "NCAA R32" },
        { level: "COACHING", teamName: "Duke Blue Devils", season: "1996-97", yearLabel: "1996-97", sortOrder: 427, wins: 24, losses: 9, tournamentResult: "NCAA Sweet 16" },
        { level: "COACHING", teamName: "Duke Blue Devils", season: "1997-98", yearLabel: "1997-98", sortOrder: 428, wins: 32, losses: 4, tournamentResult: "NCAA Elite Eight" },
        { level: "COACHING", teamName: "Duke Blue Devils", season: "1998-99", yearLabel: "1998-99", sortOrder: 429, wins: 37, losses: 2, tournamentResult: "NCAA Runner-Up" },
        { level: "COACHING", teamName: "Duke Blue Devils", season: "1999-00", yearLabel: "1999-00", sortOrder: 430, wins: 29, losses: 5, tournamentResult: "NCAA Sweet 16" },
        { level: "COACHING", teamName: "Duke Blue Devils", season: "2000-01", yearLabel: "2000-01", sortOrder: 431, wins: 35, losses: 4, tournamentResult: "NCAA Champion 🏆" },
        { level: "COACHING", teamName: "Duke Blue Devils", season: "2001-02", yearLabel: "2001-02", sortOrder: 432, wins: 31, losses: 4, tournamentResult: "NCAA Sweet 16" },
        { level: "COACHING", teamName: "Duke Blue Devils", season: "2002-03", yearLabel: "2002-03", sortOrder: 433, wins: 26, losses: 7, tournamentResult: "NCAA R32" },
        { level: "COACHING", teamName: "Duke Blue Devils", season: "2003-04", yearLabel: "2003-04", sortOrder: 434, wins: 31, losses: 6, tournamentResult: "NCAA Elite Eight" },
        { level: "COACHING", teamName: "Duke Blue Devils", season: "2004-05", yearLabel: "2004-05", sortOrder: 435, wins: 27, losses: 6, tournamentResult: "NCAA Sweet 16" },
        { level: "COACHING", teamName: "Duke Blue Devils", season: "2005-06", yearLabel: "2005-06", sortOrder: 436, wins: 32, losses: 4, tournamentResult: "NCAA Elite Eight" },
        { level: "COACHING", teamName: "Duke Blue Devils", season: "2006-07", yearLabel: "2006-07", sortOrder: 437, wins: 22, losses: 11, tournamentResult: "NCAA R64" },
        { level: "COACHING", teamName: "Duke Blue Devils", season: "2007-08", yearLabel: "2007-08", sortOrder: 438, wins: 28, losses: 6, tournamentResult: "NCAA R32" },
        { level: "COACHING", teamName: "Duke Blue Devils", season: "2008-09", yearLabel: "2008-09", sortOrder: 439, wins: 30, losses: 7, tournamentResult: "NCAA Elite Eight" },
        { level: "COACHING", teamName: "Duke Blue Devils", season: "2009-10", yearLabel: "2009-10", sortOrder: 440, wins: 35, losses: 5, tournamentResult: "NCAA Champion 🏆" },
        { level: "COACHING", teamName: "Duke Blue Devils", season: "2010-11", yearLabel: "2010-11", sortOrder: 441, wins: 32, losses: 4, tournamentResult: "NCAA Elite Eight" },
        { level: "COACHING", teamName: "Duke Blue Devils", season: "2011-12", yearLabel: "2011-12", sortOrder: 442, wins: 27, losses: 7, tournamentResult: "NCAA Sweet 16" },
        { level: "COACHING", teamName: "Duke Blue Devils", season: "2012-13", yearLabel: "2012-13", sortOrder: 443, wins: 30, losses: 6, tournamentResult: "NCAA R32" },
        { level: "COACHING", teamName: "Duke Blue Devils", season: "2013-14", yearLabel: "2013-14", sortOrder: 444, wins: 26, losses: 9, tournamentResult: "NCAA R32" },
        { level: "COACHING", teamName: "Duke Blue Devils", season: "2014-15", yearLabel: "2014-15", sortOrder: 445, wins: 35, losses: 4, tournamentResult: "NCAA Champion 🏆" },
        { level: "COACHING", teamName: "Duke Blue Devils", season: "2015-16", yearLabel: "2015-16", sortOrder: 446, wins: 25, losses: 11, tournamentResult: "NCAA R32" },
        { level: "COACHING", teamName: "Duke Blue Devils", season: "2016-17", yearLabel: "2016-17", sortOrder: 447, wins: 28, losses: 9, tournamentResult: "NCAA Sweet 16" },
        { level: "COACHING", teamName: "Duke Blue Devils", season: "2017-18", yearLabel: "2017-18", sortOrder: 448, wins: 29, losses: 8, tournamentResult: "NCAA R32" },
        { level: "COACHING", teamName: "Duke Blue Devils", season: "2018-19", yearLabel: "2018-19", sortOrder: 449, wins: 32, losses: 6, tournamentResult: "NCAA Elite Eight" },
        { level: "COACHING", teamName: "Duke Blue Devils", season: "2019-20", yearLabel: "2019-20", sortOrder: 450, wins: 25, losses: 6, tournamentResult: "COVID cancellation" },
        { level: "COACHING", teamName: "Duke Blue Devils", season: "2020-21", yearLabel: "2020-21", sortOrder: 451, wins: 13, losses: 11 },
        { level: "COACHING", teamName: "Duke Blue Devils", season: "2021-22", yearLabel: "2021-22 (final)", sortOrder: 452, wins: 32, losses: 7, tournamentResult: "NCAA Final Four" },
      ],
      careerEvents: [
        {
          year: 1991,
          title: "Won first NCAA National Championship at Duke",
          eventType: "CHAMPIONSHIP",
        },
        {
          year: 2015,
          title: "Won fifth NCAA National Championship at Duke",
          eventType: "CHAMPIONSHIP",
        },
        {
          year: 2008,
          title: "Led USA Basketball to Olympic gold medal in Beijing",
          eventType: "AWARD",
        },
        {
          year: 2021,
          title: "Surpassed 1,000 career coaching wins at Duke",
          eventType: "AWARD",
        },
        {
          year: 2022,
          title: "Retired as head coach of Duke with 1,202 all-time wins",
          eventType: "RETIREMENT",
        },
      ],
    },
    {
      slug: "jeff-capel",
      firstName: "Jeff",
      lastName: "Capel",
      birthYear: 1975,
      hometown: "Fayetteville, NC",
      highSchool: "South View High School, Hope Mills, NC",
      isFeatured: false,
      bio: "A former Duke player himself, Capel returned to Durham as an assistant coach and was instrumental in recruiting the 2014 #1-ranked recruiting class. He went on to become a head coach.",
      status: {
        occupationType: "COACH",
        currentTitle: "Head Coach",
        currentEmployer: "University of Pittsburgh Panthers",
        league: "NCAA Division I (ACC)",
        location: "Pittsburgh, PA",
        statusNote:
          "Named the 16th head coach at Pittsburgh in March 2018, Capel won ACC Coach of the Year honors in 2023 after going 21-10. His tenure hit rougher waters in 2024-25 (13-20 record), but a buyout valued near $15 million through 2029-30 led Pittsburgh to retain him for a ninth season in 2026-27, with a revamped coaching staff and a top-12 recruiting class. He was a NC Player of the Year at South View High before starring at Duke (1994-97) and playing in the NBA.",
        sourceUrl: "https://en.wikipedia.org/wiki/Jeff_Capel",
        linkedInUrl: "https://www.linkedin.com/in/jeff-capel-94aa964/",
      },
      membership: {
        role: "ASSISTANT_COACH",
        yearsAtSchool: "2011-2018",
        statsNote:
          "Associate Head Coach • Led recruitment of nation's #1 recruiting class in 2014",
      },
      seasonStats: [
        // Duke College (1993-97) — NC HS Player of the Year; no shooting splits publicly available for early-90s ACC
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "1993-94", yearLabel: "Freshman", sortOrder: 201, gamesPlayed: 34, pointsPerGame: 8.6, reboundsPerGame: 2.7, assistsPerGame: 3.2 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "1994-95", yearLabel: "Sophomore", sortOrder: 202, gamesPlayed: 29, pointsPerGame: 12.5, reboundsPerGame: 2.7, assistsPerGame: 4.1, threePointPct: 0.460 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "1995-96", yearLabel: "Junior", sortOrder: 203, gamesPlayed: 31, minutesPerGame: 35.0, pointsPerGame: 16.6, reboundsPerGame: 3.0, assistsPerGame: 3.7 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "1996-97", yearLabel: "Senior", sortOrder: 204, gamesPlayed: 33, pointsPerGame: 12.4, assistsPerGame: 2.6 },
        // Pro playing career — undrafted 1997; played in CBA and France
        { level: "PROFESSIONAL", teamName: "Grand Rapids Hoops (CBA)", season: "1997-98", yearLabel: "1997-98", sortOrder: 301, gamesPlayed: 56, pointsPerGame: 11.9 },
        { level: "PROFESSIONAL", teamName: "Élan Chalon (France LNB)", season: "1999", yearLabel: "1999", sortOrder: 302, gamesPlayed: 2, pointsPerGame: 5.5 },
        { level: "PROFESSIONAL", teamName: "Grand Rapids Hoops (CBA)", season: "1999-00", yearLabel: "1999-00", sortOrder: 303, gamesPlayed: 33, pointsPerGame: 8.1 },
        // Coaching record — VCU head coach (2002-06)
        { level: "COACHING", teamName: "VCU Rams", season: "2002-03", yearLabel: "VCU Year 1", sortOrder: 401, wins: 18, losses: 10 },
        { level: "COACHING", teamName: "VCU Rams", season: "2003-04", yearLabel: "VCU Year 2", sortOrder: 402, wins: 23, losses: 8, tournamentResult: "NCAA R64" },
        { level: "COACHING", teamName: "VCU Rams", season: "2004-05", yearLabel: "VCU Year 3", sortOrder: 403, wins: 19, losses: 13 },
        { level: "COACHING", teamName: "VCU Rams", season: "2005-06", yearLabel: "VCU Year 4", sortOrder: 404, wins: 21, losses: 11 },
        // Coaching record — Oklahoma head coach (2006-11)
        { level: "COACHING", teamName: "Oklahoma Sooners", season: "2006-07", yearLabel: "OU Year 1", sortOrder: 411, wins: 16, losses: 15 },
        { level: "COACHING", teamName: "Oklahoma Sooners", season: "2007-08", yearLabel: "OU Year 2", sortOrder: 412, wins: 23, losses: 12, tournamentResult: "NCAA R32" },
        { level: "COACHING", teamName: "Oklahoma Sooners", season: "2008-09", yearLabel: "OU Year 3", sortOrder: 413, wins: 30, losses: 6, tournamentResult: "NCAA Elite Eight" },
        { level: "COACHING", teamName: "Oklahoma Sooners", season: "2009-10", yearLabel: "OU Year 4", sortOrder: 414, wins: 13, losses: 18 },
        { level: "COACHING", teamName: "Oklahoma Sooners", season: "2010-11", yearLabel: "OU Year 5", sortOrder: 415, wins: 14, losses: 18 },
        // Coaching record — Pittsburgh head coach (2018-present)
        { level: "COACHING", teamName: "Pittsburgh Panthers", season: "2018-19", yearLabel: "Pitt Year 1", sortOrder: 421, wins: 14, losses: 19 },
        { level: "COACHING", teamName: "Pittsburgh Panthers", season: "2019-20", yearLabel: "Pitt Year 2", sortOrder: 422, wins: 16, losses: 17 },
        { level: "COACHING", teamName: "Pittsburgh Panthers", season: "2020-21", yearLabel: "Pitt Year 3", sortOrder: 423, wins: 10, losses: 12 },
        { level: "COACHING", teamName: "Pittsburgh Panthers", season: "2021-22", yearLabel: "Pitt Year 4", sortOrder: 424, wins: 11, losses: 21 },
        { level: "COACHING", teamName: "Pittsburgh Panthers", season: "2022-23", yearLabel: "Pitt Year 5", sortOrder: 425, wins: 24, losses: 12, tournamentResult: "NCAA R32 (ACC COY)" },
        { level: "COACHING", teamName: "Pittsburgh Panthers", season: "2023-24", yearLabel: "Pitt Year 6", sortOrder: 426, wins: 22, losses: 11, tournamentResult: "ACC Tournament Semis" },
        { level: "COACHING", teamName: "Pittsburgh Panthers", season: "2024-25", yearLabel: "Pitt Year 7", sortOrder: 427, wins: 17, losses: 15 },
      ],
      careerEvents: [
        {
          year: 2015,
          title: "Won NCAA National Championship as associate head coach at Duke",
          eventType: "CHAMPIONSHIP",
        },
        {
          year: 2018,
          title: "Named Head Coach of the University of Pittsburgh",
          eventType: "COACHING_HIRE",
        },
      ],
    },
    {
      slug: "jon-scheyer",
      firstName: "Jon",
      lastName: "Scheyer",
      birthYear: 1988,
      hometown: "Northbrook, IL",
      highSchool: "Glenbrook North High School, Northbrook, IL",
      isFeatured: true,
      bio: "A former Duke star player who joined Coach K's staff and rose through the ranks to become his successor. At just 34, Scheyer became one of the youngest head coaches of a major program in the country.",
      status: {
        occupationType: "COACH",
        currentTitle: "Head Coach",
        currentEmployer: "Duke Blue Devils Men's Basketball",
        league: "NCAA Division I (ACC)",
        location: "Durham, NC",
        statusNote:
          "Illinois Mr. Basketball in 2006 at Glenbrook North before starring at Duke, where he was part of the 2010 championship team. Succeeded Mike Krzyzewski in June 2022, becoming one of the youngest Division I head coaches at age 34. Led Duke to the Elite Eight in year one, then orchestrated a historic 35-3 season in 2024-25, reaching the Final Four and winning the John McLendon National Coach of the Year Award. Holds a 123-24 record through March 2026, the fastest coach in ACC history to 100 wins, with his contract extended through 2030-31.",
        sourceUrl: "https://en.wikipedia.org/wiki/Jon_Scheyer",
        linkedInUrl: "https://www.linkedin.com/in/jonathan-scheyer-10714532/",
      },
      membership: {
        role: "ASSISTANT_COACH",
        yearsAtSchool: "2013-2022",
        statsNote:
          "Director of Basketball Operations → Assistant Coach → Associate Head Coach → Head Coach",
      },
      seasonStats: [
        // High School — IL Mr. Basketball, #4 all-time IL scorer (3,034 career pts)
        { level: "HIGH_SCHOOL", teamName: "Glenbrook North High School", season: "2005-06", yearLabel: "Senior", sortOrder: 101, pointsPerGame: 32.0, reboundsPerGame: 6.0, assistsPerGame: 5.0 },
        // Duke College (2010 NCAA Championship team; 2009 ACC Tournament MVP)
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2006-07", yearLabel: "Freshman", sortOrder: 201, gamesPlayed: 33, minutesPerGame: 33.7, pointsPerGame: 12.2, fieldGoalPct: 0.398, threePointPct: 0.365, freeThrowPct: 0.846 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2007-08", yearLabel: "Sophomore", sortOrder: 202, gamesPlayed: 34, minutesPerGame: 28.3, pointsPerGame: 11.7, reboundsPerGame: 3.9, assistsPerGame: 2.4, fieldGoalPct: 0.444, threePointPct: 0.388, freeThrowPct: 0.889 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2008-09", yearLabel: "Junior", sortOrder: 203, gamesPlayed: 37, minutesPerGame: 32.8, pointsPerGame: 14.9, reboundsPerGame: 3.6, assistsPerGame: 2.8, fieldGoalPct: 0.397, threePointPct: 0.385, freeThrowPct: 0.836 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2009-10", yearLabel: "Senior", sortOrder: 204, gamesPlayed: 40, minutesPerGame: 36.8, pointsPerGame: 18.2, assistsPerGame: 4.9, fieldGoalPct: 0.407, threePointPct: 0.383, freeThrowPct: 0.878 },
        // Pro playing career — undrafted 2010; career ended at 25 due to eye injury (retinal tear)
        { level: "PROFESSIONAL", teamName: "Rio Grande Valley Vipers (NBA D-League)", season: "2010-11", yearLabel: "2010-11", sortOrder: 301, gamesPlayed: 16, minutesPerGame: 33.9, pointsPerGame: 13.8, reboundsPerGame: 3.9, assistsPerGame: 4.1 },
        { level: "PROFESSIONAL", teamName: "Maccabi Tel Aviv (Israel / EuroLeague)", season: "2011-12", yearLabel: "2011-12", sortOrder: 302, gamesPlayed: 23, minutesPerGame: 10.5, pointsPerGame: 2.5, reboundsPerGame: 0.9, assistsPerGame: 0.7, fieldGoalPct: 0.353, threePointPct: 0.333 },
        { level: "PROFESSIONAL", teamName: "Gran Canaria (Spanish Liga ACB)", season: "2012-13", yearLabel: "2012-13", sortOrder: 303, gamesPlayed: 30, minutesPerGame: 20.5, pointsPerGame: 5.6, assistsPerGame: 2.0, fieldGoalPct: 0.313 },
        // Coaching record at Duke (2022-present)
        { level: "COACHING", teamName: "Duke Blue Devils", season: "2022-23", yearLabel: "2022-23", sortOrder: 401, wins: 27, losses: 9, tournamentResult: "NCAA Elite Eight" },
        { level: "COACHING", teamName: "Duke Blue Devils", season: "2023-24", yearLabel: "2023-24", sortOrder: 402, wins: 27, losses: 9, tournamentResult: "NCAA R32" },
        { level: "COACHING", teamName: "Duke Blue Devils", season: "2024-25", yearLabel: "2024-25", sortOrder: 403, wins: 35, losses: 4, tournamentResult: "NCAA Final Four" },
      ],
      careerEvents: [
        {
          year: 2013,
          title: "Joined Duke coaching staff as Director of Basketball Operations",
          eventType: "COACHING_HIRE",
        },
        {
          year: 2015,
          title: "Won NCAA National Championship as part of Duke coaching staff",
          eventType: "CHAMPIONSHIP",
        },
        {
          year: 2022,
          title: "Named Head Coach of Duke Blue Devils, succeeding Mike Krzyzewski",
          eventType: "COACHING_HIRE",
        },
        {
          year: 2023,
          title: "Led Duke to the Elite Eight in first season as head coach",
          eventType: "AWARD",
        },
        {
          year: 2025,
          title: "Led Duke to the Final Four (35-4 record); won John McLendon National Coach of the Year Award; contract extended through 2030-31",
          eventType: "AWARD",
        },
      ],
    },
    {
      slug: "nate-james",
      firstName: "Nate",
      lastName: "James",
      birthYear: 1978,
      hometown: "Roanoke Rapids, NC",
      highSchool: "Roanoke Rapids High School, Roanoke Rapids, NC",
      isFeatured: false,
      bio: "A former Duke player who spent 13 years on Coach K's staff, rising to Associate Head Coach and winning two national championships as a coach. After a brief head coaching stint at Austin Peay, he returned to the DMV area where he grew up, joining Howard University.",
      status: {
        occupationType: "COACH",
        currentTitle: "Associate Head Coach",
        currentEmployer: "Howard University",
        league: "NCAA Division I (MEAC)",
        location: "Washington, D.C.",
        statusNote:
          "Played at Duke from 1997-2001, winning the national championship in his senior year, then played professionally in over a dozen countries before returning as a coach in 2007. Won three national titles total at Duke — one as a player (2001) and two as a coach (2010, 2015). Left in 2021 to become head coach at Austin Peay State University, going 21-39 over two seasons before being dismissed. In October 2025, joined Howard University as Associate Head Coach under Kenny Blakeney — a homecoming to the DMV area where he grew up.",
        sourceUrl: "https://hubison.com/news/2025/10/20/mens-basketball-mens-basketball-welcomes-nate-james-to-the-bison-family.aspx",
        linkedInUrl: "https://www.linkedin.com/in/nate-james-a176b242",
      },
      membership: {
        role: "ASSISTANT_COACH",
        yearsAtSchool: "2007-2021",
        statsNote: "Assistant Coach → Associate Head Coach • Won 2010 and 2015 NCAA titles as assistant",
      },
      seasonStats: [
        // Duke College (1997-2001) — 2001 NCAA champion; career FG% .473
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "1997-98", yearLabel: "Freshman", sortOrder: 201, gamesPlayed: 6, pointsPerGame: 2.2 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "1998-99", yearLabel: "Redshirt Sophomore", sortOrder: 202, gamesPlayed: 23, minutesPerGame: 14.7, pointsPerGame: 5.0, reboundsPerGame: 2.6 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "1999-00", yearLabel: "Junior", sortOrder: 203, gamesPlayed: 34, pointsPerGame: 11.0, reboundsPerGame: 4.5 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "2000-01", yearLabel: "Senior", sortOrder: 204, gamesPlayed: 39, pointsPerGame: 12.3, reboundsPerGame: 5.2, fieldGoalPct: 0.473, threePointPct: 0.335, freeThrowPct: 0.733 },
        // Pro playing career — undrafted 2001; played in 12+ countries
        { level: "PROFESSIONAL", teamName: "Carolinas Basketball League", season: "2002-03", yearLabel: "2002-03", sortOrder: 301 },
        { level: "PROFESSIONAL", teamName: "Kaposvári KK (Hungary)", season: "2003-04", yearLabel: "2003-04", sortOrder: 302 },
        { level: "PROFESSIONAL", teamName: "Anjou BC (France)", season: "2003-04", yearLabel: "2003-04", sortOrder: 303 },
        { level: "PROFESSIONAL", teamName: "KK Široki (Bosnia-Herzegovina)", season: "2003-04", yearLabel: "2003-04", sortOrder: 304 },
        { level: "PROFESSIONAL", teamName: "Pitágoras / Minas (Brazil)", season: "2004-05", yearLabel: "2004-05", sortOrder: 305 },
        { level: "PROFESSIONAL", teamName: "EiffelTowers Nijmegen (Netherlands)", season: "2005-06", yearLabel: "2005-06", sortOrder: 306 },
        { level: "PROFESSIONAL", teamName: "Toyama Grouses (Japan)", season: "2006-07", yearLabel: "2006-07", sortOrder: 307 },
        { level: "PROFESSIONAL", teamName: "Basket Kwidzyn (Poland)", season: "2007-08", yearLabel: "2007-08", sortOrder: 308 },
        // Head coaching record — Austin Peay (2021-23)
        { level: "COACHING", teamName: "Austin Peay Governors", season: "2021-22", yearLabel: "2021-22", sortOrder: 401, wins: 9, losses: 21 },
        { level: "COACHING", teamName: "Austin Peay Governors", season: "2022-23", yearLabel: "2022-23", sortOrder: 402, wins: 12, losses: 18 },
      ],
      careerEvents: [
        {
          year: 2015,
          title: "Won NCAA National Championship as associate head coach at Duke",
          eventType: "CHAMPIONSHIP",
        },
        {
          year: 2021,
          title: "Named Head Coach of Austin Peay State University",
          eventType: "COACHING_HIRE",
        },
        {
          year: 2023,
          title: "Dismissed as head coach at Austin Peay after two seasons (21-39)",
          eventType: "OTHER",
        },
        {
          year: 2025,
          title: "Joined Howard University as Associate Head Coach under Kenny Blakeney",
          eventType: "COACHING_HIRE",
        },
      ],
    },
    {
      slug: "chris-carrawell",
      firstName: "Chris",
      lastName: "Carrawell",
      highSchool: "Cardinal Ritter College Prep, St. Louis, MO",
      birthYear: 1978,
      hometown: "St. Louis, MO",
      isFeatured: false,
      bio: "A 2000 ACC Player of the Year at Duke who returned as a coach and became Jon Scheyer's right-hand man as the Morris Williams Associate Head Coach and offensive coordinator.",
      status: {
        occupationType: "COACH",
        currentTitle: "Morris Williams Associate Head Coach / Offensive Coordinator",
        currentEmployer: "Duke Blue Devils Men's Basketball",
        league: "NCAA Division I (ACC)",
        location: "Durham, NC",
        statusNote: "Led Cardinal Ritter College Prep to an 80-13 record over four years before becoming Duke's 2000 ACC Player of the Year and a consensus All-American. After brief NBA and overseas stints — including winning the 2006 ABA MVP and championship — he joined Duke's staff as an assistant in March 2013. Promoted to the endowed Morris Williams Associate Head Coach role under Jon Scheyer in 2021, serving as offensive coordinator and playing a central role in developing first-round NBA picks Mark Williams (2022), Dereck Lively II (2023), and Kyle Filipowski (2024).",
        sourceUrl: "https://en.wikipedia.org/wiki/Chris_Carrawell",
        linkedInUrl: "https://www.linkedin.com/in/chris-carrawell-60b9bb7b/",
      },
      membership: {
        role: "ASSISTANT_COACH",
        yearsAtSchool: "2013-present",
        statsNote: "Assistant Coach • Former Duke ACC Player of the Year (2000)",
      },
      seasonStats: [
        // Duke College (1996-2000) — 2000 ACC Player of the Year, All-American
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "1996-97", yearLabel: "Freshman", sortOrder: 201, gamesPlayed: 31, minutesPerGame: 16.2, pointsPerGame: 5.5, reboundsPerGame: 3.1, assistsPerGame: 1.1, fieldGoalPct: 0.576 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "1997-98", yearLabel: "Sophomore", sortOrder: 202, gamesPlayed: 35, minutesPerGame: 22.2, pointsPerGame: 10.1, reboundsPerGame: 3.7, assistsPerGame: 1.1, fieldGoalPct: 0.482, threePointPct: 0.368 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "1998-99", yearLabel: "Junior", sortOrder: 203, gamesPlayed: 39, minutesPerGame: 27.2, pointsPerGame: 9.9, reboundsPerGame: 4.8, assistsPerGame: 3.3 },
        { level: "COLLEGE", teamName: "Duke Blue Devils", season: "1999-00", yearLabel: "Senior", sortOrder: 204, gamesPlayed: 34, minutesPerGame: 35.6, pointsPerGame: 16.9, reboundsPerGame: 6.1, assistsPerGame: 3.2, fieldGoalPct: 0.480, threePointPct: 0.360, freeThrowPct: 0.780 },
        // Pro playing career — drafted 41st by San Antonio Spurs (2000); never played for Spurs
        { level: "PROFESSIONAL", teamName: "Asheville Altitude (NBA D-League)", season: "2001-02", yearLabel: "2001-02", sortOrder: 301, gamesPlayed: 56, minutesPerGame: 22.9, pointsPerGame: 7.3, reboundsPerGame: 3.6, assistsPerGame: 1.8 },
        { level: "PROFESSIONAL", teamName: "Žalgiris Kaunas (Lithuania)", season: "2002-03", yearLabel: "2002-03", sortOrder: 302 },
        { level: "PROFESSIONAL", teamName: "Various (Germany)", season: "2003-04", yearLabel: "2003-04", sortOrder: 303 },
        { level: "PROFESSIONAL", teamName: "Sydney Kings (Australian NBL)", season: "2003-04", yearLabel: "2003-04 (NBL)", sortOrder: 304, gamesPlayed: 18, pointsPerGame: 13.1, reboundsPerGame: 7.1, assistsPerGame: 2.7, fieldGoalPct: 0.520 },
        { level: "PROFESSIONAL", teamName: "Alaska Aces (Philippines PBA)", season: "2002-03", yearLabel: "2002-03 (PBA)", sortOrder: 305, gamesPlayed: 3, pointsPerGame: 18.3, reboundsPerGame: 8.7, fieldGoalPct: 0.440, threePointPct: 0.000, freeThrowPct: 0.355 },
        { level: "PROFESSIONAL", teamName: "Fayetteville Patriots (ABA)", season: "2005-06", yearLabel: "2005-06 (ABA MVP & Champion)", sortOrder: 306 },
        { level: "PROFESSIONAL", teamName: "Nijmegen Magixx (Netherlands)", season: "2006-07", yearLabel: "2006-07", sortOrder: 307 },
      ],
      careerEvents: [
        {
          year: 2015,
          title: "Won NCAA National Championship as assistant coach at Duke",
          eventType: "CHAMPIONSHIP",
        },
      ],
    },
  ],
};
