"use client";

import { useJobSeekerSearchAds } from "@/hooks/useJobseekerAdSearch";
import { JobSeekrAdModel } from "@/models/JobSeekerAd";
import { Dispatch, SetStateAction, useState } from "react";
type SearchBoxProps = {
  setJobseekerAds: Dispatch<SetStateAction<JobSeekrAdModel[]>>;
};

function JobSeekerAdSearchBox({ setJobseekerAds }: SearchBoxProps) {
  const [searchInput, setSearchInput] = useState<string>("");

  useJobSeekerSearchAds(searchInput, setJobseekerAds);

  return (
    <div className="relative w-full rounded-lg">
      <input
        className="w-80 lg:w-96 h-12 px-4 pr-10 text-sm rounded-lg bg-gray-50 text-neutral-dark placeholder:text-neutral-mid ring-1 ring-gray-300"
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
