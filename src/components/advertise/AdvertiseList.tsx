"use client";

import { AdvertiseModel } from "@/models/Advertise";
import AdvertiseItem from "./AdvertiseItem";
import { useEffect, useState } from "react";
import { BASE_LINK } from "@/fetch/config";
import axios from "axios";

type AdvertiseListProps = {
  advertises: AdvertiseModel[];
  token?: string;
  role?: string;
};

function AdvertiseList({ advertises, token, role }: AdvertiseListProps) {
  const [favAdvertises, setFavAdvertises] = useState<number[]>([]);

  useEffect(() => {
    const fetchFavAds = async (token: string) => {
      const res = await axios.get(BASE_LINK + "jobseeker-favorites/", {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.data;
      setFavAdvertises(data)
    };

    if (token) {
      fetchFavAds(token);
    }
  }, [token]);

  console.log(advertises);
  console.log(favAdvertises);

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
