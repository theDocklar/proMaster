import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGallery from "@/components/products/detail/ProductGallery";
import ProductDetailTabs from "@/components/products/detail/ProductDetailTabs";
import ProductFeaturesSpecs from "@/components/products/detail/ProductFeaturesSpecs";
import ProductDownloads from "@/components/products/detail/ProductDownloads";
import ProductCTA from "@/components/products/detail/ProductCTA";
import RelatedProducts from "@/components/products/detail/RelatedProducts";
import { getCategoryBySlug } from "@/data/productCategories";
import {
  getAllProductParams,
  getProductDetailBySlug,
  getRelatedProducts,
} from "@/lib/products/detail";

type ProductPageProps = {
  params: Promise<{ slug: string; productSlug: string }>;
};

export async function generateStaticParams() {
  return getAllProductParams();
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug, productSlug } = await params;
  const product = getProductDetailBySlug(slug, productSlug);

  if (!product) {
    return { title: "Product Not Found | Pro Master" };
  }

  return {
    title: `${product.name} | Pro Master Construction Products`,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug, productSlug } = await params;
  const category = getCategoryBySlug(slug);
  const product = getProductDetailBySlug(slug, productSlug);

  if (!category || !product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product);

  return (
    <>
      <Header />

      <main className="pt-28">
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="bc-sep">/</span>
          <Link href="/products">Products</Link>
          <span className="bc-sep">/</span>
          <Link href={`/products/${slug}`}>{category.shortTitle ?? category.title}</Link>
          <span className="bc-sep">/</span>
          <span>{product.sku}</span>
        </nav>

        <ProductDetailTabs />

        <div className="detail-wrap">
          <ProductGallery images={product.images} productName={product.name} />

          <div className="detail-info">
            <p className="di-cat">{category.title}</p>
            <h1 className="di-name">
              {product.name}
              <br />
              {product.sku}
            </h1>
            <p className="di-desc">{product.description}</p>

            <ProductFeaturesSpecs product={product} />
            <ProductDownloads downloads={product.downloads} />
            <ProductCTA product={product} />
          </div>
        </div>

        <RelatedProducts
          products={relatedProducts}
          categorySlug={slug}
          categoryTitle={category.shortTitle ?? category.title}
        />
      </main>

      <Footer />
    </>
  );
}
