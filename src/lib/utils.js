import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getSiteImageSrc(site) {
  return `/images/${site.imageSlug}.jpg`;
}
