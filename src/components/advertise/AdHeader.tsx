'use client'

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
        <h6 className="text-sm text-gray-700">
          {company ? company.name : "نام شرکت"}
        </h6>
      </div>
      <span className="cursor-pointer material-symbols-outlined text-neutral-mid">
        favorite
      </span>
    </div>
  );
}
