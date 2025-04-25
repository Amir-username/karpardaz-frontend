import { AdTag } from "@/components/advertise/AdTags";
import AdDetailHeader from "@/components/advertise/detail/AdDetailHeader";
import AdDetailInfo from "@/components/advertise/detail/AdInfo";
import { fetchJobSeekerAdDetail } from "@/fetch/fetchJobSeekerAdDetail";
import { fetchJobSeekerDetail } from "@/fetch/fetchJobSeekerDetail";
import { JobSeekrAdModel } from "@/models/JobSeekerAd";
import { JobSeekerDetailModel } from "@/models/JobSeekerDetail";
import Button from "@/ui/Button";

async function JobSeekerAdDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const advertise: JobSeekrAdModel = await fetchJobSeekerAdDetail(Number(id));

  const jobseeker: JobSeekerDetailModel = await fetchJobSeekerDetail(
    advertise.jobseeker_id
  );

  return (
    <div className="flex flex-col lg:mx-96 my-8 mx-4 h-full justify-between shadow-lg rounded-lg">
      <main className="flex flex-col gap-4">
        <AdDetailHeader
          title={advertise.title}
          subtitle={`${jobseeker?.firstname} ${jobseeker?.lastname}`}
          role="jobseeker"
          id={advertise.jobseeker_id}
        />
        <div className="flex justify-center py-4 w-full bg-gray-200 rounded-lg">
          <div className="grid grid-cols-2">
            <AdDetailInfo text={jobseeker.city} icon="house"/>
            <AdDetailInfo text={jobseeker.salary} icon="payments"/>
            <AdDetailInfo text={jobseeker.gender == "male" ? "اقا" : "خانم"} icon="wc"/>
            <AdDetailInfo text={jobseeker.experience} icon="badge"/>
            {jobseeker.is_internship && <AdDetailInfo text="امکان کارآموزی" icon="assignment"/>}
            {jobseeker.is_portfolio && <AdDetailInfo text="دارای نمونه کار" icon="laptop_mac"/>}
          </div>
        </div>
        <p className="px-8 text-lg leading-8 py-8 text-neutral-dark">
          {advertise.description}
        </p>
        <div className="flex flex-wrap gap-4 justify-center pb-8">
          {jobseeker.technologies.map((tech, i) => {
            return <AdTag name={tech} key={i} size="lg" />;
          })}
        </div>
      </main>
      <div className="w-full">
        <Button text="درخواست همکاری" h="h-16" />
      </div>
    </div>
  );
}

export default JobSeekerAdDetailPage;
