import { fetchEmployerDetail } from "@/fetch/employer/fetchEmployerDetail";
import { fetchAdvertiseDetail } from "@/fetch/employerAdvertise/fetchAdvertiseDetail";
import { fetchJobSeekerAdDetail } from "@/fetch/jobseeker/fetchJobSeekerAdDetail";
import { fetchJobSeekerDetail } from "@/fetch/jobseeker/fetchJobSeekerDetail";
import { AdRequestModel } from "@/models/AdRequest";
import { AdvertiseModel } from "@/models/Advertise";
import { EmployerDetail } from "@/models/EmployerDetail";
import { JobSeekrAdModel } from "@/models/JobSeekerAd";
import { JobSeekerDetailModel } from "@/models/JobSeekerDetail";
import Badge, { BadgeVariant } from "@/ui/Badge";

/** Maps Persian request statuses to semantic badge colors */
export function statusToVariant(status: string): BadgeVariant {
  switch (status) {
    case "تایید اولیه":
      return "info";
    case "تایید برای مصاحبه":
      return "success";
    case "رد شده":
      return "danger";
    case "توسط کارفرما دیده شد":
      return "warning";
    default:
      return "neutral";
  }
}

export default async function RequestItem({
  request,
  role,
}: {
  request: AdRequestModel;
  role: "jobseeker" | "employer";
}) {
  if (role === "jobseeker") {
    const advertise: AdvertiseModel = await fetchAdvertiseDetail(
      request.advertise_id!
    );
    const employer: EmployerDetail = await fetchEmployerDetail(
      advertise.employer_id
    );
    return (
      <li className="flex flex-col rounded-2xl bg-card ring-1 ring-border shadow-soft hover:shadow-lift hover:ring-brand/40 transition-all duration-300 overflow-hidden">
        <div className="flex flex-col gap-3 p-5">
          <h3 className="text-lg font-semibold text-fg leading-7">
            {advertise.title}
          </h3>
          <h6 className="text-sm text-fg-muted">{employer.company_name}</h6>
          <Badge variant={statusToVariant(request.status)} size="md" className="w-fit">
            {request.status}
          </Badge>
        </div>
        <a
          href={`/jobs/${advertise.id}`}
          className="mt-auto flex items-center justify-center h-11 text-sm font-medium text-fg-muted bg-subtle/50 hover:text-brand-fg hover:bg-brand transition-colors"
        >
          مشاهده آگهی
        </a>
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
      <li className="flex flex-col rounded-2xl bg-card ring-1 ring-border shadow-soft hover:shadow-lift hover:ring-brand/40 transition-all duration-300 overflow-hidden">
        <div className="flex flex-col gap-3 p-5">
          <h3 className="text-lg font-semibold text-fg leading-7">
            {advertise.title}
          </h3>
          <h6 className="text-sm text-fg-muted">
            {`${jobseeker.firstname} ${jobseeker.lastname}`}
          </h6>
          <Badge variant={statusToVariant(request.status)} size="md" className="w-fit">
            {request.status}
          </Badge>
        </div>
        <a
          href={`/jobseeker-ads/${advertise.id}`}
          className="mt-auto flex items-center justify-center h-11 text-sm font-medium text-fg-muted bg-subtle/50 hover:text-brand-fg hover:bg-brand transition-colors"
        >
          مشاهده آگهی
        </a>
      </li>
    );
  }
}
