"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import { paginationType } from "../search/JobsResult";

type PaginationProps = {
  setPaginationAction: Dispatch<SetStateAction<paginationType>>;
  totalPages: number;
};

export default function Pagination({
  setPaginationAction,
  totalPages,
}: PaginationProps) {
  const [pageNumber, setPageNumberAction] = useState(1);

  const handlePrev = () => {
    setPaginationAction((pag) => {
      return { ...pag, offset: pag.offset - pag.limit };
    });
    setPageNumberAction((number) => number - 1);
  };

  const handleNext = () => {
    setPaginationAction((pag) => {
      return { ...pag, offset: pag.offset + pag.limit };
    });
    setPageNumberAction((number) => number + 1);
  };

  return (
    <div className="flex gap-2 justify-center">
      <PaginationItem onClick={handlePrev} active={!!(pageNumber > 1)}>
        قبلی
      </PaginationItem>
      <PaginationItem active>
        <span className="font-bold mt-1">{pageNumber}</span>
      </PaginationItem>
      <PaginationItem onClick={handleNext} active={!!(pageNumber < totalPages)}>
        بعدی
      </PaginationItem>
    </div>
  );
}

type PaginationItemProps = {
  active: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

function PaginationItem({ active, children, onClick }: PaginationItemProps) {
  return (
    <span
      onClick={active ? onClick : undefined}
      className={`${
        !active
          ? "bg-secondary-blue dark:bg-neutral-950 dark:ring-1 dark:ring-neutral-dark"
          : "bg-primary-blue dark:bg-neutral-dark dark:ring-1 dark:ring-neutral-dark"
      } p-2 cursor-pointer w-12 flex text-sm items-center justify-center text-center text-neutral-light rounded-lg`}
    >
      {children}
    </span>
  );
}
