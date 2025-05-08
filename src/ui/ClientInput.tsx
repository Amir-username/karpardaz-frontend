import { Dispatch, SetStateAction } from "react";

type ClientInputProps = {
  placeholder: string;
  icon?: string;
  value?: string;
  setValue?: Dispatch<SetStateAction<string>>;
};

function ClientInput({ placeholder, value, setValue, icon }: ClientInputProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className={`relative w-full rounded-lg `}>
        <input
          className="w-full h-12 px-4 pl-8 text-sm rounded-lg bg-gray-50 text-neutral-dark placeholder:text-neutral-mid ring-1 ring-gray-300"
          placeholder={placeholder}
          value={value}
          onChange={setValue && ((e) => setValue(e.target.value))}
        />
        {icon ? (
          <span className="absolute material-symbols-outlined left-2 top-3 text-neutral-mid">
            {icon}
          </span>
        ) : null}
      </div>
    </div>
  );
}

export default ClientInput;
