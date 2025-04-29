import { cookies } from "next/headers";
import Brand from "./Brand";
import NavItems from "./NavItems";
import NavButtons from "./navButtons";
import LogoutButton from "./LogoutButton";

async function Navbar() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const role = cookieStore.get("role");

  return (
    <nav className="flex items-center justify-between h-20 gap-2 py-3 bg-neutral-light">
      <Brand text="کارپرداز" />
      <div className="flex">
        <NavItems token={token?.value} role={role?.value} />
        <NavButtons token={token?.value} />
        <div className="md:flex hidden pl-8 items-center">
          <LogoutButton token={token?.value} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
