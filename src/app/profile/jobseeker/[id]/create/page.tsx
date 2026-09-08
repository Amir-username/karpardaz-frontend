import JobSeekerDetailCreateForm from "@/components/jobseekerDetailForm/JobSeekerDetailCreateForm";
import { cookies } from "next/headers";

async function JobSeekerCreateDetailPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const role = cookieStore.get("role");

  if (token && role) {
    return (
      <JobSeekerDetailCreateForm token={token?.value} role={role?.value} />
    );
  }
}
export default JobSeekerCreateDetailPage;
