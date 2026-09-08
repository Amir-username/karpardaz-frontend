import { CSSProperties } from "react";

export type BadgeVariant =
  | "brand"
  | "accent"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "neutral";

type BadgeProps = {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: "sm" | "md";
  className?: string;
  style?: CSSProperties;
};

const variantClasses: Record<BadgeVariant, string> = {
  brand: "bg-brand-soft text-brand-soft-fg ring-brand/20",
  accent: "bg-accent-soft text-accent-soft-fg ring-accent/20",
  success: "bg-success-soft text-success-fg ring-success/20",
  warning: "bg-warning-soft text-warning-fg ring-warning/20",
  danger: "bg-danger-soft text-danger-fg ring-danger/20",
  info: "bg-info-soft text-info-fg ring-info/20",
  neutral: "bg-subtle text-fg-muted ring-border",
};

/**
 * Soft pill used for tags, statuses and metadata chips.
 */
function Badge({
  children,
  variant = "brand",
  size = "sm",
  className = "",
  style,
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center justify-center gap-1 rounded-full ring-1 font-medium whitespace-nowrap ${
        size === "sm" ? "px-2.5 py-0.5 text-xs" : "px-3 py-1 text-sm"
      } ${variantClasses[variant]} ${className}`}
      style={style}
    >
      {children}
    </span>
  );
}

export default Badge;
