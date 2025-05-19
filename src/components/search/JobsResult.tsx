"use client";

import { AdvertiseModel } from "@/models/Advertise";
import AdvertiseList from "../advertise/AdvertiseList";
import SearchBox from "./SearchBox";
import { useState } from "react";
import SearchFilter from "../filter/SearchFilter";

type JobsResultProps = {
  token?: string;
  role?: string;
};

function JobsResult({ token, role }: JobsResultProps) {
  const [jobsData, setJobsData] = useState<AdvertiseModel[]>([]);
  const [isInternship, setIsInternship] = useState<boolean>(false);
  const [isRemote, setIsRemote] = useState<boolean>(false);
  const [isPortfolio, setIsPortfolio] = useState<boolean>(false);

  return (
    <main className="flex flex-col gap-12">
      <header className="flex flex-col gap-5">
        <SearchBox setJobsData={setJobsData} />
        <SearchFilter
          isInternship={isInternship}
          isRemote={isRemote}
          isPortfolio={isPortfolio}
          setIsInternship={setIsInternship}
          setIsRemote={setIsRemote}
          setIsPortfolio={setIsPortfolio}
        />
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
