import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPlayerBySlug, getAllPlayerSlugs } from "@/lib/queries";
import { PlayerHero } from "@/components/players/PlayerHero";
import { StatusCard } from "@/components/ui/StatusCard";
import { CareerTimeline } from "@/components/players/CareerTimeline";

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

export default async function PlayerPage({ params }: Props) {
  const { slug } = await params;
  const person = await getPlayerBySlug(slug);
  if (!person) notFound();

  const membership = person.memberships[0];

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
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

      {/* College Career */}
      {(membership?.statsNote || membership?.gamesPlayed != null) && (
        <div className="mt-8 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">College Career</h2>
          {membership.gamesPlayed != null && (
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
          )}
          {membership.statsNote && (
            <p className="text-sm leading-relaxed text-gray-700">{membership.statsNote}</p>
          )}
        </div>
      )}

      {/* Career Timeline */}
      {person.careerEvents.length > 0 && (
        <div className="mt-8">
          <CareerTimeline events={person.careerEvents} />
        </div>
      )}
    </div>
  );
}
