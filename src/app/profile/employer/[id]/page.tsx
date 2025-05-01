import { fetchEmployerDetail } from "@/fetch/fetchEmployerDetail";
import { EmployerDetail } from "@/models/EmployerDetail";
import Profile from "@/components/profile/Profile";
import ProfileInfoItem from "@/components/profile/ProfileInfoItem";
import NotHaveProfile from "@/components/profile/NotHaveProfile";

async function EmployerProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const employer: EmployerDetail = await fetchEmployerDetail(Number(id));

  if (employer) {
    return (
      <Profile name={employer.company_name} description={employer.description}>
        <ProfileInfoItem content={employer.website} />
        <ProfileInfoItem content={employer.population} />
        <ProfileInfoItem content={employer.address} />
      </Profile>
    );
  }

  return <NotHaveProfile id={Number(id)} role="employer" />;
}

export default EmployerProfilePage;
