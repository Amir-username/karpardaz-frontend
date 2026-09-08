import { cookies } from "next/headers";
import Brand from "./Brand";
import NavContents from "./NavContents";

async function Navbar() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const role = cookieStore.get("role");

  return (
    <nav className="sticky top-0 z-50 w-full h-16 shadow-soft bg-card/85 backdrop-blur-md ring-1 ring-border/70">
      <div className="flex items-center justify-between w-full h-full max-w-7xl gap-2 mx-auto px-4 sm:px-6">
        <Brand text="کارپرداز" />
        <NavContents token={token?.value} role={role?.value} />
      </div>
    </nav>
  );
}

export default Navbar;
