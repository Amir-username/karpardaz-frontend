import { paginationType } from "@/components/search/JobsResult";
import { FilterType } from "@/fetch/employerAdvertise/fetchSearchAdvertise";
import { fetchSearchJobSeekerAds } from "@/fetch/jobseeker/fetchSearchJobseekerAds";
import { JobSeekrAdModel } from "@/models/JobSeekerAd";
import { Dispatch, SetStateAction, useEffect } from "react";

export function useJobSeekerSearchAds(
  searchInput: string,
  pagination: paginationType,
  filters: FilterType,
  setJobsData: Dispatch<SetStateAction<JobSeekrAdModel[]>>,
  setTotalPages: Dispatch<SetStateAction<number>>
) {
  useEffect(() => {
    const controller = new AbortController();
    const fetchResult = async () => {
      // try {
      const adsData = await fetchSearchJobSeekerAds(
        searchInput,
        filters,
        pagination,
        controller.signal,
        setTotalPages
      );
      setJobsData(adsData.advertises);
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
    filters.experience,
    filters.salary,
    filters.gender,
    filters.position,
    pagination,
  ]);
}
