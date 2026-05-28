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
    <section
      aria-label="Product pagination"
      className="mt-12 mb-6 rounded-sm border border-gray-200 bg-[var(--white)] px-4 py-8 shadow-[0_1px_8px_rgba(0,0,0,0.04)] sm:px-8"
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-5">
        <p className="font-[family-name:var(--mono)] text-[11px] uppercase tracking-[0.13em] text-[var(--light)]">
          Page {page} of {totalPages}
        </p>

        <nav className="flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => onPageChange(page - 1)}
            disabled={page <= 1}
            className="border border-gray-200 bg-[var(--white)] px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--mid)] transition-colors enabled:hover:border-[var(--pm-red)] enabled:hover:text-[var(--pm-red)] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>

          {!isSinglePage && (
            <div className="flex flex-wrap items-center justify-center gap-1.5">
              {pages.map((item, index) =>
                item === "ellipsis" ? (
                  <span
                    key={`ellipsis-${index}`}
                    className="px-2 font-[family-name:var(--mono)] text-xs text-[var(--light)]"
                  >
                    …
                  </span>
                ) : (
                  <button
                    key={item}
                    type="button"
                    onClick={() => onPageChange(item)}
                    aria-current={item === page ? "page" : undefined}
                    className={[
                      "min-w-10 border px-3 py-2.5 text-[11px] font-bold uppercase tracking-[0.08em] transition-colors",
                      item === page
                        ? "border-[var(--pm-red)] bg-[var(--pm-red)] text-[var(--white)]"
                        : "border-gray-200 bg-[var(--white)] text-[var(--mid)] hover:border-[var(--pm-red)] hover:text-[var(--pm-red)]",
                    ].join(" ")}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          )}

          <button
            type="button"
            onClick={() => onPageChange(page + 1)}
            disabled={page >= totalPages}
            className="border border-gray-200 bg-[var(--white)] px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--mid)] transition-colors enabled:hover:border-[var(--pm-red)] enabled:hover:text-[var(--pm-red)] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </nav>
      </div>
    </section>
  );
}
