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
    if (text.length) {
      setItems([...items, text]);
      setInputText("");
      setIsOpen(false);
    }
  };

  return (
    <div className="flex items-center w-full px-4 py-3 text-sm rounded-lg bg-gray-50 dark:bg-neutral-dark text-neutral-dark ring-1 ring-gray-300 dark:ring-neutral-dark">
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
            className="w-full p-2 rounded-lg ring-1 ring-neutral-mid dark:ring-neutral-600 dark:text-neutral-light"
            value={inputText}
          />
          <button
            type="button"
            onClick={() => handleAddItem(inputText)}
            className="px-2 text-white rounded-lg cursor-pointer bg-primary-blue dark:bg-primary-blue-dark"
          >
            ثبت
          </button>
        </div>
        <div className={`${items.length ? "flex flex-wrap" : "hidden"} gap-3`}>
          {items.map((item, i) => {
            return (
              <span
                className={`rounded-lg bg-primary-blue dark:bg-primary-blue-dark text-white px-2 py-1`}
                key={i}
              >
                {item.length > 12 ? item.slice(0, 12) + "..." : item}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default InputTag;
