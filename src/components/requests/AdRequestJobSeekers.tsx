import { JobSeekerDetailModel } from "@/models/JobSeekerDetail";
import AdRequestJobSeekersItem from "./AdRequestJobSeekersItem";

export default function AdRequestJobSeekers({
  jobseekers,
  advertiseID,
  token,
}: {
  jobseekers: JobSeekerDetailModel[];
  advertiseID: number;
  token?: string;
}) {
  return (
    <>
      <h2 className="w-full px-8 text-2xl text-center text-primary-blue">
        درخواست ها
      </h2>
      <ul className="flex flex-col gap-3 p-4">
        {jobseekers.map((jobseeker) => {
          return (
            <AdRequestJobSeekersItem
              key={jobseeker.id}
              advertiseID={advertiseID}
              jobseeker={jobseeker}
              token={token}
            />
          );
        })}
      </ul>
    </>
  );
}
