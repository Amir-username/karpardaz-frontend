import Icon from "@/ui/Icon";

type AdInfoProps = {
  text: string;
  icon: string;
  /** Optional muted caption above the value */
  label?: string;
};

function AdDetailInfo({ text, icon, label }: AdInfoProps) {
  return (
    <div className="flex items-center gap-2.5 p-3 md:px-4 md:py-3.5 rounded-xl bg-card ring-1 ring-border shadow-soft">
      <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-brand-soft text-brand-soft-fg shrink-0">
        <Icon name={icon} size={19} />
      </span>
      {label ? (
        <div className="flex flex-col gap-0.5 min-w-0">
          <span className="text-xs text-fg-muted">{label}</span>
          <h3 className="text-sm md:text-base text-fg font-medium truncate">
            {text}
          </h3>
        </div>
      ) : (
        <h3 className="text-sm md:text-base text-fg font-medium">{text}</h3>
      )}
    </div>
  );
}

export default AdDetailInfo;
