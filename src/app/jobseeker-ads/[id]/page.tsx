import { AdTag } from "@/components/advertise/AdTags";
import AdDetailHeader from "@/components/advertise/detail/AdDetailHeader";
import AdDetailInfo from "@/components/advertise/detail/AdInfo";
import { fetchJobSeekerAdDetail } from "@/fetch/fetchJobSeekerAdDetail";
import { fetchJobSeekerDetail } from "@/fetch/fetchJobSeekerDetail";
import Button from "@/ui/Button";

async function JobSeekerAdDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const advertise: JobSeekrAdModel = await fetchJobSeekerAdDetail(Number(id));

  const jobseeker: JobSeekerModel = await fetchJobSeekerDetail(
    advertise.jobseeker_id
  );

  return (
    <div className="flex flex-col lg:mx-96 my-8 mx-4 justify-between h-screen shadow-lg rounded-lg">
      <main className="flex flex-col gap-4">
        <AdDetailHeader
          title={advertise.title}
          subtitle={`${advertise.firstname} ${advertise.lastname}`}
        />
        <div className="flex justify-center py-4 w-full bg-gray-200 rounded-lg">
          <div className="grid grid-cols-2">
            <AdDetailInfo text={jobseeker.city} />
            <AdDetailInfo text={advertise.salary} />
            <AdDetailInfo text={advertise.gender == "male" ? "اقا" : "خانم"} />
            <AdDetailInfo text={advertise.experience} />
            {advertise.is_internship && <AdDetailInfo text="امکان کارآموزی" />}
            {advertise.is_portfolio && <AdDetailInfo text="دارای نمونه کار" />}
          </div>
        </div>
        <p className="px-8 text-lg leading-8 py-8 text-neutral-dark">
          {advertise.description}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          {advertise.technologies.map((tech, i) => {
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
