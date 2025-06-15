import { BASE_LINK } from "../config";

export async function fetchGetInterview(advertiseID: number) {
  const res = await fetch(BASE_LINK + `get-interview/${advertiseID}`);
  if (res.status === 200) {
    const data = await res.json();
    return data;
  }
}
