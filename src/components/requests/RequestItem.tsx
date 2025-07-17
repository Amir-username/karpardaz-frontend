import { fetchEmployerDetail } from "@/fetch/employer/fetchEmployerDetail";
import { fetchAdvertiseDetail } from "@/fetch/employerAdvertise/fetchAdvertiseDetail";
import { fetchJobSeekerAdDetail } from "@/fetch/jobseeker/fetchJobSeekerAdDetail";
import { fetchJobSeekerDetail } from "@/fetch/jobseeker/fetchJobSeekerDetail";
import { AdRequestModel } from "@/models/AdRequest";
import { AdvertiseModel } from "@/models/Advertise";
import { EmployerDetail } from "@/models/EmployerDetail";
import { JobSeekrAdModel } from "@/models/JobSeekerAd";
import { JobSeekerDetailModel } from "@/models/JobSeekerDetail";
import Button from "@/ui/Button";
import Link from "next/link";

export default async function RequestItem({
  request,
  role,
}: {
  request: AdRequestModel;
  role: "jobseeker" | "employer";
}) {
  const statusStyle = `${
    request.status === "تایید اولیه"
      ? "text-secondary-blue dark:text-primary-blue-dark"
      : request.status === "تایید برای مصاحبه"
      ? "text-green-500"
      : request.status === "رد شده"
      ? "text-color-accent-coral"
      : request.status === "توسط کارفرما دیده شد"
      ? "text-yellow-600"
      : "text-neutral-mid"
  }  text-sm font-bold`;

  if (role === "jobseeker") {
    const advertise: AdvertiseModel = await fetchAdvertiseDetail(
      request.advertise_id!
    );
    const employer: EmployerDetail = await fetchEmployerDetail(
      advertise.employer_id
    );
    return (
      <li className="gap-8 lg:w-96 w-72 rounded-lg shadow-sm ring-1 ring-gray-200 dark:ring-neutral-dark flex flex-col justify-between">
        <div className="flex flex-col gap-8 p-4">
          <h3 className="text-xl text-neutral-dark dark:text-neutral-light">{advertise.title}</h3>
          <h6 className="text-gray-500 dark:text-neutral-mid">{employer.company_name}</h6>
          <span className={statusStyle}>{request.status}</span>
        </div>
        <Link href={`/jobs/${advertise.id}`}>
          <Button text="مشاهده آگهی" />
        </Link>
      </li>
    );
  }

  if (role === "employer") {
    const advertise: JobSeekrAdModel = await fetchJobSeekerAdDetail(
      request.advertise_id!
    );
    const jobseeker: JobSeekerDetailModel = await fetchJobSeekerDetail(
      advertise.jobseeker_id
    );
    return (
      <li className="gap-8 lg:w-96 w-72 rounded-lg shadow-sm ring-1 ring-gray-200 dark:ring-neutral-dark flex flex-col justify-between">
        <div className="flex flex-col gap-8 p-4">
          <h3 className="text-xl text-neutral-dark dark:text-neutral-light">{advertise.title}</h3>
          <h6 className="text-gray-500 dark:text-neutral-mid">{`${jobseeker.firstname} ${jobseeker.lastname}`}</h6>
          <span className={statusStyle}>{request.status}</span>
        </div>
        <Link href={`/jobseeker-ads/${advertise.id}`}>
          <Button text="مشاهده آگهی" />
        </Link>
      </li>
    );
  }
}
