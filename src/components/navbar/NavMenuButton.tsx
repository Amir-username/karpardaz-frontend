import { Dispatch, SetStateAction } from "react";
import menuSVG from '../../../public/icons/menu.svg'
import Image from "next/image";

type NavMenuButtonProps = {
  setIsActive: Dispatch<SetStateAction<boolean>>;
};

function NavMenuButton({ setIsActive }: NavMenuButtonProps) {
  const handleOpenMenu = () => {
    setIsActive(true);
  };

  return (
    <div onClick={handleOpenMenu} className="flex items-center pl-8 md:hidden">
      <Image src={menuSVG} alt="menu" width={36} height={36} />
    </div>
  );
}

export default NavMenuButton;
