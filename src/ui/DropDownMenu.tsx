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
      } absolute top-12 left-0.5 py-2 rounded-b-lg shadow-sm flex flex-col gap-2 bg-neutral-light dark:bg-neutral-950`}
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
        <li className="w-32 p-3 text-sm rounded-lg hover:bg-gray-200 dark:text-neutral-light hover:dark:bg-neutral-dark">
          {children}
        </li>
      </Link>
    );
  return (
    <li className="p-3 text-sm rounded-lg hover:bg-gray-200 hover:dark:bg-neutral-dark dark:text-neutral-light">
      {children}
    </li>
  );
}
