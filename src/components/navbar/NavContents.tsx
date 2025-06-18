import NavButtons from "./navButtons";
import NavItems from "./NavItems";

type NavContentsProps = {
    token?: string
    role?: string
}

function NavContents({token, role}: NavContentsProps) {
  return (
    <div className="flex">
      <NavItems token={token} role={role} />
      <NavButtons token={token} role={role}/>
      {/* <div className="items-center hidden pl-8 md:flex">
          <LogoutButton token={token?.value} />
        </div> */}
    </div>
  );
}

export default NavContents;
