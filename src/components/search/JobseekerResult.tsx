"use client";

import { useState } from "react";
import JobSeekerAdSearchBox from "./JobseekerAdSearchBox";
import JobSeekerAdList from "../jobseekerAdvertise/JobseekerAdList";
import { JobSeekrAdModel } from "@/models/JobSeekerAd";
import { FilterType } from "@/fetch/employerAdvertise/fetchSearchAdvertise";
import SearchFilter from "../filter/SearchFilter";
import ActiveFilterChips from "../filter/ActiveFilterChips";
import Pagination from "../pagination/Pagination";
import { paginationType } from "./JobsResult";
import { AdCardSkeleton } from "@/ui/Skeleton";

type JobSeekerResultProps = {
  token?: string;
  role?: string;
};

function JobSeekerResult({ token, role }: JobSeekerResultProps) {
  const [jobSeekerAds, setJobSeekerAds] = useState<JobSeekrAdModel[] | null>(
    null
  );
  const [filters, setFilters] = useState<FilterType>({});
  const [isSearching, setIsSearching] = useState(false);
  const [pagination, setPaginationAction] = useState<paginationType>({
    offset: 0,
    limit: 3,
  });
  const [totalPages, setTotalPages] = useState(1);

  // Applying / removing filters must always restart from the first page.
  const applyFilters = (next: FilterType) => {
    setFilters(next);
    setPaginationAction((p) => (p.offset === 0 ? p : { ...p, offset: 0 }));
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

  const showSkeletons = isSearching || !jobSeekerAds;

  return (
    <main className="flex flex-col items-center gap-8 w-full">
      <header className="flex flex-col items-center gap-4 w-full">
        <JobSeekerAdSearchBox
          setTotalPages={setTotalPages}
          filters={filters}
          pagination={pagination}
          setJobseekerAds={setJobSeekerAds}
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
        <JobSeekerAdList
          advertises={jobSeekerAds}
          token={token}
          role={role}
        />
      )}
      <Pagination
        totalPages={totalPages}
        setPaginationAction={setPaginationAction}
      />
    </main>
  );
}

export default JobSeekerResult;
