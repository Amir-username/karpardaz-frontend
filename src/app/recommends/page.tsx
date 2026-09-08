import AdvertiseList from "@/components/advertise/AdvertiseList";
import Button from "@/ui/Button";
import EmptyState from "@/ui/EmptyState";
import { fetchRecommendedAds } from "@/fetch/jobseekerAdvertise/fetchRecommendedAds";
import { AdvertiseModel } from "@/models/Advertise";
import { cookies } from "next/headers";

async function RecommendsPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const role = cookieStore.get("role");

  if (!token) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16">
        <EmptyState
          title="برای مشاهده پیشنهادها وارد شوید"
          description="پیشنهادهای شغلی بر اساس مهارت ها و علاقه مندی های پروفایل شما نمایش داده می شوند."
          action={
            <Button href="/auth/jobseeker/login" text="ورود به حساب" fullWidth={false} className="min-w-40" />
          }
        />
      </div>
    );
  }

  const jobsData: AdvertiseModel[] = await fetchRecommendedAds(
    token?.value,
    3
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 flex items-center justify-center">
      <main className="flex flex-col gap-10 w-full">
        <h1 className="text-2xl font-bold text-fg text-center">
          آگهی های پیشنهادی
        </h1>
        <AdvertiseList
          advertises={jobsData}
          token={token?.value}
          role={role?.value}
        />
      </main>
    </div>
  );
}

export default RecommendsPage;
