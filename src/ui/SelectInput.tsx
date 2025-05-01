import React from "react";

type SelectInputProps = {
  label: string;
  children: React.ReactNode;
};

function SelectInput({ label, children }: SelectInputProps) {
  return (
    <div className="flex items-center justify-between w-full h-12 px-4 py-3 text-sm rounded-lg bg-gray-50 text-neutral-dark ring-1 ring-gray-300">
      <span className="text-sm text-neutral-mid">{label}</span>
      <select className="cursor-pointer text-neutral-dark">{children}</select>
    </div>
  );
}

export default SelectInput;
