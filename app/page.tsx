import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { getFeaturedPlayers, getPersonCount, getTeamCount, getRemarkableStories, getAllTeams } from "@/lib/queries";
import { PlayerCard } from "@/components/players/PlayerCard";
import { SearchBar } from "@/components/search/SearchBar";
import { formatOccupationType } from "@/lib/utils";

export const metadata = {
  title: "Where Are They Now? | Championship Teams",
};

const storyIcon: Record<string, string> = {
  ACTIVE_PRO_ATHLETE: "🏀",
  RETIRED_ATHLETE: "🎓",
  COACH: "📣",
  RETIRED_COACH: "📣",
  OTHER: "⭐",
  ENTREPRENEUR_BUSINESS: "💼",
  FRONT_OFFICE: "🏢",
  BROADCASTER_ANALYST: "🎙️",
  STUDENT: "📚",
};

const sportIcon: Record<string, string> = {
  "Men's Basketball": "🏀",
  "Boys Basketball": "🏀",
  "Football": "🏈",
};

export default async function HomePage() {
  const [featured, totalCount, teamCount, stories, teams] = await Promise.all([
    getFeaturedPlayers(),
    getPersonCount(),
    getTeamCount(),
    getRemarkableStories(),
    getAllTeams(),
  ]);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <div className="max-w-2xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-300">
              Championship Teams Tracker
            </p>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Where Are They Now?
            </h1>
            <p className="mt-4 text-lg text-blue-100">
              From NBA championships to the U.S. Army, from the sidelines to the boardroom.
              Follow the extraordinary journeys of the greatest teams in sports history.
            </p>
            <div className="mt-8 max-w-md">
              <Suspense>
                <SearchBar />
              </Suspense>
            </div>
            <div className="mt-6 text-sm text-blue-200">
              {totalCount} athletes tracked across {teamCount}{" "}
              {teamCount === 1 ? "team" : "teams"}
            </div>
          </div>
        </div>
      </section>

      {/* All Teams */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">Teams</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {teams.map((team) => (
            <Link
              key={team.slug}
              href={`/teams/${team.slug}`}
              className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 transition hover:border-blue-300 hover:shadow-md"
            >
              {team.logoUrl ? (
                <Image
                  src={team.logoUrl}
                  alt={`${team.name} logo`}
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                  unoptimized
                />
              ) : (
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 text-2xl">
                  {sportIcon[team.sport] ?? "🏆"}
                </span>
              )}
              <div>
                <h3 className="font-bold text-gray-900 group-hover:text-blue-700">
                  {team.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {team.season} · {team.sport}
                </p>
                <p className="text-xs text-gray-400">
                  {team._count.memberships} members
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Players */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">Featured Players & Coaches</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {featured.map((person) => (
            <PlayerCard key={person.slug} person={person} />
          ))}
        </div>
      </section>

      {/* Remarkable Journeys — generated from DB */}
      {stories.length > 0 && (
        <section className="border-y border-gray-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Remarkable Journeys</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {stories.map((person) => {
                const status = person.currentStatus!;
                const icon = storyIcon[status.occupationType] ?? "⭐";
                const headline = [status.currentTitle, status.currentEmployer]
                  .filter(Boolean)
                  .join(" · ");
                const excerpt = status.statusNote
                  ? status.statusNote.split(".")[0] + "."
                  : formatOccupationType(status.occupationType);
                return (
                  <Link
                    key={person.slug}
                    href={`/players/${person.slug}`}
                    className="group rounded-xl border border-gray-200 bg-gray-50 p-5 transition hover:border-blue-300 hover:bg-blue-50"
                  >
                    <div className="mb-2 text-3xl">{icon}</div>
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-700">
                      {person.firstName} {person.lastName}
                    </h3>
                    {headline && (
                      <p className="mt-0.5 text-sm font-medium text-blue-700">{headline}</p>
                    )}
                    <p className="mt-1 text-sm text-gray-600">{excerpt}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
