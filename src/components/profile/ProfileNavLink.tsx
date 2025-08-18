"use client";

import { EmployerDetail } from "@/models/EmployerDetail";
import { JobSeekerDetailModel } from "@/models/JobSeekerDetail";
import Image from "next/image";
import Link from "next/link";
import Button from "@/ui/Button";
import { useState } from "react";
import LogoutButton from "../navbar/LogoutButton";
import DropDownMenu, { DropDownItem } from "@/ui/DropDownMenu";
import personSVG from "../../../public/icons/person.svg";

type ProfileNavLinkProps = {
  currentJobSeeker: JobSeekerDetailModel | undefined;
  currentEmployer: EmployerDetail | undefined;
  role: string | undefined;
  token: string | undefined;
};

export default function ProfileNavLink({
  currentEmployer,
  currentJobSeeker,
  role,
  token,
}: ProfileNavLinkProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li>
      {token ? (
        // <Link
        //   href={
        //     role === "jobseeker"
        //       ? `/profile/jobseeker/${currentJobSeeker?.id}`
        //       : `/profile/employer/${currentEmployer?.id}`
        //   }
        // >
        <>
          <div
            onClick={() => setIsOpen((o) => !o)}
            // onMouseEnter={() => setIsOpen(true)}
            // onMouseLeave={() => setIsOpen(false)}
            className="relative flex items-center gap-3 px-4 py-2 mr-2 rounded-lg cursor-pointer ring-1 ring-gray-300 dark:ring-gray-600"
          >
            <Image src={personSVG} alt="آواتار پیشفرض شرکت" />
            <h3 className="text-lg text-neutral-700 dark:text-neutral-light">
              {role === "jobseeker"
                ? currentJobSeeker &&
                  currentJobSeeker!.firstname + " " + currentJobSeeker!.lastname
                : role === "employer"
                ? currentEmployer
                  ? currentEmployer!.company_name
                  : "نام کاربر"
                : ""}
            </h3>
            <DropDownMenu isOpen={isOpen} setIsOpenAction={setIsOpen}>
              {role === "jobseeker" && (
                <DropDownItem link={`/recommends/`}>پیشنهاد ها</DropDownItem>
              )}
              <DropDownItem link={`/requests/${role}/my-requests/`}>
                درخواست های من
              </DropDownItem>
              <DropDownItem
                link={
                  role === "jobseeker"
                    ? `/profile/jobseeker/${currentJobSeeker?.id}`
                    : `/profile/employer/${currentEmployer?.id}`
                }
              >
                پروفایل
              </DropDownItem>
              <DropDownItem>
                <LogoutButton />
              </DropDownItem>
            </DropDownMenu>
          </div>
        </>
      ) : // </Link>
      !token ? (
        <div className="flex items-center w-48 gap-2 text-sm lg:gap-3">
          <Link href={"/auth/jobseeker/signup"} className="w-full h-full">
            <Button text="ثبت نام" type="button" h="h-9" outline />
          </Link>
          <Link href={"/auth/jobseeker/login"} className="w-full h-full">
            <Button text="ورود" type="button" h="h-9" />
          </Link>
        </div>
      ) : null}
    </li>
  );
}
