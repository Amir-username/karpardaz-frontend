import AdTags, { AdTag } from "@/components/advertise/AdTags";
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
    <div className="flex flex-col lg:px-96 pt-8 justify-between h-screen">
      <main className="flex flex-col gap-6">
        <AdDetailHeader title={advertise.title} subtitle={company.name} />
        <div className="flex justify-center py-4 w-full bg-gray-200">
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
            <AdDetailInfo
              text={
                advertise.is_experience
                  ? "با سابقه کار"
                  : "بدون نیاز به سابقه کار"
              }
            />
            {advertise.is_internship && <AdDetailInfo text="امکان کارآموزی" />}
            {advertise.is_portfolio && (
              <AdDetailInfo text="نیاز به نمونه کار" />
            )}
            {advertise.benefits.map((benefit, i) => {
              return <AdDetailInfo text={benefit} key={i} />;
            })}
          </div>
        </div>
        <p className="px-8 text-lg leading-8 text-neutral-dark">
          {advertise.description}
        </p>
        <div className="flex gap-4 px-8 justify-center">
          {advertise.technologies.map((tech, i) => {
            return <AdTag name={tech} key={i} size="lg" />;
          })}
        </div>
      </main>
      <div className="w-full">
      <Button text="ارسال رزومه" h="h-16"/>
      </div>
    </div>
  );
}

export default JobPage;
