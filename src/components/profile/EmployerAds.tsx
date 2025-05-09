import { AdvertiseModel } from "@/models/Advertise";
import AdvertiseList from "../advertise/AdvertiseList";
import Link from "next/link";
import Button from "@/ui/Button";
import { BASE_LINK } from "@/fetch/config";

async function EmployerAds({ id }: { id: number }) {
  const res = await fetch(BASE_LINK + `employer-ads/${id}`);
  const data = await res.json();

  const ads: AdvertiseModel[] = data;

  console.log(ads);

  if (ads.length !== 0) {
    return <AdvertiseList advertises={ads} />;
  }

  return (
    <Link href={`/profile/employer/advertise/${id}/create`}>
      <Button text="ایجاد آگهی" />
    </Link>
  );
}

export default EmployerAds;
