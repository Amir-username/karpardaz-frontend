"use client";

import { AdvertiseModel } from "@/models/Advertise";
import AdvertiseList from "../advertise/AdvertiseList";
import SearchBox from "./SearchBox";
import { useState } from "react";
import SearchFilter from "../filter/SearchFilter";
import {
  ExperienceType,
  GenderType,
  PositionType,
  SalaryType,
} from "@/models/filterTypes";
import { FilterType } from "@/fetch/employerAdvertise/fetchSearchAdvertise";

type JobsResultProps = {
  token?: string;
  role?: string;
};

function JobsResult({ token, role }: JobsResultProps) {
  const [jobsData, setJobsData] = useState<AdvertiseModel[]>([]);
  const [filters, setFilters] = useState<FilterType>({});

  return (
    <main className="flex flex-col gap-12">
      <header className="flex flex-col gap-5">
        <SearchBox setJobsData={setJobsData} filters={filters} />
        <SearchFilter filters={filters} setFilters={setFilters} />
      </header>
      {jobsData ? (
        <AdvertiseList advertises={jobsData} token={token} role={role} />
      ) : (
        <div>not found</div>
      )}
    </main>
  );
}

export default JobsResult;
