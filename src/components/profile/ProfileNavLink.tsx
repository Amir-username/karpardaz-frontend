"use client";

import { EmployerDetail } from "@/models/EmployerDetail";
import { JobSeekerDetailModel } from "@/models/JobSeekerDetail";
import Icon from "@/ui/Icon";
import Link from "next/link";
import Button from "@/ui/Button";
import { useState } from "react";
import LogoutButton from "../navbar/LogoutButton";
import DropDownMenu, { DropDownItem } from "@/ui/DropDownMenu";
import AdAvatar from "../advertise/AdAvater";

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

  const displayName =
    role === "jobseeker"
      ? currentJobSeeker &&
        currentJobSeeker.firstname + " " + currentJobSeeker.lastname
      : role === "employer"
      ? currentEmployer
        ? currentEmployer.company_name
        : "نام کاربر"
      : "";

  const avatarId =
    role === "jobseeker" ? currentJobSeeker?.id : currentEmployer?.id;

  return (
    <li className="relative ms-2">
      {token ? (
        <div
          onClick={() => setIsOpen((o) => !o)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setIsOpen((o) => !o);
          }}
          className="relative flex items-center gap-2.5 ps-2 pe-3 py-1.5 rounded-xl cursor-pointer ring-1 ring-border bg-card hover:bg-subtle transition-colors"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-full overflow-hidden bg-subtle text-fg-muted">
            {avatarId && role ? (
              <AdAvatar id={avatarId} role={role as "jobseeker" | "employer"} compact />
            ) : (
              <Icon name="person" size={18} />
            )}
          </span>
          <span className="hidden lg:inline max-w-32 text-sm font-medium text-fg truncate">
            {displayName}
          </span>
          <Icon name="expand_more" size={16} className="text-fg-muted" />
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
            <li className="p-2">
              <LogoutButton />
            </li>
          </DropDownMenu>
        </div>
      ) : (
        <div className="flex items-center gap-2 text-sm">
          <Link href={"/auth/jobseeker/signup"}>
            <Button
              text="ثبت نام"
              type="button"
              size="sm"
              variant="outline"
              fullWidth={false}
            />
          </Link>
          <Link href={"/auth/jobseeker/login"}>
            <Button text="ورود" type="button" size="sm" fullWidth={false} />
          </Link>
        </div>
      )}
    </li>
  );
}
