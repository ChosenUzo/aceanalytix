import { site, team } from "@/lib/content";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/team", "/insights", "/contact"];
  const now = new Date();

  const staticRoutes = routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: (path === "" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const teamRoutes = team.map((m) => ({
    url: `${site.url}/team/${m.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...teamRoutes];
}
