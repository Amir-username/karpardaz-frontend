"use client";
import { useState, Dispatch, SetStateAction } from "react";
import FilterTag from "./FilterTag";
import SelectInput from "@/ui/SelectInput";
import Button from "@/ui/Button";
import { FilterType } from "@/fetch/employerAdvertise/fetchSearchAdvertise";
import arrowDownSVG from "../../../public/icons/arrow_down.svg";
import Image from "next/image";

type SearchFilterProps = {
  setFilters: Dispatch<SetStateAction<FilterType>>;
};

export default function SearchFilter({ setFilters }: SearchFilterProps) {
  const [isInternship, setIsInternship] = useState<boolean>(false);
  const [isRemote, setIsRemote] = useState<boolean>(false);
  const [isPortfolio, setIsPortfolio] = useState<boolean>(false);
  const [salary, setSalary] = useState<string>("");
  const [experience, setExperience] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

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
    <>
      <section
        onClick={() => setIsOpen((o) => !o)}
        className="cursor-pointer flex gap-2"
      >
        <span className="text-neutral-mid text-sm">فیلتر ها</span>
        <Image
          className={`duration-400 ${isOpen && "rotate-180"}
          `}
          alt="arrow down icon"
          src={arrowDownSVG}
        />
      </section>
      <div className={`flex flex-col gap-3 ${!isOpen && "hidden"}`}>
        <div className={"flex gap-2 flex-wrap"}>
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
        <div className="flex flex-col gap-3 w-96">
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
            <option value="تفاوت ندارد">تفادت ندارد</option>
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
        <div onClick={handleSetFilters}>
          <Button text="اعمال فیلتر ها" />
        </div>
      </div>
    </>
  );
}
