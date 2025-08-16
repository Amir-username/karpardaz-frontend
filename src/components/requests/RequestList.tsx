import { AdRequestModel } from "@/models/AdRequest";
import RequestItem from "./RequestItem";
import Image from "next/image";
import EmptyIll from "../../../public/Illustrations/NoDataILL.svg";

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
      {reversedRequests.length > 0 ? (
        reversedRequests.map((req) => {
          return <RequestItem key={req.id} request={req} role={role} />;
        })
      ) : (
        <div className="flex flex-col gap-8 w-48 h-48 my-12 mb-16">
          <Image src={EmptyIll} alt="" />
          <h3 className="text-center text-xl text-neutral-700 dark:text-neutral-light">
           درخواستی وجود ندارد
          </h3>
        </div>
      )}
    </ul>
  );
}
