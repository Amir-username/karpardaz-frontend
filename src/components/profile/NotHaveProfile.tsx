import Button from "@/ui/Button";
import Link from "next/link";

type NotHaveProfileProps = {
  id: number;
  role: "jobseeker" | "employer";
};

function NotHaveProfile({ id, role }: NotHaveProfileProps) {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col gap-4 py-64">
        <h3 className="text-xl text-neutral-dark">
          لطفا اول پروفایل خود را کامل کنید
        </h3>
        <Link href={`/profile/${role}/${id}/create`}>
          <Button text="تکمیل پروفایل" />
        </Link>
      </div>
    </div>
  );
}

export default NotHaveProfile;
