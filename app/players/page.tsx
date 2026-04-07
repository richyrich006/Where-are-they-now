import Link from "next/link";
import { getAllSchools, getFilteredPlayers, type PlayerFilter } from "@/lib/queries";

export const metadata = {
  title: "Browse Players — Where Are They Now",
  description: "Filter former college athletes by what they're doing today.",
};

const OCCUPATION_OPTIONS = [
  { value: "", label: "All outcomes", emoji: "🌐" },
  { value: "ACTIVE_PRO_ATHLETE", label: "Still playing pro", emoji: "🏀" },
  { value: "RETIRED_ATHLETE", label: "Retired athletes", emoji: "🏖️" },
  { value: "COACH", label: "Now coaching", emoji: "📋" },
  { value: "RETIRED_COACH", label: "Retired coaches", emoji: "🎓" },
  { value: "FRONT_OFFICE", label: "Front office", emoji: "🏢" },
  { value: "BROADCASTER_ANALYST", label: "Broadcasting / media", emoji: "🎙️" },
  { value: "ENTREPRENEUR_BUSINESS", label: "Business / entrepreneur", emoji: "💼" },
  { value: "STUDENT", label: "Still in school", emoji: "📚" },
  { value: "OTHER", label: "Other paths", emoji: "🔀" },
];

const OCCUPATION_LABELS: Record<string, string> = Object.fromEntries(
  OCCUPATION_OPTIONS.filter((o) => o.value).map((o) => [o.value, o.label]),
);

type Props = {
  searchParams: Promise<{ outcome?: string; school?: string; league?: string; q?: string }>;
};

export default async function PlayersPage({ searchParams }: Props) {
  const params = await searchParams;
  const filter: PlayerFilter = {
    occupation: params.outcome,
    school: params.school,
    league: params.league,
    query: params.q,
  };

  const [players, schools] = await Promise.all([
    getFilteredPlayers(filter),
    getAllSchools(),
  ]);

  function buildHref(overrides: Partial<typeof params>) {
    const merged = { ...params, ...overrides };
    const usp = new URLSearchParams();
    for (const [k, v] of Object.entries(merged)) {
      if (v) usp.set(k, v);
    }
    const qs = usp.toString();
    return qs ? `/players?${qs}` : "/players";
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-extrabold text-gray-900">Browse Players</h1>
        <p className="mt-2 text-sm text-gray-600">
          Filter alumni by what they're doing today.
        </p>
      </header>

      {/* Outcome chips */}
      <div className="mb-6 flex flex-wrap gap-2">
        {OCCUPATION_OPTIONS.map((opt) => {
          const active = (params.outcome ?? "") === opt.value;
          return (
            <Link
              key={opt.value}
              href={buildHref({ outcome: opt.value || undefined })}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition ${
                active
                  ? "bg-blue-700 text-white shadow-sm"
                  : "bg-white border border-gray-200 text-gray-700 hover:border-blue-300 hover:text-blue-700"
              }`}
            >
              <span>{opt.emoji}</span>
              {opt.label}
            </Link>
          );
        })}
      </div>

      {/* School filter */}
      <div className="mb-6 flex flex-wrap items-baseline gap-2">
        <span className="text-xs font-semibold uppercase text-gray-600">School:</span>
        <Link
          href={buildHref({ school: undefined })}
          className={`text-sm ${
            !params.school
              ? "font-bold text-blue-700"
              : "text-gray-600 hover:text-blue-700"
          }`}
        >
          All
        </Link>
        {schools.map((s) => (
          <Link
            key={s.school}
            href={buildHref({ school: s.school })}
            className={`text-sm ${
              params.school === s.school
                ? "font-bold text-blue-700"
                : "text-gray-600 hover:text-blue-700"
            }`}
          >
            · {s.school.replace(" University", "").replace(" of ", " ")}
          </Link>
        ))}
      </div>

      {/* Search query */}
      <form action="/players" className="mb-6">
        {params.outcome && <input type="hidden" name="outcome" value={params.outcome} />}
        {params.school && <input type="hidden" name="school" value={params.school} />}
        <input
          name="q"
          defaultValue={params.q ?? ""}
          placeholder="Search by name or employer..."
          className="w-full max-w-md rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
        />
      </form>

      {/* Result count */}
      <p className="mb-3 text-sm text-gray-600">
        {players.length} result{players.length === 1 ? "" : "s"}
        {params.outcome && OCCUPATION_LABELS[params.outcome]
          ? ` · ${OCCUPATION_LABELS[params.outcome]}`
          : ""}
        {params.school ? ` · ${params.school}` : ""}
        {players.length === 200 ? " (showing first 200)" : ""}
      </p>

      {/* Player grid */}
      {players.length === 0 ? (
        <p className="rounded-md border border-gray-200 bg-gray-50 p-6 text-center text-sm text-gray-500">
          No players match your filters. Try clearing some.
        </p>
      ) : (
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {players.map((p) => {
            const team = p.memberships[0]?.team;
            return (
              <li key={p.id}>
                <Link
                  href={`/players/${p.slug}`}
                  className="block rounded-xl border border-gray-200 bg-white p-4 transition hover:border-blue-300 hover:shadow-sm"
                >
                  <p className="font-semibold text-gray-900">
                    {p.firstName} {p.lastName}
                  </p>
                  {p.currentStatus?.currentTitle && (
                    <p className="mt-1 text-sm text-gray-700">
                      {p.currentStatus.currentTitle}
                      {p.currentStatus.currentEmployer
                        ? `, ${p.currentStatus.currentEmployer}`
                        : ""}
                    </p>
                  )}
                  {team && (
                    <p className="mt-1 text-xs text-gray-500">
                      {team.school} · {team.season}
                    </p>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
