"use client";

import Button from "@/ui/Button";
import AdAvatar from "../advertise/AdAvater";
import Link from "next/link";
import AdTags from "../advertise/AdTags";
import { useState } from "react";
import { useJobSeekerDetail } from "@/hooks/useJobSeekerDetail";
import AdInfo from "../advertise/AdInfo";
import AdHeader from "../advertise/AdHeader";

type JobSeekerAdItemProps = {
  advertise: JobSeekrAdModel;
};

function JobSeekerAdItem({ advertise }: JobSeekerAdItemProps) {
  const [jobSeeker, setJobSeeker] = useState<JobSeekerModel>();

  useJobSeekerDetail(advertise.jobseeker_id, setJobSeeker);

  console.log(jobSeeker);

  return (
    <li className="flex flex-col gap-3 rounded-lg shadow-md md:w-96 w-sm ring-1 ring-gray-200">
      <div className="flex gap-3 px-3 pt-3">
        <div className="flex flex-col justify-start h-full">
          <AdAvatar />
        </div>
        <div className="flex-2">
          <div className="flex flex-col gap-3">
            <AdHeader
              title={advertise.title}
              name={`${advertise?.firstname} ${advertise?.lastname}`}
            />
            <AdInfo
              city={jobSeeker?.city}
              isRemote={advertise.is_remote}
              isInternship={advertise.is_internship}
              salary={advertise.salary}
            />
            <AdTags tags={advertise.technologies} />
          </div>
        </div>
      </div>
      <Link href={`jobs/${advertise.id}`}>
        <Button text="مشاهده" card />
      </Link>
    </li>
  );
}

export default JobSeekerAdItem;
