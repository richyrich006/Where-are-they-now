import Link from "next/link";
import { Suspense } from "react";
import { getFeaturedPlayers, getPersonCount } from "@/lib/queries";
import { PlayerCard } from "@/components/players/PlayerCard";
import { SearchBar } from "@/components/search/SearchBar";

export const metadata = {
  title: "Where Are They Now? | 2015 Duke Basketball",
};

export default async function HomePage() {
  const [featured, totalCount] = await Promise.all([
    getFeaturedPlayers(),
    getPersonCount(),
  ]);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <div className="max-w-2xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-300">
              2015 NCAA National Champions
            </p>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Duke Blue Devils —<br />Where Are They Now?
            </h1>
            <p className="mt-4 text-lg text-blue-100">
              From NBA championships to the U.S. Army, from the sidelines to the boardroom.
              Follow the extraordinary journeys of the 2015 NCAA champion Duke basketball team.
            </p>
            <div className="mt-8 max-w-md">
              <Suspense>
                <SearchBar />
              </Suspense>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <Link
                href="/teams/duke-basketball-2015"
                className="rounded-lg bg-white px-5 py-2.5 font-semibold text-blue-800 hover:bg-blue-50 transition"
              >
                View Full Roster →
              </Link>
              <span className="flex items-center text-blue-200">
                {totalCount} athletes tracked
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Players */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Featured Players</h2>
          <Link
            href="/teams/duke-basketball-2015"
            className="text-sm font-semibold text-blue-700 hover:underline"
          >
            See full roster →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {featured.map((person) => (
            <PlayerCard key={person.slug} person={person} />
          ))}
        </div>
      </section>

      {/* Story Highlights */}
      <section className="bg-white border-y border-gray-200">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Remarkable Journeys</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                emoji: "🏀",
                title: "Still in the NBA",
                description:
                  "Tyus Jones and Grayson Allen are both active NBA players — teammates again on the Phoenix Suns.",
                slug: "tyus-jones",
              },
              {
                emoji: "🪖",
                title: "From the Court to Combat",
                description:
                  "Marshall Plumlee left basketball for the U.S. Army, completing the elite Ranger School program.",
                slug: "marshall-plumlee",
              },
              {
                emoji: "📣",
                title: "The Successor",
                description:
                  "Jon Scheyer went from role player to Coach K's hand-picked successor as Duke's head coach.",
                slug: "jon-scheyer",
              },
            ].map((story) => (
              <Link
                key={story.slug}
                href={`/players/${story.slug}`}
                className="group rounded-xl border border-gray-200 bg-gray-50 p-5 hover:border-blue-300 hover:bg-blue-50 transition"
              >
                <div className="mb-2 text-3xl">{story.emoji}</div>
                <h3 className="font-bold text-gray-900 group-hover:text-blue-700">
                  {story.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600">{story.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
