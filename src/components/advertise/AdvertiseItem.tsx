"use client";

import { AdvertiseModel } from "@/models/Advertise";
import Button from "../../ui/Button";
import AdAvatar from "./AdAvater";
import AdHeader from "./AdHeader";
import AdInfo from "./AdInfo";
import AdTags from "./AdTags";
import Link from "next/link";
import { useEmployerDetail } from "@/hooks/useEmployerDetail";
import { EmployerModel } from "@/models/Employer";
import { useState } from "react";

type AdvertiseItemProps = {
  advertise: AdvertiseModel;
  role?: string;
  token?: string;
};

function AdvertiseItem({ advertise, role, token }: AdvertiseItemProps) {
  const [company, setCompany] = useState<EmployerModel>();

  useEmployerDetail(advertise.employer_id, setCompany);

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
              name={company?.name}
              adId={advertise.id}
              role="employer"
              id={advertise.employer_id}
              isLikeOpen={!!(token && role === "jobseeker")}
              token={token}
            />
            <AdInfo
              city={advertise.city}
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

export default AdvertiseItem;
