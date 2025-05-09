"use client";

import { AdvertiseModel } from "@/models/Advertise";
import AdvertiseList from "../advertise/AdvertiseList";
import SearchBox from "./SearchBox";
import { useState } from "react";

type JobsResultProps = {
  token?: string;
  role?: string;
}

function JobsResult({token, role}: JobsResultProps) {
  const [jobsData, setJobsData] = useState<AdvertiseModel[]>([]);
  return (
    <main className="flex flex-col gap-12">
      <SearchBox setJobsData={setJobsData} />
      {jobsData ? (
        <AdvertiseList advertises={jobsData} token={token} role={role}/>
      ) : (
        <div>not found</div>
      )}
    </main>
  );
}

export default JobsResult;
