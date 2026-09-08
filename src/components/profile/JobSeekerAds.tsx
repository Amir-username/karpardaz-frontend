import { BASE_LINK } from "@/fetch/config";
import { JobSeekrAdModel } from "@/models/JobSeekerAd";
import { Container } from "./Profile";
import JobSeekerAdList from "../jobseekerAdvertise/JobseekerAdList";
import Button from "@/ui/Button";

async function JobSeeekerAds({ id }: { id: number }) {
  const res = await fetch(BASE_LINK + `jobseeker-own-ads/${id}`);
  const data = await res.json();

  const ads: JobSeekrAdModel[] = data;

  return (
    <Container bg="neutral">
      <div className="flex flex-col items-center gap-6 w-full px-3 sm:px-5">
        <h1 className="flex items-center gap-2 text-xl font-bold text-fg">
          <span className="w-1.5 h-5 rounded-full bg-brand" aria-hidden="true" />
          آگهی های من
        </h1>

        {ads.length > 0 ? (
          <JobSeekerAdList advertises={ads} variant="compact" />
        ) : (
          <p className="text-sm text-fg-muted">هنوز آگهی ثبت نشده است</p>
        )}
        <Button
          href={`/profile/jobseeker/advertise/${id}/create`}
          text="ایجاد آگهی"
          fullWidth={false}
          className="min-w-40"
        />
      </div>
    </Container>
  );
}

export default JobSeeekerAds;
