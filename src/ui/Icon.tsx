import { CSSProperties } from "react";

type IconProps = {
  /** Material Symbols Outlined icon name, e.g. "search", "favorite" */
  name: string;
  /** Font size in px (default 20) */
  size?: number;
  /** Fill the icon (Material Symbols variable axis) */
  fill?: boolean;
  /** Font weight axis 100..700 */
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
  className?: string;
  style?: CSSProperties;
};

/**
 * Unified icon component on top of Material Symbols Outlined.
 * All UI icons should go through this component so size and
 * fill stay consistent across the app.
 */
function Icon({
  name,
  size = 20,
  fill = false,
  weight = 400,
  className = "",
  style,
}: IconProps) {
  return (
    <span
      aria-hidden="true"
      className={`material-symbols-outlined select-none ${className}`}
      style={{
        fontSize: size,
        fontVariationSettings: `"FILL" ${fill ? 1 : 0}, "wght" ${weight}`,
        lineHeight: 1,
        ...style,
      }}
    >
      {name}
    </span>
  );
}

export default Icon;
