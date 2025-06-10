import { BASE_LINK } from "../config";

export async function fetchRecommendedAds(token: string, topN: number = 3) {
  const res = await fetch(BASE_LINK + `recommendation-jobs/?top_n=${topN}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  
  if (res.status === 200) {
    return data
  }
}
