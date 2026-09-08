import { CSSProperties, Dispatch, SetStateAction } from "react";
import Icon from "./Icon";

type TextAreaInputProps = {
  label: string;
  name: string;
  placeholder?: string;
  /** Shows the error ring + error messages below the field */
  hasError?: boolean;
  errorMessage?: string[];
  value?: string;
  setValue?: Dispatch<SetStateAction<string>>;
  rows?: number;
  required?: boolean;
  className?: string;
  style?: CSSProperties;
};

/**
 * Multi-line text field with a floating label above it.
 */
function TextAreaInput({
  name,
  label,
  placeholder,
  hasError = false,
  errorMessage = [],
  value,
  setValue,
  rows = 5,
  required,
  className = "",
  style,
}: TextAreaInputProps) {
  const controlled = value !== undefined && setValue !== undefined;

  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`} style={style}>
      <label htmlFor={`textarea-${name}`} className="text-sm font-medium text-fg">
        {label}
        {required && <span className="text-accent ms-1">*</span>}
      </label>
      <textarea
        id={`textarea-${name}`}
        name={name}
        rows={rows}
        placeholder={placeholder}
        required={required}
        className={`w-full p-3.5 text-sm rounded-xl bg-card text-fg placeholder:text-fg-muted/70 ring-1 transition-shadow duration-200 resize-y ${
          hasError
            ? "ring-danger ring-2 bg-danger-soft/30"
            : "ring-border hover:ring-border-strong focus:ring-2 focus:ring-brand"
        }`}
        {...(controlled ? { value, onChange: (e) => setValue(e.target.value) } : {})}
      />
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

export default TextAreaInput;
