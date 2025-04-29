import { LogoutAction } from "@/actions/auth/logout/LogoutAction";

function LogoutButton({ token }: { token?: string }) {
  return (
    <form action={LogoutAction} className={`${!token && "hidden"}`}>
      <button className="flex gap-1 px-3 py-2 rounded-lg ring-1 ring-neutral-mid items-center cursor-pointer hover:bg-neutral-200">
        <span className="material-symbols-outlined text-neutral-mid">
          logout
        </span>
        <span>خروج</span>
      </button>
    </form>
  );
}

export default LogoutButton;
