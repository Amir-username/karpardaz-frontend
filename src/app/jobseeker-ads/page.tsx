import JobSeekerResult from "@/components/search/JobseekerResult";
import { cookies } from "next/headers";

async function JobSeekerAdsPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const role = cookieStore.get("role");

  return (
    <div className="container flex items-center justify-center mx-auto py-12 bg-neutral-light">
      <JobSeekerResult token={token?.value} role={role?.value} />
    </div>
  );
}

export default JobSeekerAdsPage;
