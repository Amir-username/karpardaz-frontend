"use client";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import NavMenuButton from "./NavMenuButton";

type NavButtonsProps = {
  token?: string;
};

function NavButtons({ token }: NavButtonsProps) {
  const [isActiveMobileMenu, setIsActiveMobileMenu] = useState<boolean>(false);
  return (
    <>
      <NavMenuButton setIsActive={setIsActiveMobileMenu} />
      <MobileMenu
        token={token}
        isActive={isActiveMobileMenu}
        setIsActive={setIsActiveMobileMenu}
      />
    </>
  );
}

export default NavButtons;
