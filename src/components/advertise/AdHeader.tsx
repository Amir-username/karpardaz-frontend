import { useEmployerDetail } from "@/hooks/useEmployerDetail";
import { EmployerModel } from "@/models/Employer";
import { useState } from "react";

type AdHeaderProps = {
  title: string;
  companyID: number;
};

export default function AdHeader({ title, companyID }: AdHeaderProps) {
  const [company, setCompany] = useState<EmployerModel>();

  useEmployerDetail(companyID, setCompany);

  return (
    <div className="flex justify-between w-full">
      <div className="flex flex-col justify-between h-full gap-2">
        <h3 className="font-semibold text-neutral-dark">{title}</h3>
        <h6 className="text-gray-700 text-sm">
          {company ? company.name : "company name"}
        </h6>
      </div>
      <span className="material-symbols-outlined text-neutral-mid cursor-pointer">
        favorite
      </span>
    </div>
  );
}
