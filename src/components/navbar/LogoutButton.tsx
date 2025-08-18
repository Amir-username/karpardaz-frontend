'use client'

import { LogoutAction } from "@/actions/auth/logout/LogoutAction";

function LogoutButton() {
  const onLogout = async () => {
    await LogoutAction()
  }

  return (
    // <form action={LogoutAction} className={`${!token && "hidden"}`}>
      <button onClick={onLogout} className="flex items-center gap-1 px-3 py-2 rounded-lg cursor-pointer ring-1 ring-neutral-mid hover:bg-neutral-200 hover:dark:bg-neutral-dark">
        <span className="material-symbols-outlined text-neutral-mid">
          logout
        </span>
        <span className="dark:text-neutral-light">خروج</span>
      </button>
    // </form>
  );
}

export default LogoutButton;
