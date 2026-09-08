import JobSeekerAdCreateForm from "@/components/jobseekerAdvertise/JobSeekerAdCreateForm";
import { cookies } from "next/headers";

async function JobSeekerAdCreatePage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const role = cookieStore.get("role");

  if (token && role) {
    return <JobSeekerAdCreateForm token={token.value} role={role.value} />;
  }
}

export default JobSeekerAdCreatePage;
