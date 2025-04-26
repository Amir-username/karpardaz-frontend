"use client";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import NavMenuButton from "./NavMenuButton";

function NavButtons() {
  const [isActiveMobileMenu, setIsActiveMobileMenu] = useState<boolean>(false);
  return (
    <>
      <NavMenuButton setIsActive={setIsActiveMobileMenu} />
      <MobileMenu
        isActive={isActiveMobileMenu}
        setIsActive={setIsActiveMobileMenu}
      />
    </>
  );
}

export default NavButtons;
