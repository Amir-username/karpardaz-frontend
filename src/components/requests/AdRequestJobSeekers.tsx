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
    <section className="border-t border-border p-6 md:p-8 bg-bg">
      <h2 className="flex items-center justify-center gap-2 mb-5 text-lg font-bold text-fg">
        <span className="w-1.5 h-5 rounded-full bg-brand" aria-hidden="true" />
        درخواست های ارسال شده
      </h2>
      <ul className="flex flex-col gap-3">
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
    </section>
  );
}
