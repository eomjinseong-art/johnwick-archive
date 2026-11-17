import data from "@/data/car-images.json";

export type CarImage = {
  src: string;
  pageUrl: string;
  title: string;
  author: string;
  license: string;
  licenseUrl: string;
  w: number;
  h: number;
};

const images = data as Record<string, CarImage>;

export function carImage(slug: string): CarImage | undefined {
  return images[slug];
}
