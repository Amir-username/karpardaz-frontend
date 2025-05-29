"use client";

import { JobSeekrAdModel } from "@/models/JobSeekerAd";
import JobSeekerAdItem from "./JobseekerAdItem";
import { useAdvertiseLike } from "@/hooks/useAdvertiseLike";

type JobSeekerAdListProps = {
  advertises: JobSeekrAdModel[];
  token?: string;
  role?: string;
};

function JobSeekerAdList({ advertises, token, role }: JobSeekerAdListProps) {
  const { favAdvertises } = useAdvertiseLike("employer-favorites/", token, role);
  return (
    <ul className="flex flex-col gap-8">
      {advertises.map((ad) => {
        return (
          <JobSeekerAdItem
            key={ad.id}
            advertise={ad}
            token={token}
            role={role}
            isFav={favAdvertises.includes(ad.id)}
          />
        );
      })}
    </ul>
  );
}

export default JobSeekerAdList;
