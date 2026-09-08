import { Dispatch, SetStateAction } from "react";
import Icon from "./Icon";

type ClientInputProps = {
  placeholder: string;
  icon?: string;
  value?: string;
  setValue?: Dispatch<SetStateAction<string>>;
  type?: "text" | "email" | "password" | "number" | "search";
  name?: string;
  className?: string;
};

/**
 * Lightweight controlled input without validation chrome —
 * used for quick inputs (interview answers, small form fields).
 */
function ClientInput({
  placeholder,
  value,
  setValue,
  icon,
  type = "text",
  name,
  className = "",
}: ClientInputProps) {
  return (
    <div className={`relative w-full ${className}`}>
      <input
        className={`w-full h-12 text-sm rounded-xl bg-card text-fg placeholder:text-fg-muted/70 ring-1 ring-border hover:ring-border-strong focus:ring-2 focus:ring-brand transition-shadow duration-200 ${
          icon ? "ps-11 pe-4" : "px-4"
        }`}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={setValue && ((e) => setValue(e.target.value))}
      />
      {icon && (
        <Icon
          name={icon}
          size={20}
          className="absolute start-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-fg-muted"
        />
      )}
    </div>
  );
}

export default ClientInput;
