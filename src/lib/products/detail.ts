import { getProductBySlug, getProductsByCategory, products } from "@/data/products";
import type {
  ProductDetail,
  ProductDownload,
  ProductImage,
  ProductListItem,
  ProductSpecification,
} from "@/types/product";

const CATEGORY_FEATURE_TEMPLATES: Record<string, string[]> = {
  waterproofing: [
    "Engineered for high hydrostatic pressure resistance in below-grade structures",
    "Forms a permanent barrier within the concrete matrix",
    "Suitable for positive and negative-side waterproofing applications",
    "Compatible with potable water contact systems where specified",
    "Designed for Gulf climate conditions — high heat and humidity",
  ],
  "tile-adhesives": [
    "Extended open time for large-format tile installation",
    "Superior bond strength on concrete, screed, and existing tiles",
    "Suitable for internal and external vertical and horizontal surfaces",
    "Non-slip formulation for wall tile applications",
    "Compliant with international tile adhesive classification standards",
  ],
  "concrete-repair": [
    "High early strength for rapid return to service",
    "Excellent adhesion to prepared concrete substrates",
    "Shrinkage-compensated formulation for structural repairs",
    "Suitable for hand and spray application methods",
    "Compatible with cathodic protection and reinforcement systems",
  ],
  sealants: [
    "Excellent movement accommodation in expansion and control joints",
    "UV and weathering resistant for external exposure",
    "Paintable finish compatible with most coating systems",
    "Low VOC formulation for occupied building applications",
    "Adheres to concrete, metal, glass, and most common substrates",
  ],
  coatings: [
    "High-build protective coating for industrial environments",
    "Chemical and abrasion resistant surface finish",
    "Available in a range of colours and gloss levels",
    "Suitable for floors, walls, and structural steel protection",
    "Fast-curing options available for minimal downtime",
  ],
  admixtures: [
    "Improves workability without additional mix water",
    "Enhances durability and long-term concrete performance",
    "Compatible with standard Portland cement concrete mixes",
    "Dosage-controlled for consistent batch results",
    "Tested to relevant ASTM and EN admixture standards",
  ],
  flooring: [
    "Heavy-duty traffic rating for commercial and industrial use",
    "Seamless finish for easy cleaning and maintenance",
    "Available in anti-slip and chemical-resistant grades",
    "Suitable for food processing and pharmaceutical environments",
    "Fast installation with minimal substrate preparation",
  ],
  "bonding-grouting": [
    "High-flow precision grouting for machine bases and anchors",
    "Non-shrink formulation maintains load transfer over time",
    "Excellent bond to steel and concrete substrates",
    "Suitable for post-tensioning duct grouting applications",
    "Extended working time for complex placement requirements",
  ],
};

const COVERAGE_BY_CATEGORY: Record<string, string> = {
  waterproofing: "0.8 – 1.2 kg/m² per coat",
  "tile-adhesives": "3 – 5 kg/m² depending on trowel size",
  "concrete-repair": "1.8 – 2.5 kg/m² per 10 mm thickness",
  sealants: "12 – 15 linear metres per 600 ml cartridge",
  coatings: "0.15 – 0.25 kg/m² per coat",
  admixtures: "0.8 – 2.5 L per m³ of concrete",
  flooring: "0.3 – 0.5 kg/m² per coat",
  "bonding-grouting": "1.75 kg/L mixed volume",
};

const POT_LIFE_BY_CATEGORY: Record<string, string> = {
  waterproofing: "30 minutes @ 25°C",
  "tile-adhesives": "45 minutes @ 25°C",
  "concrete-repair": "20 minutes @ 25°C",
  sealants: "N/A — ready to use",
  coatings: "45 minutes @ 25°C",
  admixtures: "N/A — added at batching",
  flooring: "30 minutes @ 25°C",
  "bonding-grouting": "25 minutes @ 25°C",
};

const GALLERY_LABELS = ["Product", "Application", "Packaging", "Detail"];

function buildDescription(product: ProductListItem): string {
  const areas =
    product.applicationAreas.length > 0
      ? product.applicationAreas.slice(0, 3).join(", ")
      : "demanding construction environments";

  const standards =
    product.standards.length > 0
      ? ` Compliant with ${product.standards.join(", ")}.`
      : "";

  return `${product.shortDescription} Engineered for ${areas} across the UAE and GCC.${standards} Available in ${product.packaging.join(" and ")}.`;
}

function buildFeatures(product: ProductListItem): string[] {
  const templates =
    CATEGORY_FEATURE_TEMPLATES[product.categorySlug] ??
    CATEGORY_FEATURE_TEMPLATES.waterproofing;

  const contextual = product.standards.map(
    (standard) => `Tested and certified to ${standard} requirements`
  );

  return [...templates.slice(0, 3), ...contextual.slice(0, 2)].slice(0, 5);
}

function buildSpecifications(product: ProductListItem): ProductSpecification[] {
  return [
    {
      key: "Coverage",
      value: COVERAGE_BY_CATEGORY[product.categorySlug] ?? "Refer to TDS",
    },
    {
      key: "Pot Life @ 25°C",
      value: POT_LIFE_BY_CATEGORY[product.categorySlug] ?? "Refer to TDS",
    },
    {
      key: "Packaging",
      value: product.packaging.join(", "),
    },
    {
      key: "Standard",
      value: product.standards.length > 0 ? product.standards.join(", ") : "Contact for details",
    },
    {
      key: "Shelf Life",
      value: "12 months sealed, stored in dry conditions",
    },
  ];
}

function buildImages(product: ProductListItem): ProductImage[] {
  return GALLERY_LABELS.map((label, index) => ({
    alt:
      index === 0
        ? product.image.alt || product.name
        : `${product.name} — ${label}`,
    url: product.image.url,
  }));
}

function buildDownloads(product: ProductListItem): ProductDownload[] {
  const slug = product.slug;

  return [
    {
      id: `${slug}-tds`,
      label: "TDS PDF",
      type: "tds",
      url: `/downloads/${slug}-tds.pdf`,
      fileSize: "420 KB",
    },
    {
      id: `${slug}-sds`,
      label: "SDS PDF",
      type: "sds",
      url: `/downloads/${slug}-sds.pdf`,
      fileSize: "380 KB",
    },
    {
      id: `${slug}-guide`,
      label: "Application Guide",
      type: "guide",
      url: `/downloads/${slug}-application-guide.pdf`,
      fileSize: "1.2 MB",
    },
    {
      id: `${slug}-brochure`,
      label: "Product Brochure",
      type: "brochure",
      url: `/downloads/${slug}-brochure.pdf`,
      fileSize: "2.4 MB",
    },
  ];
}

export function enrichToProductDetail(product: ProductListItem): ProductDetail {
  return {
    ...product,
    description: buildDescription(product),
    features: buildFeatures(product),
    specifications: buildSpecifications(product),
    images: buildImages(product),
    downloads: buildDownloads(product),
  };
}

export function getProductDetailBySlug(
  categorySlug: string,
  productSlug: string
): ProductDetail | undefined {
  const product = getProductBySlug(categorySlug, productSlug);
  if (!product) return undefined;
  return enrichToProductDetail(product);
}

export function getRelatedProducts(
  product: ProductListItem,
  limit = 3
): ProductListItem[] {
  return getProductsByCategory(product.categorySlug)
    .filter((item) => item.id !== product.id)
    .slice(0, limit);
}

export function getAllProductParams(): { slug: string; productSlug: string }[] {
  return products.map((product) => ({
    slug: product.categorySlug,
    productSlug: product.slug,
  }));
}

export const WHATSAPP_NUMBER = "971500000000";

export function buildWhatsAppUrl(product: ProductListItem): string {
  const message = `Hi, I'm interested in ${product.name} (${product.sku}). Could you provide a quote and technical support?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildQuoteUrl(product: ProductListItem): string {
  const params = new URLSearchParams({
    product: product.name,
    sku: product.sku,
  });
  return `/?${params.toString()}#contact`;
}
