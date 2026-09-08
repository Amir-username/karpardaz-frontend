import HeroHeader from "@/components/HeroHeader/HeroHeader";
import Footer from "@/components/footer/Footer";
import { fetchEmplyoers } from "@/fetch/employer/fetchEmployers";
import { fetchAdvertisements } from "@/fetch/employerAdvertise/fetchAdvertisements";
import { fetchJobSeekers } from "@/fetch/jobseeker/fetchjobSeekers";
import { AdvertiseModel } from "@/models/Advertise";
import { EmployerDetail } from "@/models/EmployerDetail";
import { JobSeekerDetailModel } from "@/models/JobSeekerDetail";
import Carousel, { CarouselItem } from "@/ui/Carousel";
import { fetchData } from "@/fetch/fetchData";
import ErrorCarousel from "@/components/error/ErrorCarousel";

type AdvertisesResType = {
  total_pages: number;
  advertises: AdvertiseModel[];
};

export default async function Home() {
  const { data: adData } = await fetchData<AdvertisesResType>(
    fetchAdvertisements
  );
  const advertises: AdvertiseModel[] = adData ? adData.advertises : [];

  const { data: emData } = await fetchData<EmployerDetail[]>(fetchEmplyoers);
  const employers: EmployerDetail[] = emData ? emData : [];

  const { data: jsData } = await fetchData<JobSeekerDetailModel[]>(
    fetchJobSeekers
  );
  const jobseekers: JobSeekerDetailModel[] = jsData ? jsData : [];

  return (
    <main className="flex flex-col justify-center gap-2">
      <HeroHeader />
      {advertises.length > 0 ? (
        <Carousel link="/jobs" header="تازه ترین آگهی ها">
          {advertises?.slice(0, 6).map((ad) => {
            return (
              <CarouselItem
                key={ad.id}
                title={ad.title}
                link={`/jobs/${ad.id}/`}
              />
            );
          })}
        </Carousel>
      ) : (
        <ErrorCarousel />
      )}
      {employers.length > 0 ? (
        <Carousel header="لیست کارفرما">
          {employers.slice(0, 6).map((em) => {
            return (
              <CarouselItem
                key={em.id}
                title={em.company_name}
                id={em.id}
                role="employer"
                link={`/profile/employer/${em.id}/`}
              />
            );
          })}
        </Carousel>
      ) : (
        <ErrorCarousel />
      )}
      {jobseekers.length > 0 ? (
        <Carousel header="لیست کارجو">
          {jobseekers.slice(0, 6).map((jobseeker) => {
            return (
              <CarouselItem
                key={jobseeker.id}
                title={`${jobseeker.firstname} ${jobseeker.lastname}`}
                role="jobseeker"
                id={jobseeker.id}
                link={`/profile/jobseeker/${jobseeker.id}/`}
              />
            );
          })}
        </Carousel>
      ) : (
        <ErrorCarousel />
      )}
      <Footer />
    </main>
  );
}
