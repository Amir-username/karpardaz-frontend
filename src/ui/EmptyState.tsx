import Image from "next/image";
import NoDataIll from "../../public/Illustrations/NoDataILL.svg";

type EmptyStateProps = {
  title: string;
  description?: string;
  /** Optional call-to-action rendered under the text (button, link…) */
  action?: React.ReactNode;
  className?: string;
};

/**
 * Standard empty-state block used whenever a list or page has no data.
 */
function EmptyState({ title, description, action, className = "" }: EmptyStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 py-16 px-6 text-center ${className}`}
    >
      <div className="w-40 h-40 opacity-90 dark:opacity-80">
        <Image
          src={NoDataIll}
          alt=""
          className="w-full h-full object-contain dark:invert dark:brightness-150"
        />
      </div>
      <h3 className="text-lg font-semibold text-fg">{title}</h3>
      {description && (
        <p className="max-w-sm text-sm leading-6 text-fg-muted">{description}</p>
      )}
      {action && <div className="mt-2">{action}</div>}
    </div>
  );
}

export default EmptyState;
