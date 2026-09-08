import { BASE_LINK } from "../config";

export const fetchDisLikeAd = async (
  token: string,
  id: number,
  role: "jobseeker" | "employer"
) => {
  const res = await fetch(BASE_LINK + `${role}-dislike-ad/${id}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();

  console.log(data);
};
