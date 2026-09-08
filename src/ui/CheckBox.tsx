import { Dispatch, SetStateAction } from "react";
import Icon from "./Icon";

type CheckBoxProps = {
  text: string;
  name: string;
  /** Shows error styling/messages */
  hasError?: boolean;
  errorMessage?: string[];
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
  className?: string;
};

/**
 * Custom toggle-style checkbox row: label text on the start side,
 * custom square indicator on the end side.
 */
function CheckBox({
  text,
  name,
  hasError = false,
  errorMessage = [],
  isChecked,
  setIsChecked,
  className = "",
}: CheckBoxProps) {
  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      <label
        htmlFor={`checkbox-${name}`}
        className={`flex items-center justify-between w-full h-12 ps-4 pe-3.5 text-sm rounded-xl cursor-pointer bg-card ring-1 transition-all duration-200 ${
          isChecked
            ? "ring-brand ring-1 text-fg"
            : hasError
            ? "ring-danger ring-2"
            : "ring-border hover:ring-border-strong"
        }`}
      >
        <span className={`text-sm ${isChecked ? "text-fg font-medium" : "text-fg-muted"}`}>
          {text}
        </span>
        <span
          className={`flex items-center justify-center w-5 h-5 rounded-md ring-1 transition-all duration-200 ${
            isChecked
              ? "bg-brand ring-brand text-brand-fg"
              : "bg-subtle ring-border-strong"
          }`}
        >
          {isChecked && <Icon name="check" size={14} weight={600} />}
        </span>
        <input
          id={`checkbox-${name}`}
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          name={name}
          type="checkbox"
          className="sr-only"
        />
      </label>
      {hasError &&
        errorMessage.map((message, i) => (
          <p key={i} className="flex items-center gap-1 text-xs text-danger-fg">
            <Icon name="error" size={14} />
            {message}
          </p>
        ))}
    </div>
  );
}

export default CheckBox;
