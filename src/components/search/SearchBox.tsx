"use client";

import { FilterType } from "@/fetch/employerAdvertise/fetchSearchAdvertise";
import { useSearchAdvertise } from "@/hooks/useSearchAdvertise";
import { AdvertiseModel } from "@/models/Advertise";
import Icon from "@/ui/Icon";
import { Dispatch, SetStateAction, useState } from "react";
import { paginationType } from "./JobsResult";

type SearchBoxProps = {
  setJobsData: Dispatch<SetStateAction<AdvertiseModel[] | null>>;
  filters: FilterType;
  pagination: paginationType;
  setTotalPages: Dispatch<SetStateAction<number>>;
  isSearching: boolean;
  setIsSearching: Dispatch<SetStateAction<boolean>>;
};

function SearchBox({
  setJobsData,
  filters,
  pagination,
  setTotalPages,
  isSearching,
  setIsSearching,
}: SearchBoxProps) {
  const [searchInput, setSearchInput] = useState<string>("");

  useSearchAdvertise(
    searchInput,
    pagination,
    filters,
    setJobsData,
    setTotalPages,
    setIsSearching
  );

  return (
    <div className="relative w-full max-w-xl rounded-xl shadow-soft">
      <input
        className="w-full h-14 ps-12 pe-4 text-sm rounded-xl bg-card text-fg placeholder:text-fg-muted/70 ring-1 ring-border hover:ring-border-strong focus:ring-2 focus:ring-brand transition-shadow duration-200"
        type="search"
        name="search"
        placeholder="جستجوی آگهی شغلی…"
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

export default SearchBox;
