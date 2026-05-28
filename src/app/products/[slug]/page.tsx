import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryListing from "@/components/products/listing/CategoryListing";
import { getProductsByCategory } from "@/data/products";
import { getCategoryBySlug } from "@/data/productCategories";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

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
  const [category, products] = await Promise.all([
    getCategoryBySlug(slug),
    getProductsByCategory(slug),
  ]);

  if (!category) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="page-main page-main--bg page-main--category-listing">
        <header className="category-listing-header">
          <p className="mb-3 font-[family-name:var(--mono)] text-[11px] font-bold uppercase tracking-[0.13em] text-[var(--pm-red)]">
            {category.shortTitle ?? category.title}
          </p>
          <h1 className="mb-4 text-[clamp(28px,4vw,40px)] font-black uppercase leading-none tracking-[-0.04em] text-[var(--black)]">
            {category.title}
          </h1>
          <p className="max-w-3xl text-sm leading-[1.7] text-[var(--mid)]">
            {category.description}
          </p>
        </header>

        <CategoryListing categorySlug={slug} products={products} />
      </main>

      <Footer />
    </>
  );
}
