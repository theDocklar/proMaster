import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryGrid from "@/components/products/CategoryGrid";
import { getProductCategories } from '@/data/productCategories'

export const metadata: Metadata = {
  title: "Products | Pro Master Construction Products",
  description:
    "Browse Pro Master construction chemical categories — waterproofing, adhesives, repair systems, coatings, and more. ISO certified. UAE & GCC.",
};

export default async function ProductsPage() {
  // Fetch categories from Sanity (or fallback to mock data)
  const categories = await getProductCategories()

  return (
    <>
      <Header />

      <main className="pt-[52px]">
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="bc-sep">/</span>
          <span>Products</span>
        </nav>

        <div className="resources-section">
          <header className="resources-header">
            <div className="rh-left">
              <p className="products-eyebrow">Product Range</p>
              <h1>
                Construction
                <br />
                Chemicals.
              </h1>
            </div>
            <div className="rh-right">
              <p>
                ISO-certified systems engineered for the Gulf climate. Select a category to explore
                technical data sheets, application guides, and product specifications.
              </p>
            </div>
          </header>

          <CategoryGrid categories={categories} />
        </div>
      </main>

      <Footer />
    </>
  );
}
