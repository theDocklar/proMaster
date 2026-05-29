"use client";

import { useEffect, useMemo, useState } from "react";
import type {
  ProjectFilterState,
  ProjectListItem,
  ProjectSortOption,
} from "@/types/project";
import {
  getFilterOptions,
  hasActiveFilters,
  resolveProjectListing,
} from "@/lib/projects/listing";
import ProjectSidebar from "@/components/projects/listing/ProjectSidebar";
import ProjectList from "@/components/projects/listing/ProjectList";
import Pagination from "@/components/products/listing/Pagination";

type ProjectListingProps = {
  projects: ProjectListItem[];
  pageSize?: number;
};

const EMPTY_FILTERS: ProjectFilterState = {
  projectTypes: [],
  locations: [],
  years: [],
};

export default function ProjectListing({
  projects,
  pageSize = 8,
}: ProjectListingProps) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<ProjectSortOption>("year-desc");
  const [filters, setFilters] = useState<ProjectFilterState>(EMPTY_FILTERS);
  const [page, setPage] = useState(1);

  const filterOptions = useMemo(() => getFilterOptions(projects), [projects]);

  const listing = useMemo(
    () =>
      resolveProjectListing(projects, {
        search,
        sort,
        filters,
        page,
        pageSize,
      }),
    [projects, search, sort, filters, page, pageSize],
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
    setSort("year-desc");
    setPage(1);
  };

  const startIndex = (listing.page - 1) * listing.pageSize;

  return (
    <div className="category-listing">
      <ProjectSidebar
        search={search}
        sort={sort}
        filters={filters}
        filterOptions={filterOptions}
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

        <ProjectList
          projects={listing.items}
          totalItems={listing.totalItems}
          startIndex={startIndex}
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
