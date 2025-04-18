import { BASE_LINK } from "@/fetch/config";
import { Dispatch, SetStateAction, useEffect } from "react";

export function useJobSeekerDetail(
  jobseekerID: number,
  setJobSeeker: Dispatch<SetStateAction<JobSeekerModel | undefined>>
) {
  useEffect(() => {
    const fetchJobSeekerInfo = async () => {
      const res = await fetch(BASE_LINK + `jobseeker-detail/${jobseekerID}`);
      const data = await res.json();

      setJobSeeker({
        id: data.id,
        email: data.email,
        firstname: data.firstname,
        lastname: data.lastname,
        phonenumber: data.phonenumber,
        city: data.city
      });
    };

    fetchJobSeekerInfo();
  }, []);
}
