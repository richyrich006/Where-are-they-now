import { Suspense } from "react";
import type { Metadata } from "next";
import { searchPeople } from "@/lib/queries";
import { PlayerCard } from "@/components/players/PlayerCard";
import { SearchBar } from "@/components/search/SearchBar";

type Props = { searchParams: Promise<{ q?: string }> };

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { q } = await searchParams;
  return {
    title: q ? `"${q}" — Search Results` : "Search Players",
  };
}

async function Results({ query }: { query: string }) {
  if (!query.trim()) {
    return (
      <p className="mt-8 text-center text-gray-500">
        Enter a name, school, or career to search.
      </p>
    );
  }

  const results = await searchPeople(query);

  if (results.length === 0) {
    return (
      <div className="mt-8 text-center">
        <p className="text-gray-500">No results for &ldquo;{query}&rdquo;.</p>
        <p className="mt-1 text-sm text-gray-400">
          Try searching a player name, school, or current employer.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <p className="mb-4 text-sm text-gray-500">
        {results.length} result{results.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
      </p>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {results.map((person) => (
          <PlayerCard key={person.slug} person={person} />
        ))}
      </div>
    </div>
  );
}

export default async function SearchPage({ searchParams }: Props) {
  const { q = "" } = await searchParams;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-6 text-2xl font-bold text-gray-900">Search Players</h1>
      <div className="max-w-xl">
        <Suspense>
          <SearchBar />
        </Suspense>
      </div>
      <Suspense fallback={<p className="mt-8 text-gray-400">Searching…</p>}>
        <Results query={q} />
      </Suspense>
    </div>
  );
}
