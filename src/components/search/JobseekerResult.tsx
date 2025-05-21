"use client";

import { useState } from "react";
import JobSeekerAdSearchBox from "./JobseekerAdSearchBox";
import JobSeekerAdList from "../jobseekerAdvertise/JobseekerAdList";
import { JobSeekrAdModel } from "@/models/JobSeekerAd";
import { FilterType } from "@/fetch/employerAdvertise/fetchSearchAdvertise";
import SearchFilter from "../filter/SearchFilter";

type JobSeekerResultProps = {
  token?: string;
  role?: string;
};

function JobSeekerResult({ token, role }: JobSeekerResultProps) {
  const [jobSeekerAds, setJobSeekerAds] = useState<JobSeekrAdModel[]>([]);
  const [filters, setFilters] = useState<FilterType>({});

  return (
    <main className="flex flex-col gap-12">
      <header className="flex flex-col gap-5">
        <JobSeekerAdSearchBox
          filters={filters}
          setJobseekerAds={setJobSeekerAds}
        />
        <SearchFilter filters={filters} setFilters={setFilters} />
      </header>
      {jobSeekerAds ? (
        <JobSeekerAdList advertises={jobSeekerAds} token={token} role={role} />
      ) : (
        <div>not found</div>
      )}
    </main>
  );
}

export default JobSeekerResult;
