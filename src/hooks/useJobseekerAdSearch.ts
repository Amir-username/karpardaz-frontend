import { paginationType } from "@/components/search/JobsResult";
import { FilterType } from "@/fetch/employerAdvertise/fetchSearchAdvertise";
import { fetchSearchJobSeekerAds } from "@/fetch/jobseeker/fetchSearchJobseekerAds";
import { JobSeekrAdModel } from "@/models/JobSeekerAd";
import { Dispatch, SetStateAction, useEffect } from "react";

export function useJobSeekerSearchAds(
  searchInput: string,
  pagination: paginationType,
  filters: FilterType,
  setJobsData: Dispatch<SetStateAction<JobSeekrAdModel[] | null>>,
  setTotalPages: Dispatch<SetStateAction<number>>,
  setIsFetching?: Dispatch<SetStateAction<boolean>>
) {
  useEffect(() => {
    const controller = new AbortController();
    let cancelled = false;

    setIsFetching?.(true);

    const fetchResult = async () => {
      try {
        const adsData = await fetchSearchJobSeekerAds(
          searchInput,
          filters,
          pagination,
          controller.signal,
          setTotalPages
        );
        if (!cancelled) setJobsData(adsData.advertises);
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
    filters.experience,
    filters.salary,
    filters.gender,
    filters.position,
    pagination,
  ]);
}
