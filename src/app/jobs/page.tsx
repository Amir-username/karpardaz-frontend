import JobsResult from "@/components/search/JobsResult";
import { cookies } from "next/headers";

async function Page() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const role = cookieStore.get("role");

  return (
    <div className="container flex items-center justify-center py-12 mx-auto bg-neutral-light dark:bg-neutral-950">
      <JobsResult token={token?.value} role={role?.value} />
    </div>
  );
}

export default Page;
