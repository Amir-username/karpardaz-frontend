"use client";

import Image from "next/image";
import darkmode from "../../../public/icons/darkmode.svg";
import lightmode from "../../../public/icons/lightmode.svg";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const [isMounted, setIsMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const theme = localStorage.getItem("theme");
    const html = document.querySelector("html");

    if (theme === "dark") {
      html?.classList.add("dark");
      setIsDark(true);
    } else {
      html?.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const onToggle = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");

    const html = document.querySelector("html");
    if (newTheme) {
      html?.classList.add("dark");
    } else {
      html?.classList.remove("dark");
    }
  };

  if (!isMounted) return null;

  return (
    <div
      onClick={onToggle}
      className="items-center hidden pl-4 cursor-pointer md:flex"
    >
      <Image
        src={isDark ? lightmode : darkmode}
        alt="theme toggle"
        width={36}
        height={36}
      />
    </div>
  );
}
export default ThemeToggle;
