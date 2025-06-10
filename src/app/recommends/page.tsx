import AdvertiseList from "@/components/advertise/AdvertiseList";
import { fetchRecommendedAds } from "@/fetch/jobseekerAdvertise/fetchRecommendedAds";
import { AdvertiseModel } from "@/models/Advertise";
import { cookies } from "next/headers";

async function RecommendsPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const role = cookieStore.get("role");

  const jobsData: AdvertiseModel[] = await fetchRecommendedAds(
    token?.value!,
    3
  );

  return (
    <div className="container flex items-center justify-center mx-auto py-12 bg-neutral-light">
      <main className="flex flex-col gap-12">
        <h1 className="text-primary-blue text-2xl text-center">
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
