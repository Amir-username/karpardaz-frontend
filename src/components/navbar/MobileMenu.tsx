import { Dispatch, SetStateAction } from "react";
import { boolean } from "zod";

type MobileMenuProps = {
  setIsActive: Dispatch<SetStateAction<boolean>>;
  isActive: boolean;
};

function MobileMenu({ isActive, setIsActive }: MobileMenuProps) {
  const handleCloseMenu = () => {
    setIsActive(false);
  };

  return (
    <div
      className={`${
        isActive ? "felx" : "hidden"
      } absolute top-0 bottom-0 z-50 flex-col w-screen md:hidden bg-neutral-light`}
    >
      <div
        onClick={handleCloseMenu}
        className="flex items-center justify-start p-8"
      >
        <span
          style={{
            fontSize: "36px",
          }}
          className="material-symbols-outlined text-neutral-dark"
        >
          close
        </span>
      </div>
      <ul className="flex flex-col items-center justify-center py-40">
        <li className="text-xl">فرصت های شغلی</li>
      </ul>
    </div>
  );
}

export default MobileMenu;
