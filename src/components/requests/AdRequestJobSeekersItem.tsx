"use client";

import { JobSeekerDetailModel } from "@/models/JobSeekerDetail";
import AdAvatar from "../advertise/AdAvater";
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
    <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 py-3 rounded-xl bg-card ring-1 ring-border shadow-soft hover:ring-brand/30 transition-all">
      <div className="flex items-center gap-3.5">
        <AdAvatar id={jobseeker.id!} role="jobseeker" />
        <div className="flex flex-col min-w-0">
          <a
            href={`/profile/jobseeker/${jobseeker.id}`}
            className="text-base font-medium text-fg hover:text-brand transition-colors w-fit"
          >
            {`${jobseeker.firstname} ${jobseeker.lastname}`}
          </a>
          <h6 className="text-xs text-fg-muted">{jobseeker.experience}</h6>
        </div>
      </div>
      <div className="w-full sm:w-64">
        <RequestStatusSelect
          jobseekerID={jobseeker.id}
          advertiseID={advertiseID}
          token={token}
        />
      </div>
    </li>
  );
}
