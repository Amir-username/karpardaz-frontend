import Profile from "@/components/profile/Profile";
import { fetchJobSeekerDetail } from "@/fetch/fetchJobSeekerDetail";

async function JobSeekerProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const jobseeker = await fetchJobSeekerDetail(Number(id));
  console.log(jobseeker);

  return (
    <div></div>
    // <Profile name={jobseeker.firs} description={employer.description}>
    //   <ProfileInfoItem content={employer.website} />
    //   <ProfileInfoItem content={employer.population} />
    //   <ProfileInfoItem content={employer.address} />
    // </Profile>
  );
}

export default JobSeekerProfilePage;
