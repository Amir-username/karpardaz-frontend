"use client";

import { FilterType } from "@/fetch/employerAdvertise/fetchSearchAdvertise";
import { useJobSeekerSearchAds } from "@/hooks/useJobseekerAdSearch";
import { JobSeekrAdModel } from "@/models/JobSeekerAd";
import { Dispatch, SetStateAction, useState } from "react";
import { paginationType } from "./JobsResult";
type SearchBoxProps = {
  setJobseekerAds: Dispatch<SetStateAction<JobSeekrAdModel[]>>;
  filters: FilterType;
  pagination: paginationType;
  setTotalPages: Dispatch<SetStateAction<number>>;
};

function JobSeekerAdSearchBox({
  setJobseekerAds,
  filters,
  pagination,
  setTotalPages
}: SearchBoxProps) {
  const [searchInput, setSearchInput] = useState<string>("");

  useJobSeekerSearchAds(searchInput, pagination, filters, setJobseekerAds, setTotalPages);

  return (
    <div className="relative w-full rounded-lg">
      <input
        className="w-80 lg:w-96 h-12 px-4 pr-10 text-sm rounded-lg bg-gray-50 dark:bg-neutral-dark text-neutral-dark dark:text-neutral-light placeholder:text-neutral-mid ring-1 ring-gray-300 dark:ring-neutral-dark"
        type="search"
        name="search"
        placeholder="جستجوی آگهی کارجو"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <span className="absolute material-symbols-outlined right-2 top-3 text-neutral-mid">
        search
      </span>
    </div>
  );
}

export default JobSeekerAdSearchBox;
