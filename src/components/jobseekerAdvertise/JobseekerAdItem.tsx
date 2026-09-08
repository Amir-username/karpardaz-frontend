"use client";

import AdAvatar from "../advertise/AdAvater";
import Link from "next/link";
import AdTags from "../advertise/AdTags";
import Icon from "@/ui/Icon";
import { useEffect, useState } from "react";
import AdInfo from "../advertise/AdInfo";
import AdHeader from "../advertise/AdHeader";
import { JobSeekrAdModel } from "@/models/JobSeekerAd";
import { JobSeekerDetailModel } from "@/models/JobSeekerDetail";
import { fetchJobSeekerDetail } from "@/fetch/jobseeker/fetchJobSeekerDetail";

type JobSeekerAdItemProps = {
  isFav: boolean;
  advertise: JobSeekrAdModel;
  token?: string;
  role?: string;
};

function JobSeekerAdItem({
  advertise,
  token,
  role,
  isFav,
}: JobSeekerAdItemProps) {
  const [jobSeeker, setJobSeeker] = useState<JobSeekerDetailModel>();

  useEffect(() => {
    const fetchJobSeeker = async () => {
      const res = await fetchJobSeekerDetail(advertise.jobseeker_id);
      setJobSeeker(res);
    };

    fetchJobSeeker();
  }, []);

  return (
    <li className="group flex flex-col rounded-2xl bg-card ring-1 ring-border shadow-soft hover:shadow-lift hover:ring-brand/40 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
      <div className="flex gap-3.5 p-4">
        <div className="shrink-0 self-start w-14 h-14 rounded-xl overflow-hidden bg-subtle ring-1 ring-border">
          <AdAvatar id={advertise.jobseeker_id} role="jobseeker" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-col gap-3">
            <AdHeader
              isLikeOpen={role === "employer"}
              adId={advertise.id}
              isFav={isFav}
              title={advertise.title}
              name={
                jobSeeker
                  ? `${jobSeeker.firstname} ${jobSeeker.lastname}`
                  : undefined
              }
              role="jobseeker"
              token={token}
              id={advertise.jobseeker_id}
            />
            <AdInfo
              city={jobSeeker?.city}
              isRemote={jobSeeker?.is_remote}
              isInternship={jobSeeker?.is_internship}
              salary={jobSeeker?.salary}
            />
            <div className="pt-3 border-t border-border">
              <AdTags tags={jobSeeker?.technologies} />
            </div>
          </div>
        </div>
      </div>
      <Link
        href={`/jobseeker-ads/${advertise.id}`}
        className="mt-auto flex items-center justify-center gap-1 h-11 text-sm font-medium text-fg-muted bg-subtle/50 group-hover:text-brand-fg group-hover:bg-brand transition-colors"
      >
        مشاهده آگهی
        <Icon name="chevron_left" size={16} />
      </Link>
    </li>
  );
}

export default JobSeekerAdItem;
