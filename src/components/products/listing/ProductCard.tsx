import Link from "next/link";
import type { ProductListItem } from "@/types/product";

type ProductCardProps = {
  product: ProductListItem;
  categorySlug: string;
};

export default function ProductCard({ product, categorySlug }: ProductCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-[var(--white)] shadow-[0_2px_12px_rgba(0,0,0,0.05)] transition-all duration-200 hover:border-[var(--pm-red)] hover:shadow-[0_8px_28px_rgba(200,0,0,0.08)]">
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg border-b border-gray-100 bg-[var(--bg)]">
        {product.image.url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.image.url}
            alt={product.image.alt || product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            loading="lazy"
          />
        ) : (
          <div className="img-ph h-full w-full">
            <div className="img-ph-label">Product Image</div>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="mb-2.5 font-[family-name:var(--mono)] text-[10px] font-semibold uppercase tracking-[0.13em] text-[var(--light)]">
          {product.sku}
        </p>

        <h3 className="mb-3 text-[15px] font-bold uppercase leading-snug tracking-[-0.02em] text-[var(--black)]">
          {product.name}
        </h3>

        <p className="line-clamp-2 flex-1 text-[13px] leading-[1.7] text-[var(--mid)]">
          {product.shortDescription}
        </p>

        {product.applicationAreas.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2 border-t border-gray-100 pt-5">
            {product.applicationAreas.slice(0, 2).map((area) => (
              <span
                key={area}
                className="rounded-sm border border-gray-200 bg-[var(--bg)] px-2.5 py-1 text-[10px] uppercase tracking-[0.06em] text-[var(--mid)]"
              >
                {area}
              </span>
            ))}
          </div>
        )}

        <div className="mt-5 border-t border-gray-100 pt-5">
          <Link
            href={`/products/${categorySlug}/${product.slug}`}
            className="inline-flex items-center gap-1.5 border-b border-[var(--pm-red)] pb-0.5 text-[11px] font-extrabold uppercase tracking-[0.08em] text-[var(--pm-red)] transition-opacity group-hover:opacity-75"
          >
            View product <span aria-hidden="true">&#8594;</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
