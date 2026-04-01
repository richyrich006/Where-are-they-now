import Link from "next/link";
import type { Metadata } from "next";
import { getAllTeams } from "@/lib/queries";

export const metadata: Metadata = {
  title: "All Teams",
  description: "Browse all championship teams tracked on Where Are They Now.",
};

const sportEmoji: Record<string, string> = {
  "Men's Basketball": "🏀",
  "Football": "🏈",
  "Women's Basketball": "🏀",
  "Baseball": "⚾",
  "Soccer": "⚽",
};

export default async function TeamsPage() {
  const teams = await getAllTeams();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        All Teams
      </h1>
      <p className="mb-8 text-gray-500">
        Select a team to see where every player and coach is today.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {teams.map((team) => (
          <Link
            key={team.slug}
            href={`/teams/${team.slug}`}
            className="group rounded-xl border border-gray-200 bg-white p-6 transition hover:border-blue-300 hover:shadow-lg"
          >
            <div className="mb-3 text-4xl">{sportEmoji[team.sport] ?? "🏅"}</div>
            <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-700">
              {team.name}
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              {team.season} · {team.sport} · {team.school}
            </p>
            {team.accomplishment && (
              <p className="mt-2 text-sm font-semibold text-yellow-700">
                🏆 {team.accomplishment}
              </p>
            )}
            {team.conference && (
              <p className="mt-1 text-xs text-gray-400">{team.conference}</p>
            )}
            <p className="mt-3 text-xs text-gray-400">
              {team._count.memberships} members tracked
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
