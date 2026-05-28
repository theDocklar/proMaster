import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryListing from "@/components/products/listing/CategoryListing";
import { getCategoryBySlug } from "@/data/productCategories";
import { getProductsByCategory } from "@/data/products";
import { getCategoryBySlug as getSanityCategoryBySlug, getProductsByCategory } from "@/sanity/lib/fetch-all";
import { getCategoryBySlug as getMockCategoryBySlug } from "@/data/productCategories";
import { getSanityImageUrl } from "@/sanity/lib/image-url";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const sanityCategory = await getSanityCategoryBySlug(slug);
  const category = sanityCategory || getMockCategoryBySlug(slug);

  if (!category) {
    return { title: "Category Not Found | Pro Master" };
  }

  return {
    title: `${category.title} | Pro Master Construction Products`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const sanityCategory = await getSanityCategoryBySlug(slug);
  const category = sanityCategory || getMockCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(slug);
  const products = await getProductsByCategory(slug);
  const categoryImageUrl = getSanityImageUrl(category.image, { width: 1200, height: 600, fit: "crop" });

  return (
    <>
      <Header />

      <main className="bg-[var(--bg)] pt-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 border-b border-[var(--border)] pb-4 font-[family-name:var(--mono)] text-xs tracking-[0.5px] text-[var(--light)]"
          >
            <Link href="/" className="text-[var(--mid)] transition-colors hover:text-[var(--pm-red)]">
              Home
            </Link>
            <span className="mx-2.5">/</span>
            <Link
              href="/products"
              className="text-[var(--mid)] transition-colors hover:text-[var(--pm-red)]"
            >
              Products
            </Link>
            <span className="mx-2.5">/</span>
            <span>{category.title}</span>
          </nav>

          <header className="mb-10 max-w-3xl">
            <p className="mb-3 font-[family-name:var(--mono)] text-[11px] font-bold uppercase tracking-[0.13em] text-[var(--pm-red)]">
              {category.shortTitle ?? category.title}
            </p>
            <h1 className="mb-4 text-[clamp(28px,4vw,40px)] font-black uppercase leading-none tracking-[-0.04em] text-[var(--black)]">
              {category.title}
            </h1>
            <p className="text-sm leading-[1.7] text-[var(--mid)]">{category.description}</p>
          </header>

          <CategoryListing categorySlug={slug} products={products} />
        <div className="px-12 py-16 max-sm:px-6 max-sm:py-12">
          {categoryImageUrl ? (
            <img
              src={categoryImageUrl}
              alt={category.image?.alt ?? category.title}
              className="w-full object-cover"
              style={{ minHeight: 360 }}
            />
          ) : (
            <div
              className="img-ph w-full"
              style={{ minHeight: 360 }}
              role="img"
              aria-label={category.image?.alt ?? category.title}
            >
              <div className="img-ph-label">{category.image?.alt ?? "Category Image"}</div>
            </div>
          )}

          {products && products.length > 0 ? (
            <div className="showcase showcase--products mt-12">
              {products.map((product: any) => {
                const productImageUrl = getSanityImageUrl(product.image, { width: 600, height: 400, fit: "crop" });
                return (
                  <article className="showcase-col" key={product._id}>
                    <h2 className="sc-name">{product.name}</h2>
                    <p className="sc-tag">{product.description || ""}</p>
                    <div className="sc-image">
                      {productImageUrl ? (
                        <img
                          src={productImageUrl}
                          alt={product.image?.alt ?? product.name}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      ) : (
                        <div
                          className="img-ph"
                          style={{ width: "100%", height: "100%" }}
                          role="img"
                          aria-label={product.image?.alt ?? product.name}
                        >
                          <div className="img-ph-label">Product Image</div>
                        </div>
                      )}
                    </div>
                    <Link className="sc-link" href={`/products/${slug}/${product.slug?.current || ""}`}>
                      View details &nbsp;&#8594;
                    </Link>
                  </article>
                );
              })}
            </div>
          ) : (
            <p className="mt-8 font-[family-name:var(--mono)] text-xs uppercase tracking-[0.13em] text-[var(--light)]">
              No products found in this category.
            </p>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
