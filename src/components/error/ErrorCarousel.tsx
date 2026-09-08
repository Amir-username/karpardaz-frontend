import Icon from "@/ui/Icon";

export default function ErrorCarousel() {
  return (
    <div className="flex items-center justify-center gap-2 w-[calc(100%-4rem)] sm:w-[calc(100%-8rem)] mx-auto p-4 rounded-2xl bg-danger-soft text-danger-fg ring-1 ring-danger/25 text-sm font-medium">
      <Icon name="wifi_off" size={18} />
      خطا در دریافت اطلاعات
    </div>
  );
}
