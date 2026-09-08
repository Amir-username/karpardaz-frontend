"use client";

import { useClickOutside } from "@/hooks/useClickOutside";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useRef } from "react";

type DropDownMenuProps = {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpenAction: Dispatch<SetStateAction<boolean>>;
};

export default function DropDownMenu({
  children,
  isOpen,
  setIsOpenAction,
}: DropDownMenuProps) {
  const dropdownRef = useRef<HTMLUListElement>(null);

  const callback = () => {
    setIsOpenAction(false);
  };

  useClickOutside(dropdownRef, callback);

  return (
    <ul
      ref={dropdownRef}
      className={`${
        !isOpen && "hidden"
      } absolute top-14 end-0 z-50 py-2 min-w-40 rounded-xl shadow-lift flex flex-col gap-0.5 bg-card ring-1 ring-border overflow-hidden`}
    >
      {children}
    </ul>
  );
}

export function DropDownItem({
  link,
  children,
}: {
  link?: string;
  children: React.ReactNode;
}) {
  const classes =
    "w-full p-3 text-sm rounded-none hover:bg-subtle text-fg transition-colors";
  if (link)
    return (
      <li>
        <Link href={link} className={`block ${classes}`}>
          {children}
        </Link>
      </li>
    );
  return <li className={classes}>{children}</li>;
}
