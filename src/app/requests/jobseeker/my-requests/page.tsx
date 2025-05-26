import RequestList from "@/components/requests/RequestList";
import { BASE_LINK } from "@/fetch/config";
import { AdRequestModel } from "@/models/AdRequest";
import { cookies } from "next/headers";

export default async function MyRequestsPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const role = cookieStore.get("role");

  const res = await fetch(BASE_LINK + "get-jobseeker-requests/", {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token?.value}`,
    },
  });

  const data = await res.json();

  return (
    <div className="flex flex-col gap-16 mt-8 items-center justify-center">
      <h1 className="text-xl lg:text-3xl text-primary-blue font-bold">درخواست های من</h1>
      <RequestList requests={data} />
    </div>
  );
}
