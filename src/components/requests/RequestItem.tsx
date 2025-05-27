import { fetchEmployerDetail } from "@/fetch/employer/fetchEmployerDetail";
import { fetchAdvertiseDetail } from "@/fetch/employerAdvertise/fetchAdvertiseDetail";
import { AdRequestModel } from "@/models/AdRequest";
import { AdvertiseModel } from "@/models/Advertise";
import { EmployerDetail } from "@/models/EmployerDetail";
import Button from "@/ui/Button";
import Link from "next/link";

export default async function RequestItem({
  request,
}: {
  request: AdRequestModel;
}) {
  const advertise: AdvertiseModel = await fetchAdvertiseDetail(
    request.advertise_id
  );
  const employer: EmployerDetail = await fetchEmployerDetail(
    advertise.employer_id
  );

  const statusStyle = `${
    request.status === "تایید اولیه"
      ? "text-secondary-blue"
      : request.status === "تایید برای مصاحبه"
      ? "text-green-500"
      : request.status === "رد شده"
      ? "text-color-accent-coral"
      : request.status === "توسط کارفرما دیده شد"
      ? "text-yellow-600"
      : "text-neutral-mid"
  }  text-sm`;
  return (
    <li className="gap-8 lg:w-96 w-72 rounded-lg shadow-sm ring-1 ring-gray-200 flex flex-col justify-between">
      <div className="flex flex-col gap-8 p-4">
        <h3 className="text-xl text-neutral-dark">{advertise.title}</h3>
        <h6 className="text-gray-500">{employer.company_name}</h6>
        <span className={statusStyle}>{request.status}</span>
      </div>
      <Link href={`/jobs/${advertise.id}`}>
        <Button text="مشاهده آگهی" />
      </Link>
    </li>
  );
}
