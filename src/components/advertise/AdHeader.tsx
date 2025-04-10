import { BASE_LINK } from "@/fetch/config";
import { EmployerModel } from "@/models/Employer";

type AdHeaderProps = {
  title: string;
  companyID: number;
};

export default async function AdHeader({ title, companyID }: AdHeaderProps) {
  const res = await fetch(BASE_LINK + `employer-detail/${companyID}`);
  const data = await res.json();
  const comnpany: EmployerModel = {
    id: data.id,
    name: data.company_name,
  };
  return (
    <div className="flex justify-between w-full">
      <div className="flex flex-col justify-between h-full gap-2">
        <h3 className="font-semibold text-neutral-dark">{title}</h3>
        <h6 className="text-gray-700 text-sm">{comnpany.name}</h6>
      </div>
      <span className="material-symbols-outlined text-neutral-mid cursor-pointer">
        favorite
      </span>
    </div>
  );
}
