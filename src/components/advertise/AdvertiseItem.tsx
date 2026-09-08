"use client";

import { AdvertiseModel } from "@/models/Advertise";
import AdAvatar from "./AdAvater";
import AdHeader from "./AdHeader";
import AdInfo from "./AdInfo";
import AdTags from "./AdTags";
import Link from "next/link";
import Icon from "@/ui/Icon";
import { useEmployerDetail } from "@/hooks/useEmployerDetail";
import { EmployerModel } from "@/models/Employer";
import { useState } from "react";

type AdvertiseItemProps = {
  advertise: AdvertiseModel;
  role?: string;
  token?: string;
  isFav: boolean;
};

function AdvertiseItem({
  advertise,
  role,
  token,
  isFav = false,
}: AdvertiseItemProps) {
  const [company, setCompany] = useState<EmployerModel>();

  useEmployerDetail(advertise.employer_id, setCompany);

  return (
    <li className="group flex flex-col rounded-2xl bg-card ring-1 ring-border shadow-soft hover:shadow-lift hover:ring-brand/40 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
      <div className="flex gap-3.5 p-4">
        <div className="shrink-0 self-start w-14 h-14 rounded-xl overflow-hidden bg-subtle ring-1 ring-border">
          <AdAvatar id={advertise.employer_id} role="employer" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-col gap-3">
            <AdHeader
              title={advertise.title}
              name={company?.name}
              adId={advertise.id}
              role="employer"
              id={advertise.employer_id}
              isLikeOpen={!!(token && role === "jobseeker")}
              isFav={isFav}
              token={token}
            />
            <AdInfo
              city={advertise.city}
              isRemote={advertise.is_remote}
              isInternship={advertise.is_internship}
              salary={advertise.salary}
            />
            <div className="pt-3 border-t border-border">
              <AdTags tags={advertise.technologies} />
            </div>
          </div>
        </div>
      </div>
      <Link
        href={`/jobs/${advertise.id}`}
        className="mt-auto flex items-center justify-center gap-1 h-11 text-sm font-medium text-fg-muted bg-subtle/50 group-hover:text-brand-fg group-hover:bg-brand transition-colors"
      >
        مشاهده آگهی
        <Icon name="chevron_left" size={16} />
      </Link>
    </li>
  );
}

export default AdvertiseItem;
