import { JobSeekerDetailModel } from "@/models/JobSeekerDetail";
import AdAvatar from "../advertise/AdAvater";

export default function AdRequestJobSeekers({
  jobseekers,
}: {
  jobseekers: JobSeekerDetailModel[];
}) {
  return (
    <>
      <h2 className="px-8 w-full text-center text-2xl text-primary-blue">
        درخواست ها
      </h2>
      <ul className="flex flex-col gap-3 p-4">
        {jobseekers.map((jobseeker) => {
          return (
            <li
              key={jobseeker.id}
              className="flex gap-3 px-4 py-2 ring-1 ring-gray-300 rounded-lg"
            >
              <AdAvatar id={jobseeker.id!} role="jobseeker" />
              <div className="flex flex-col">
                <h3 className="text-lg text-neutral-dark">{`${jobseeker.firstname} ${jobseeker.lastname}`}</h3>
                <h6 className="text-gray-500 text-sm">
                  {jobseeker.experience}
                </h6>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
