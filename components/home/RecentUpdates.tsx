import Link from "next/link";
import { getRecentUpdates } from "@/lib/queries";

const FIELD_LABELS: Record<string, string> = {
  currentTitle: "title",
  currentEmployer: "team",
  league: "league",
  location: "location",
  statusNote: "status",
  sourceUrl: "source",
};

function relativeTime(date: Date) {
  const ms = Date.now() - date.getTime();
  const sec = Math.floor(ms / 1000);
  if (sec < 60) return "just now";
  const min = Math.floor(sec / 60);
  if (min < 60) return `${min}m ago`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr}h ago`;
  const day = Math.floor(hr / 24);
  if (day < 30) return `${day}d ago`;
  return date.toLocaleDateString();
}

export async function RecentUpdates() {
  const updates = await getRecentUpdates(8);
  if (updates.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-4 flex items-baseline justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Recent Updates</h2>
        <span className="text-sm text-gray-500">Live feed of player changes</span>
      </div>
      <ul className="space-y-2">
        {updates.map((u) => {
          const person = u.person;
          if (!person) return null;
          return (
            <li
              key={u.id}
              className="flex items-baseline gap-3 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm"
            >
              <span className="text-xs font-mono text-gray-400 whitespace-nowrap">
                {relativeTime(new Date(u.detectedAt))}
              </span>
              <span className="flex-1">
                <Link
                  href={`/players/${person.slug}`}
                  className="font-semibold text-blue-700 hover:underline"
                >
                  {person.firstName} {person.lastName}
                </Link>{" "}
                <span className="text-gray-600">
                  {FIELD_LABELS[u.field] ?? u.field} updated
                  {u.newValue && (
                    <>
                      {" → "}
                      <span className="font-medium text-gray-900">{u.newValue}</span>
                    </>
                  )}
                </span>
              </span>
              <span className="text-xs text-gray-400">via {u.source}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
