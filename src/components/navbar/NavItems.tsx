import Button from "@/ui/Button";
import Image from "next/image";
import Link from "next/link";
import DEFAULT_AVATAR from "../../../public/images/company_default_avatar.png";

function NavItems() {
  const token = ""
  return (
    <ul className="items-center hidden gap-2 pl-8 md:flex lg:gap-4">
      <Link href={"/jobs"}>
        <li>فرصت های شغلی</li>
      </Link>
      <Link href={"/jobseeker-ads"}>
        <li>آگهی کارجویان</li>
      </Link>
      <li>
        {token ? (
          <div className="flex gap-3 pr-8 items-center">
            <h3 className="text-lg">نام کاربر</h3>
            <Image
              src={DEFAULT_AVATAR}
              alt="آواتار پیشفرض شرکت"
              className="w-12 h-12 rounded-full ring-2 ring-neutral-mid"
            />
          </div>
        ) : (
          <div className="flex items-center w-48 gap-2 text-sm lg:gap-3">
            <Link href={"auth/jobseeker/signup"} className="w-full h-full">
              <Button text="ثبت نام" type="button" h="h-9" outline />
            </Link>
            <Link href={"auth/jobseeker/login"} className="w-full h-full">
              <Button text="ورود" type="button" h="h-9" />
            </Link>
          </div>
        )}
      </li>
    </ul>
  );
}

export default NavItems;
