import Link from "next/link";
import Icon from "./Icon";
import { CSSProperties, MouseEventHandler, ReactNode } from "react";

export type ButtonVariant = "primary" | "outline" | "ghost" | "soft" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  /** Legacy API: label text (prefer children) */
  text?: string;
  children?: ReactNode;
  /** Renders a next/link styled as a button (avoids nested interactive elements) */
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: MouseEventHandler<HTMLElement>;
  loading?: boolean;
  disabled?: boolean;
  /** Legacy API: stretch to full width (default true, as before) */
  fullWidth?: boolean;
  /** Legacy API: button sits flush at the bottom of a card */
  card?: boolean;
  /** Legacy API: `outline` shorthand for variant="outline" */
  outline?: boolean;
  /** Legacy API: height override, e.g. "h-9" */
  h?: string;
  className?: string;
  style?: CSSProperties;
  target?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand text-brand-fg ring-1 ring-brand hover:bg-brand-hover hover:ring-brand-hover shadow-soft",
  outline:
    "bg-card text-fg ring-1 ring-border-strong hover:bg-brand-soft hover:text-brand-soft-fg hover:ring-brand",
  ghost: "bg-transparent text-brand hover:bg-brand-soft",
  soft: "bg-brand-soft text-brand-soft-fg ring-1 ring-brand/15 hover:bg-brand hover:text-brand-fg hover:ring-brand",
  danger: "bg-danger text-white ring-1 ring-danger hover:brightness-110",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm rounded-lg",
  md: "h-12 px-5 text-sm rounded-xl",
  lg: "h-14 px-6 text-base rounded-xl",
};

function Button({
  text,
  children,
  href,
  type = "button",
  variant = "primary",
  size = "md",
  onClick,
  loading = false,
  disabled = false,
  fullWidth = true,
  card = false,
  outline = false,
  h,
  className = "",
  style,
  target,
}: ButtonProps) {
  // Legacy prop mapping
  const resolvedVariant: ButtonVariant = outline ? "outline" : variant;
  const label = children ?? text;

  const classes = [
    "relative inline-flex items-center justify-center gap-2 font-medium text-center whitespace-nowrap",
    "transition-all duration-200 cursor-pointer select-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
    h ? `${h} px-4 text-sm rounded-lg` : sizeClasses[size],
    card ? "rounded-none" : "",
    fullWidth ? "w-full" : "",
    disabled || loading ? "opacity-60 pointer-events-none" : "",
    variantClasses[resolvedVariant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {loading && (
        <Icon name="progress_activity" size={18} className="animate-spin" />
      )}
      {label}
    </>
  );

  if (href && !disabled && !loading) {
    return (
      <Link href={href} target={target} onClick={onClick} className={classes} style={style}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classes}
      style={style}
    >
      {content}
    </button>
  );
}

export default Button;
