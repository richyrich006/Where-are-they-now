import type { CareerEvent } from "@/app/generated/prisma/client";

const eventIcons: Record<string, string> = {
  CHAMPIONSHIP: "🏆",
  DRAFT: "📋",
  SIGNING: "✍️",
  TRADE: "🔄",
  RETIREMENT: "🎓",
  COACHING_HIRE: "📣",
  AWARD: "⭐",
  OTHER: "📌",
  STUDENT: "📚",
};

export function CareerTimeline({ events }: { events: CareerEvent[] }) {
  if (events.length === 0) return null;

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold text-gray-900">Career Timeline</h2>
      <ol className="relative border-l border-gray-200">
        {events.map((event) => (
          <li key={event.id} className="mb-6 ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-sm ring-4 ring-white">
              {eventIcons[event.eventType ?? "OTHER"] ?? "📌"}
            </span>
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="text-sm font-bold text-blue-700">{event.year}</span>
              <p className="text-sm font-semibold text-gray-900">{event.title}</p>
            </div>
            {event.detail && (
              <p className="mt-0.5 text-sm text-gray-500">{event.detail}</p>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
