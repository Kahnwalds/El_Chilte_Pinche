
export const CATEGORY_SLUGS = [
  'bebidas',
  'platillo-fuerte',
  'postres',
  'caldos',
  'cortes',
  'guisos',
  'mariscos',
  'quesos',
  'tortillas',
] as const;

export type CategorySlug = (typeof CATEGORY_SLUGS)[number];

export interface ImageAsset {
  src: string;
  alt: string;
}

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  image: ImageAsset;
  filterTags: string[];
}
