import Button from "@/ui/Button";
import Link from "next/link";

function NavItems() {
  return (
    <ul className="items-center hidden gap-2 pl-8 md:flex lg:gap-4">
      <Link href={"/jobs"}>
        <li>فرصت های شغلی</li>
      </Link>
      <Link href={"/jobseeker-ads"}>
        <li>آگهی کارجویان</li>
      </Link>
      <li>
        <div className="flex items-center w-48 gap-2 text-sm lg:gap-3">
          <Link href={"auth/jobseeker/signup"} className="w-full h-full">
            <Button text="ثبت نام" type="button" h="h-9" outline />
          </Link>
          <Link href={"auth/jobseeker/login"} className="w-full h-full">
            <Button text="ورود" type="button" h="h-9" />
          </Link>
        </div>
      </li>
    </ul>
  );
}

export default NavItems;
