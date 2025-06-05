"use client";

import { AdvertiseModel } from "@/models/Advertise";
import AdvertiseList from "../advertise/AdvertiseList";
import SearchBox from "./SearchBox";
import { useState } from "react";
import SearchFilter from "../filter/SearchFilter";
import { FilterType } from "@/fetch/employerAdvertise/fetchSearchAdvertise";
import Pagination from "../pagination/Pagination";

export type paginationType = {
  offset: number;
  limit: number;
};

type JobsResultProps = {
  token?: string;
  role?: string;
};

function JobsResult({ token, role }: JobsResultProps) {
  const [jobsData, setJobsData] = useState<AdvertiseModel[]>([]);
  const [filters, setFilters] = useState<FilterType>({});
  const [pagination, setPagination] = useState<paginationType>({
    offset: 0,
    limit: 3,
  });

  return (
    <main className="flex flex-col gap-12">
      <header className="flex flex-col gap-5">
        <SearchBox
          setJobsData={setJobsData}
          pagination={pagination}
          filters={filters}
        />
        <SearchFilter setFilters={setFilters} />
      </header>
      {jobsData ? (
        <AdvertiseList advertises={jobsData} token={token} role={role} />
      ) : (
        <div>not found</div>
      )}
      <Pagination pagination={pagination} setPaginationAction={setPagination} />
    </main>
  );
}

export default JobsResult;
