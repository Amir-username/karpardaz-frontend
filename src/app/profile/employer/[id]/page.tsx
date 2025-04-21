import Image from "next/image";
import DEFAULT_AVATAR from "../../../../../public/images/company_default_avatar.png";
import { fetchEmployerDetail } from "@/fetch/fetchEmployerDetail";
import { EmployerDetail } from "@/models/EmployerDetail";
import Profile from "@/components/profile/Profile";
import ProfileInfoItem from "@/components/profile/ProfileInfoItem";

async function EmployerProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const employer: EmployerDetail = await fetchEmployerDetail(Number(id));

  return (
    <Profile name={employer.company_name} description={employer.description}>
      <ProfileInfoItem content={employer.website} />
      <ProfileInfoItem content={employer.population} />
      <ProfileInfoItem content={employer.address} />
    </Profile>
  );
}

export default EmployerProfilePage;
