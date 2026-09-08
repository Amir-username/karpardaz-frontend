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
import StickyApplyBar from "@/components/advertise/detail/StickyApplyBar";
import { cookies } from "next/headers";
import { JobSeekerDetailModel } from "@/models/JobSeekerDetail";
import AdRequestJobSeekers from "@/components/requests/AdRequestJobSeekers";
import Interview from "@/components/interview/Iterview";
import Icon from "@/ui/Icon";
import { fetchCurrentJobSeeker } from "@/fetch/jobseeker/fetchCurrentJobseeker";
import { fetchCurrentEmployer } from "@/fetch/employer/fetchCurrentEmployer";
import { EmployerDetail } from "@/models/EmployerDetail";

const positionLabel = {
  junior: "جونیور",
  midlevel: "میدلول",
  senior: "سنیور",
} as const;

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

  const jobseeker: JobSeekerDetailModel = await fetchCurrentJobSeeker(
    token?.value
  );

  const currEmployer: EmployerDetail = await fetchCurrentEmployer(
    token?.value
  );

  return (
    <div className="max-w-4xl mx-auto my-8 px-4">
      <main className="flex flex-col gap-0 rounded-2xl bg-card ring-1 ring-border shadow-soft overflow-hidden">
        <AdDetailHeader
          title={advertise.title}
          subtitle={company.name}
          role="employer"
          id={advertise.employer_id}
        />
        <div className="p-6 md:p-8 bg-bg">
          <h2 className="flex items-center gap-2 text-lg font-bold text-fg mb-4">
            <Icon name="fact_check" size={20} className="text-brand" />
            مشخصات شغلی
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <AdDetailInfo text={advertise.city} icon="location_city" label="شهر" />
            <AdDetailInfo text={advertise.salary} icon="payments" label="حقوق" />
            <AdDetailInfo
              text={positionLabel[advertise.position] ?? advertise.position}
              icon="workspace_premium"
              label="سطح شغلی"
            />
            <AdDetailInfo
              text={advertise.job_group}
              icon="category"
              label="گروه شغلی"
            />
            <AdDetailInfo
              text={advertise.experience}
              icon="work_history"
              label="سابقه کار"
            />
            <AdDetailInfo
              text={
                advertise.gender == "male"
                  ? "فقط آقا"
                  : advertise.gender == "female"
                  ? "فقط خانم"
                  : "آقا یا خانم"
              }
              icon="person"
              label="جنسیت"
            />
            <AdDetailInfo
              text={advertise.is_remote ? "دورکاری" : "حضوری"}
              icon={advertise.is_remote ? "home_work" : "apartment"}
              label="نوع همکاری"
            />
            {advertise.is_internship && (
              <AdDetailInfo text="امکان کارآموزی" icon="school" />
            )}
            {advertise.is_portfolio && (
              <AdDetailInfo text="نیاز به نمونه کار" icon="laptop_mac" />
            )}
            {advertise.benefits.map((benefit, i) => {
              return <AdDetailInfo text={benefit} key={i} icon="redeem" />;
            })}
          </div>
        </div>
        <p className="px-6 md:px-8 pb-8 text-base leading-8 text-fg/90 whitespace-pre-line">
          {advertise.description}
        </p>
        <div className="flex flex-wrap gap-2.5 justify-center pb-8 px-8 border-b border-border">
          {advertise.technologies.map((tech, i) => {
            return <AdTag name={tech} key={i} size="lg" />;
          })}
        </div>

        {isRequested && role?.value === "jobseeker" ? (
          <div id="apply-section" className="px-6 md:px-8 pt-6">
            <div className="flex items-center justify-center gap-2 rounded-xl w-full bg-success-soft text-success-fg ring-1 ring-success/25 p-3 h-14 text-sm font-medium">
              <Icon name="check_circle" size={20} />
              رزومه شما قبلا برای این آگهی ارسال شده است
            </div>
          </div>
        ) : (
          <SendResumeButton
            token={token?.value}
            role={role?.value}
            adID={advertise.id}
          />
        )}
        {jobseekers.length ? (
          <AdRequestJobSeekers
            jobseekers={jobseekers}
            advertiseID={Number(id)}
            token={token?.value}
          />
        ) : null}
      </main>

      <section className="flex gap-6 items-center justify-center p-8 flex-col">
        <h1 className="text-xl font-bold text-fg">مصاحبه آنلاین</h1>
        {role?.value &&
          (role.value === "jobseeker" ? (
            <Interview
              user_id={jobseeker.id!}
              advertise={advertise}
              role={role.value}
            />
          ) : (
            <Interview
              user_id={currEmployer.id}
              advertise={advertise}
              role={role.value}
            />
          ))}
      </section>

      <StickyApplyBar
        title={advertise.title}
        subtitle={company.name}
        salary={advertise.salary}
        city={advertise.city}
        adID={advertise.id}
        token={token?.value}
        role={role?.value}
        isRequested={Boolean(isRequested)}
      />
    </div>
  );
}

export default JobPage;
