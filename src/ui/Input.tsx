import { CSSProperties, Dispatch, SetStateAction } from "react";
import Icon from "./Icon";

type InputProps = {
  type?: "text" | "email" | "password" | "number" | "search" | "tel" | "url";
  name: string;
  placeholder?: string;
  label?: string;
  icon?: string;
  /** Shows the error ring + error messages below the input */
  hasError?: boolean;
  errorMessage?: string[];
  value?: string;
  setValue?: Dispatch<SetStateAction<string>>;
  required?: boolean;
  autoComplete?: string;
  dir?: "rtl" | "ltr";
  className?: string;
  style?: CSSProperties;
};

/**
 * Text input with label, leading icon and inline validation.
 * RTL-safe: the icon sits on the inline-start side (right in fa).
 */
function Input({
  type = "text",
  name,
  placeholder,
  label,
  icon,
  hasError = false,
  errorMessage = [],
  value,
  setValue,
  required,
  autoComplete,
  dir,
  className = "",
  style,
}: InputProps) {
  const controlled = value !== undefined && setValue !== undefined;

  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`} style={style}>
      {label && (
        <label htmlFor={`input-${name}`} className="text-sm font-medium text-fg">
          {label}
          {required && <span className="text-accent ms-1">*</span>}
        </label>
      )}
      <div className="relative w-full">
        <input
          id={`input-${name}`}
          className={`w-full h-12 text-sm rounded-xl bg-card text-fg placeholder:text-fg-muted/70 ring-1 transition-shadow duration-200
            ${icon ? "ps-11 pe-4" : "px-4"}
            ${
              hasError
                ? "ring-danger ring-2 bg-danger-soft/30"
                : "ring-border hover:ring-border-strong focus:ring-2 focus:ring-brand"
            }`}
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}
          dir={dir}
          {...(controlled ? { value, onChange: (e) => setValue(e.target.value) } : {})}
        />
        {icon && (
          <Icon
            name={icon}
            size={20}
            className={`absolute start-3.5 top-1/2 -translate-y-1/2 pointer-events-none ${
              hasError ? "text-danger" : "text-fg-muted"
            }`}
          />
        )}
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

export default Input;
