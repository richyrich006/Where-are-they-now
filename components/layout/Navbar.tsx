import Link from "next/link";
import { Suspense } from "react";
import { SearchBar } from "@/components/search/SearchBar";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-extrabold tracking-tight text-blue-800">
            Where Are They Now?
          </span>
        </Link>
        <div className="hidden w-72 sm:block">
          <Suspense>
            <SearchBar compact />
          </Suspense>
        </div>
        <nav className="flex items-center gap-4 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-blue-700">
            Teams
          </Link>
          <Link href="/search" className="hover:text-blue-700 sm:hidden">
            Search
          </Link>
        </nav>
      </div>
    </header>
  );
}
