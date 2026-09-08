import { AdTag } from "@/components/advertise/AdTags";
import AdDetailHeader from "@/components/advertise/detail/AdDetailHeader";
import AdDetailInfo from "@/components/advertise/detail/AdInfo";
import CollaborationButton from "@/components/jobseekerAdvertise/CollaborationButton";
import AdRequestEmployers from "@/components/requests/AdRequestEmployer";
import Icon from "@/ui/Icon";
import { BASE_LINK } from "@/fetch/config";
import { fetchJobSeekerAdDetail } from "@/fetch/jobseeker/fetchJobSeekerAdDetail";
import { fetchJobSeekerDetail } from "@/fetch/jobseeker/fetchJobSeekerDetail";
import { AdRequestModel } from "@/models/AdRequest";
import { EmployerDetail } from "@/models/EmployerDetail";
import { JobSeekrAdModel } from "@/models/JobSeekerAd";
import { JobSeekerDetailModel } from "@/models/JobSeekerDetail";
import { cookies } from "next/headers";

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

  const requestRes = await fetch(
    BASE_LINK + `jobseeker-ads-requests/${advertise.id}`
  );
  const requests: AdRequestModel[] = await requestRes.json();
  console.log(requests);

  const isRequested =
    requests.length &&
    requests.map((req) => {
      if (req.advertise_id === advertise.id) return true;
    });

  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const role = cookieStore.get("role");

  const EmployersRes = await fetch(
    BASE_LINK + `get-adrequest-employers/${advertise.id}`,
    {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token?.value}`,
      },
    }
  );
  const employers: EmployerDetail[] = await EmployersRes.json();

  return (
    <div className="max-w-4xl mx-auto my-8 px-4 flex flex-col justify-between gap-6">
      <main className="flex flex-col gap-0 rounded-2xl bg-card ring-1 ring-border shadow-soft overflow-hidden">
        <AdDetailHeader
          title={advertise.title}
          subtitle={`${jobseeker?.firstname} ${jobseeker?.lastname}`}
          role="jobseeker"
          id={advertise.jobseeker_id}
        />
        <div className="p-6 md:p-8 bg-bg">
          <h2 className="flex items-center gap-2 text-lg font-bold text-fg mb-4">
            <Icon name="fact_check" size={20} className="text-brand" />
            مشخصات
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <AdDetailInfo text={jobseeker.city} icon="house" label="شهر" />
            <AdDetailInfo text={jobseeker.salary} icon="payments" label="حقوق" />
            <AdDetailInfo
              text={jobseeker.gender == "male" ? "آقا" : "خانم"}
              icon="person"
              label="جنسیت"
            />
            <AdDetailInfo
              text={jobseeker.experience}
              icon="work_history"
              label="سابقه کار"
            />
            {jobseeker.is_internship && (
              <AdDetailInfo text="امکان کارآموزی" icon="school" />
            )}
            {jobseeker.is_portfolio && (
              <AdDetailInfo text="دارای نمونه کار" icon="laptop_mac" />
            )}
          </div>
        </div>
        <p className="px-6 md:px-8 pb-8 text-base leading-8 text-fg/90 whitespace-pre-line">
          {advertise.description}
        </p>
        <div className="flex flex-wrap gap-2.5 justify-center pb-8 px-8 border-b border-border">
          {jobseeker.technologies.map((tech, i) => {
            return <AdTag name={tech} key={i} size="lg" />;
          })}
        </div>

        {isRequested && role?.value === "employer" ? (
          <div className="px-6 md:px-8 pt-6">
            <div className="flex items-center justify-center gap-2 rounded-xl w-full bg-success-soft text-success-fg ring-1 ring-success/25 p-3 h-14 text-sm font-medium">
              <Icon name="check_circle" size={20} />
              درخواست همکاری قبلا ارسال شده است
            </div>
          </div>
        ) : (
          <CollaborationButton
            adID={advertise.id}
            role={role?.value}
            token={token?.value}
          />
        )}
      </main>
      {employers.length > 0 && <AdRequestEmployers employers={employers} />}
    </div>
  );
}

export default JobSeekerAdDetailPage;
