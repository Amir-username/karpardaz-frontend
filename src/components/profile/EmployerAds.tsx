import { AdvertiseModel } from "@/models/Advertise";
import AdvertiseList from "../advertise/AdvertiseList";
import Button from "@/ui/Button";
import { BASE_LINK } from "@/fetch/config";
import { Container } from "./Profile";

async function EmployerAds({ id }: { id: number }) {
  const res = await fetch(BASE_LINK + `employer-ads/${id}`);
  const data = await res.json();

  const ads: AdvertiseModel[] = data;

  return (
    <Container bg="neutral">
      <div className="flex flex-col items-center gap-6 w-full px-3 sm:px-5">
        <h1 className="flex items-center gap-2 text-xl font-bold text-fg">
          <span className="w-1.5 h-5 rounded-full bg-brand" aria-hidden="true" />
          موقعیت های شغلی
        </h1>

        {ads.length > 0 ? (
          <AdvertiseList advertises={ads} variant="compact" />
        ) : (
          <p className="text-sm text-fg-muted">هنوز آگهی ثبت نشده است</p>
        )}
        <Button
          href={`/profile/employer/advertise/${id}/create`}
          text="ایجاد آگهی"
          fullWidth={false}
          className="min-w-40"
        />
      </div>
    </Container>
  );
}

export default EmployerAds;
