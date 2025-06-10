import React from "react";
import Button from "./Button";
import Avatar from "@/components/avatar/Avatar";
import Link from "next/link";

type CarouselProps = {
  header: string;
  children: React.ReactNode;
  link?: string;
};

export default function Carousel({ header, children, link }: CarouselProps) {
  return (
    <div className="flex w-full flex-col gap-4 px-8 py-4 fade-in-right">
      {link ? (
        <Link href={link}>
          <header className="w-fit flex text-xl lg:text-2xl px-1 text-primary-blue">
            {header}
          </header>
        </Link>
      ) : (
        <header className="w-fit bg-gray-300 flex text-xl lg:text-2xl px-1 text-primary-blue">
          {header}
        </header>
      )}
      <ul
        id="no-scrollbar"
        className="flex py-2 px-1 gap-4 overflow-scroll flex-shrink"
      >
        {children}
      </ul>
    </div>
  );
}

type CarouselItemProps = {
  title: string;
  id?: number;
  role?: "jobseeker" | "employer";
  link: string;
};

export function CarouselItem({ title, id, role, link }: CarouselItemProps) {
  return (
    <Link href={link}>
      <li
        className={`${
          id && role ? "lg:h-64 lg:pt-8 h-48 pt-4" : "lg:h-40"
        } flex justify-between w-32 h-32  lg:w-48 flex-shrink-0 flex-col hover:shadow-lg cursor-pointer items-center ring-1 ring-gray-300 rounded-lg shadow-sm gap-3`}
      >
        {id && role && <Avatar role={role} id={id} />}
        <h3 className="flex items-center p-2 w-full justify-center h-full text-md text-center lg:text-xl">
          {title}
        </h3>
        <Button h="h-8" card text="مشاهده" />
      </li>
    </Link>
  );
}
