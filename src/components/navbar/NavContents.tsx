import NavButtons from "./navButtons";
import NavItems from "./NavItems";
import ThemeToggle from "./ThemeToggle";

type NavContentsProps = {
  token?: string;
  role?: string;
};

function NavContents({ token, role }: NavContentsProps) {
  return (
    <div className="flex items-center">
      <NavItems token={token} role={role} />
      <NavButtons token={token} role={role} />
      <ThemeToggle />
    </div>
  );
}

export default NavContents;
