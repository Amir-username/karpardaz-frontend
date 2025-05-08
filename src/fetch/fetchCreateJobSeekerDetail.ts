import { JobSeekerDetailModel } from "@/models/JobSeekerDetail";
import axios, { AxiosError } from "axios";
import { BASE_LINK } from "./config";

export async function fetchCreateJobSeekerDetail(
  detail: JobSeekerDetailModel,
  token: string
) {
  const res = await fetch("http://127.0.0.1:7000/jobseeker-detail/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(detail),
  });

  const data = await res.json();

  return data
}
