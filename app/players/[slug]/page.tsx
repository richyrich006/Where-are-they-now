import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPlayerBySlug, getAllPlayerSlugs } from "@/lib/queries";
import { PlayerHero } from "@/components/players/PlayerHero";
import { StatusCard } from "@/components/ui/StatusCard";
import { CareerTimeline } from "@/components/players/CareerTimeline";
import { SubmissionForm } from "@/components/players/SubmissionForm";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await getAllPlayerSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const person = await getPlayerBySlug(slug);
  if (!person) return {};

  const team = person.memberships[0]?.team;
  const title = `${person.firstName} ${person.lastName} — Where Are They Now`;
  const description =
    person.currentStatus?.statusNote ??
    `Find out what ${person.firstName} ${person.lastName} is doing now after ${team?.name ?? "college"}.`;

  return {
    title,
    description,
    openGraph: { title, description },
  };
}

type StatRow = {
  id: number;
  teamName: string;
  season: string;
  yearLabel: string;
  gamesPlayed: number | null;
  minutesPerGame: number | null;
  pointsPerGame: number | null;
  reboundsPerGame: number | null;
  assistsPerGame: number | null;
  stealsPerGame: number | null;
  blocksPerGame: number | null;
  fieldGoalPct: number | null;
  threePointPct: number | null;
  freeThrowPct: number | null;
  wins: number | null;
  losses: number | null;
  tournamentResult: string | null;
};

function hasAny(rows: StatRow[], key: keyof StatRow) {
  return rows.some((r) => r[key] != null);
}

function fmt1(v: number | null) {
  return v != null ? v.toFixed(1) : "—";
}

function fmtPct(v: number | null) {
  return v != null ? (v * 100).toFixed(1) + "%" : "—";
}

function BasketballStatsTable({ rows, showNotesBelow }: { rows: StatRow[]; showNotesBelow?: string }) {
  const showMin = hasAny(rows, "minutesPerGame");
  const showSpg = hasAny(rows, "stealsPerGame");
  const showBpg = hasAny(rows, "blocksPerGame");
  const showFgp = hasAny(rows, "fieldGoalPct");
  const show3p = hasAny(rows, "threePointPct");
  const showFtp = hasAny(rows, "freeThrowPct");

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
            <th className="py-2 pr-3">Year</th>
            <th className="py-2 pr-3">Team</th>
            <th className="py-2 pr-3 text-center">G</th>
            {showMin && <th className="py-2 pr-3 text-center">MIN</th>}
            <th className="py-2 pr-3 text-center">PPG</th>
            <th className="py-2 pr-3 text-center">RPG</th>
            <th className="py-2 pr-3 text-center">APG</th>
            {showSpg && <th className="py-2 pr-3 text-center">SPG</th>}
            {showBpg && <th className="py-2 pr-3 text-center">BPG</th>}
            {showFgp && <th className="py-2 pr-3 text-center">FG%</th>}
            {show3p && <th className="py-2 pr-3 text-center">3P%</th>}
            {showFtp && <th className="py-2 text-center">FT%</th>}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border-b border-gray-100 last:border-0">
              <td className="py-2 pr-3 font-medium text-gray-900 whitespace-nowrap">{row.yearLabel}</td>
              <td className="py-2 pr-3 text-gray-600 whitespace-nowrap">{row.teamName}</td>
              <td className="py-2 pr-3 text-center text-gray-700">{row.gamesPlayed ?? "—"}</td>
              {showMin && <td className="py-2 pr-3 text-center text-gray-700">{fmt1(row.minutesPerGame)}</td>}
              <td className="py-2 pr-3 text-center text-gray-700">{fmt1(row.pointsPerGame)}</td>
              <td className="py-2 pr-3 text-center text-gray-700">{fmt1(row.reboundsPerGame)}</td>
              <td className="py-2 pr-3 text-center text-gray-700">{fmt1(row.assistsPerGame)}</td>
              {showSpg && <td className="py-2 pr-3 text-center text-gray-700">{fmt1(row.stealsPerGame)}</td>}
              {showBpg && <td className="py-2 pr-3 text-center text-gray-700">{fmt1(row.blocksPerGame)}</td>}
              {showFgp && <td className="py-2 pr-3 text-center text-gray-700">{fmtPct(row.fieldGoalPct)}</td>}
              {show3p && <td className="py-2 pr-3 text-center text-gray-700">{fmtPct(row.threePointPct)}</td>}
              {showFtp && <td className="py-2 text-center text-gray-700">{fmtPct(row.freeThrowPct)}</td>}
            </tr>
          ))}
        </tbody>
      </table>
      {showNotesBelow && (
        <p className="mt-3 text-sm leading-relaxed text-gray-700">{showNotesBelow}</p>
      )}
    </div>
  );
}

function FootballStatsTable({ rows, showNotesBelow, position }: { rows: StatRow[]; showNotesBelow?: string; position?: string }) {
  const pos = (position ?? "").toLowerCase();

  // Determine which numeric stat columns to show based on position
  const isQB = pos.includes("quarterback");
  const isRB = pos.includes("running back") || pos.includes("fullback");
  const isWR = pos.includes("wide receiver") || pos.includes("tight end");
  const isDL = pos.includes("defensive end") || pos.includes("defensive tackle") || pos.includes("defensive lineman") || pos.includes("nose guard") || pos.includes("nose tackle");
  const isLB = pos.includes("linebacker");
  const isDB = pos.includes("cornerback") || pos.includes("safety") || pos.includes("defensive back") || pos.includes("nickelback");
  const isOL = (pos.includes("offensive") && (pos.includes("tackle") || pos.includes("guard") || pos.includes("line"))) || pos === "center" || pos.includes("center");
  const isRET = pos.includes("return specialist") || pos.includes("kick returner") || pos.includes("punt returner");
  const isKP = pos.includes("kicker") || pos.includes("punter") || pos.includes("placekicker");

  const hasNums = hasAny(rows, "pointsPerGame");

  // Position-specific column config: [label, field, formatter]
  type ColConfig = { label: string; field: "pointsPerGame" | "reboundsPerGame" | "assistsPerGame"; fmt: (v: number) => string };
  let cols: ColConfig[] = [];

  if (isQB && hasNums) {
    cols = [
      { label: "YDS", field: "pointsPerGame", fmt: (v) => v.toLocaleString() },
      { label: "TD", field: "reboundsPerGame", fmt: (v) => String(Math.round(v)) },
      { label: "INT", field: "assistsPerGame", fmt: (v) => String(Math.round(v)) },
    ];
    if (rows.some((r) => r.fieldGoalPct != null)) cols.push({ label: "COMP%", field: "fieldGoalPct" as any, fmt: (v) => (v * 100).toFixed(1) + "%" });
    if (rows.some((r) => r.stealsPerGame != null)) cols.splice(0, 0, { label: "ATT", field: "stealsPerGame" as any, fmt: (v) => String(Math.round(v)) });
  } else if (isRB && hasNums) {
    cols = [
      { label: "ATT", field: "stealsPerGame" as any, fmt: (v) => String(Math.round(v)) },
      { label: "RUSH YDS", field: "pointsPerGame", fmt: (v) => v.toLocaleString() },
      { label: "AVG", field: "fieldGoalPct" as any, fmt: (v) => v.toFixed(1) },
      { label: "TD", field: "reboundsPerGame", fmt: (v) => String(Math.round(v)) },
      { label: "REC", field: "assistsPerGame", fmt: (v) => String(Math.round(v)) },
    ];
  } else if (isWR && hasNums) {
    cols = [
      { label: "REC", field: "pointsPerGame", fmt: (v) => String(Math.round(v)) },
      { label: "REC YDS", field: "reboundsPerGame", fmt: (v) => v.toLocaleString() },
      { label: "AVG", field: "fieldGoalPct" as any, fmt: (v) => v.toFixed(1) },
      { label: "TD", field: "assistsPerGame", fmt: (v) => String(Math.round(v)) },
    ];
  } else if ((isDL || isLB) && hasNums) {
    cols = [
      { label: "TOT TKL", field: "pointsPerGame", fmt: (v) => String(Math.round(v)) },
      { label: "SACKS", field: "reboundsPerGame", fmt: (v) => v % 1 === 0 ? String(v) : v.toFixed(1) },
      { label: "TFL", field: "assistsPerGame", fmt: (v) => String(Math.round(v)) },
      { label: "INT", field: "fieldGoalPct" as any, fmt: (v) => String(Math.round(v)) },
      { label: "FF", field: "stealsPerGame" as any, fmt: (v) => String(Math.round(v)) },
    ];
  } else if (isDB && hasNums) {
    cols = [
      { label: "TOT TKL", field: "pointsPerGame", fmt: (v) => String(Math.round(v)) },
      { label: "INT", field: "reboundsPerGame", fmt: (v) => String(Math.round(v)) },
      { label: "PD", field: "assistsPerGame", fmt: (v) => String(Math.round(v)) },
      { label: "FF", field: "stealsPerGame" as any, fmt: (v) => String(Math.round(v)) },
    ];
  } else if (isRET && hasNums) {
    cols = [
      { label: "RET", field: "pointsPerGame", fmt: (v) => String(Math.round(v)) },
      { label: "RET YDS", field: "reboundsPerGame", fmt: (v) => v.toLocaleString() },
      { label: "AVG", field: "fieldGoalPct" as any, fmt: (v) => v.toFixed(1) },
      { label: "TD", field: "assistsPerGame", fmt: (v) => String(Math.round(v)) },
    ];
  } else if (isKP && hasNums) {
    cols = [
      { label: "PUNTS/FG", field: "pointsPerGame", fmt: (v) => String(Math.round(v)) },
      { label: "AVG/PAT", field: "reboundsPerGame", fmt: (v) => v.toFixed(1) },
    ];
  }
  // OL and unknown positions: no stat columns, just show details

  // Filter cols to only those that have data
  cols = cols.filter((c) => rows.some((r) => r[c.field] != null));

  // Only show Notes column if there are NO numeric stat columns (e.g. OL players)
  const hasResult = cols.length === 0 && hasAny(rows, "tournamentResult");

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
            <th className="py-2 pr-3">Year</th>
            <th className="py-2 pr-3">Team</th>
            <th className="py-2 pr-3 text-center">G</th>
            {cols.map((c) => (
              <th key={c.label} className="py-2 pr-3 text-center">{c.label}</th>
            ))}
            {hasResult && <th className="py-2 pr-3 text-left">Notes</th>}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border-b border-gray-100 last:border-0">
              <td className="py-2 pr-3 font-medium text-gray-900 whitespace-nowrap">{row.yearLabel}</td>
              <td className="py-2 pr-3 text-gray-600 whitespace-nowrap">{row.teamName}</td>
              <td className="py-2 pr-3 text-center text-gray-700">{row.gamesPlayed ?? "—"}</td>
              {cols.map((c) => {
                const val = row[c.field];
                return (
                  <td key={c.label} className="py-2 pr-3 text-center text-gray-700">
                    {val != null ? c.fmt(val as number) : "—"}
                  </td>
                );
              })}
              {hasResult && (
                <td className="py-2 pr-3 text-gray-600 text-sm max-w-xs">{row.tournamentResult ?? ""}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {showNotesBelow && (
        <p className="mt-3 text-sm leading-relaxed text-gray-700">{showNotesBelow}</p>
      )}
    </div>
  );
}

function CoachingTable({ rows }: { rows: StatRow[] }) {
  const showResult = rows.some((r) => r.tournamentResult != null);
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
            <th className="py-2 pr-3">Season</th>
            <th className="py-2 pr-3">School</th>
            <th className="py-2 pr-3 text-center">W</th>
            <th className="py-2 pr-3 text-center">L</th>
            {showResult && <th className="py-2 text-left">Result</th>}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border-b border-gray-100 last:border-0">
              <td className="py-2 pr-3 font-medium text-gray-900 whitespace-nowrap">{row.yearLabel}</td>
              <td className="py-2 pr-3 text-gray-600 whitespace-nowrap">{row.teamName}</td>
              <td className="py-2 pr-3 text-center text-gray-700">{row.wins ?? "—"}</td>
              <td className="py-2 pr-3 text-center text-gray-700">{row.losses ?? "—"}</td>
              {showResult && <td className="py-2 text-gray-600 text-sm">{row.tournamentResult ?? "—"}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function PlayerPage({ params }: Props) {
  const { slug } = await params;
  const person = await getPlayerBySlug(slug);
  if (!person) notFound();

  const membership = person.memberships[0];
  const isFootball = membership?.team?.sport === "Football";
  const hsStats = person.seasonStats.filter((s) => s.level === "HIGH_SCHOOL");
  const collegeStats = person.seasonStats.filter((s) => s.level === "COLLEGE");
  const proStats = person.seasonStats.filter((s) => s.level === "PROFESSIONAL");
  const coachingStats = person.seasonStats.filter((s) => s.level === "COACHING");

  const playerPosition = membership?.position ?? "";
  const StatsTable = isFootball
    ? (props: { rows: StatRow[]; showNotesBelow?: string }) => <FootballStatsTable {...props} position={playerPosition} />
    : BasketballStatsTable;

  // Fallback: show aggregate boxes if no college seasonStats rows exist
  const showCollegeAggregate =
    collegeStats.length === 0 && membership && membership.gamesPlayed != null;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      {/* Back button */}
      {membership?.team && (
        <a
          href={`/teams/${membership.team.slug}`}
          className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-blue-700 transition"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          Back to {membership.team.name} ({membership.team.season})
        </a>
      )}

      {/* Hero */}
      <PlayerHero person={person} />

      {/* Bio */}
      {person.bio && (
        <p className="mt-6 text-base leading-relaxed text-gray-700">{person.bio}</p>
      )}

      {/* Where Are They Now */}
      {person.currentStatus && (
        <div className="mt-8">
          <StatusCard status={person.currentStatus} />
        </div>
      )}

      {/* High School Career */}
      {hsStats.length > 0 && (
        <div className="mt-8 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">High School Career</h2>
          <StatsTable rows={hsStats} />
        </div>
      )}

      {/* College Career */}
      {(collegeStats.length > 0 || showCollegeAggregate || membership?.statsNote) && (
        <div className="mt-8 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">College Career</h2>
          {collegeStats.length > 0 ? (
            <StatsTable rows={collegeStats} showNotesBelow={membership?.statsNote ?? undefined} />
          ) : showCollegeAggregate && membership ? (
            <>
              <div className="mb-4 grid grid-cols-4 gap-3 text-center">
                <div className="rounded-lg bg-gray-50 p-3">
                  <p className="text-2xl font-bold text-gray-900">{membership.gamesPlayed}</p>
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-500">G</p>
                </div>
                {membership.pointsPerGame != null && (
                  <div className="rounded-lg bg-gray-50 p-3">
                    <p className="text-2xl font-bold text-gray-900">{membership.pointsPerGame.toFixed(1)}</p>
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500">PPG</p>
                  </div>
                )}
                {membership.reboundsPerGame != null && (
                  <div className="rounded-lg bg-gray-50 p-3">
                    <p className="text-2xl font-bold text-gray-900">{membership.reboundsPerGame.toFixed(1)}</p>
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500">RPG</p>
                  </div>
                )}
                {membership.assistsPerGame != null && (
                  <div className="rounded-lg bg-gray-50 p-3">
                    <p className="text-2xl font-bold text-gray-900">{membership.assistsPerGame.toFixed(1)}</p>
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500">APG</p>
                  </div>
                )}
              </div>
              {membership.statsNote && (
                <p className="text-sm leading-relaxed text-gray-700">{membership.statsNote}</p>
              )}
            </>
          ) : membership?.statsNote ? (
            <p className="text-sm leading-relaxed text-gray-700">{membership.statsNote}</p>
          ) : null}
        </div>
      )}

      {/* Professional Career */}
      {proStats.length > 0 && (
        <div className="mt-8 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">Professional Career</h2>
          <StatsTable rows={proStats} />
        </div>
      )}

      {/* Coaching Career */}
      {coachingStats.length > 0 && (
        <div className="mt-8 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">Coaching Career</h2>
          <CoachingTable rows={coachingStats} />
        </div>
      )}

      {/* Career Timeline */}
      {person.careerEvents.length > 0 && (
        <div className="mt-8">
          <CareerTimeline events={person.careerEvents} />
        </div>
      )}

      {/* Submission Form */}
      <div className="mt-8">
        <SubmissionForm
          personSlug={person.slug}
          personName={`${person.firstName} ${person.lastName}`}
          currentTitle={person.currentStatus?.currentTitle}
          currentEmployer={person.currentStatus?.currentEmployer}
          currentLocation={person.currentStatus?.location}
        />
      </div>
    </div>
  );
}
