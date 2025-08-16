"use client";

import { AdvertiseModel } from "@/models/Advertise";
import AdvertiseItem from "./AdvertiseItem";
import { useAdvertiseLike } from "@/hooks/useAdvertiseLike";
import EmptyIll from "../../../public/Illustrations/NoDataILL.svg";
import Image from "next/image";

type AdvertiseListProps = {
  advertises: AdvertiseModel[];
  token?: string;
  role?: string;
};

function AdvertiseList({ advertises, token, role }: AdvertiseListProps) {
  const { favAdvertises } = useAdvertiseLike("jobseeker-favorites/", token);

  return (
    <ul className="flex flex-col gap-8 justify-center items-center">
      {advertises.length > 0 ? (
        advertises.map((ad) => {
          return (
            <AdvertiseItem
              key={ad.id}
              advertise={ad}
              isFav={favAdvertises.includes(ad.id)}
              token={token}
              role={role}
            />
          );
        })
      ) : (
        <div className="flex flex-col gap-8 w-48 h-48 my-12 mb-16">
          <Image src={EmptyIll} alt="" />
          <h3 className="text-center text-xl text-neutral-700 dark:text-neutral-light">
            فعلا آگهی وجود ندارد
          </h3>
        </div>
      )}
    </ul>
  );
}

export default AdvertiseList;
