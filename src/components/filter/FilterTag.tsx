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
      className={`text-sm text-neutral-light  cursor-pointer ${
        isActive
          ? "bg-secondary-blue dark:bg-primary-blue-dark ring-1 ring-secondary-blue dark:ring-primary-blue-dark"
          : "bg-neutral-light dark:bg-neutral-950 text-neutral-mid ring-1 ring-neutral-mid dark:ring-primary-blue-dark hover:bg-secondary-blue hover:dark:bg-primary-blue-dark hover:text-neutral-light"
      }
      px-3 py-2 rounded-full`}
    >
      {name}
    </span>
  );
}
