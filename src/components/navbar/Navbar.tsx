// import Button from "@/ui/Button";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="py-3 px-8 flex justify-between gap-2 bg-neutral-light items-center">
      <h1 className="lg:text-3xl sm:text-lg text-primary-blue font-bold">
        کارپرداز
      </h1>
      <ul className="flex lg:gap-4 gap-2 items-center">
        <Link href={"/jobs"}>
          <li>فرصت های شغلی</li>
        </Link>
        {/* <li>
          <div className="flex gap-2 lg:gap-3 w-48 text-sm items-center">
            <Link href={"auth/jobseeker/signup"} className="h-full w-full">
              <Button text="ثبت نام" type="button" h="h-9" outline />
            </Link>
            <Link href={"auth/jobseeker/login"} className="h-full w-full">
              <Button text="ورود" type="button" h="h-9" />
            </Link>
          </div>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
