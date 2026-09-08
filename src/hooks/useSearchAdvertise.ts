import { paginationType } from "@/components/search/JobsResult";
import {
  FilterType,
  fetchSearchAdvertise,
} from "@/fetch/employerAdvertise/fetchSearchAdvertise";
import { AdvertiseModel } from "@/models/Advertise";
import { Dispatch, SetStateAction, useEffect } from "react";

export function useSearchAdvertise(
  searchInput: string,
  pagination: paginationType,
  filters: FilterType,
  setJobsData: Dispatch<SetStateAction<AdvertiseModel[] | null>>,
  setTotalPages: Dispatch<SetStateAction<number>>,
  setIsFetching?: Dispatch<SetStateAction<boolean>>
) {
  useEffect(() => {
    const controller = new AbortController();
    let cancelled = false;

    setIsFetching?.(true);

    const fetchResult = async () => {
      try {
        const jobsData = await fetchSearchAdvertise(
          searchInput,
          pagination,
          filters,
          controller.signal,
          setTotalPages
        );
        if (!cancelled) setJobsData(jobsData.advertises);
      } catch (error) {
        // aborted requests are expected while typing — ignore silently
        if (!cancelled && !(error instanceof DOMException && error.name === "AbortError")) {
          console.log("fetch error");
        }
      } finally {
        if (!cancelled) setIsFetching?.(false);
      }
    };

    const debounceTime = searchInput === "" ? 0 : 1000;

    const debounceTimer = setTimeout(fetchResult, debounceTime);

    return () => {
      cancelled = true;
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
    pagination
  ]);
}
