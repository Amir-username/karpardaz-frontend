import { BASE_LINK } from "@/fetch/config";
import { EmployerModel } from "@/models/Employer";
import { Dispatch, SetStateAction, useEffect } from "react";

export function useEmployerDetail(
  companyID: number,
  setCompany: Dispatch<SetStateAction<EmployerModel | undefined>>
) {
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
}
