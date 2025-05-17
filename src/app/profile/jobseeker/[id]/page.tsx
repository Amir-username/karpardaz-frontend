import NotHaveProfile from "@/components/profile/NotHaveProfile";
import Profile from "@/components/profile/Profile";
import ProfileInfoItem from "@/components/profile/ProfileInfoItem";
import Resume from "@/components/resume/Resume";
import { fetchJobSeekerDetail } from "@/fetch/jobseeker/fetchJobSeekerDetail";
import { JobSeekerDetailModel } from "@/models/JobSeekerDetail";

async function JobSeekerProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const jobseeker: JobSeekerDetailModel = await fetchJobSeekerDetail(
    Number(id)
  );

  if (jobseeker) {
    return (
      <Profile
        name={`${jobseeker.firstname} ${jobseeker.lastname}`}
        description={jobseeker?.description}
        technologies={jobseeker?.technologies}
        role="jobseeker"
        id={Number(id)}
      >
        <ProfileInfoItem content={jobseeker?.job_group} />
        {!(jobseeker.experience === "بدون سابقه کار") && (
          <ProfileInfoItem content={jobseeker?.experience} />
        )}
        <ProfileInfoItem content={jobseeker?.position} />
        <Resume id={Number(id)} />;
      </Profile>
    );
  }

  return <NotHaveProfile role="jobseeker" id={Number(id)} />;
}

export default JobSeekerProfilePage;
