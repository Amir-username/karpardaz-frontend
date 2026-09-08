"use client";
import { useEffect, useState } from "react";
import FilterTag from "./FilterTag";
import { countActiveFilters } from "./ActiveFilterChips";
import SelectInput from "@/ui/SelectInput";
import Button from "@/ui/Button";
import Icon from "@/ui/Icon";
import { FilterType } from "@/fetch/employerAdvertise/fetchSearchAdvertise";

type SearchFilterProps = {
  /** Called with the final filter object when the user presses "اعمال فیلترها". */
  setFilters: (filters: FilterType) => void;
  /** Currently applied filters (from parent) — drives the active-count badge and draft sync. */
  filters?: FilterType;
};

export default function SearchFilter({ setFilters, filters }: SearchFilterProps) {
  const [isInternship, setIsInternship] = useState<boolean>(false);
  const [isRemote, setIsRemote] = useState<boolean>(false);
  const [isPortfolio, setIsPortfolio] = useState<boolean>(false);
  const [salary, setSalary] = useState<string>("");
  const [experience, setExperience] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  const activeCount = filters ? countActiveFilters(filters) : 0;

  // Keep the draft in sync when applied filters change from outside
  // (e.g. a chip is removed from the ActiveFilterChips row).
  useEffect(() => {
    if (!filters) return;
    setIsInternship(!!filters.isInternship);
    setIsRemote(!!filters.isRemote);
    setIsPortfolio(!!filters.isPortfolio);
    setSalary(filters.salary ?? "");
    setExperience(filters.experience ?? "");
    setGender(filters.gender ?? "");
    setPosition(filters.position ?? "");
  }, [filters]);

  const handleSetFilters = () => {
    const newFilters: FilterType = {
      isInternship: isInternship,
      isRemote: isRemote,
      isPortfolio: isPortfolio,
      salary: salary,
      experience: experience,
      gender: gender,
      position: position,
    };

    setFilters(newFilters);
  };

  return (
    <section className="w-full max-w-xl rounded-2xl bg-card ring-1 ring-border shadow-soft overflow-hidden">
      <button
        type="button"
        onClick={() => setIsOpen((o) => !o)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between px-5 py-4 cursor-pointer hover:bg-subtle/60 transition-colors"
      >
        <span className="flex items-center gap-2 text-sm font-medium text-fg">
          <Icon name="tune" size={20} className="text-brand" />
          فیلترها
          {activeCount > 0 && (
            <span className="flex items-center justify-center min-w-5 h-5 px-1.5 rounded-full bg-brand text-brand-fg text-[11px] font-bold">
              {activeCount}
            </span>
          )}
        </span>
        <Icon
          name="expand_more"
          size={20}
          className={`text-fg-muted transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`flex flex-col gap-5 px-5 pb-5 ${
          !isOpen && "hidden"
        } fade-in-up`}
      >
        <div className="flex gap-2 flex-wrap">
          <FilterTag
            name="کارآموزی"
            isActive={isInternship}
            setActive={setIsInternship}
          />
          <FilterTag
            name="دورکاری"
            isActive={isRemote}
            setActive={setIsRemote}
          />
          <FilterTag
            name="نمونه کار"
            isActive={isPortfolio}
            setActive={setIsPortfolio}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <SelectInput
            label="حقوق"
            name="salary"
            value={salary}
            setValue={setSalary}
          >
            <option value=""></option>
            <option value="توافقی">توافقی</option>
            <option value="۵ تا ۱۰ میلیون تومان">۵ تا ۱۰ م</option>
            <option value="۱۰ تا ۲۰ میلیون تومان">۱۰ تا ۲۰ م</option>
            <option value="۲۰ تا ۴۰ میلیون تومان">۲۰ تا ۴۰ م</option>
            <option value="۴۰ میلیون به بالا">۴۰ م به بالا</option>
          </SelectInput>
          <SelectInput
            label="سابقه"
            name="experience"
            value={experience}
            setValue={setExperience}
          >
            <option value=""></option>
            <option value="بدون سابقه کار">بدون سابقه</option>
            <option value="۱ تا ۲ سال سابفه کار">۱ تا ۲ سال</option>
            <option value="۲ تا ۴ سال سابقه کار">۲ تا ۴ سال</option>
            <option value="۴ سال به بالا">بیش از ۴ سال</option>
          </SelectInput>
          <SelectInput
            label="جنسیت"
            name="gender"
            value={gender}
            setValue={setGender}
          >
            <option value=""></option>
            <option value="تفاوت ندارد">تفاوت ندارد</option>
            <option value="آقا">آقا</option>
            <option value="خانم">خانم</option>
          </SelectInput>
          <SelectInput
            label="موقعیت شغلی"
            name="position"
            value={position}
            setValue={setPosition}
          >
            <option value=""></option>
            <option value="junior">جونیور</option>
            <option value="midlevel">میدلول</option>
            <option value="senior">سنیور</option>
          </SelectInput>
        </div>
        <div onClick={handleSetFilters} className="w-fit">
          <Button text="اعمال فیلترها" fullWidth={false} size="sm" className="min-w-36" />
        </div>
      </div>
    </section>
  );
}
