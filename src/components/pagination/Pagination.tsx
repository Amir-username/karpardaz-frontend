'use client'

import React, { Dispatch, SetStateAction } from "react";

type PaginationProps = {
  pageNumber: number;
  setPageNumberAction: Dispatch<SetStateAction<number>>;
};

export default function Pagination({
  pageNumber,
  setPageNumberAction,
}: PaginationProps) {
  const handlePrev = () => {
    setPageNumberAction((number) => number - 1);
  };

  const handleNext = () => {
    setPageNumberAction((number) => number + 1);
  };

  return (
    <div className="flex gap-2 justify-center">
      <PaginationItem onClick={handlePrev} active={!!(pageNumber + 1 > 1)}>
        قبلی
      </PaginationItem>
      <PaginationItem active>
        <span className="font-bold mt-1">{pageNumber + 1}</span>
      </PaginationItem>
      <PaginationItem onClick={handleNext} active={!!(pageNumber + 1 < 2)}>
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
        !active ? "bg-secondary-blue" : "bg-primary-blue"
      } p-2 cursor-pointer w-12 flex text-sm items-center justify-center text-center text-neutral-light rounded-lg`}
    >
      {children}
    </span>
  );
}
