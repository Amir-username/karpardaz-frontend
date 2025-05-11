import { BASE_LINK } from "../config";

export const fetchLikeAd = async (token: string, id: number) => {
  const res = await fetch(BASE_LINK + `jobseeker-like-ad/${id}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();

  console.log(data);
};
