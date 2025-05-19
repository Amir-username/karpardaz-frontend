import { Dispatch, SetStateAction } from "react";

type FilterTagProps = {
  name: string;
  isActive: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
};

export default function FilterTag({
  name,
  isActive,
  setActive,
}: FilterTagProps) {
  return (
    <span
      onClick={() => setActive((active) => !active)}
      className={`text-sm text-neutral-light cursor-pointer ${
        isActive
          ? "bg-secondary-blue ring-1 ring-secondary-blue"
          : "bg-neutral-light text-neutral-mid ring-1 ring-neutral-mid hover:bg-secondary-blue hover:text-neutral-light"
      }
      px-3 py-2 rounded-full`}
    >
      {name}
    </span>
  );
}
