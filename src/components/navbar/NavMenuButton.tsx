import { Dispatch, SetStateAction } from "react";

type NavMenuButtonProps = {
  setIsActive: Dispatch<SetStateAction<boolean>>;
};

function NavMenuButton({ setIsActive }: NavMenuButtonProps) {
  const handleOpenMenu = () => {
    setIsActive(true);
  };

  return (
    <div onClick={handleOpenMenu} className="flex items-center pl-8 md:hidden">
      <span
        style={{
          fontSize: "36px",
        }}
        className="material-symbols-outlined text-neutral-dark"
      >
        menu
      </span>
    </div>
  );
}

export default NavMenuButton;
