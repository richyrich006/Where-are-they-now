import Link from "next/link";
import { getOnThisDayEvents } from "@/lib/queries";

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const EVENT_ICONS: Record<string, string> = {
  DRAFT: "🎯",
  SIGNING: "✍️",
  AWARD: "🏆",
  CHAMPIONSHIP: "👑",
  RETIREMENT: "🛑",
  TRADE: "🔄",
  CAREER_CHANGE: "💼",
};

export async function OnThisDay() {
  const now = new Date();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const events = await getOnThisDayEvents(month, day);

  if (events.length === 0) {
    return (
      <section className="border-y border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-2xl font-bold text-gray-900">
            On This Day — {MONTH_NAMES[month - 1]} {day}
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            No tracked events for this date. Check back tomorrow.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="border-y border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="text-2xl font-bold text-gray-900">
            On This Day — {MONTH_NAMES[month - 1]} {day}
          </h2>
          <span className="text-sm text-gray-500">
            {events.length} event{events.length === 1 ? "" : "s"} in history
          </span>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {events.map((e) => {
            const team = e.person.memberships[0]?.team;
            return (
              <li
                key={e.id}
                className="rounded-xl border border-gray-200 bg-gray-50 p-4 transition hover:border-blue-300 hover:bg-white"
              >
                <Link href={`/players/${e.person.slug}`} className="block">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">
                      {EVENT_ICONS[e.eventType ?? ""] ?? "📅"}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-2">
                        <p className="font-semibold text-gray-900">
                          {e.person.firstName} {e.person.lastName}
                        </p>
                        <span className="text-sm font-mono text-gray-500">
                          {e.year}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-gray-700">{e.title}</p>
                      {team && (
                        <p className="mt-1 text-xs text-gray-500">
                          {team.school} · {team.season}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
