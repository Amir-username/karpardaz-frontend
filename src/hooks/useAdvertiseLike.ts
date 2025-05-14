import { BASE_LINK } from "@/fetch/config";
import axios from "axios";
import { useState, useEffect } from "react";

export function useAdvertiseLike(path: string, token?: string) {
  const [favAdvertises, setFavAdvertises] = useState<number[]>([]);

  useEffect(() => {
    const fetchFavAds = async (token: string) => {
      const res = await axios.get(BASE_LINK + path, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.data;
      setFavAdvertises(data);
    };

    if (token) {
      fetchFavAds(token);
    }
  }, [token]);

  return {
    favAdvertises,
  };
}
