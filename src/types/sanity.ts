/** Sanity-compatible document shapes for future CMS integration. */

export type SanitySlug = {
  _type: "slug";
  current: string;
};

export type SanityImageAsset = {
  _ref: string;
  _type: "reference";
};

export type SanityImage = {
  _type: "image";
  asset: SanityImageAsset;
  alt?: string;
};

export type ProductCategoryDocument = {
  _type: "productCategory";
  _id: string;
  title: string;
  /** Shorter label for grid cards; falls back to title when omitted. */
  shortTitle?: string;
  slug: SanitySlug;
  description: string;
  image: SanityImage;
  sortOrder?: number;
};
