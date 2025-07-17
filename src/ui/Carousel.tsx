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
    <div className="flex flex-col w-full gap-4 px-8 py-4 fade-in-right">
      {link ? (
        <Link href={link}>
          <header className="flex px-1 text-xl w-fit lg:text-2xl text-primary-blue dark:text-neutral-light">
            {header}
          </header>
        </Link>
      ) : (
        <header className="flex px-1 text-xl w-fit lg:text-2xl text-primary-blue dark:text-neutral-light">
          {header}
        </header>
      )}
      <ul
        id="no-scrollbar"
        className="flex flex-shrink gap-4 px-1 py-2 overflow-scroll"
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
        } flex justify-between w-32 h-32  lg:w-48 flex-shrink-0 flex-col hover:shadow-lg cursor-pointer items-center ring-1 ring-gray-300 dark:ring-gray-700 rounded-lg shadow-sm gap-3`}
      >
        {id && role && <Avatar role={role} id={id} />}
        <h3 className="flex items-center justify-center w-full h-full p-2 text-center dark:text-neutral-light text-md lg:text-xl">
          {title}
        </h3>
        <Button h="h-8" card text="مشاهده" />
      </li>
    </Link>
  );
}
