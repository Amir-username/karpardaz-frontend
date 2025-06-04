import {
  FilterType,
  fetchSearchAdvertise,
} from "@/fetch/employerAdvertise/fetchSearchAdvertise";
import { AdvertiseModel } from "@/models/Advertise";
import { Dispatch, SetStateAction, useEffect } from "react";

export function useSearchAdvertise(
  searchInput: string,
  pageNumber: number,
  filters: FilterType,
  setJobsData: Dispatch<SetStateAction<AdvertiseModel[]>>
) {
  useEffect(() => {
    const controller = new AbortController();
    const fetchResult = async () => {
      // try {
      const jobsData = await fetchSearchAdvertise(
        searchInput,
        pageNumber,
        filters,
        controller.signal
      );
      setJobsData(jobsData);
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
  }, [
    searchInput,
    filters.isInternship,
    filters.isPortfolio,
    filters.isRemote,
    filters.city,
    filters.experience,
    filters.salary,
    filters.gender,
    filters.position,
    pageNumber
  ]);
}
