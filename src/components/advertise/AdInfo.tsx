import Icon from "@/ui/Icon";
import Badge from "@/ui/Badge";

type AdInfoProps = {
  city: string | undefined;
  isRemote: boolean | undefined;
  isInternship: boolean | undefined;
  salary: string | undefined;
};

export default function AdInfo({
  city,
  isRemote,
  isInternship,
  salary,
}: AdInfoProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
      {city && (
        <span className="inline-flex items-center gap-1.5 text-xs text-fg-muted">
          <Icon name="location_on" size={14} className="text-fg-muted/80" />
          {city}
        </span>
      )}
      {salary && (
        <span className="inline-flex items-center gap-1.5 text-xs text-fg-muted">
          <Icon name="payments" size={14} className="text-fg-muted/80" />
          {salary}
        </span>
      )}
      {isRemote && (
        <Badge variant="success">
          <Icon name="home_work" size={13} />
          دورکاری
        </Badge>
      )}
      {isInternship && (
        <Badge variant="info">
          <Icon name="school" size={13} />
          کارآموزی
        </Badge>
      )}
    </div>
  );
}
