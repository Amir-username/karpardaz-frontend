import { BASE_LINK } from "@/fetch/config";
import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";

export function useAdvertiseLike(path: string, token?: string, role?: string) {
  const [favAdvertises, setFavAdvertises] = useState<number[]>([]);

  useEffect(() => {
    const fetchFavAds = async (token: string) => {
      if (role === "employer") {
        const res = await axios.get(BASE_LINK + path, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.data;
        setFavAdvertises(data);
      }
    };

    if (token) {
      try {
        fetchFavAds(token);
      } catch (error) {
        if (error instanceof AxiosError) console.log(error.message);
      }
    }
  }, [token]);

  return {
    favAdvertises,
  };
}
