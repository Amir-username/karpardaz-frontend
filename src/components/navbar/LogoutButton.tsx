'use client'

import { LogoutAction } from "@/actions/auth/logout/LogoutAction";
import Icon from "@/ui/Icon";

function LogoutButton() {
  const onLogout = async () => {
    await LogoutAction()
  }

  return (
    <button
      onClick={onLogout}
      className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl cursor-pointer text-danger-fg ring-1 ring-danger/30 bg-danger-soft hover:brightness-95 transition-all"
    >
      <Icon name="logout" size={18} />
      <span className="text-sm font-medium">خروج از حساب</span>
    </button>
  );
}

export default LogoutButton;
