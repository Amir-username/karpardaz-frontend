import JobSeekerResult from "@/components/search/JobseekerResult";
import { cookies } from "next/headers";

async function JobSeekerAdsPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const role = cookieStore.get("role");

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 flex items-center justify-center">
      <JobSeekerResult token={token?.value} role={role?.value} />
    </div>
  );
}

export default JobSeekerAdsPage;
