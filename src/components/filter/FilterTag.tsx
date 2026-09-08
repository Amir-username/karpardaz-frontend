import { Dispatch, SetStateAction } from "react";
import Icon from "@/ui/Icon";

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
    <button
      type="button"
      onClick={() => setActive((active) => !active)}
      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-200 ${
        isActive
          ? "bg-brand text-brand-fg ring-1 ring-brand shadow-soft"
          : "bg-card text-fg-muted ring-1 ring-border hover:ring-brand hover:text-brand"
      }`}
    >
      {isActive && <Icon name="check" size={15} weight={600} />}
      {name}
    </button>
  );
}
