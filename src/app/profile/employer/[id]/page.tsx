import { fetchEmployerDetail } from "@/fetch/employer/fetchEmployerDetail";
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
  const idNum = Number(id)
  const employer: EmployerDetail = await fetchEmployerDetail(idNum);

  if (employer) {
    return (
      <Profile
        name={employer.company_name}
        description={employer.description}
        role="employer"
        id={Number(id)}
      >
        <ProfileInfoItem content={employer.website} />
        <ProfileInfoItem content={employer.population} />
        <ProfileInfoItem content={employer.address} />
      </Profile>
    );
  }

  return <NotHaveProfile id={Number(id)} role="employer" />;
}

export default EmployerProfilePage;
