"use client";

import { JobSeekerDetailModel } from "@/models/JobSeekerDetail";
import AdAvatar from "../advertise/AdAvater";
import Link from "next/link";
import RequestStatusSelect from "./RequestStatusSelect";

type AdRequestJobSeekersItemProps = {
  jobseeker: JobSeekerDetailModel;
  advertiseID: number;
  token?: string;
};

export default function AdRequestJobSeekersItem({
  jobseeker,
  advertiseID,
  token,
}: AdRequestJobSeekersItemProps) {
  return (
    <li
      key={jobseeker.id}
      className="flex justify-between px-4 py-2 rounded-lg ring-1 ring-gray-300 dark:ring-neutral-dark"
    >
      <div className="flex gap-3">
        <AdAvatar id={jobseeker.id!} role="jobseeker" />
        <div className="flex flex-col">
          <Link href={`/profile/jobseeker/${jobseeker.id}`}>
            <h3 className="text-lg cursor-pointer text-neutral-dark dark:text-neutral-light">{`${jobseeker.firstname} ${jobseeker.lastname}`}</h3>
          </Link>
          <h6 className="text-sm text-gray-500 dark:text-neutral-mid">
            {jobseeker.experience}
          </h6>
        </div>
      </div>
      <RequestStatusSelect
        jobseekerID={jobseeker.id}
        advertiseID={advertiseID}
        token={token}
      />
    </li>
  );
}
