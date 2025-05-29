import { AdTag } from "@/components/advertise/AdTags";
import AdDetailHeader from "@/components/advertise/detail/AdDetailHeader";
import AdDetailInfo from "@/components/advertise/detail/AdInfo";
import CollaborationButton from "@/components/jobseekerAdvertise/CollaborationButton";
import AdRequestEmployers from "@/components/requests/AdRequestEmployer";
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
    <div className="flex flex-col lg:mx-96 my-8 mx-4 h-full justify-between shadow-lg rounded-lg gap-6">
      <main className="flex flex-col gap-4">
        <AdDetailHeader
          title={advertise.title}
          subtitle={`${jobseeker?.firstname} ${jobseeker?.lastname}`}
          role="jobseeker"
          id={advertise.jobseeker_id}
        />
        <div className="flex justify-center py-4 w-full bg-gray-200 rounded-lg">
          <div className="grid grid-cols-2">
            <AdDetailInfo text={jobseeker.city} icon="house" />
            <AdDetailInfo text={jobseeker.salary} icon="payments" />
            <AdDetailInfo
              text={jobseeker.gender == "male" ? "اقا" : "خانم"}
              icon="wc"
            />
            <AdDetailInfo text={jobseeker.experience} icon="badge" />
            {jobseeker.is_internship && (
              <AdDetailInfo text="امکان کارآموزی" icon="assignment" />
            )}
            {jobseeker.is_portfolio && (
              <AdDetailInfo text="دارای نمونه کار" icon="laptop_mac" />
            )}
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

      {isRequested && role?.value === "employer" ? (
        <div className="flex items-center justify-center rounded-lg text-neutral-dark w-full bg-gray-300 p-2 h-16">
          درخواست قبلا ارسال شده
        </div>
      ) : (
        <CollaborationButton />
      )}
      {employers.length && <AdRequestEmployers employers={employers} />}
    </div>
  );
}

export default JobSeekerAdDetailPage;
