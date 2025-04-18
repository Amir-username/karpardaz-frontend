import { fetchSearchJobSeekerAds } from "@/fetch/fetchSearchJobseekerAds";
import { Dispatch, SetStateAction, useEffect } from "react";

export function useJobSeekerSearchAds(
  searchInput: string,
  setJobsData: Dispatch<SetStateAction<JobSeekrAdModel[]>>
) {
  useEffect(() => {
    const controller = new AbortController();
    const fetchResult = async () => {
      // try {
      const adsData = await fetchSearchJobSeekerAds(
        searchInput,
        controller.signal
      );
      setJobsData(adsData);
      // } catch (error) {
      //   if (error instanceof Error) {
      //     if (error.name === "AbortError") {
      //       console.log("request was aborted");
      //     } else {
      //       console.log("fetch error");
      //     }
      //   }
      // }
    };

    const debounceTime = searchInput === "" ? 0 : 1000;

    const debounceTimer = setTimeout(fetchResult, debounceTime);

    return () => {
      controller.abort();
      clearTimeout(debounceTimer);
    };
  }, [searchInput]);
}
