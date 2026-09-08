import { Dispatch, SetStateAction } from "react";
import Icon from "./Icon";

type SelectInputProps = {
  label: string;
  children: React.ReactNode;
  name: string;
  /** Shows the error ring + error messages below the field */
  hasError?: boolean;
  errorMessage?: string[];
  value?: string;
  setValue?: Dispatch<SetStateAction<string>>;
  className?: string;
};

/**
 * Native select with custom chrome: label above, chevron on the
 * inline-end side (RTL-aware), consistent ring states.
 */
function SelectInput({
  label,
  children,
  name,
  hasError = false,
  errorMessage = [],
  value,
  setValue,
  className = "",
}: SelectInputProps) {
  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      <label htmlFor={`select-${name}`} className="text-sm font-medium text-fg">
        {label}
      </label>
      <div className="relative w-full">
        <select
          id={`select-${name}`}
          value={value}
          onChange={setValue && ((e) => setValue(e.target.value))}
          name={name}
          className={`appearance-none w-full h-12 text-sm rounded-xl bg-card text-fg ps-4 pe-10 ring-1 transition-shadow duration-200 cursor-pointer ${
            hasError
              ? "ring-danger ring-2"
              : "ring-border hover:ring-border-strong focus:ring-2 focus:ring-brand"
          }`}
        >
          {children}
        </select>
        <Icon
          name="expand_more"
          size={20}
          className={`absolute end-3 top-1/2 -translate-y-1/2 pointer-events-none ${
            hasError ? "text-danger" : "text-fg-muted"
          }`}
        />
      </div>
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

export default SelectInput;
