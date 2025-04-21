"use client";

import { useEffect, useState } from "react";
import Brand from "./Brand";
import MobileMenu from "./MobileMenu";
import NavItems from "./NavItems";
import NavMenuButton from "./NavMenuButton";
function Navbar() {
  const [isActiveMobileMenu, setIsActiveMobileMenu] = useState<boolean>(false);
  
  return (
    <nav className="flex items-center justify-between h-20 gap-2 py-3 bg-neutral-light">
      <Brand text="کارپرداز" />
      <NavItems />
      <NavMenuButton setIsActive={setIsActiveMobileMenu} />
      <MobileMenu
        isActive={isActiveMobileMenu}
        setIsActive={setIsActiveMobileMenu}
      />
    </nav>
  );
}

export default Navbar;
