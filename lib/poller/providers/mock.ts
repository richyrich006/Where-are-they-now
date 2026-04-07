import type { UpdateProvider, ProposedUpdate } from "../types";

// Mock provider for development. Returns no updates by default.
// Set MOCK_PROVIDER_FIXTURE=path/to/json.json to load fixture data.
export class MockProvider implements UpdateProvider {
  name = "mock";

  async fetchUpdates(): Promise<ProposedUpdate[]> {
    const fixturePath = process.env.MOCK_PROVIDER_FIXTURE;
    if (!fixturePath) return [];

    try {
      const fs = await import("node:fs/promises");
      const raw = await fs.readFile(fixturePath, "utf-8");
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      return parsed.filter(
        (u): u is ProposedUpdate =>
          typeof u?.personSlug === "string" &&
          typeof u?.field === "string" &&
          typeof u?.newValue === "string",
      ).map((u) => ({ ...u, source: u.source ?? "mock" }));
    } catch {
      return [];
    }
  }
}
