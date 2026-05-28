import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryListing from "@/components/products/listing/CategoryListing";
import { getCategoryBySlug } from "@/data/productCategories";
import { getProductsByCategory } from "@/data/products";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

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
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(slug);

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
        </div>
      </main>

      <Footer />
    </>
  );
}
