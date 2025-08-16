import { AdvertiseModel } from "@/models/Advertise";
import AdvertiseList from "../advertise/AdvertiseList";
import Link from "next/link";
import Button from "@/ui/Button";
import { BASE_LINK } from "@/fetch/config";
import { Container } from "./Profile";

async function EmployerAds({ id }: { id: number }) {
  const res = await fetch(BASE_LINK + `employer-ads/${id}`);
  const data = await res.json();

  const ads: AdvertiseModel[] = data;

  return (
    <Container bg="neutral">
      <div className="flex flex-col gap-8">
        <h1 className="text-primary-blue dark:text-neutral-light text-2xl text-center">
          موقعیت های شغلی
        </h1>

        {ads.length > 0 && <AdvertiseList advertises={ads} />}
        <Link href={`/profile/employer/advertise/${id}/create`}>
          <Button text="ایجاد آگهی" />
        </Link>
      </div>
    </Container>
  );
}

export default EmployerAds;
