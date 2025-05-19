"use client";
import { useState, Dispatch, SetStateAction } from "react";
import FilterTag from "./FilterTag";

type SearchFilterProps = {
  isInternship: boolean;
  setIsInternship: Dispatch<SetStateAction<boolean>>;
  isRemote: boolean;
  setIsRemote: Dispatch<SetStateAction<boolean>>;
  isPortfolio: boolean;
  setIsPortfolio: Dispatch<SetStateAction<boolean>>;
};

export default function SearchFilter({
  isInternship,
  setIsInternship,
  isRemote,
  setIsRemote,
  isPortfolio,
  setIsPortfolio,
}: SearchFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section
        onClick={() => setIsOpen((o) => !o)}
        className="cursor-pointer flex gap-2"
      >
        <span className="text-neutral-mid text-sm">فیلتر ها</span>
        <span
          className={`material-symbols-outlined text-neutral-mid duration-400 ${
            isOpen && "rotate-180"
          }`}
        >
          arrow_drop_down
        </span>
      </section>
      <div className={`flex gap-2 ${!isOpen && "hidden"}`}>
        <FilterTag
          name="کارآموزی"
          isActive={isInternship}
          setActive={setIsInternship}
        />
        <FilterTag name="دورکاری" isActive={isRemote} setActive={setIsRemote} />
        <FilterTag
          name="نمونه کار"
          isActive={isPortfolio}
          setActive={setIsPortfolio}
        />
      </div>
    </>
  );
}
