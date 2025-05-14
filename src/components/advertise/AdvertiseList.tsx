"use client";

import { AdvertiseModel } from "@/models/Advertise";
import AdvertiseItem from "./AdvertiseItem";
import { useAdvertiseLike } from "@/hooks/useAdvertiseLike";

type AdvertiseListProps = {
  advertises: AdvertiseModel[];
  token?: string;
  role?: string;
};

function AdvertiseList({ advertises, token, role }: AdvertiseListProps) {
  const { favAdvertises } = useAdvertiseLike("jobseeker-favorites/", token);

  return (
    <ul className="flex flex-col gap-8 justify-center items-center">
      {advertises.map((ad) => {
        return (
          <AdvertiseItem
            key={ad.id}
            advertise={ad}
            isFav={favAdvertises.includes(ad.id)}
            token={token}
            role={role}
          />
        );
      })}
    </ul>
  );
}

export default AdvertiseList;
