import type { OccupationType } from "@/app/generated/prisma/client";

export function getPlaceholderImage(firstName: string, lastName: string): string {
  const name = encodeURIComponent(`${firstName} ${lastName}`);
  return `https://ui-avatars.com/api/?name=${name}&size=400&background=003087&color=ffffff&bold=true`;
}

export function getImageUrl(imageUrl: string | null, firstName: string, lastName: string): string {
  return imageUrl ?? getPlaceholderImage(firstName, lastName);
}

export function formatOccupationType(type: OccupationType): string {
  const map: Record<OccupationType, string> = {
    ACTIVE_PRO_ATHLETE: "Pro Athlete",
    RETIRED_ATHLETE: "Retired Athlete",
    COACH: "Coach",
    FRONT_OFFICE: "Front Office",
    BROADCASTER_ANALYST: "Broadcaster / Analyst",
    ENTREPRENEUR_BUSINESS: "Business / Entrepreneur",
    STUDENT: "Student",
    OTHER: "Other",
  };
  return map[type] ?? type;
}

export function occupationBadgeColor(type: OccupationType): string {
  const map: Record<OccupationType, string> = {
    ACTIVE_PRO_ATHLETE: "bg-green-100 text-green-800",
    RETIRED_ATHLETE: "bg-gray-100 text-gray-700",
    COACH: "bg-blue-100 text-blue-800",
    FRONT_OFFICE: "bg-purple-100 text-purple-800",
    BROADCASTER_ANALYST: "bg-orange-100 text-orange-800",
    ENTREPRENEUR_BUSINESS: "bg-yellow-100 text-yellow-800",
    STUDENT: "bg-teal-100 text-teal-800",
    OTHER: "bg-slate-100 text-slate-700",
  };
  return map[type] ?? "bg-slate-100 text-slate-700";
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
