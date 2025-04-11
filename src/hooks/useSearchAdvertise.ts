import { fetchSearchAdvertise } from "@/fetch/fetchSearchAdvertise";
import { AdvertiseModel } from "@/models/Advertise";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function useSearchAdvertise(
  searchInput: string,
  setJobsData: Dispatch<SetStateAction<AdvertiseModel[]>>
) {
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
}
