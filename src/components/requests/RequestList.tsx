import { AdRequestModel } from "@/models/AdRequest";
import RequestItem from "./RequestItem";

export default function RequestList({
  requests,
}: {
  requests: AdRequestModel[];
}) {
  const reversedRequests: AdRequestModel[] = requests.reverse();
  return (
    <ul className="flex flex-col gap-3">
      {reversedRequests.map((req) => {
        return <RequestItem key={req.id} request={req} />;
      })}
    </ul>
  );
}
