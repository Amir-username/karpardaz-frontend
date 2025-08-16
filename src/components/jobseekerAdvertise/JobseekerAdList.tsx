"use client";

import { JobSeekrAdModel } from "@/models/JobSeekerAd";
import JobSeekerAdItem from "./JobseekerAdItem";
import { useAdvertiseLike } from "@/hooks/useAdvertiseLike";
import Image from "next/image";
import EmptyIll from "../../../public/Illustrations/NoDataILL.svg";

type JobSeekerAdListProps = {
  advertises: JobSeekrAdModel[];
  token?: string;
  role?: string;
};

function JobSeekerAdList({ advertises, token, role }: JobSeekerAdListProps) {
  const { favAdvertises } = useAdvertiseLike(
    "employer-favorites/",
    token,
    role
  );
  return (
    <ul className="flex flex-col gap-8 justify-center items-center">
      {advertises.length > 0 ? (
        advertises.map((ad) => {
          return (
            <JobSeekerAdItem
              key={ad.id}
              advertise={ad}
              token={token}
              role={role}
              isFav={favAdvertises.includes(ad.id)}
            />
          );
        })
      ) : (
        <div className="flex flex-col gap-8 w-48 h-48 my-12 mb-16 justify-center items-center">
          <Image src={EmptyIll} alt="" />
          <h3 className="text-center text-xl text-neutral-700 dark:text-neutral-light">
            فعلا آگهی وجود ندارد
          </h3>
        </div>
      )}
    </ul>
  );
}

export default JobSeekerAdList;
