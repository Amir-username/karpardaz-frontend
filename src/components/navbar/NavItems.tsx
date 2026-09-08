"use client";

import Link from "next/link";
import { JobSeekerDetailModel } from "@/models/JobSeekerDetail";
import { EmployerDetail } from "@/models/EmployerDetail";
import { fetchCurrentJobSeeker } from "@/fetch/jobseeker/fetchCurrentJobseeker";
import { fetchCurrentEmployer } from "@/fetch/employer/fetchCurrentEmployer";
import { useEffect, useState } from "react";
import ProfileNavLink from "../profile/ProfileNavLink";
import { usePathname } from "next/navigation";

type NavItemsProps = {
  token: string | undefined;
  role: string | undefined;
};

const navLinks = [
  { href: "/jobs", label: "فرصت های شغلی" },
  { href: "/jobseeker-ads", label: "آگهی کارجویان" },
];

function NavItems({ token, role }: NavItemsProps) {
  const [currentJobSeeker, setCurrentJobSeeker] =
    useState<JobSeekerDetailModel>();
  const [currentEmployer, setCurrentEmployer] = useState<EmployerDetail>();

  const pathName = usePathname();

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
    <ul className="items-center hidden gap-1 ms-4 md:flex">
      {navLinks.map((item) => {
        const isActive =
          pathName === item.href || pathName.startsWith(item.href + "/");
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`flex items-center px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "text-brand bg-brand-soft"
                  : "text-fg-muted hover:text-fg hover:bg-subtle"
              }`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
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
