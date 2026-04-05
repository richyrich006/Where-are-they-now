export type TeamDef = {
  slug: string;
  name: string;
  season: string;
  sport: string;
  school: string;
  conference?: string;
  accomplishment?: string;
  logoUrl?: string;
  mascotName?: string;
};

export type MembershipSeed = {
  role: "PLAYER" | "HEAD_COACH" | "ASSISTANT_COACH" | "MANAGER";
  jerseyNumber?: number;
  position?: string;
  yearsAtSchool?: string;
  statsNote?: string;
  gamesPlayed?: number;
  pointsPerGame?: number;
  reboundsPerGame?: number;
  assistsPerGame?: number;
};

export type PersonSeed = {
  slug: string;
  firstName: string;
  lastName: string;
  birthYear?: number;
  hometown?: string;
  highSchool?: string;
  imageUrl?: string;
  collegeImageUrl?: string;
  bio?: string;
  isFeatured?: boolean;
  status: {
    occupationType:
      | "ACTIVE_PRO_ATHLETE"
      | "RETIRED_ATHLETE"
      | "RETIRED_COACH"
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
    linkedInUrl?: string;
  };
  membership: MembershipSeed;
  seasonStats?: {
    level: "HIGH_SCHOOL" | "COLLEGE" | "PROFESSIONAL" | "COACHING";
    teamName: string;
    season: string;
    yearLabel: string;
    sortOrder: number;
    gamesPlayed?: number;
    minutesPerGame?: number;
    pointsPerGame?: number;
    reboundsPerGame?: number;
    assistsPerGame?: number;
    stealsPerGame?: number;
    blocksPerGame?: number;
    fieldGoalPct?: number;
    threePointPct?: number;
    freeThrowPct?: number;
    wins?: number;
    losses?: number;
    tournamentResult?: string;
  }[];
  careerEvents?: {
    year: number;
    title: string;
    eventType?: string;
    detail?: string;
  }[];
};

export type TeamFile = {
  team: TeamDef;
  players: PersonSeed[];
};
