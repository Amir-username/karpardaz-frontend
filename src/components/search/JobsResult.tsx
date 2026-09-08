"use client";

import { AdvertiseModel } from "@/models/Advertise";
import AdvertiseList from "../advertise/AdvertiseList";
import SearchBox from "./SearchBox";
import { useState } from "react";
import SearchFilter from "../filter/SearchFilter";
import ActiveFilterChips from "../filter/ActiveFilterChips";
import { FilterType } from "@/fetch/employerAdvertise/fetchSearchAdvertise";
import Pagination from "../pagination/Pagination";
import { AdCardSkeleton } from "@/ui/Skeleton";

export type paginationType = {
  offset: number;
  limit: number;
};

type JobsResultProps = {
  token?: string;
  role?: string;
};

function JobsResult({ token, role }: JobsResultProps) {
  const [jobsData, setJobsData] = useState<AdvertiseModel[] | null>(null);
  const [filters, setFilters] = useState<FilterType>({});
  const [isSearching, setIsSearching] = useState(false);
  const [pagination, setPagination] = useState<paginationType>({
    offset: 0,
    limit: 3,
  });
  const [totalPages, setTotalPages] = useState(1);

  // Applying / removing filters must always restart from the first page.
  const applyFilters = (next: FilterType) => {
    setFilters(next);
    setPagination((p) => (p.offset === 0 ? p : { ...p, offset: 0 }));
  };

  const handleRemoveFilter = (key: keyof FilterType) => {
    const next: FilterType = { ...filters };
    if (
      key === "isInternship" ||
      key === "isRemote" ||
      key === "isPortfolio"
    ) {
      next[key] = false;
    } else {
      next[key] = "";
    }
    applyFilters(next);
  };

  const handleClearAll = () => applyFilters({});

  const showSkeletons = isSearching || !jobsData;

  return (
    <main className="flex flex-col items-center gap-8 w-full">
      <header className="flex flex-col items-center gap-4 w-full">
        <SearchBox
          setJobsData={setJobsData}
          pagination={pagination}
          filters={filters}
          setTotalPages={setTotalPages}
          isSearching={isSearching}
          setIsSearching={setIsSearching}
        />
        <SearchFilter setFilters={applyFilters} filters={filters} />
      </header>
      <ActiveFilterChips
        filters={filters}
        onRemove={handleRemoveFilter}
        onClearAll={handleClearAll}
      />
      {showSkeletons ? (
        <ul
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full"
          role="status"
          aria-label="در حال جستجو"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <li key={i}>
              <AdCardSkeleton />
            </li>
          ))}
        </ul>
      ) : (
        <AdvertiseList advertises={jobsData} token={token} role={role} />
      )}
      <Pagination totalPages={totalPages} setPaginationAction={setPagination} />
    </main>
  );
}

export default JobsResult;
