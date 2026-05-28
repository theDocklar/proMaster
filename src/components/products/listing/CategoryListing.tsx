"use client";

import { useEffect, useMemo, useState } from "react";
import type { ProductFilterState, ProductListItem, ProductSortOption } from "@/types/product";
import {
  getFilterOptions,
  hasActiveFilters,
  resolveProductListing,
} from "@/lib/products/listing";
import Sidebar from "@/components/products/listing/Sidebar";
import ProductGrid from "@/components/products/listing/ProductGrid";
import Pagination from "@/components/products/listing/Pagination";

type CategoryListingProps = {
  categorySlug: string;
  products: ProductListItem[];
  pageSize?: number;
};

const EMPTY_FILTERS: ProductFilterState = {
  applicationAreas: [],
  packaging: [],
  standards: [],
};

export default function CategoryListing({
  categorySlug,
  products,
  pageSize = 6,
}: CategoryListingProps) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<ProductSortOption>("name-asc");
  const [filters, setFilters] = useState<ProductFilterState>(EMPTY_FILTERS);
  const [page, setPage] = useState(1);

  const filterOptions = useMemo(() => getFilterOptions(products), [products]);

  const listing = useMemo(
    () =>
      resolveProductListing(products, {
        search,
        sort,
        filters,
        page,
        pageSize,
      }),
    [products, search, sort, filters, page, pageSize]
  );

  useEffect(() => {
    setPage(1);
  }, [search, sort, filters]);

  useEffect(() => {
    if (page > listing.totalPages) {
      setPage(listing.totalPages);
    }
  }, [listing.totalPages, page]);

  const handleClearFilters = () => {
    setSearch("");
    setFilters(EMPTY_FILTERS);
    setSort("name-asc");
    setPage(1);
  };

  return (
    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-10">
      <Sidebar
        search={search}
        sort={sort}
        filters={filters}
        filterOptions={filterOptions}
        totalResults={listing.totalItems}
        onSearchChange={setSearch}
        onSortChange={setSort}
        onFiltersChange={setFilters}
        onClearFilters={handleClearFilters}
      />

      <div className="min-w-0">
        {hasActiveFilters(search, filters) && (
          <p className="mb-6 text-[13px] leading-relaxed text-[var(--mid)]">
            Filtered and sorted results for this category.
          </p>
        )}

        <ProductGrid
          products={listing.items}
          categorySlug={categorySlug}
          totalItems={listing.totalItems}
        />

        {listing.totalItems > 0 && (
          <Pagination
            page={listing.page}
            totalPages={listing.totalPages}
            onPageChange={setPage}
          />
        )}
      </div>
    </div>
  );
}
