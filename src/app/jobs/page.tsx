import JobsResult from "@/components/search/JobsResult";
import { cookies } from "next/headers";

async function Page() {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')
  const role = cookieStore.get('role')


  return (
    <div className="container flex items-center justify-center mx-auto py-12 bg-neutral-light">
      <JobsResult token={token?.value} role={role?.value}/>
    </div>
  );
}

export default Page;
