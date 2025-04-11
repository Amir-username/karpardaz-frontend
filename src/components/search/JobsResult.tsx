"use client";

import { AdvertiseModel } from "@/models/Advertise";
import AdvertiseList from "../advertise/AdvertiseList";
import SearchBox from "./SearchBox";
import { useState } from "react";

function JobsResult() {
  const [jobsData, setJobsData] = useState<AdvertiseModel[]>([]);
  console.log(jobsData);
  return (
    <main className="flex flex-col gap-12">
      <SearchBox setJobsData={setJobsData} />
      {jobsData ? (
        <AdvertiseList advertises={jobsData} />
      ) : (
        <div>not found</div>
      )}
    </main>
  );
}

export default JobsResult;
