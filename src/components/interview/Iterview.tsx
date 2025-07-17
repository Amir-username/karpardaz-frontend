import { fetchGetInterview } from "@/fetch/interview/fetchGetInterview";
import Link from "next/link";
import { InterviewType } from "./Answer";
import { AdvertiseModel } from "@/models/Advertise";

export default async function Interview({
  advertise,
  role,
  user_id,
}: {
  advertise: AdvertiseModel;
  role: string;
  user_id: number;
}) {
  const interview: InterviewType = await fetchGetInterview(advertise.id);

  if (role === "employer") {
    if (!interview) {
      if (user_id === advertise.employer_id) {
        return (
          <Link href={`/interview/${advertise.id}/create/`}>
            <div className="bg-primary-blue dark:bg-primary-blue-dark px-3 hover:brightness-105 py-2 text-neutral-light rounded-lg text-sm cursor-pointer">
              ایجاد مصاحبه
            </div>
          </Link>
        );
      }
      else {
        return null
      }
    }

    return (
      <div className="bg-primary-blue dark:bg-primary-blue-dark px-3 hover:brightness-105 py-2 text-neutral-light rounded-lg text-sm cursor-pointer">
        مشاهده مصاحبه
      </div>
    );
  }

  if (role === "jobseeker") {
    if (!interview) {
      return <div className="text-neutral-mid">مصاحبه ای وجود ندارد</div>;
    }

    if (interview && interview.jobseeker_ids.includes(user_id)) {
      return <div className="text-green-500">قبلا در این مصاحبه شرکت کرده اید</div>;
    }

    return (
      <Link href={`/interview/${advertise.id}/answer/`}>
        <div className="bg-primary-blue bg-primary-blue-dark px-3 hover:brightness-105 py-2 text-neutral-light rounded-lg text-sm cursor-pointer">
          شرکت در مصاحبه
        </div>
      </Link>
    );
  }
}
