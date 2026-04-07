import { prisma } from "@/lib/prisma";
import type { ProposedUpdate, UpdateProvider } from "./types";
import { MockProvider } from "./providers/mock";
import { NbaRosterProvider } from "./providers/nba-roster";

const PROVIDERS: UpdateProvider[] = [new NbaRosterProvider(), new MockProvider()];

export type RunResult = {
  provider: string;
  proposed: number;
  applied: number;
  skipped: number;
};

export async function runAllProviders(): Promise<RunResult[]> {
  const results: RunResult[] = [];
  for (const provider of PROVIDERS) {
    const result = await runProvider(provider);
    results.push(result);
  }
  return results;
}

export async function runProvider(provider: UpdateProvider): Promise<RunResult> {
  const proposed = await provider.fetchUpdates();
  let applied = 0;
  let skipped = 0;

  for (const update of proposed) {
    try {
      const wasApplied = await applyUpdate(update);
      if (wasApplied) applied++;
      else skipped++;
    } catch (e) {
      console.error(`[${provider.name}] failed to apply ${update.personSlug}.${update.field}:`, e);
      skipped++;
    }
  }

  return {
    provider: provider.name,
    proposed: proposed.length,
    applied,
    skipped,
  };
}

async function applyUpdate(update: ProposedUpdate): Promise<boolean> {
  const person = await prisma.person.findUnique({
    where: { slug: update.personSlug },
    include: { currentStatus: true },
  });
  if (!person || !person.currentStatus) return false;

  const currentValue = (person.currentStatus as Record<string, unknown>)[update.field] as
    | string
    | null
    | undefined;

  // Idempotent: skip if value matches
  if (currentValue === update.newValue) return false;

  await prisma.currentStatus.update({
    where: { personId: person.id },
    data: { [update.field]: update.newValue },
  });

  await prisma.playerUpdate.create({
    data: {
      personId: person.id,
      field: update.field,
      oldValue: currentValue ?? null,
      newValue: update.newValue,
      source: update.source,
    },
  });

  return true;
}
