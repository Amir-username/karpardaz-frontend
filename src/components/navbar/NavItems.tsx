"use client";

import Link from "next/link";
import { JobSeekerDetailModel } from "@/models/JobSeekerDetail";
import { EmployerDetail } from "@/models/EmployerDetail";
import { fetchCurrentJobSeeker } from "@/fetch/jobseeker/fetchCurrentJobseeker";
import { fetchCurrentEmployer } from "@/fetch/employer/fetchCurrentEmployer";
import { useEffect, useState } from "react";
import ProfileNavLink from "../profile/ProfileNavLink";

type NavItemsProps = {
  token: string | undefined;
  role: string | undefined;
};

function NavItems({ token, role }: NavItemsProps) {
  const [currentJobSeeker, setCurrentJobSeeker] =
    useState<JobSeekerDetailModel>();
  const [currentEmployer, setCurrentEmployer] = useState<EmployerDetail>();

  useEffect(() => {
    const fetchJobSeeker = async () => {
      if (token) {
        const jobseeker = await fetchCurrentJobSeeker(token);
        setCurrentJobSeeker(jobseeker);
      }
    };

    const fetchEmployer = async () => {
      if (token) {
        const employer = await fetchCurrentEmployer(token);
        setCurrentEmployer(employer);
      }
    };

    if (role === "jobseeker") {
      fetchJobSeeker();
    } else if (role === "employer") {
      fetchEmployer();
    }
  }, [role, token]);

  return (
    <ul className="items-center hidden gap-2 pl-8 md:flex lg:gap-4">
      <Link href={"/jobs"}>
        <li className="hover:text-black text-neutral-dark">فرصت های شغلی</li>
      </Link>
      <Link href={"/jobseeker-ads"}>
        <li className="hover:text-black text-neutral-dark">آگهی کارجویان</li>
      </Link>
      <ProfileNavLink
        currentEmployer={currentEmployer}
        currentJobSeeker={currentJobSeeker}
        role={role}
        token={token}
      />
    </ul>
  );
}

export default NavItems;
