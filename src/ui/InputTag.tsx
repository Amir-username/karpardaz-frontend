"use client";

import { Dispatch, SetStateAction, useState } from "react";
import Icon from "./Icon";

type InputTagProps = {
  label: string;
  name: string;
  items: string[];
  setItems: Dispatch<SetStateAction<string[]>>;
  placeholder?: string;
  className?: string;
};

/**
 * Tag-list field: type a value, press enter or the add button,
 * and it becomes a removable chip. Used for technologies, benefits…
 */
function InputTag({
  label,
  name,
  items,
  setItems,
  placeholder = "افزودن مورد جدید",
  className = "",
}: InputTagProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");

  const handleAddItem = () => {
    const text = inputText.trim();
    if (text.length) {
      setItems([...items, text]);
      setInputText("");
      setIsOpen(false);
    }
  };

  const handleRemoveItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div
      className={`flex flex-col w-full gap-3 p-4 text-sm rounded-xl bg-card ring-1 ring-border transition-shadow duration-200 focus-within:ring-2 focus-within:ring-brand ${className}`}
    >
      <div className="flex items-center justify-between w-full">
        <span className="text-sm font-medium text-fg">{label}</span>
        <button
          type="button"
          onClick={() => setIsOpen((o) => !o)}
          aria-label={isOpen ? "بستن" : "افزودن"}
          className="flex items-center justify-center w-8 h-8 rounded-lg text-fg-muted hover:bg-brand-soft hover:text-brand-soft-fg transition-colors cursor-pointer"
        >
          <Icon name={isOpen ? "remove" : "add_circle"} size={22} />
        </button>
      </div>

      {isOpen && (
        <div className="flex gap-2">
          <input
            name={name}
            autoFocus
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleAddItem();
              }
            }}
            type="text"
            placeholder={placeholder}
            className="w-full h-10 p-2 px-3 text-sm rounded-lg bg-subtle text-fg placeholder:text-fg-muted/70 ring-1 ring-border focus:ring-brand"
            value={inputText}
          />
          <button
            type="button"
            onClick={handleAddItem}
            className="px-4 text-sm font-medium rounded-lg bg-brand text-brand-fg hover:bg-brand-hover transition-colors cursor-pointer"
          >
            ثبت
          </button>
        </div>
      )}

      {items.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {items.map((item, i) => (
            <span
              className="inline-flex items-center gap-1 rounded-full bg-brand-soft text-brand-soft-fg ring-1 ring-brand/15 ps-3 pe-1.5 py-1 text-xs font-medium"
              key={i}
            >
              {item.length > 14 ? item.slice(0, 14) + "…" : item}
              <button
                type="button"
                aria-label={`حذف ${item}`}
                onClick={() => handleRemoveItem(i)}
                className="flex items-center justify-center w-4 h-4 rounded-full hover:bg-accent hover:text-accent-fg transition-colors cursor-pointer"
              >
                <Icon name="close" size={12} weight={500} />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default InputTag;
