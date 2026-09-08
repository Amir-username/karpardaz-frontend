import React from "react";
import Avatar from "@/components/avatar/Avatar";
import Link from "next/link";
import Icon from "./Icon";

type CarouselProps = {
  header: string;
  children: React.ReactNode;
  link?: string;
};

export default function Carousel({ header, children, link }: CarouselProps) {
  const headerContent = (
    <header className="flex items-center justify-between w-full px-1">
      <h2 className="flex items-center gap-2 text-xl lg:text-2xl font-bold text-fg">
        <span className="w-1.5 h-6 rounded-full bg-brand" aria-hidden="true" />
        {header}
      </h2>
      {link && (
        <span className="flex items-center gap-1 text-sm font-medium text-brand hover:text-brand-hover transition-colors">
          مشاهده همه
          <Icon name="chevron_left" size={18} />
        </span>
      )}
    </header>
  );

  return (
    <div className="flex flex-col w-full gap-4 px-4 sm:px-8 py-4">
      {link ? <Link href={link}>{headerContent}</Link> : headerContent}
      <ul className="no-scrollbar flex shrink-0 gap-4 px-1 py-2 overflow-x-auto">
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
    <li className="shrink-0">
      <Link
        href={link}
        className={`${
          id && role ? "lg:h-64 lg:pt-8 h-48 pt-4" : "lg:h-40"
        } flex justify-between w-40 h-40 lg:w-48 shrink-0 flex-col items-center rounded-2xl bg-card ring-1 ring-border shadow-soft hover:shadow-lift hover:ring-brand/40 hover:-translate-y-0.5 transition-all duration-300 gap-3 group`}
      >
        {id && role && (
          <span className="scale-90 lg:scale-100">
            <Avatar role={role} id={id} />
          </span>
        )}
        <h3 className="flex items-center justify-center w-full h-full p-3 text-center text-sm lg:text-base font-medium text-fg group-hover:text-brand transition-colors">
          {title}
        </h3>
        <span className="flex items-center justify-center gap-1 w-full h-9 text-sm font-medium text-fg-muted bg-subtle/60 group-hover:bg-brand group-hover:text-brand-fg transition-colors rounded-b-2xl">
          مشاهده
          <Icon name="chevron_left" size={16} />
        </span>
      </Link>
    </li>
  );
}
