import HeroHeader from "@/components/HeroHeader/HeroHeader";
import Carousel, { CarouselItem } from "@/ui/Carousel";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="w-full flex-col flex justify-center">
      <HeroHeader />
      <Carousel header="تازه ترین آگهی ها">
        <CarouselItem title="برنامه نویس بکند"/>
        <CarouselItem title="برنامه نویس بکند"/>
        <CarouselItem title="برنامه نویس بکند"/>
        <CarouselItem title="برنامه نویس بکند"/>
        <CarouselItem title="برنامه نویس بکند"/>
        <CarouselItem title="برنامه نویس بکند"/>
      </Carousel>
    </main>
  );
}
