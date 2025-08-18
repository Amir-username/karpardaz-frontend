import HeroHeader from "@/components/HeroHeader/HeroHeader";
import { fetchEmplyoers } from "@/fetch/employer/fetchEmployers";
import { fetchAdvertisements } from "@/fetch/employerAdvertise/fetchAdvertisements";
import { fetchJobSeekers } from "@/fetch/jobseeker/fetchjobSeekers";
import { AdvertiseModel } from "@/models/Advertise";
import { EmployerDetail } from "@/models/EmployerDetail";
import { JobSeekerDetailModel } from "@/models/JobSeekerDetail";
import Carousel, { CarouselItem } from "@/ui/Carousel";
import Image from "next/image";

import github from "../../public/icons/github.svg";
import email from "../../public/icons/Emailicon.png";
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
    <main className="flex flex-col justify-center gap-4">
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
      <footer className="flex items-center justify-center w-full p-16 bg-gray-200 dark:bg-black h-64">
        <div className="flex flex-col gap-2">
          <div dir="ltr" className="flex gap-2 items-center">
            <Image
              className="dark:bg-neutral-light dark:rounded-full"
              src={github}
              width={32}
              height={32}
              alt="github icon"
            />
            <a
              href="https://github.com/Amir-username"
              className="dark:text-neutral-light"
            >
              https://github.com/Amir-username
            </a>
          </div>
          <div dir="ltr" className="flex gap-2 items-center">
            <Image src={email} width={32} height={32} alt="github icon" />
            <a className="dark:text-neutral-light">najiamirdesktop@gmail.com</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
