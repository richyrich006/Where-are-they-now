"use client";

import { useEffect, useRef, useState } from "react";

type Suggestion = {
  slug: string;
  name: string;
  team: string | null;
};

type Props = {
  name: string;
  label: string;
  defaultSlug?: string;
  defaultLabel?: string;
};

export function PlayerSelect({ name, label, defaultSlug, defaultLabel }: Props) {
  const [query, setQuery] = useState(defaultLabel ?? "");
  const [slug, setSlug] = useState(defaultSlug ?? "");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.length < 2) {
      setSuggestions([]);
      return;
    }
    const handle = setTimeout(async () => {
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        if (res.ok) {
          const data = await res.json();
          setSuggestions(data);
        }
      } catch {
        // ignore
      }
    }, 200);
    return () => clearTimeout(handle);
  }, [query]);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <label className="block text-xs font-semibold uppercase text-gray-700">
        {label}
      </label>
      <input
        type="text"
        autoComplete="off"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setSlug("");
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        placeholder="Search for a player..."
        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
      />
      <input type="hidden" name={name} value={slug} />
      {open && suggestions.length > 0 && (
        <ul className="absolute z-10 mt-1 max-h-64 w-full overflow-y-auto rounded-md border border-gray-200 bg-white shadow-lg">
          {suggestions.map((s) => (
            <li key={s.slug}>
              <button
                type="button"
                onClick={() => {
                  setQuery(s.name);
                  setSlug(s.slug);
                  setOpen(false);
                }}
                className="flex w-full items-baseline justify-between px-3 py-2 text-left text-sm hover:bg-blue-50"
              >
                <span className="font-medium text-gray-900">{s.name}</span>
                {s.team && (
                  <span className="ml-2 truncate text-xs text-gray-500">{s.team}</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
