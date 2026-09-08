"use client";

import Brand from "./Brand";
import Button from "@/ui/Button";
import Link from "next/link";
import Icon from "@/ui/Icon";
import { Dispatch, SetStateAction } from "react";
import LogoutButton from "./LogoutButton";

type MobileMenuProps = {
  setIsActive: Dispatch<SetStateAction<boolean>>;
  isActive: boolean;
  token?: string;
  role?: string;
};

const menuLinks = [
  { href: "/jobs", label: "فرصت های شغلی", icon: "work" },
  { href: "/jobseeker-ads", label: "آگهی کارجویان", icon: "group_search" },
  {
    href: "/requests/jobseeker/my-requests",
    label: "درخواست های من",
    icon: "description",
    match: "requests",
  },
];

function MobileMenu({ isActive, setIsActive, token, role }: MobileMenuProps) {
  const handleCloseMenu = () => {
    setIsActive(false);
  };

  return (
    <div
      className={`${
        isActive ? "flex" : "hidden"
      } fixed inset-0 z-50 flex-col md:hidden bg-bg/95 backdrop-blur-sm fade-in-right`}
    >
      <div className="flex items-center justify-between p-4 ring-1 ring-border bg-card">
        <Brand text="کارپرداز" />
        <button
          type="button"
          onClick={handleCloseMenu}
          aria-label="بستن منو"
          className="flex items-center justify-center w-10 h-10 rounded-lg text-fg-muted hover:text-fg hover:bg-subtle transition-colors cursor-pointer"
        >
          <Icon name="close" size={24} />
        </button>
      </div>

      <ul className="flex flex-col gap-1 p-4">
        {menuLinks.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              onClick={() => setIsActive(false)}
              className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium text-fg hover:bg-subtle transition-colors"
            >
              <Icon name={item.icon} size={22} className="text-fg-muted" />
              {item.label}
            </Link>
          </li>
        ))}
        {role && (
          <li>
            <Link
              href={`/profile/${role}/1`}
              onClick={() => setIsActive(false)}
              className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium text-fg hover:bg-subtle transition-colors"
            >
              <Icon name="person" size={22} className="text-fg-muted" />
              پروفایل
            </Link>
          </li>
        )}
      </ul>

      <div className="mt-auto p-6">
        {token ? (
          <LogoutButton />
        ) : (
          <div className="flex flex-col items-center w-full gap-3">
            <div className="w-full h-px bg-border rounded-full" />
            <Link href={"/auth/jobseeker/signup"} onClick={() => setIsActive(false)}>
              <Button text="ثبت نام" type="button" size="sm" />
            </Link>
            <Link href={"/auth/jobseeker/login"} onClick={() => setIsActive(false)}>
              <Button text="ورود" type="button" size="sm" variant="outline" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default MobileMenu;
