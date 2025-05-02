"use client";

import { Dispatch, SetStateAction, useState } from "react";

type InputTagProps = {
  label: string;
  name: string;
  items: string[];
  setItems: Dispatch<SetStateAction<string[]>>;
};

function InputTag({ label, name, items, setItems }: InputTagProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");

  const handleAddItem = (text: string) => {
    setItems([...items, text]);
    setIsOpen(false);
  };

  return (
    <div className="flex items-center w-full px-4 py-3 text-sm rounded-lg bg-gray-50 text-neutral-dark ring-1 ring-gray-300">
      <div className="flex flex-col w-full gap-6">
        <div className="flex items-center justify-between w-full">
          <span className="text-sm text-neutral-mid">{label}</span>
          <span
            onClick={() => setIsOpen(true)}
            className="cursor-pointer material-symbols-outlined text-neutral-mid"
          >
            add_circle
          </span>
        </div>
        <div className={`flex justify-between gap-1 ${isOpen ? "" : "hidden"}`}>
          <input
            name={name}
            onChange={(e) => setInputText(e.target.value)}
            type="text"
            className="p-2 rounded-lg w-full ring-1 ring-neutral-mid"
          />
          <button
            onClick={() => handleAddItem(inputText)}
            className="px-2 bg-primary-blue text-white rounded-lg cursor-pointer"
          >
            ثبت
          </button>
        </div>
        <div className={`${items.length ? "flex flex-wrap" : "hidden"} gap-3`}>
          {items.map((item, i) => {
            return (
              <span
                className="rounded-lg bg-primary-blue text-white px-2 py-1"
                key={i}
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default InputTag;
