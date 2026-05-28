"use client";

import { useState } from "react";
import type { ProductFilterOptions, ProductFilterState, ProductSortOption } from "@/types/product";
import {
  PRODUCT_SORT_LABELS,
  toggleFilterValue,
} from "@/lib/products/listing";

type SidebarProps = {
  search: string;
  sort: ProductSortOption;
  filters: ProductFilterState;
  filterOptions: ProductFilterOptions;
  totalResults: number;
  onSearchChange: (value: string) => void;
  onSortChange: (value: ProductSortOption) => void;
  onFiltersChange: (filters: ProductFilterState) => void;
  onClearFilters: () => void;
};

type FilterSectionProps = {
  title: string;
  group: keyof ProductFilterState;
  options: string[];
  selected: string[];
  onToggle: (group: keyof ProductFilterState, value: string) => void;
};

function FilterSection({ title, group, options, selected, onToggle }: FilterSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (options.length === 0) return null;

  return (
    <div className="border-b border-[var(--border)] last:border-b-0">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between py-3 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-[family-name:var(--mono)] text-[10px] font-bold uppercase tracking-[0.13em] text-[var(--pm-red)]">
          {title}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-3.5 w-3.5 shrink-0 text-[var(--mid)] transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          transition: "grid-template-rows 220ms ease",
        }}
      >
        <div className="overflow-hidden">
          <ul className="flex flex-col gap-1 pb-4 pt-1">
            {options.map((option) => {
              const checked = selected.includes(option);
              const id = `${group}-${option.replace(/\s+/g, "-").toLowerCase()}`;

              return (
                <li key={option}>
                  <label
                    htmlFor={id}
                    className="flex cursor-pointer items-start gap-3 rounded px-2 py-2 text-[13px] text-[var(--mid)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--pm-red)]"
                  >
                    <input
                      id={id}
                      type="checkbox"
                      checked={checked}
                      onChange={() => onToggle(group, option)}
                      className="mt-0.5 h-[16px] w-[16px] shrink-0 appearance-none border border-[var(--border)] bg-[var(--white)] checked:border-[var(--pm-red)] checked:bg-[var(--pm-red)]"
                    />
                    <span className="leading-relaxed">{option}</span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Sidebar({
  search,
  sort,
  filters,
  filterOptions,
  totalResults,
  onSearchChange,
  onSortChange,
  onFiltersChange,
  onClearFilters,
}: SidebarProps) {
  const handleToggle = (group: keyof ProductFilterState, value: string) => {
    onFiltersChange({
      ...filters,
      [group]: toggleFilterValue(filters[group], value),
    });
  };

  const activeFilterCount =
    filters.applicationAreas.length + filters.packaging.length + filters.standards.length;

  return (
    <aside className="custom-scrollbar flex flex-col rounded-sm border border-[var(--border)] bg-[var(--white)] shadow-[0_2px_12px_rgba(0,0,0,0.04)] max-lg:h-auto max-lg:max-h-none max-lg:overflow-visible lg:sticky lg:top-[68px] lg:h-[calc(100vh-88px)] lg:max-h-[calc(100vh-88px)] lg:overflow-y-auto">
      <div className="space-y-6 p-5">
        <div className="space-y-2 rounded-sm bg-[var(--bg)] p-4">
          <p className="font-[family-name:var(--mono)] text-[10px] font-bold uppercase tracking-[0.13em] text-[var(--pm-red)]">
            Refine results
          </p>
          <p className="text-[13px] leading-relaxed text-[var(--mid)]">
            {totalResults} product{totalResults === 1 ? "" : "s"} found
          </p>
        </div>

        <div className="space-y-3">
          <label
            htmlFor="product-search"
            className="block font-[family-name:var(--mono)] text-[10px] font-bold uppercase tracking-[0.13em] text-[var(--pm-red)]"
          >
            Search
          </label>
          <input
            id="product-search"
            type="search"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search by name or SKU…"
            className="w-full border border-[var(--border)] bg-[var(--white)] px-4 py-3 text-[13px] text-[var(--dark)] outline-none transition-colors placeholder:text-[var(--light)] focus:border-[var(--pm-red)]"
          />
        </div>

        <div className="space-y-3">
          <label
            htmlFor="product-sort"
            className="block font-[family-name:var(--mono)] text-[10px] font-bold uppercase tracking-[0.13em] text-[var(--pm-red)]"
          >
            Sort by
          </label>
          <select
            id="product-sort"
            value={sort}
            onChange={(event) => onSortChange(event.target.value as ProductSortOption)}
            className="w-full cursor-pointer appearance-none border border-[var(--border)] bg-[var(--white)] px-4 py-3 text-[13px] text-[var(--mid)] outline-none transition-colors focus:border-[var(--pm-red)]"
          >
            {(Object.keys(PRODUCT_SORT_LABELS) as ProductSortOption[]).map((option) => (
              <option key={option} value={option}>
                {PRODUCT_SORT_LABELS[option]}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <p className="font-[family-name:var(--mono)] text-[10px] font-bold uppercase tracking-[0.13em] text-[var(--pm-red)]">
              Filters
            </p>
            {(activeFilterCount > 0 || search.trim().length > 0) && (
              <button
                type="button"
                onClick={onClearFilters}
                className="text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--mid)] transition-colors hover:text-[var(--pm-red)]"
              >
                Clear all
              </button>
            )}
          </div>

          <div className="rounded border border-[var(--border)] px-3">
            <FilterSection
              title="Application area"
              group="applicationAreas"
              options={filterOptions.applicationAreas}
              selected={filters.applicationAreas}
              onToggle={handleToggle}
            />
            <FilterSection
              title="Packaging"
              group="packaging"
              options={filterOptions.packaging}
              selected={filters.packaging}
              onToggle={handleToggle}
            />
            <FilterSection
              title="Standards"
              group="standards"
              options={filterOptions.standards}
              selected={filters.standards}
              onToggle={handleToggle}
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
