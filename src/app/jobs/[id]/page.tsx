import { AdTag } from "@/components/advertise/AdTags";
import AdDetailHeader from "@/components/advertise/detail/AdDetailHeader";
import AdDetailInfo from "@/components/advertise/detail/AdInfo";
import { fetchAdvertiseDetail } from "@/fetch/employerAdvertise/fetchAdvertiseDetail";
import { fetchEmployerDetail } from "@/fetch/employer/fetchEmployerDetail";
import { AdvertiseModel } from "@/models/Advertise";
import { EmployerModel } from "@/models/Employer";
import { AdRequestModel } from "@/models/AdRequest";
import { BASE_LINK } from "@/fetch/config";
import SendResumeButton from "@/components/advertise/detail/SendResumeButton";
import { cookies } from "next/headers";
import AdAvatar from "@/components/advertise/AdAvater";
import { JobSeekerModel } from "@/models/JobSeeker";
import { JobSeekerDetailModel } from "@/models/JobSeekerDetail";
import AdRequestJobSeekers from "@/components/requests/AdRequestJobSeekers";

async function JobPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const advertise: AdvertiseModel = await fetchAdvertiseDetail(Number(id));

  const companyData = await fetchEmployerDetail(advertise.employer_id);
  const company: EmployerModel = {
    id: companyData.id,
    name: companyData.company_name,
  };

  const requestRes = await fetch(
    BASE_LINK + `advertise-requests/${advertise.id}`
  );
  const requests: AdRequestModel[] = await requestRes.json();

  const isRequested =
    requests.length &&
    requests.map((req) => {
      if (req.advertise_id === advertise.id) return true;
    });

  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const role = cookieStore.get("role");

  const jobseekersRes = await fetch(
    BASE_LINK + `get-adrequest-jobseekers/${advertise.id}`,
    {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token?.value}`,
      },
    }
  );
  const jobseekers: JobSeekerDetailModel[] = await jobseekersRes.json();

  return (
    <div className="flex flex-col lg:mx-96 my-8 mx-4 shadow-lg h-full rounded-lg">
      <main className="flex flex-col gap-4">
        <AdDetailHeader
          title={advertise.title}
          subtitle={company.name}
          role="employer"
          id={advertise.employer_id}
        />
        <div className="flex justify-center py-4 w-full bg-gray-200 rounded-lg">
          <div className="grid grid-cols-2 gap-2">
            <AdDetailInfo text={advertise.city} icon="location_city" />
            <AdDetailInfo text={advertise.salary} icon="payments" />
            <AdDetailInfo
              text={
                advertise.gender == "male"
                  ? "فقط اقا"
                  : advertise.gender == "female"
                  ? "فقط خانم"
                  : "آقا یا خانم"
              }
              icon="wc"
            />
            <AdDetailInfo text={advertise.experience} icon="badge" />
            {advertise.is_internship && (
              <AdDetailInfo text="امکان کارآموزی" icon="assignment" />
            )}
            {advertise.is_portfolio && (
              <AdDetailInfo text="نیاز به نمونه کار" icon="laptop_mac" />
            )}
            {advertise.benefits.map((benefit, i) => {
              return (
                <AdDetailInfo text={benefit} key={i} icon="person_shield" />
              );
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

        {isRequested && role?.value === "jobseeker" ? (
          <div className="flex items-center justify-center rounded-lg text-neutral-dark w-full bg-gray-300 p-2 h-16">
            رزومه قبلا ارسال شده
          </div>
        ) : (
          <SendResumeButton
            token={token?.value}
            role={role?.value}
            adID={advertise.id}
          />
        )}
        {jobseekers.length && <AdRequestJobSeekers jobseekers={jobseekers} />}
      </main>
    </div>
  );
}

export default JobPage;
