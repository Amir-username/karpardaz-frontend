"use client";

import { FilterType } from "@/fetch/employerAdvertise/fetchSearchAdvertise";
import { useJobSeekerSearchAds } from "@/hooks/useJobseekerAdSearch";
import { JobSeekrAdModel } from "@/models/JobSeekerAd";
import Icon from "@/ui/Icon";
import { Dispatch, SetStateAction, useState } from "react";
import { paginationType } from "./JobsResult";

type SearchBoxProps = {
  setJobseekerAds: Dispatch<SetStateAction<JobSeekrAdModel[] | null>>;
  filters: FilterType;
  pagination: paginationType;
  setTotalPages: Dispatch<SetStateAction<number>>;
  isSearching: boolean;
  setIsSearching: Dispatch<SetStateAction<boolean>>;
};

function JobSeekerAdSearchBox({
  setJobseekerAds,
  filters,
  pagination,
  setTotalPages,
  isSearching,
  setIsSearching,
}: SearchBoxProps) {
  const [searchInput, setSearchInput] = useState<string>("");

  useJobSeekerSearchAds(
    searchInput,
    pagination,
    filters,
    setJobseekerAds,
    setTotalPages,
    setIsSearching
  );

  return (
    <div className="relative w-full max-w-xl rounded-xl shadow-soft">
      <input
        className="w-full h-14 ps-12 pe-4 text-sm rounded-xl bg-card text-fg placeholder:text-fg-muted/70 ring-1 ring-border hover:ring-border-strong focus:ring-2 focus:ring-brand transition-shadow duration-200"
        type="search"
        name="search"
        placeholder="جستجوی آگهی کارجو…"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <Icon
        name={isSearching ? "progress_activity" : "search"}
        size={22}
        className={`absolute start-4 top-1/2 -translate-y-1/2 pointer-events-none transition-colors ${
          isSearching ? "animate-spin text-brand" : "text-fg-muted"
        }`}
      />
    </div>
  );
}

export default JobSeekerAdSearchBox;
