import { AdRequestModel } from "@/models/AdRequest";
import RequestItem from "./RequestItem";
import EmptyState from "@/ui/EmptyState";

export default function RequestList({
  requests,
  role,
}: {
  requests: AdRequestModel[];
  role: "jobseeker" | "employer";
}) {
  const reversedRequests: AdRequestModel[] = [...requests].reverse();
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
      {reversedRequests.length > 0 ? (
        reversedRequests.map((req) => {
          return <RequestItem key={req.id} request={req} role={role} />;
        })
      ) : (
        <EmptyState
          title="درخواستی وجود ندارد"
          description="هر زمان برای آگهی ها درخواست ارسال کنید، وضعیت آن ها را اینجا می بینید."
          className="md:col-span-2 xl:col-span-3"
        />
      )}
    </ul>
  );
}
