import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm font-bold text-blue-800">Where Are They Now?</p>
          <p className="text-xs text-gray-500">
            Celebrating the journeys of college athletes beyond the game.
          </p>
          <nav className="flex gap-4 text-xs text-gray-500">
            <Link href="/teams" className="hover:text-gray-800">
              Teams
            </Link>
            <Link href="/search" className="hover:text-gray-800">
              Search
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
