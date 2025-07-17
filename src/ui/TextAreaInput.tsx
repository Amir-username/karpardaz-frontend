import { Dispatch, SetStateAction } from "react";

type TextAreaInputProps = {
  label: string;
  name: string;
  isValid?: boolean;
  errorMessage?: string[];
  value?: string;
  setValue?: Dispatch<SetStateAction<string>>;
};

function TextAreaInput({
  name,
  label,
  isValid,
  errorMessage = [],
  value,
  setValue,
}: TextAreaInputProps) {
  return (
    <div className="flex flex-col w-full gap-2">
      <div
        className={`flex flex-col gap-2 w-full ring-1  p-2 rounded-lg bg-gray-50 dark:bg-neutral-dark ${
          !isValid
            ? "ring-gray-300 dark:ring-neutral-dark"
            : "ring-accent-coral"
        }`}
      >
        <span className="text-neutral-mid text-sm px-2">{label}</span>
        <textarea
          value={value}
          onChange={setValue && ((e) => setValue(e.target.value))}
          name={name}
          className="w-full text-sm dark:text-neutral-light p-2 bg-white dark:bg-neutral-dark rounded-lg ring-1 ring-neutral-mid dark:ring-neutral-600"
        />
      </div>
      {errorMessage.map((message, i) => (
        <p key={i} className="text-xs text-accent-coral">
          {message}
        </p>
      ))}
    </div>
  );
}

export default TextAreaInput;
