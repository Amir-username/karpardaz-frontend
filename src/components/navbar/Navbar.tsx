import { cookies } from "next/headers";
import Brand from "./Brand";
import NavContents from "./NavContents";

async function Navbar() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const role = cookieStore.get("role");

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between w-full h-20 gap-2 py-3 shadow-xs bg-neutral-light/90 dark:bg-neutral-950">
      <Brand text="کارپرداز" />
      <NavContents token={token?.value} role={role?.value} />
    </nav>
  );
}

export default Navbar;
