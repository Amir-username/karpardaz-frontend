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
        className={`flex flex-col gap-2 w-full ring-1  p-2 rounded-lg bg-gray-50 ${
          !isValid ? "ring-gray-300" : "ring-accent-coral"
        }`}
      >
        <span className="text-neutral-mid text-sm">{label}</span>
        <textarea
          value={value}
          onChange={setValue && ((e) => setValue(e.target.value))}
          name={name}
          className="w-full text-sm p-2 bg-white rounded-lg ring-1 ring-neutral-mid"
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
