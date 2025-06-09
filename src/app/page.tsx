import HeroHeader from "@/components/HeroHeader/HeroHeader";
import { fetchAdvertisements } from "@/fetch/employerAdvertise/fetchAdvertisements";
import { AdvertiseModel } from "@/models/Advertise";
import Carousel, { CarouselItem } from "@/ui/Carousel";

export default async function Home() {
  const adData = await fetchAdvertisements();
  const advertises: AdvertiseModel[] = adData.advertises;

  return (
    <main className="flex-col gap-4 flex justify-center">
      <HeroHeader />
      <Carousel header="تازه ترین آگهی ها">
        {advertises.map((ad) => {
          return <CarouselItem key={ad.id} title={ad.title} />;
        })}
      </Carousel>
      <Carousel header="لیست کارفرما">
        {advertises.map((ad) => {
          return <CarouselItem key={ad.id} title={ad.title} />;
        })}
      </Carousel>
      <Carousel header="لیست کارجو">
        {advertises.map((ad) => {
          return <CarouselItem key={ad.id} title={ad.title} />;
        })}
      </Carousel>
    </main>
  );
}
