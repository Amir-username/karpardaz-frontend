"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import Icon from "@/ui/Icon";
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
    if (pageNumber <= 1) return;
    setPaginationAction((pag) => {
      return { ...pag, offset: pag.offset - pag.limit };
    });
    setPageNumberAction((number) => number - 1);
  };

  const handleNext = () => {
    if (pageNumber >= totalPages) return;
    setPaginationAction((pag) => {
      return { ...pag, offset: pag.offset + pag.limit };
    });
    setPageNumberAction((number) => number + 1);
  };

  const hasPrev = pageNumber > 1;
  const hasNext = pageNumber < totalPages;

  return (
    <nav
      aria-label="صفحه بندی"
      className="flex items-center justify-center gap-2"
    >
      <PaginationButton onClick={handlePrev} disabled={!hasPrev}>
        <Icon name="chevron_right" size={18} />
        قبلی
      </PaginationButton>

      <span
        aria-current="page"
        className="flex items-center justify-center min-w-11 h-11 px-3 rounded-xl bg-brand text-brand-fg text-sm font-bold shadow-soft"
      >
        {pageNumber}
      </span>

      <PaginationButton onClick={handleNext} disabled={!hasNext}>
        بعدی
        <Icon name="chevron_left" size={18} />
      </PaginationButton>
    </nav>
  );
}

type PaginationButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

function PaginationButton({
  children,
  onClick,
  disabled = false,
}: PaginationButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center gap-1 h-11 px-4 rounded-xl text-sm font-medium ring-1 transition-all duration-200 ${
        disabled
          ? "bg-card text-fg-muted/50 ring-border cursor-not-allowed"
          : "bg-card text-fg ring-border hover:ring-brand hover:text-brand cursor-pointer shadow-soft"
      }`}
    >
      {children}
    </button>
  );
}
