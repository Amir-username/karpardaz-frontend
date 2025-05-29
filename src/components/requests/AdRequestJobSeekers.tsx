import { JobSeekerDetailModel } from "@/models/JobSeekerDetail";
import AdAvatar from "../advertise/AdAvater";
import Link from "next/link";
import RequestStatusSelect from "./RequestStatusSelect";

export default function AdRequestJobSeekers({
  jobseekers,
}: {
  jobseekers: JobSeekerDetailModel[];
}) {
  return (
    <>
      <h2 className="w-full px-8 text-2xl text-center text-primary-blue">
        درخواست ها
      </h2>
      <ul className="flex flex-col gap-3 p-4">
        {jobseekers.map((jobseeker) => {
          return (
            <li
              key={jobseeker.id}
              className="flex justify-between px-4 py-2 rounded-lg ring-1 ring-gray-300"
            >
              <div className="flex gap-3">
                <AdAvatar id={jobseeker.id!} role="jobseeker" />
                <div className="flex flex-col">
                  <Link href={`/profile/jobseeker/${jobseeker.id}`}>
                    <h3 className="text-lg cursor-pointer text-neutral-dark">{`${jobseeker.firstname} ${jobseeker.lastname}`}</h3>
                  </Link>
                  <h6 className="text-sm text-gray-500">
                    {jobseeker.experience}
                  </h6>
                </div>
              </div>
              <RequestStatusSelect />
            </li>
          );
        })}
      </ul>
    </>
  );
}
