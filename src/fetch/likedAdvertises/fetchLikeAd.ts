import { BASE_LINK } from "../config";

export const fetchLikeAd = async (
  token: string,
  id: number,
  role: "jobseeker" | "employer"
) => {
  const res = await fetch(BASE_LINK + `${role}-like-ad/${id}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();

  console.log(data);
};
