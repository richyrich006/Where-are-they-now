import type { OccupationType } from "@/app/generated/prisma/client";
import { formatOccupationType, occupationBadgeColor } from "@/lib/utils";

export function Badge({ type }: { type: OccupationType }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${occupationBadgeColor(type)}`}
    >
      {formatOccupationType(type)}
    </span>
  );
}
