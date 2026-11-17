import type { MetadataRoute } from "next";
import { cars } from "@/data/cars";
import { films } from "@/data/films";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/films", "/characters", "/world", "/cars", "/keanu", "/credits", ...films.map((f) => `/films/${f.slug}`), ...cars.map((c) => `/cars/${c.slug}`)];
  return paths.map((path) => ({ url: `${SITE_URL}${path}` }));
}
