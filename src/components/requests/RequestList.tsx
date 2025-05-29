import { AdRequestModel } from "@/models/AdRequest";
import RequestItem from "./RequestItem";

export default function RequestList({
  requests,
  role,
}: {
  requests: AdRequestModel[];
  role: "jobseeker" | "employer";
}) {
  const reversedRequests: AdRequestModel[] = requests.reverse();
  return (
    <ul className="flex flex-col gap-6 mb-32">
      {reversedRequests.map((req) => {
        return <RequestItem key={req.id} request={req} role={role}/>;
      })}
    </ul>
  );
}
