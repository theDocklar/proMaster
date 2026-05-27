import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getCategoryBySlug } from "@/data/productCategories";

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

  return (
    <>
      <Header />

      <main className="pt-[52px]">
        <nav
          aria-label="Breadcrumb"
          className="border-b border-[var(--border)] px-12 py-3.5 font-[family-name:var(--mono)] text-xs tracking-[0.5px] text-[var(--light)] max-sm:px-6"
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

        <header className="border-b border-[var(--border)] px-12 py-16 max-sm:px-6 max-sm:py-12">
          <p className="mb-5 font-[family-name:var(--mono)] text-[11px] font-bold uppercase tracking-[0.13em] text-[var(--pm-red)]">
            {category.title}
          </p>
          <h1 className="mb-5 text-[clamp(28px,4vw,40px)] font-black uppercase leading-none tracking-[-0.04em] text-[var(--black)]">
            {category.title}
          </h1>
          <p className="max-w-[560px] text-sm leading-[1.7] text-[var(--mid)]">
            {category.description}
          </p>
        </header>

        <div className="px-12 py-16 max-sm:px-6 max-sm:py-12">
          <div
            className="img-ph w-full"
            style={{ minHeight: 360 }}
            role="img"
            aria-label={category.image.alt ?? category.title}
          >
            <div className="img-ph-label">{category.image.alt ?? "Category Image"}</div>
          </div>
          <p className="mt-8 font-[family-name:var(--mono)] text-xs uppercase tracking-[0.13em] text-[var(--light)]">
            Product listings for this category will be loaded from Sanity CMS.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
