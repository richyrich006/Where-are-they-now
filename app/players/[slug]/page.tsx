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
      {membership?.statsNote && (
        <div className="mt-8 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="mb-2 text-xl font-bold text-gray-900">College Career</h2>
          <p className="text-sm leading-relaxed text-gray-700">{membership.statsNote}</p>
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
