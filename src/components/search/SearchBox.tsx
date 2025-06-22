"use client";

import { FilterType } from "@/fetch/employerAdvertise/fetchSearchAdvertise";
import { useSearchAdvertise } from "@/hooks/useSearchAdvertise";
import { AdvertiseModel } from "@/models/Advertise";
import { Dispatch, SetStateAction, useState } from "react";
import { paginationType } from "./JobsResult";
import searchSVG from "../../../public/icons/search.svg";
import Image from "next/image";

type SearchBoxProps = {
  setJobsData: Dispatch<SetStateAction<AdvertiseModel[]>>;
  filters: FilterType;
  pagination: paginationType;
  setTotalPages: Dispatch<SetStateAction<number>>;
};

function SearchBox({
  setJobsData,
  filters,
  pagination,
  setTotalPages,
}: SearchBoxProps) {
  const [searchInput, setSearchInput] = useState<string>("");

  useSearchAdvertise(
    searchInput,
    pagination,
    filters,
    setJobsData,
    setTotalPages
  );

  return (
    <div className="relative w-full rounded-lg">
      <input
        className="w-80 lg:w-96 h-12 px-4 pr-10 text-sm rounded-lg bg-gray-50 text-neutral-dark placeholder:text-neutral-mid ring-1 ring-gray-300"
        type="search"
        name="search"
        placeholder="جستجوی آگهی"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <Image
        alt=""
        src={searchSVG}
        className="absolute right-2 top-3"
      />
    </div>
  );
}

export default SearchBox;
