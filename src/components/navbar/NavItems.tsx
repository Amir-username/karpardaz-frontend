"use client";

import Button from "@/ui/Button";
import Image from "next/image";
import Link from "next/link";
import DEFAULT_AVATAR from "../../../public/images/company_default_avatar.png";
import { JobSeekerDetailModel } from "@/models/JobSeekerDetail";
import { EmployerDetail } from "@/models/EmployerDetail";
import { fetchCurrentJobSeeker } from "@/fetch/fetchCurrentJobseeker";
import { fetchCurrentEmployer } from "@/fetch/fetchCurrentEmployer";
import { useEffect, useState } from "react";


type NavItemsProps = {
  token: string | undefined;
  role: string | undefined;
};

function NavItems({ token, role }: NavItemsProps) {
  console.log(token);
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

  console.log(currentJobSeeker);
  return (
    <ul className="items-center hidden gap-2 pl-8 md:flex lg:gap-4">
      <Link href={"/jobs"}>
        <li>فرصت های شغلی</li>
      </Link>
      <Link href={"/jobseeker-ads"}>
        <li>آگهی کارجویان</li>
      </Link>
      <li>
        {currentJobSeeker || currentEmployer ? (
          <Link
            href={
              role === "jobseeker"
                ? `/profile/jobseeker/${currentJobSeeker?.id}`
                : `/profile/employer/${currentEmployer?.id}`
            }
          >
            <div className="flex gap-3 pr-8 items-center cursor-pointer">
              <h3 className="text-lg">
                {role === "jobseeker"
                  ? currentJobSeeker!.firstname +
                    " " +
                    currentJobSeeker!.lastname
                  : role === "employer"
                  ? currentEmployer!.company_name
                  : "نام کاربر"}
              </h3>
              <Image
                src={DEFAULT_AVATAR}
                alt="آواتار پیشفرض شرکت"
                className="w-12 h-12 rounded-full ring-2 ring-neutral-mid"
              />
            </div>
          </Link>
        ) : (
          <div className="flex items-center w-48 gap-2 text-sm lg:gap-3">
            <Link href={"/auth/jobseeker/signup"} className="w-full h-full">
              <Button text="ثبت نام" type="button" h="h-9" outline />
            </Link>
            <Link href={"/auth/jobseeker/login"} className="w-full h-full">
              <Button text="ورود" type="button" h="h-9" />
            </Link>
          </div>
        )}
      </li>
    </ul>
  );
}

export default NavItems;
