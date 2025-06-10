import HeroHeader from "@/components/HeroHeader/HeroHeader";
import { fetchEmplyoers } from "@/fetch/employer/fetchEmployers";
import { fetchAdvertisements } from "@/fetch/employerAdvertise/fetchAdvertisements";
import { fetchJobSeekers } from "@/fetch/jobseeker/fetchjobSeekers";
import { AdvertiseModel } from "@/models/Advertise";
import { EmployerDetail } from "@/models/EmployerDetail";
import { JobSeekerDetailModel } from "@/models/JobSeekerDetail";
import Carousel, { CarouselItem } from "@/ui/Carousel";

export default async function Home() {
  const adData = await fetchAdvertisements();
  const advertises: AdvertiseModel[] = adData.advertises;

  const emData = await fetchEmplyoers();
  const employers: EmployerDetail[] = emData;

  const jsData = await fetchJobSeekers();
  const jobseekers: JobSeekerDetailModel[] = jsData;

  return (
    <main className="flex-col gap-4 flex justify-center">
      <HeroHeader />
      <Carousel header="تازه ترین آگهی ها">
        {advertises.slice(0, 7).map((ad) => {
          return <CarouselItem key={ad.id} title={ad.title} />;
        })}
      </Carousel>
      <Carousel header="لیست کارفرما">
        {employers.slice(0, 7).map((em) => {
          return (
            <CarouselItem
              key={em.id}
              title={em.company_name}
              id={em.id}
              role="employer"
            />
          );
        })}
      </Carousel>
      <Carousel header="لیست کارجو">
        {jobseekers.slice(0, 7).map((jobseeker) => {
          return (
            <CarouselItem
              key={jobseeker.id}
              title={`${jobseeker.firstname} ${jobseeker.lastname}`}
              role="jobseeker"
              id={jobseeker.id}
            />
          );
        })}
      </Carousel>
    </main>
  );
}
