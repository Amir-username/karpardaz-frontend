"use client";

import Button from "@/ui/Button";
import AdAvatar from "../advertise/AdAvater";
import Link from "next/link";
import AdTags from "../advertise/AdTags";
import { useEffect, useState } from "react";
import AdInfo from "../advertise/AdInfo";
import AdHeader from "../advertise/AdHeader";
import { JobSeekrAdModel } from "@/models/JobSeekerAd";
import { JobSeekerDetailModel } from "@/models/JobSeekerDetail";
import { fetchJobSeekerDetail } from "@/fetch/jobseeker/fetchJobSeekerDetail";

type JobSeekerAdItemProps = {
  advertise: JobSeekrAdModel;
};

function JobSeekerAdItem({ advertise }: JobSeekerAdItemProps) {
  const [jobSeeker, setJobSeeker] = useState<JobSeekerDetailModel>();

  useEffect(() => {
    const fetchJobSeeker = async () => {
      const res = await fetchJobSeekerDetail(advertise.jobseeker_id);
      setJobSeeker(res);
    };

    fetchJobSeeker();
  }, []);

  console.log(jobSeeker);

  return (
    <li className="flex flex-col gap-3 rounded-lg shadow-md md:w-96 w-80 ring-1 ring-gray-200">
      <div className="flex gap-3 px-3 pt-3">
        <div className="flex flex-col justify-start h-full">
          <AdAvatar />
        </div>
        <div className="flex-2">
          <div className="flex flex-col gap-3">
            <AdHeader
              title={advertise.title}
              name={`${jobSeeker?.firstname} ${jobSeeker?.lastname}`}
              role="jobseeker"
              id={advertise.jobseeker_id}
            />
            <AdInfo
              city={jobSeeker?.city}
              isRemote={jobSeeker?.is_remote}
              isInternship={jobSeeker?.is_internship}
              salary={jobSeeker?.salary}
            />
            <AdTags tags={jobSeeker?.technologies} />
          </div>
        </div>
      </div>
      <Link href={`jobseeker-ads/${advertise.id}`}>
        <Button text="مشاهده" card />
      </Link>
    </li>
  );
}

export default JobSeekerAdItem;
