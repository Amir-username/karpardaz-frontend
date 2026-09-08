import Button from "@/ui/Button";
import EmptyState from "@/ui/EmptyState";

type NotHaveProfileProps = {
  id: number;
  role: "jobseeker" | "employer";
};

function NotHaveProfile({ id, role }: NotHaveProfileProps) {
  return (
    <div className="flex justify-center items-center px-4">
      <EmptyState
        title="پروفایل شما هنوز کامل نشده است"
        description="برای استفاده از امکانات کارپرداز، ابتدا اطلاعات پروفایل خود را تکمیل کنید."
        action={
          <Button href={`/profile/${role}/${id}/create`} text="تکمیل پروفایل" fullWidth={false} className="min-w-44" />
        }
        className="py-24"
      />
    </div>
  );
}

export default NotHaveProfile;
