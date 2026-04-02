import Link from "next/link";
import Image from "next/image";
import { getPersonCount, getTeamCount, getAllTeams } from "@/lib/queries";

export const metadata = {
  title: "Where Are They Now? | Championship Teams",
};

const sportIcon: Record<string, string> = {
  "Men's Basketball": "🏀",
  "Boys Basketball": "🏀",
  Football: "🏈",
};

export default async function HomePage() {
  const [totalCount, teamCount, teams] = await Promise.all([
    getPersonCount(),
    getTeamCount(),
    getAllTeams(),
  ]);

  const featured = teams[0];

  return (
    <div>
      {/* Featured Team Hero */}
      {featured && (
        <section className="bg-gray-900 text-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
            <div className="flex items-center gap-8">
              {featured.logoUrl ? (
                <Image
                  src={featured.logoUrl}
                  alt={`${featured.name} logo`}
                  width={96}
                  height={96}
                  className="hidden h-20 w-20 object-contain sm:block sm:h-24 sm:w-24"
                  unoptimized
                />
              ) : (
                <span className="hidden h-20 w-20 items-center justify-center rounded-xl bg-gray-800 text-4xl sm:flex sm:h-24 sm:w-24">
                  {sportIcon[featured.sport] ?? "🏆"}
                </span>
              )}
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-400">
                  Featured Team
                </p>
                <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                  {featured.name}
                </h1>
                <p className="mt-2 text-lg text-gray-300">
                  {featured.season} · {featured.sport}
                  {featured.accomplishment && ` · ${featured.accomplishment}`}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href={`/teams/${featured.slug}`}
                    className="inline-flex rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
                  >
                    Explore Roster →
                  </Link>
                  <span className="text-sm text-gray-400">
                    {totalCount} athletes across {teamCount} teams
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Teams */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-gray-400">
          All Teams
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {teams.map((team) => (
            <Link
              key={team.slug}
              href={`/teams/${team.slug}`}
              className="group overflow-hidden rounded-xl border border-gray-100 bg-white transition hover:shadow-md"
            >
              <div className="h-1.5 bg-blue-600" />
              <div className="flex items-center gap-3 p-5">
                {team.logoUrl ? (
                  <Image
                    src={team.logoUrl}
                    alt={`${team.name} logo`}
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                    unoptimized
                  />
                ) : (
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-xl">
                    {sportIcon[team.sport] ?? "🏆"}
                  </span>
                )}
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-700">
                    {team.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {team.season} · {team.sport} · {team._count.memberships} members
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
