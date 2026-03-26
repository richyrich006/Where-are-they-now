import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";

const adapter = new PrismaLibSql({ url: process.env.DATABASE_URL ?? "file:./dev.db" });
const prisma = new PrismaClient({ adapter } as any);

async function main() {
  // ── Team ──────────────────────────────────────────────────────────────────
  const team = await prisma.team.upsert({
    where: { slug: "duke-basketball-2015" },
    update: {},
    create: {
      slug: "duke-basketball-2015",
      name: "Duke Blue Devils",
      season: "2014-2015",
      sport: "Men's Basketball",
      school: "Duke University",
      conference: "ACC",
      accomplishment: "NCAA National Champions",
    },
  });

  // ── Helpers ───────────────────────────────────────────────────────────────
  type PersonSeed = {
    slug: string;
    firstName: string;
    lastName: string;
    birthYear?: number;
    hometown?: string;
    imageUrl?: string;
    bio?: string;
    isFeatured?: boolean;
    status: {
      occupationType:
        | "ACTIVE_PRO_ATHLETE"
        | "RETIRED_ATHLETE"
        | "COACH"
        | "FRONT_OFFICE"
        | "BROADCASTER_ANALYST"
        | "ENTREPRENEUR_BUSINESS"
        | "STUDENT"
        | "OTHER";
      currentTitle?: string;
      currentEmployer?: string;
      league?: string;
      location?: string;
      statusNote?: string;
      sourceUrl?: string;
    };
    membership: {
      role: "PLAYER" | "HEAD_COACH" | "ASSISTANT_COACH" | "MANAGER";
      jerseyNumber?: number;
      position?: string;
      yearsAtSchool?: string;
      statsNote?: string;
    };
    careerEvents?: {
      year: number;
      title: string;
      eventType?: string;
      detail?: string;
    }[];
  };

  const people: PersonSeed[] = [
    // ── Players ──────────────────────────────────────────────────────────────
    {
      slug: "jahlil-okafor",
      firstName: "Jahlil",
      lastName: "Okafor",
      birthYear: 1995,
      hometown: "Chicago, IL",
      isFeatured: true,
      bio: "One-and-done center who was the ACC Player of the Year and a consensus All-American in 2015. Selected #3 overall in the NBA Draft by the Philadelphia 76ers.",
      status: {
        occupationType: "ACTIVE_PRO_ATHLETE",
        currentTitle: "Free Agent / Professional Basketball Player",
        league: "NBA / International",
        statusNote:
          "Played for the 76ers, Nets, Pistons, Pelicans, Mavericks, Rockets, Suns, and Pacers. Most recently played in Japan's B.League with Levanga Hokkaido.",
        sourceUrl: "https://en.wikipedia.org/wiki/Jahlil_Okafor",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 15,
        position: "Center",
        yearsAtSchool: "2014-2015",
        statsNote:
          "ACC Player of the Year • National Freshman of the Year • Averaged 17.3 pts, 8.5 reb per game",
      },
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
      isFeatured: true,
      bio: "The heart of the 2015 championship team. Jones scored 23 points in the national title game against Wisconsin to earn Most Outstanding Player honors.",
      status: {
        occupationType: "ACTIVE_PRO_ATHLETE",
        currentTitle: "Point Guard",
        currentEmployer: "Phoenix Suns",
        league: "NBA",
        location: "Phoenix, AZ",
        statusNote:
          "Has played for Minnesota, Memphis, and Phoenix. Known as one of the best backup point guards in the league with an elite assist-to-turnover ratio.",
        sourceUrl: "https://en.wikipedia.org/wiki/Tyus_Jones",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 5,
        position: "Point Guard",
        yearsAtSchool: "2014-2015",
        statsNote:
          "2015 NCAA Tournament Most Outstanding Player • 23 points in championship game vs. Wisconsin",
      },
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
      isFeatured: true,
      bio: "Came off the bench as a freshman to score 16 points in the national championship game. Stayed at Duke all four years before entering the NBA Draft.",
      status: {
        occupationType: "ACTIVE_PRO_ATHLETE",
        currentTitle: "Shooting Guard",
        currentEmployer: "Phoenix Suns",
        league: "NBA",
        location: "Phoenix, AZ",
        statusNote:
          "Was drafted by Utah Jazz in 2018, played for Memphis, Milwaukee, and Phoenix. Won the 2021 NBA Championship with the Bucks.",
        sourceUrl: "https://en.wikipedia.org/wiki/Grayson_Allen",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 3,
        position: "Shooting Guard",
        yearsAtSchool: "2014-2018",
        statsNote:
          "16 points in the 2015 national championship game • 4-year starter at Duke • 2018 ACC Player of the Year",
      },
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
      isFeatured: false,
      bio: "A versatile defensive stopper who anchored Duke's perimeter defense during the championship run. Selected 10th overall by the Miami Heat.",
      status: {
        occupationType: "RETIRED_ATHLETE",
        currentTitle: "Retired NBA Player",
        statusNote:
          "Career curtailed by hip and back injuries. Last played for the Toronto Raptors in 2022. Has spoken publicly about exploring life after basketball.",
        sourceUrl: "https://en.wikipedia.org/wiki/Justise_Winslow",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 12,
        position: "Small Forward / Shooting Guard",
        yearsAtSchool: "2014-2015",
        statsNote:
          "10th overall pick, 2015 NBA Draft (Miami Heat) • Key defensive stopper on championship team",
      },
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
      isFeatured: false,
      bio: "The senior captain who led Duke's locker room culture during the championship season. Despite going undrafted, Cook carved out a six-year NBA career and won two championships.",
      status: {
        occupationType: "RETIRED_ATHLETE",
        currentTitle: "Retired NBA Player",
        statusNote:
          "Went undrafted but made the NBA via G-League. Won two NBA championships — with Golden State Warriors (2018) and Los Angeles Lakers (2020). Most recently played overseas.",
        sourceUrl: "https://en.wikipedia.org/wiki/Quinn_Cook",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 2,
        position: "Point Guard",
        yearsAtSchool: "2011-2015",
        statsNote: "Team captain • 4-year starter • 2015 ACC Tournament champion",
      },
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
      isFeatured: false,
      bio: "A workhorse power forward who chose to return to Duke multiple times. After a brief NBA career, he transitioned into coaching.",
      status: {
        occupationType: "COACH",
        currentTitle: "Assistant Coach",
        currentEmployer: "Boston Celtics",
        league: "NBA",
        location: "Boston, MA",
        statusNote:
          "Played for Orlando Magic and Boston Celtics before transitioning to coaching. Served as director of player development at Duke under Jon Scheyer before joining the Celtics staff.",
        sourceUrl: "https://en.wikipedia.org/wiki/Amile_Jefferson",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 21,
        position: "Power Forward",
        yearsAtSchool: "2013-2017",
        statsNote: "4x All-ACC Academic Team • 103 starts in 150 career games",
      },
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
      isFeatured: false,
      bio: "A sharpshooting guard who hit a clutch 4-of-7 from three-point range against Gonzaga in the Elite Eight. After a stint in the G-League and overseas, he transitioned to the business world.",
      status: {
        occupationType: "ENTREPRENEUR_BUSINESS",
        currentTitle: "Landlord Representation Broker",
        currentEmployer: "JLL (Jones Lang LaSalle)",
        location: "San Francisco Bay Area, CA",
        statusNote:
          "After playing in the G-League (Reno Bighorns) and Taiwan, Jones built a career in commercial real estate in the Bay Area.",
        sourceUrl: "https://en.wikipedia.org/wiki/Matt_Jones_(basketball)",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 13,
        position: "Shooting Guard",
        yearsAtSchool: "2013-2016",
        statsNote:
          "4-7 from three in Elite Eight vs Gonzaga • South Region All-Tournament Team",
      },
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
      isFeatured: true,
      bio: "The youngest of three Plumlee brothers to play at Duke. After his NBA stint, Marshall pursued one of the most unique post-career paths in college basketball history — the U.S. Army.",
      status: {
        occupationType: "OTHER",
        currentTitle: "U.S. Army Officer / Business Student",
        location: "United States",
        statusNote:
          "Commissioned into the New York Army National Guard in 2017. Completed Army Ranger School in 2019 — one of the most demanding military training courses in the world. Subsequently enrolled at Harvard Business School.",
        sourceUrl: "https://en.wikipedia.org/wiki/Marshall_Plumlee",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 42,
        position: "Center",
        yearsAtSchool: "2011-2016",
        statsNote:
          "Team captain • Started all 36 games as a senior (8.3 ppg, 8.6 rpg) • Brother of Mason and Miles Plumlee",
      },
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
          year: 2022,
          title: "Enrolled at Harvard Business School",
          eventType: "STUDENT",
        },
      ],
    },
    {
      slug: "semi-ojeleye",
      firstName: "Semi",
      lastName: "Ojeleye",
      birthYear: 1995,
      hometown: "Aurora, CO",
      isFeatured: false,
      bio: "Transferred from Duke to SMU where he became a star before being drafted by the Boston Celtics. Has continued his professional career in European leagues.",
      status: {
        occupationType: "ACTIVE_PRO_ATHLETE",
        currentTitle: "Power Forward",
        currentEmployer: "Crvena zvezda (Red Star Belgrade)",
        league: "ABA League / EuroLeague",
        location: "Belgrade, Serbia",
        statusNote:
          "After the NBA, played for Virtus Bologna in the EuroLeague before joining Crvena zvezda in the ABA League.",
        sourceUrl: "https://en.wikipedia.org/wiki/Semi_Ojeleye",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 32,
        position: "Power Forward",
        yearsAtSchool: "2014-2016",
        statsNote: "Transferred to SMU after Duke • 2016 Parade Magazine All-American",
      },
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
      isFeatured: false,
      bio: "A key contributor in the first half of the 2014-15 season, Sulaimon was dismissed from the team in January 2015. He transferred to Maryland and went on to play in the NBA Summer League.",
      status: {
        occupationType: "OTHER",
        currentTitle: "Former Professional Basketball Player",
        statusNote:
          "Transferred to Maryland for his senior season. Went undrafted in 2016. Played in the NBA Summer League with the Chicago Bulls. Career in professional basketball was limited thereafter.",
        sourceUrl: "https://en.wikipedia.org/wiki/Rasheed_Sulaimon",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 14,
        position: "Shooting Guard",
        yearsAtSchool: "2012-2015",
        statsNote:
          "Dismissed from team January 2015 • Subsequently transferred to University of Maryland",
      },
      careerEvents: [
        {
          year: 2015,
          title: "Dismissed from Duke basketball team",
          eventType: "OTHER",
        },
        {
          year: 2015,
          title: "Transferred to University of Maryland",
          eventType: "OTHER",
        },
        {
          year: 2016,
          title: "Went undrafted; participated in NBA Summer League with Chicago Bulls",
          eventType: "OTHER",
        },
      ],
    },
    {
      slug: "brennan-besser",
      firstName: "Brennan",
      lastName: "Besser",
      birthYear: 1996,
      hometown: "Charlotte, NC",
      isFeatured: false,
      bio: "A walk-on guard who was part of the 2015 championship roster.",
      status: {
        occupationType: "OTHER",
        currentTitle: "Private Citizen",
        statusNote: "Did not pursue professional basketball after Duke.",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 53,
        position: "Guard",
        yearsAtSchool: "2014-2018",
        statsNote: "Walk-on • Part of 2015 national championship team",
      },
    },

    // ── Coaches ──────────────────────────────────────────────────────────────
    {
      slug: "mike-krzyzewski",
      firstName: "Mike",
      lastName: "Krzyzewski",
      birthYear: 1947,
      hometown: "Chicago, IL",
      isFeatured: true,
      bio: "Known simply as \"Coach K,\" Krzyzewski is the most decorated coach in college basketball history. He won five national championships at Duke and coached the U.S. Olympic team to three gold medals. He retired in 2022 as the all-time wins leader in Division I men's basketball.",
      status: {
        occupationType: "RETIRED_ATHLETE",
        currentTitle: "Retired Head Coach",
        currentEmployer: "Duke University (Emeritus)",
        location: "Durham, NC",
        statusNote:
          "Retired after the 2021-22 season with 1,202 career wins — the all-time Division I record. 5x NCAA champion (1991, 1992, 2001, 2010, 2015). 3x Olympic gold medalist as USA head coach.",
        sourceUrl: "https://en.wikipedia.org/wiki/Mike_Krzyzewski",
      },
      membership: {
        role: "HEAD_COACH",
        yearsAtSchool: "1980-2022",
        statsNote:
          "5 NCAA Championships • 1,202 career wins (all-time Division I record) • Naismith Basketball Hall of Fame",
      },
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
      isFeatured: false,
      bio: "A former Duke player himself, Capel returned to Durham as an assistant coach and was instrumental in recruiting the 2014 #1-ranked recruiting class. He went on to become a head coach.",
      status: {
        occupationType: "COACH",
        currentTitle: "Head Coach",
        currentEmployer: "University of Pittsburgh Panthers",
        league: "NCAA Division I (ACC)",
        location: "Pittsburgh, PA",
        statusNote:
          "Named head coach at Pittsburgh in 2018. Has rebuilt the program into an ACC contender.",
        sourceUrl: "https://en.wikipedia.org/wiki/Jeff_Capel",
      },
      membership: {
        role: "ASSISTANT_COACH",
        yearsAtSchool: "2011-2018",
        statsNote:
          "Associate Head Coach • Led recruitment of nation's #1 recruiting class in 2014",
      },
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
      isFeatured: true,
      bio: "A former Duke star player who joined Coach K's staff and rose through the ranks to become his successor. At just 34, Scheyer became one of the youngest head coaches of a major program in the country.",
      status: {
        occupationType: "COACH",
        currentTitle: "Head Coach",
        currentEmployer: "Duke Blue Devils Men's Basketball",
        league: "NCAA Division I (ACC)",
        location: "Durham, NC",
        statusNote:
          "Succeeded Mike Krzyzewski as Duke head coach in 2022. Led Duke to the Elite Eight in his first season. Continuning to build on Coach K's legacy.",
        sourceUrl: "https://en.wikipedia.org/wiki/Jon_Scheyer",
      },
      membership: {
        role: "ASSISTANT_COACH",
        yearsAtSchool: "2013-2022",
        statsNote:
          "Director of Basketball Operations → Assistant Coach → Associate Head Coach → Head Coach",
      },
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
      ],
    },
    {
      slug: "nate-james",
      firstName: "Nate",
      lastName: "James",
      birthYear: 1978,
      hometown: "Roanoke Rapids, NC",
      isFeatured: false,
      bio: "A former Duke player and longtime assistant under Coach K who has remained part of the Duke basketball family.",
      status: {
        occupationType: "COACH",
        currentTitle: "Associate Head Coach",
        currentEmployer: "Duke Blue Devils Men's Basketball",
        league: "NCAA Division I (ACC)",
        location: "Durham, NC",
        statusNote:
          "Has remained at Duke through the coaching transition from Krzyzewski to Scheyer. A key bridge between the two eras.",
        sourceUrl: "https://en.wikipedia.org/wiki/Nate_James",
      },
      membership: {
        role: "ASSISTANT_COACH",
        yearsAtSchool: "2010-present",
        statsNote: "Assistant Coach → Associate Head Coach",
      },
      careerEvents: [
        {
          year: 2015,
          title: "Won NCAA National Championship as assistant coach at Duke",
          eventType: "CHAMPIONSHIP",
        },
        {
          year: 2022,
          title: "Named Associate Head Coach under Jon Scheyer",
          eventType: "COACHING_HIRE",
        },
      ],
    },
    {
      slug: "chris-carrawell",
      firstName: "Chris",
      lastName: "Carrawell",
      birthYear: 1978,
      hometown: "St. Louis, MO",
      isFeatured: false,
      bio: "A former Duke ACC Player of the Year who returned to his alma mater as a coach.",
      status: {
        occupationType: "COACH",
        currentTitle: "Assistant Coach / Director of Player Development",
        currentEmployer: "Duke Blue Devils Men's Basketball",
        league: "NCAA Division I (ACC)",
        location: "Durham, NC",
        statusNote: "Remains part of the Duke basketball coaching staff under Jon Scheyer.",
        sourceUrl: "https://en.wikipedia.org/wiki/Chris_Carrawell",
      },
      membership: {
        role: "ASSISTANT_COACH",
        yearsAtSchool: "2013-present",
        statsNote: "Assistant Coach • Former Duke ACC Player of the Year (2000)",
      },
      careerEvents: [
        {
          year: 2015,
          title: "Won NCAA National Championship as assistant coach at Duke",
          eventType: "CHAMPIONSHIP",
        },
      ],
    },
  ];

  for (const p of people) {
    const person = await prisma.person.upsert({
      where: { slug: p.slug },
      update: {},
      create: {
        slug: p.slug,
        firstName: p.firstName,
        lastName: p.lastName,
        birthYear: p.birthYear,
        hometown: p.hometown,
        imageUrl: p.imageUrl ?? null,
        bio: p.bio ?? null,
        isFeatured: p.isFeatured ?? false,
      },
    });

    await prisma.currentStatus.upsert({
      where: { personId: person.id },
      update: {},
      create: {
        personId: person.id,
        occupationType: p.status.occupationType,
        currentTitle: p.status.currentTitle ?? null,
        currentEmployer: p.status.currentEmployer ?? null,
        league: p.status.league ?? null,
        location: p.status.location ?? null,
        statusNote: p.status.statusNote ?? null,
        asOfDate: new Date("2026-03-01"),
        sourceUrl: p.status.sourceUrl ?? null,
      },
    });

    await prisma.teamMembership.upsert({
      where: { personId_teamId: { personId: person.id, teamId: team.id } },
      update: {},
      create: {
        personId: person.id,
        teamId: team.id,
        role: p.membership.role,
        jerseyNumber: p.membership.jerseyNumber ?? null,
        position: p.membership.position ?? null,
        yearsAtSchool: p.membership.yearsAtSchool ?? null,
        statsNote: p.membership.statsNote ?? null,
      },
    });

    if (p.careerEvents) {
      for (const event of p.careerEvents) {
        await prisma.careerEvent.create({
          data: {
            personId: person.id,
            year: event.year,
            title: event.title,
            eventType: event.eventType ?? null,
            detail: event.detail ?? null,
          },
        });
      }
    }

    console.log(`  ✓ ${p.firstName} ${p.lastName}`);
  }

  console.log(`\n✅ Seeded ${people.length} people for the ${team.name} (${team.season})`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
