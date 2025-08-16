import { BASE_LINK } from "../config";

export async function fetchEmplyoers() {
  const res = await fetch(BASE_LINK + "employer-details/");
  if (res.status === 200) {
    const data = await res.json();
    return data;
  }
}
