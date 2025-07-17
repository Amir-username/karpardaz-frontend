import React, { Dispatch, SetStateAction } from "react";

type SelectInputProps = {
  label: string;
  children: React.ReactNode;
  name: string;
  isValid?: boolean;
  errorMessage?: string[];
  value?: string;
  setValue?: Dispatch<SetStateAction<string>>;
};

function SelectInput({
  label,
  children,
  name,
  value,
  setValue,
}: SelectInputProps) {
  return (
    <div className="flex items-center justify-between w-full h-12 px-4 py-3 text-sm rounded-lg bg-gray-50 dark:bg-neutral-dark text-neutral-dark ring-1 ring-gray-300 dark:ring-neutral-dark">
      <span className="text-sm text-neutral-mid">{label}</span>
      <select
        value={value}
        onChange={setValue && ((e) => setValue(e.target.value))}
        name={name}
        className="cursor-pointer text-neutral-dark dark:bg-neutral-dark dark:text-neutral-light"
      >
        {children}
      </select>
    </div>
  );
}

export default SelectInput;
