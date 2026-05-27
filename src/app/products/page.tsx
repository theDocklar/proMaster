import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryGrid from "@/components/products/CategoryGrid";
import { productCategories } from "@/data/productCategories";

export const metadata: Metadata = {
  title: "Products | Pro Master Construction Products",
  description:
    "Browse Pro Master construction chemical categories — waterproofing, adhesives, repair systems, coatings, and more. ISO certified. UAE & GCC.",
};

export default function ProductsPage() {
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

          <CategoryGrid categories={productCategories} />
        </div>
      </main>

      <Footer />
    </>
  );
}
