import { BASE_LINK } from "@/fetch/config";
import { JobSeekrAdModel } from "@/models/JobSeekerAd";
import { Container } from "./Profile";
import JobSeekerAdList from "../jobseekerAdvertise/JobseekerAdList";
import Link from "next/link";
import Button from "@/ui/Button";

async function JobSeeekerAds({ id }: { id: number }) {
  const res = await fetch(BASE_LINK + `jobseeker-own-ads/${id}`);
  const data = await res.json();

  const ads: JobSeekrAdModel[] = data;

  return (
    <Container bg="neutral">
      <div className="flex flex-col gap-8">
        <h1 className="text-primary-blue dark:text-neutral-light text-2xl text-center">
          موقعیت های شغلی
        </h1>

        {ads.length > 0 && <JobSeekerAdList advertises={ads} />}
        <Link href={`/profile/jobseeker/advertise/${id}/create`}>
          <Button text="ایجاد آگهی" />
        </Link>
      </div>
    </Container>
  );
}

export default JobSeeekerAds;
