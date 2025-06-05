"use client";

import { useState } from "react";
import JobSeekerAdSearchBox from "./JobseekerAdSearchBox";
import JobSeekerAdList from "../jobseekerAdvertise/JobseekerAdList";
import { JobSeekrAdModel } from "@/models/JobSeekerAd";
import { FilterType } from "@/fetch/employerAdvertise/fetchSearchAdvertise";
import SearchFilter from "../filter/SearchFilter";
import Pagination from "../pagination/Pagination";
import { paginationType } from "./JobsResult";

type JobSeekerResultProps = {
  token?: string;
  role?: string;
};

function JobSeekerResult({ token, role }: JobSeekerResultProps) {
  const [jobSeekerAds, setJobSeekerAds] = useState<JobSeekrAdModel[]>([]);
  const [filters, setFilters] = useState<FilterType>({});
  const [pagination, setPaginationAction] = useState<paginationType>({
    offset: 0,
    limit: 3,
  });

  return (
    <main className="flex flex-col gap-12">
      <header className="flex flex-col gap-5">
        <JobSeekerAdSearchBox
          filters={filters}
          pagination={pagination}
          setJobseekerAds={setJobSeekerAds}
        />
        <SearchFilter setFilters={setFilters} />
      </header>
      {jobSeekerAds ? (
        <JobSeekerAdList advertises={jobSeekerAds} token={token} role={role} />
      ) : (
        <div>not found</div>
      )}
      <Pagination pagination={pagination} setPaginationAction={setPaginationAction} />
    </main>
  );
}

export default JobSeekerResult;
