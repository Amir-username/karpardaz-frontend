"use client";

import { FilterType } from "@/fetch/employerAdvertise/fetchSearchAdvertise";
import { useSearchAdvertise } from "@/hooks/useSearchAdvertise";
import { AdvertiseModel } from "@/models/Advertise";
import { Dispatch, SetStateAction, useState } from "react";
type SearchBoxProps = {
  setJobsData: Dispatch<SetStateAction<AdvertiseModel[]>>;
  filters: FilterType;
};

function SearchBox({ setJobsData, filters }: SearchBoxProps) {
  const [searchInput, setSearchInput] = useState<string>("");

  useSearchAdvertise(searchInput, filters, setJobsData);

  return (
    <div className="relative w-full rounded-lg">
      <input
        className="w-80 lg:w-96 h-12 px-4 pr-10 text-sm rounded-lg bg-gray-50 text-neutral-dark placeholder:text-neutral-mid ring-1 ring-gray-300"
        type="search"
        name="search"
        placeholder="جستجوی آگهی"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <span className="absolute material-symbols-outlined right-2 top-3 text-neutral-mid">
        search
      </span>
    </div>
  );
}

export default SearchBox;
