import Link from "next/link";
import type { ProductCategoryDocument } from "@/types/sanity";
import { getCategoryHref } from "@/data/productCategories";

type CategoryGridProps = {
  categories: ProductCategoryDocument[];
};

export default function CategoryGrid({ categories }: CategoryGridProps) {
  const sorted = [...categories].sort(
    (a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0)
  );

  return (
    <div className="showcase showcase--products">
      {sorted.map((category) => {
        const href = getCategoryHref(category);
        const displayTitle = category.shortTitle ?? category.title;

        return (
          <article className="showcase-col" key={category._id}>
            <h2 className="sc-name">{displayTitle}</h2>
            <p className="sc-tag">{category.description}</p>

            <div className="sc-image">
              <div
                className="img-ph"
                style={{ width: "100%", height: "100%" }}
                role="img"
                aria-label={category.image.alt ?? displayTitle}
              >
                <div className="img-ph-label">Product Image</div>
              </div>
            </div>

            <Link className="sc-link" href={href}>
              View range &nbsp;&#8594;
            </Link>
          </article>
        );
      })}
    </div>
  );
}
