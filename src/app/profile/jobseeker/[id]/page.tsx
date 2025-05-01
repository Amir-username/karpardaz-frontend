import Profile from "@/components/profile/Profile";
import ProfileInfoItem from "@/components/profile/ProfileInfoItem";
import { fetchJobSeekerDetail } from "@/fetch/fetchJobSeekerDetail";
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
  return (
    <Profile
      name={`${jobseeker.firstname} ${jobseeker.lastname}`}
      description={jobseeker?.description}
      technologies={jobseeker?.technologies}
    >
      <ProfileInfoItem content={jobseeker?.job_group} />
      <ProfileInfoItem content={jobseeker?.experience} />
      <ProfileInfoItem content={jobseeker?.salary} />
    </Profile>
  );
}

export default JobSeekerProfilePage;
