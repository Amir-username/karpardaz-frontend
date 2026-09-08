"use client";

import { FilterType } from "@/fetch/employerAdvertise/fetchSearchAdvertise";
import Icon from "@/ui/Icon";

const POSITION_LABELS: Record<string, string> = {
  junior: "جونیور",
  midlevel: "میدلول",
  senior: "سنیور",
};

const SALARY_LABELS: Record<string, string> = {
  "توافقی": "توافقی",
  "۵ تا ۱۰ میلیون تومان": "۵ تا ۱۰ م",
  "۱۰ تا ۲۰ میلیون تومان": "۱۰ تا ۲۰ م",
  "۲۰ تا ۴۰ میلیون تومان": "۲۰ تا ۴۰ م",
  "۴۰ میلیون به بالا": "+۴۰ م",
};

const EXPERIENCE_LABELS: Record<string, string> = {
  "بدون سابقه کار": "بدون سابقه",
  "۱ تا ۲ سال سابفه کار": "۱ تا ۲ سال",
  "۲ تا ۴ سال سابقه کار": "۲ تا ۴ سال",
  "۴ سال به بالا": "+۴ سال",
};

const BOOLEAN_FILTERS: {
  key: "isInternship" | "isRemote" | "isPortfolio";
  label: string;
}[] = [
  { key: "isInternship", label: "کارآموزی" },
  { key: "isRemote", label: "دورکاری" },
  { key: "isPortfolio", label: "نمونه کار" },
];

export type FilterChip = {
  key: keyof FilterType;
  label: string;
};

/** Builds the list of removable chip descriptors for the currently applied filters. */
export function getActiveChips(filters: FilterType): FilterChip[] {
  const chips: FilterChip[] = [];

  for (const b of BOOLEAN_FILTERS) {
    if (filters[b.key]) chips.push({ key: b.key, label: b.label });
  }
  if (filters.salary)
    chips.push({
      key: "salary",
      label: `حقوق: ${SALARY_LABELS[filters.salary] ?? filters.salary}`,
    });
  if (filters.experience)
    chips.push({
      key: "experience",
      label: `سابقه: ${
        EXPERIENCE_LABELS[filters.experience] ?? filters.experience
      }`,
    });
  if (filters.gender)
    chips.push({ key: "gender", label: `جنسیت: ${filters.gender}` });
  if (filters.position)
    chips.push({
      key: "position",
      label: `سطح: ${POSITION_LABELS[filters.position] ?? filters.position}`,
    });

  return chips;
}

export function countActiveFilters(filters: FilterType): number {
  return getActiveChips(filters).length;
}

type ActiveFilterChipsProps = {
  filters: FilterType;
  onRemove: (key: keyof FilterType) => void;
  onClearAll: () => void;
};

/**
 * Row of applied-filter chips shown under the search bar.
 * Each chip is removable; a clear-all action appears when 2+ filters are active.
 */
export default function ActiveFilterChips({
  filters,
  onRemove,
  onClearAll,
}: ActiveFilterChipsProps) {
  const chips = getActiveChips(filters);
  if (chips.length === 0) return null;

  return (
    <div
      className="flex flex-wrap items-center justify-center gap-2 w-full fade-in-up"
      role="group"
      aria-label="فیلترهای اعمال شده"
    >
      {chips.map((chip) => (
        <button
          key={chip.key}
          type="button"
          onClick={() => onRemove(chip.key)}
          title={`حذف فیلتر ${chip.label}`}
          aria-label={`حذف فیلتر ${chip.label}`}
          className="group/chip inline-flex items-center gap-1.5 ps-3 pe-1.5 py-1.5 rounded-full text-xs font-medium bg-brand-soft text-brand-soft-fg ring-1 ring-brand/20 hover:ring-brand/60 transition-all cursor-pointer"
        >
          {chip.label}
          <span className="flex items-center justify-center w-4.5 h-4.5 rounded-full bg-brand/15 text-brand-soft-fg group-hover/chip:bg-brand group-hover/chip:text-brand-fg transition-colors">
            <Icon name="close" size={12} weight={600} />
          </span>
        </button>
      ))}

      {chips.length > 1 && (
        <button
          type="button"
          onClick={onClearAll}
          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium text-fg-muted ring-1 ring-border hover:ring-accent hover:text-accent-fg hover:bg-accent-soft transition-all cursor-pointer"
        >
          <Icon name="delete_sweep" size={14} />
          پاک کردن همه
        </button>
      )}
    </div>
  );
}
