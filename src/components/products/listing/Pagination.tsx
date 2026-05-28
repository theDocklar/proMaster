type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

function getPageNumbers(page: number, totalPages: number): (number | "ellipsis")[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pages: (number | "ellipsis")[] = [1];

  if (page > 3) pages.push("ellipsis");

  const start = Math.max(2, page - 1);
  const end = Math.min(totalPages - 1, page + 1);

  for (let i = start; i <= end; i += 1) {
    pages.push(i);
  }

  if (page < totalPages - 2) pages.push("ellipsis");

  pages.push(totalPages);
  return pages;
}

export default function Pagination({ page, totalPages, onPageChange }: PaginationProps) {
  const pages = getPageNumbers(page, totalPages);
  const isSinglePage = totalPages <= 1;

  return (
    <section aria-label="Product pagination" className="product-pagination">
      <nav className="product-pagination__nav">
        <button
          type="button"
          onClick={() => onPageChange(page - 1)}
          disabled={page <= 1}
          className="product-pagination__control"
        >
          Previous
        </button>

        {!isSinglePage && (
          <div className="product-pagination__pages">
            {pages.map((item, index) =>
              item === "ellipsis" ? (
                <span
                  key={`ellipsis-${index}`}
                  className="product-pagination__ellipsis"
                  aria-hidden="true"
                >
                  …
                </span>
              ) : (
                <button
                  key={item}
                  type="button"
                  onClick={() => onPageChange(item)}
                  aria-current={item === page ? "page" : undefined}
                  className={`product-pagination__page${item === page ? " product-pagination__page--active" : ""}`}
                >
                  {item}
                </button>
              ),
            )}
          </div>
        )}

        <button
          type="button"
          onClick={() => onPageChange(page + 1)}
          disabled={page >= totalPages}
          className="product-pagination__control"
        >
          Next
        </button>
      </nav>
    </section>
  );
}
