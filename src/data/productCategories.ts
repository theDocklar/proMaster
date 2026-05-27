import type { ProductCategoryDocument } from "@/types/sanity";

/**
 * Mock product categories shaped like Sanity `productCategory` documents.
 * Replace this module with a GROQ fetch when Sanity is connected.
 */
export const productCategories: ProductCategoryDocument[] = [
  {
    _type: "productCategory",
    _id: "category-waterproofing",
    title: "Waterproofing Systems",
    shortTitle: "Waterproofing",
    slug: { _type: "slug", current: "waterproofing" },
    description: "Crystalline, membrane & cementitious systems",
    image: {
      _type: "image",
      asset: { _ref: "image-waterproofing-001", _type: "reference" },
      alt: "Waterproofing systems product range",
    },
    sortOrder: 1,
  },
  {
    _type: "productCategory",
    _id: "category-tile-adhesives",
    title: "Tile Adhesives & Grouts",
    shortTitle: "Tile Adhesives",
    slug: { _type: "slug", current: "tile-adhesives" },
    description: "C1, C2, C2S1, C2S2 for all substrates",
    image: {
      _type: "image",
      asset: { _ref: "image-tile-adhesives-001", _type: "reference" },
      alt: "Tile adhesives and grouts product range",
    },
    sortOrder: 2,
  },
  {
    _type: "productCategory",
    _id: "category-concrete-repair",
    title: "Concrete Repair",
    slug: { _type: "slug", current: "concrete-repair" },
    description: "Structural mortars and protection systems",
    image: {
      _type: "image",
      asset: { _ref: "image-concrete-repair-001", _type: "reference" },
      alt: "Concrete repair product range",
    },
    sortOrder: 3,
  },
  {
    _type: "productCategory",
    _id: "category-sealants",
    title: "Sealants & Joints",
    shortTitle: "Sealants",
    slug: { _type: "slug", current: "sealants" },
    description: "Polyurethane, silicone & hybrid joint sealants",
    image: {
      _type: "image",
      asset: { _ref: "image-sealants-001", _type: "reference" },
      alt: "Sealants and joints product range",
    },
    sortOrder: 4,
  },
  {
    _type: "productCategory",
    _id: "category-coatings",
    title: "Coatings",
    slug: { _type: "slug", current: "coatings" },
    description: "Protective, decorative & anti-carbonation coatings",
    image: {
      _type: "image",
      asset: { _ref: "image-coatings-001", _type: "reference" },
      alt: "Coatings product range",
    },
    sortOrder: 5,
  },
  {
    _type: "productCategory",
    _id: "category-admixtures",
    title: "Admixtures",
    slug: { _type: "slug", current: "admixtures" },
    description: "Plasticizers, accelerators & waterproofing additives",
    image: {
      _type: "image",
      asset: { _ref: "image-admixtures-001", _type: "reference" },
      alt: "Admixtures product range",
    },
    sortOrder: 6,
  },
  {
    _type: "productCategory",
    _id: "category-flooring",
    title: "Flooring",
    slug: { _type: "slug", current: "flooring" },
    description: "Epoxy, polyurethane & industrial floor systems",
    image: {
      _type: "image",
      asset: { _ref: "image-flooring-001", _type: "reference" },
      alt: "Flooring product range",
    },
    sortOrder: 7,
  },
  {
    _type: "productCategory",
    _id: "category-bonding-grouting",
    title: "Bonding & Grouting",
    shortTitle: "Bonding & Grouting",
    slug: { _type: "slug", current: "bonding-grouting" },
    description: "Anchoring, injection & precision grouting systems",
    image: {
      _type: "image",
      asset: { _ref: "image-bonding-grouting-001", _type: "reference" },
      alt: "Bonding and grouting product range",
    },
    sortOrder: 8,
  },
];

export function getCategoryBySlug(slug: string): ProductCategoryDocument | undefined {
  return productCategories.find((category) => category.slug.current === slug);
}

export function getCategoryHref(category: ProductCategoryDocument): string {
  return `/products/${category.slug.current}`;
}
