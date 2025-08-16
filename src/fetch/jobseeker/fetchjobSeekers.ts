import { BASE_LINK } from "../config";

export async function fetchJobSeekers() {
  const res = await fetch(BASE_LINK + "jobseeker-details/");
  if (res.status === 200) {
    const data = await res.json();
    return data;
  }
}
