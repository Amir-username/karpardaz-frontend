"use client";

import Icon from "@/ui/Icon";
import { useEffect, useState } from "react";

type ThemeToggleProps = {
  className?: string;
};

function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const onToggle = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newTheme);
  };

  if (!isMounted)
    return <span aria-hidden="true" className={`w-10 h-10 ${className}`} />;

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? "تغییر به حالت روشن" : "تغییر به حالت تاریک"}
      title={isDark ? "حالت روشن" : "حالت تاریک"}
      className={`flex items-center justify-center w-10 h-10 rounded-lg text-fg-muted hover:text-fg hover:bg-subtle transition-colors cursor-pointer ${className}`}
    >
      <Icon name={isDark ? "light_mode" : "dark_mode"} size={22} fill />
    </button>
  );
}

export default ThemeToggle;
