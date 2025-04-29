import Button from "@/ui/Button";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import LogoutButton from "./LogoutButton";

type MobileMenuProps = {
  setIsActive: Dispatch<SetStateAction<boolean>>;
  isActive: boolean;
  token?: string;
};

function MobileMenu({ isActive, setIsActive, token }: MobileMenuProps) {
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
      <ul className="flex flex-col items-center justify-center gap-8 my-40">
        <Link href={"jobs/"}>
          <li
            className="text-xl text-neutral-dark"
            onClick={() => setIsActive(false)}
          >
            فرصت های شغلی
          </li>
        </Link>
        <Link href={"/jobseeker-ads"}>
          <li
            className="text-xl text-neutral-dark"
            onClick={() => setIsActive(false)}
          >
            آگهی کارجویان
          </li>
        </Link>
        {token ? (
          <LogoutButton token={token} />
        ) : (
          <div className="flex flex-col items-center w-48 gap-4 text-sm lg:gap-3">
            <div className="w-full h-0.5 bg-gray-300 rounded-lg"></div>
            <Link
              href={"auth/jobseeker/signup"}
              className="w-full h-full"
              onClick={() => setIsActive(false)}
            >
              <Button text="ثبت نام" type="button" h="h-9" outline />
            </Link>
            <Link
              href={"auth/jobseeker/login"}
              className="w-full h-full"
              onClick={() => setIsActive(false)}
            >
              <Button text="ورود" type="button" h="h-9" />
            </Link>
          </div>
        )}
      </ul>
    </div>
  );
}

export default MobileMenu;
