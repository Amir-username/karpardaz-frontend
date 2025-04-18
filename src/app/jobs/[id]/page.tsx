import { AdTag } from "@/components/advertise/AdTags";
import AdDetailHeader from "@/components/advertise/detail/AdDetailHeader";
import AdDetailInfo from "@/components/advertise/detail/AdInfo";
import { fetchAdvertiseDetail } from "@/fetch/fetchAdvertiseDetail";
import { fetchEmployerDetail } from "@/fetch/fetchEmployerDetail";
import { AdvertiseModel } from "@/models/Advertise";
import { EmployerModel } from "@/models/Employer";
import Button from "@/ui/Button";

async function JobPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const advertise: AdvertiseModel = await fetchAdvertiseDetail(Number(id));

  const companyData = await fetchEmployerDetail(advertise.employer_id);
  const company: EmployerModel = {
    id: companyData.id,
    name: companyData.company_name,
  };

  return (
    <div className="flex flex-col lg:mx-96 my-8 mx-4 shadow-lg h-full rounded-lg">
      <main className="flex flex-col gap-4">
        <AdDetailHeader title={advertise.title} subtitle={company.name} />
        <div className="flex justify-center py-4 w-full bg-gray-200 rounded-lg">
          <div className="grid grid-cols-2">
            <AdDetailInfo text={advertise.city} />
            <AdDetailInfo text={advertise.salary} />
            <AdDetailInfo
              text={
                advertise.gender == "male"
                  ? "فقط اقا"
                  : advertise.gender == "female"
                  ? "فقط خانم"
                  : "آقا یا خانم"
              }
            />
            <AdDetailInfo text={advertise.experience} />
            {advertise.is_internship && <AdDetailInfo text="امکان کارآموزی" />}
            {advertise.is_portfolio && (
              <AdDetailInfo text="نیاز به نمونه کار" />
            )}
            {advertise.benefits.map((benefit, i) => {
              return <AdDetailInfo text={benefit} key={i} />;
            })}
          </div>
        </div>
        <p className="px-8 text-lg leading-8 py-8 text-neutral-dark">
          {advertise.description}
        </p>
        <div className="flex flex-wrap gap-4 justify-center pb-8">
          {advertise.technologies.map((tech, i) => {
            return <AdTag name={tech} key={i} size="lg" />;
          })}
        </div>
        <div className="w-full">
          <Button text="ارسال رزومه" h="h-16" />
        </div>
      </main>
    </div>
  );
}

export default JobPage;
