import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCoachBySlug, getCoachingTree } from "@/lib/queries";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const coach = await getCoachBySlug(slug);
  if (!coach) return {};
  const name = `${coach.firstName} ${coach.lastName}`;
  return {
    title: `${name} — Coach Profile & Coaching Tree`,
    description: `Every team ${name} coached, every player on those rosters, and the coaching tree of former players who became coaches themselves.`,
  };
}

export default async function CoachPage({ params }: Props) {
  const { slug } = await params;
  const coach = await getCoachBySlug(slug);
  if (!coach) notFound();

  const tree = await getCoachingTree(coach.id);

  const headCoachTeams = coach.memberships.filter((m) => m.role === "HEAD_COACH");
  const assistantTeams = coach.memberships.filter((m) => m.role === "ASSISTANT_COACH");

  const totalPlayers = tree.players.length;
  const coachingDescendants = tree.coaches.filter((p) => p.id !== coach.id);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      {/* Header */}
      <header className="mb-8">
        <Link href="/coaches" className="text-sm text-blue-700 hover:underline">
          ← All coaches
        </Link>
        <h1 className="mt-2 text-4xl font-extrabold text-gray-900">
          {coach.firstName} {coach.lastName}
        </h1>
        {coach.currentStatus?.currentTitle && (
          <p className="mt-2 text-lg text-gray-700">
            {coach.currentStatus.currentTitle}
            {coach.currentStatus.currentEmployer
              ? `, ${coach.currentStatus.currentEmployer}`
              : ""}
          </p>
        )}
        {coach.bio && (
          <p className="mt-3 max-w-3xl text-sm text-gray-600">{coach.bio}</p>
        )}
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <span className="rounded-full bg-blue-50 px-3 py-1 font-semibold text-blue-800">
            {coach.memberships.length} season{coach.memberships.length === 1 ? "" : "s"}{" "}
            tracked
          </span>
          <span className="rounded-full bg-green-50 px-3 py-1 font-semibold text-green-800">
            {totalPlayers} player{totalPlayers === 1 ? "" : "s"} coached
          </span>
          <span className="rounded-full bg-purple-50 px-3 py-1 font-semibold text-purple-800">
            {coachingDescendants.length} coaching descendant
            {coachingDescendants.length === 1 ? "" : "s"}
          </span>
        </div>
      </header>

      {/* Teams coached */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Teams Coached</h2>
        {headCoachTeams.length > 0 && (
          <div className="mb-4">
            <h3 className="mb-2 text-xs font-semibold uppercase text-gray-500">
              Head Coach
            </h3>
            <ul className="grid gap-2 sm:grid-cols-2">
              {headCoachTeams.map((m) => (
                <li key={m.id}>
                  <Link
                    href={`/teams/${m.team.slug}`}
                    className="block rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm transition hover:border-blue-300 hover:shadow-sm"
                  >
                    <span className="font-semibold text-gray-900">
                      {m.team.season} {m.team.name}
                    </span>
                    {m.team.accomplishment && (
                      <span className="block text-xs text-gray-500">
                        {m.team.accomplishment}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        {assistantTeams.length > 0 && (
          <div>
            <h3 className="mb-2 text-xs font-semibold uppercase text-gray-500">
              Assistant Coach
            </h3>
            <ul className="grid gap-2 sm:grid-cols-2">
              {assistantTeams.map((m) => (
                <li key={m.id}>
                  <Link
                    href={`/teams/${m.team.slug}`}
                    className="block rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm transition hover:border-blue-300 hover:bg-white"
                  >
                    <span className="font-medium text-gray-800">
                      {m.team.season} {m.team.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* Coaching tree */}
      <section className="mb-10">
        <h2 className="mb-2 text-xl font-bold text-gray-900">Coaching Tree</h2>
        <p className="mb-4 text-sm text-gray-600">
          Former players who went on to become coaches themselves. The coaching
          lineage of {coach.firstName} {coach.lastName}.
        </p>
        {coachingDescendants.length === 0 ? (
          <p className="rounded-md bg-gray-50 p-4 text-sm text-gray-500">
            No known coaching descendants in the database yet.
          </p>
        ) : (
          <ul className="grid gap-3 sm:grid-cols-2">
            {coachingDescendants.map((p) => {
              const headGigs = p.memberships.filter((m) => m.role === "HEAD_COACH");
              const asstGigs = p.memberships.filter(
                (m) => m.role === "ASSISTANT_COACH",
              );
              return (
                <li
                  key={p.id}
                  className="rounded-xl border border-purple-200 bg-purple-50 p-4"
                >
                  <Link
                    href={`/coaches/${p.slug}`}
                    className="font-semibold text-purple-900 hover:underline"
                  >
                    {p.firstName} {p.lastName}
                  </Link>
                  {p.currentStatus?.currentTitle && (
                    <p className="mt-1 text-sm text-gray-700">
                      {p.currentStatus.currentTitle}
                      {p.currentStatus.currentEmployer
                        ? `, ${p.currentStatus.currentEmployer}`
                        : ""}
                    </p>
                  )}
                  {headGigs.length > 0 && (
                    <p className="mt-1 text-xs text-purple-700">
                      Head coach: {[...new Set(headGigs.map((g) => g.team.school))].join(", ")}
                    </p>
                  )}
                  {asstGigs.length > 0 && headGigs.length === 0 && (
                    <p className="mt-1 text-xs text-purple-700">
                      Assistant: {[...new Set(asstGigs.map((g) => g.team.school))].join(", ")}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </section>

      {/* All players coached */}
      <section>
        <h2 className="mb-2 text-xl font-bold text-gray-900">All Players Coached</h2>
        <p className="mb-4 text-sm text-gray-600">
          Every player tracked on a roster {coach.firstName} {coach.lastName} was on
          the staff of.
        </p>
        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {tree.players.map((p) => (
            <li key={p.id}>
              <Link
                href={`/players/${p.slug}`}
                className="block rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm transition hover:border-blue-300"
              >
                <p className="font-medium text-gray-900">
                  {p.firstName} {p.lastName}
                </p>
                {p.currentStatus?.currentTitle && (
                  <p className="mt-0.5 text-xs text-gray-500">
                    {p.currentStatus.currentTitle}
                    {p.currentStatus.currentEmployer
                      ? `, ${p.currentStatus.currentEmployer}`
                      : ""}
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
