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
      {status.linkedInUrl && (
        <a
          href={status.linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-[#0A66C2] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#004182]"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn
        </a>
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
