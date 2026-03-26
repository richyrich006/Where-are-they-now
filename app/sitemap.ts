import type { MetadataRoute } from "next";
import { getAllPlayerSlugs, getAllTeamSlugs } from "@/lib/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://where-are-they-now.vercel.app";

  const [playerSlugs, teamSlugs] = await Promise.all([
    getAllPlayerSlugs(),
    getAllTeamSlugs(),
  ]);

  const playerUrls = playerSlugs.map((slug) => ({
    url: `${baseUrl}/players/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const teamUrls = teamSlugs.map((slug) => ({
    url: `${baseUrl}/teams/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [
    { url: baseUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/search`, changeFrequency: "weekly", priority: 0.5 },
    ...teamUrls,
    ...playerUrls,
  ];
}
