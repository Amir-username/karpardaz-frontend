"use client";

import { EmployerDetail } from "@/models/EmployerDetail";
import { JobSeekerDetailModel } from "@/models/JobSeekerDetail";
import Image from "next/image";
import Link from "next/link";
import DEFAULT_AVATAR from "../../../public/images/company_default_avatar.png";
import Button from "@/ui/Button";
import { useState } from "react";
import LogoutButton from "../navbar/LogoutButton";
import DropDownMenu, { DropDownItem } from "@/ui/DropDownMenu";

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
      {currentJobSeeker || currentEmployer ? (
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
            className="relative flex gap-3 pr-8 items-center cursor-pointer"
          >
            <h3 className="text-lg">
              {role === "jobseeker"
                ? currentJobSeeker!.firstname + " " + currentJobSeeker!.lastname
                : role === "employer"
                ? currentEmployer!.company_name
                : "نام کاربر"}
            </h3>
            <Image
              src={DEFAULT_AVATAR}
              alt="آواتار پیشفرض شرکت"
              className="w-12 h-12 rounded-full ring-2 ring-neutral-mid"
            />
            <DropDownMenu isOpen={isOpen}>
              <DropDownItem
                link={
                  role === "jobseeker"
                    ? `/profile/jobseeker/${currentJobSeeker?.id}`
                    : `/profile/employer/${currentEmployer?.id}`
                }
              >
                پروفایل
              </DropDownItem>
              <DropDownItem link="/requests/jobseeker/my-requests/">
                درخواست های من
              </DropDownItem>
              <DropDownItem>
                <LogoutButton token={token} />
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
