import type { ProductListItem } from "@/types/product";
import ProductCard from "@/components/products/listing/ProductCard";

type ProductGridProps = {
  products: ProductListItem[];
  categorySlug: string;
  totalItems: number;
};

export default function ProductGrid({ products, categorySlug, totalItems }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="rounded-sm border border-gray-200 bg-[var(--white)] px-8 py-16 text-center shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <p className="mb-2 font-[family-name:var(--mono)] text-[11px] font-bold uppercase tracking-[0.13em] text-[var(--pm-red)]">
          No results
        </p>
        <p className="text-sm leading-[1.7] text-[var(--mid)]">
          No products match your current search or filters. Try adjusting your criteria.
        </p>
      </div>
    );
  }

  return (
    <div>
      <p className="mb-6 font-[family-name:var(--mono)] text-[11px] uppercase tracking-[0.13em] text-[var(--light)]">
        Showing {products.length} of {totalItems} products
      </p>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} categorySlug={categorySlug} />
        ))}
      </div>
    </div>
  );
}
