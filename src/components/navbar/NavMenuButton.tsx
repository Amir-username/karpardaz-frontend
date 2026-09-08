"use client";

import Icon from "@/ui/Icon";
import { Dispatch, SetStateAction } from "react";

type NavMenuButtonProps = {
  setIsActive: Dispatch<SetStateAction<boolean>>;
};

function NavMenuButton({ setIsActive }: NavMenuButtonProps) {
  const handleOpenMenu = () => {
    setIsActive(true);
  };

  return (
    <button
      type="button"
      onClick={handleOpenMenu}
      aria-label="باز کردن منو"
      className="flex md:hidden items-center justify-center w-10 h-10 rounded-lg text-fg-muted hover:text-fg hover:bg-subtle transition-colors cursor-pointer"
    >
      <Icon name="menu" size={24} />
    </button>
  );
}

export default NavMenuButton;
