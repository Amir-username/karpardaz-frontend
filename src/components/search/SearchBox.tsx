"use client";

import { fetchSearchAdvertise } from "@/fetch/fetchSearchAdvertise";
import { AdvertiseModel } from "@/models/Advertise";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
type SearchBoxProps = {
  setJobsData: Dispatch<SetStateAction<AdvertiseModel[]>>;
};

function SearchBox({ setJobsData }: SearchBoxProps) {
  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    const controller = new AbortController();
    const fetchResult = async () => {
      try {
        const jobsData = await fetchSearchAdvertise(
          searchInput,
          controller.signal
        );
        setJobsData(jobsData);
      } catch (error) {
        if (error instanceof Error) {
          if (error.name === "AbortError") {
            console.log("request was aborted");
          } else {
            console.log("fetch error");
          }
        }
      }
    };

    const debounceTime = searchInput === "" ? 0 : 1000;

    const debounceTimer = setTimeout(fetchResult, debounceTime);

    return () => {
      controller.abort();
      clearTimeout(debounceTimer);
    };
  }, [searchInput]);

  return (
    <div className="relative w-full rounded-lg">
      <input
        className="w-96 h-12 px-4 pr-10 text-sm rounded-lg bg-gray-50 text-neutral-dark placeholder:text-neutral-mid ring-1 ring-gray-300"
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
