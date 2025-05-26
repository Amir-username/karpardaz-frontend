import Link from "next/link";
import React from "react";

export default function DropDownMenu({
  children,
  isOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
}) {
  return (
    <ul
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
