import type { CurrentStatus } from "@/app/generated/prisma/client";
import { Badge } from "./Badge";

export function StatusCard({ status }: { status: CurrentStatus }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center gap-2">
        <span className="text-sm font-semibold uppercase tracking-wide text-gray-500">
          Where Are They Now
        </span>
        <Badge type={status.occupationType} />
      </div>

      {status.currentTitle && (
        <p className="text-lg font-bold text-gray-900">{status.currentTitle}</p>
      )}
      {status.currentEmployer && (
        <p className="text-base text-blue-700">{status.currentEmployer}</p>
      )}
      {status.league && (
        <p className="text-sm text-gray-500">{status.league}</p>
      )}
      {status.location && (
        <p className="mt-1 flex items-center gap-1 text-sm text-gray-500">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
          {status.location}
        </p>
      )}
      {status.statusNote && (
        <p className="mt-3 text-sm leading-relaxed text-gray-600">{status.statusNote}</p>
      )}
      {status.asOfDate && (
        <p className="mt-3 text-xs text-gray-400">
          Last updated:{" "}
          {new Date(status.asOfDate).toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
          {status.sourceUrl && (
            <>
              {" · "}
              <a
                href={status.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-600"
              >
                Source
              </a>
            </>
          )}
        </p>
      )}
    </div>
  );
}
