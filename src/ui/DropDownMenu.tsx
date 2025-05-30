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
      } absolute top-16 rounded-lg shadow-sm flex flex-col gap-2`}
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
  if (link)
    return (
      <Link href={link}>
        <li className="text-sm hover:bg-gray-200 p-3 rounded-lg">{children}</li>
      </Link>
    );
  return (
    <li className="text-sm hover:bg-gray-200 p-3 rounded-lg">{children}</li>
  );
}
