"use client";

import { useEffect, useMemo, useState } from "react";
import type {
  ProductCategoryOption,
  ProductFilterState,
  ProductListItem,
  ProductSortOption,
} from "@/types/product";
import {
  getFilterOptions,
  hasActiveFilters,
  resolveProductListing,
} from "@/lib/products/listing";
import Sidebar from "@/components/products/listing/Sidebar";
import ProductGrid from "@/components/products/listing/ProductGrid";
import Pagination from "@/components/products/listing/Pagination";

type ProductListingProps = {
  products: ProductListItem[];
  categoryOptions: ProductCategoryOption[];
  initialCategorySlug?: string;
  pageSize?: number;
};

function buildInitialFilters(initialCategorySlug?: string): ProductFilterState {
  return {
    categories: initialCategorySlug ? [initialCategorySlug] : [],
    applicationAreas: [],
    packaging: [],
    standards: [],
  };
}

export default function ProductListing({
  products,
  categoryOptions,
  initialCategorySlug,
  pageSize = 6,
}: ProductListingProps) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<ProductSortOption>("name-asc");
  const [filters, setFilters] = useState<ProductFilterState>(() =>
    buildInitialFilters(initialCategorySlug),
  );
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
    [products, search, sort, filters, page, pageSize],
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
    setFilters(buildInitialFilters());
    setSort("name-asc");
    setPage(1);
  };

  return (
    <div className="category-listing">
      <Sidebar
        search={search}
        sort={sort}
        filters={filters}
        filterOptions={filterOptions}
        categoryOptions={categoryOptions}
        onSearchChange={setSearch}
        onSortChange={setSort}
        onFiltersChange={setFilters}
        onClearFilters={handleClearFilters}
      />

      <div
        className={`category-listing__content min-w-0${listing.totalItems === 0 ? " category-listing__content--empty" : ""}`}
      >
        {hasActiveFilters(search, filters) && listing.totalItems > 0 && (
          <p className="mb-6 text-[13px] leading-relaxed text-[var(--mid)]">
            Filtered and sorted results.
          </p>
        )}

        <ProductGrid products={listing.items} totalItems={listing.totalItems} />

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
