"use client";

import { useEffect, useMemo, useState } from "react";
import type { ProductCategoryOption } from "@/types/product";
import type {
  DataSheetFilterState,
  DataSheetListItem,
  DataSheetSortOption,
} from "@/types/resource";
import {
  hasActiveDataSheetFilters,
  resolveDataSheetListing,
} from "@/lib/resources/listing";
import DataSheetSidebar from "@/components/resources/listing/DataSheetSidebar";
import DataSheetGrid from "@/components/resources/listing/DataSheetGrid";
import Pagination from "@/components/products/listing/Pagination";

type DataSheetListingProps = {
  dataSheets: DataSheetListItem[];
  categoryOptions: ProductCategoryOption[];
  initialCategorySlug?: string;
  pageSize?: number;
};

function buildInitialFilters(initialCategorySlug?: string): DataSheetFilterState {
  return {
    categories: initialCategorySlug ? [initialCategorySlug] : [],
  };
}

export default function DataSheetListing({
  dataSheets,
  categoryOptions,
  initialCategorySlug,
  pageSize = 12,
}: DataSheetListingProps) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<DataSheetSortOption>("title-asc");
  const [filters, setFilters] = useState<DataSheetFilterState>(() =>
    buildInitialFilters(initialCategorySlug),
  );
  const [page, setPage] = useState(1);

  const listing = useMemo(
    () =>
      resolveDataSheetListing(dataSheets, {
        search,
        sort,
        filters,
        page,
        pageSize,
      }),
    [dataSheets, search, sort, filters, page, pageSize],
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
    setSort("title-asc");
    setPage(1);
  };

  return (
    <div className="category-listing">
      <DataSheetSidebar
        search={search}
        sort={sort}
        filters={filters}
        categoryOptions={categoryOptions}
        onSearchChange={setSearch}
        onSortChange={setSort}
        onFiltersChange={setFilters}
        onClearFilters={handleClearFilters}
      />

      <div
        className={`category-listing__content min-w-0${listing.totalItems === 0 ? " category-listing__content--empty" : ""}`}
      >
        {hasActiveDataSheetFilters(search, filters) && listing.totalItems > 0 && (
          <p className="mb-6 text-[13px] leading-relaxed text-[var(--mid)]">
            Filtered and sorted results.
          </p>
        )}

        <DataSheetGrid
          dataSheets={listing.items}
          totalItems={listing.totalItems}
          page={listing.page}
          pageSize={listing.pageSize}
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
