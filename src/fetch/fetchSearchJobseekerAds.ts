import { BASE_LINK } from "./config";

export async function fetchSearchJobSeekerAds(
  query: string,
  signal: AbortSignal
) {
  const path =
    query.length >= 2
      ? `jobeeker-ads/search/?q=${query}`
      : "jobeeker-ads/search/";
  const res = await fetch(BASE_LINK + path, {
    headers: {
      accept: "application/json",
    },
    signal: signal,
  });
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

  const data = await res.json();

  console.log(data);

  return data;
}
