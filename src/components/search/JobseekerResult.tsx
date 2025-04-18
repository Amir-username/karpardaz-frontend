"use client";

import { useState } from "react";
import JobSeekerAdSearchBox from "./JobseekerAdSearchBox";
import JobSeekerAdList from "../jobseekerAdvertise/JobseekerAdList";

function JobSeekerResult() {
  const [jobSeekerAds, setJobSeekerAds] = useState<JobSeekrAdModel[]>([]);

  return (
    <main className="flex flex-col gap-12">
      <JobSeekerAdSearchBox setJobseekerAds={setJobSeekerAds} />
      {jobSeekerAds ? (
        <JobSeekerAdList advertises={jobSeekerAds}/>
      ) : (
        <div>not found</div>
      )}
    </main>
  );
}

export default JobSeekerResult;
