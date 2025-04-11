import { BASE_LINK } from "@/fetch/config";
import { EmployerModel } from "@/models/Employer";
import { useEffect, useState } from "react";

type AdHeaderProps = {
  title: string;
  companyID: number;
};

export default function AdHeader({ title, companyID }: AdHeaderProps) {
  const [company, setCompany] = useState<EmployerModel>();

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      const res = await fetch(BASE_LINK + `employer-detail/${companyID}`);
      const data = await res.json();

      setCompany({
        id: data.id,
        name: data.company_name,
      });
    };

    fetchCompanyInfo();
  }, []);

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
