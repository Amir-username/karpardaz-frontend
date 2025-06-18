"use client";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import NavMenuButton from "./NavMenuButton";

type NavButtonsProps = {
  token?: string;
  role?: string
};

function NavButtons({ token, role }: NavButtonsProps) {
  const [isActiveMobileMenu, setIsActiveMobileMenu] = useState<boolean>(false);
  return (
    <>
      <NavMenuButton setIsActive={setIsActiveMobileMenu} />
      <MobileMenu
        token={token}
        role={role}
        isActive={isActiveMobileMenu}
        setIsActive={setIsActiveMobileMenu}
      />
    </>
  );
}

export default NavButtons;
