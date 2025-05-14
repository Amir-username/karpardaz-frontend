"use client";

import { useState } from "react";
import JobSeekerAdSearchBox from "./JobseekerAdSearchBox";
import JobSeekerAdList from "../jobseekerAdvertise/JobseekerAdList";
import { JobSeekrAdModel } from "@/models/JobSeekerAd";

type JobSeekerResultProps = {
  token?: string;
  role?: string;
};

function JobSeekerResult({ token, role }: JobSeekerResultProps) {
  const [jobSeekerAds, setJobSeekerAds] = useState<JobSeekrAdModel[]>([]);

  return (
    <main className="flex flex-col gap-12">
      <JobSeekerAdSearchBox setJobseekerAds={setJobSeekerAds} />
      {jobSeekerAds ? (
        <JobSeekerAdList advertises={jobSeekerAds} token={token} role={role} />
      ) : (
        <div>not found</div>
      )}
    </main>
  );
}

export default JobSeekerResult;
