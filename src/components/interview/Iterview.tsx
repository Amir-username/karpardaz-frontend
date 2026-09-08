import { fetchGetInterview } from "@/fetch/interview/fetchGetInterview";
import Button from "@/ui/Button";
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
          <Button href={`/interview/${advertise.id}/create/`} text="ایجاد مصاحبه" fullWidth={false} className="min-w-40" />
        );
      } else {
        return null;
      }
    }

    return (
      <Button href={`/interview/${advertise.id}/`} text="مشاهده مصاحبه" variant="outline" fullWidth={false} className="min-w-40" />
    );
  }

  if (role === "jobseeker") {
    if (!interview) {
      return (
        <div className="text-sm text-fg-muted">مصاحبه ای وجود ندارد</div>
      );
    }

    if (interview && interview.jobseeker_ids.includes(user_id)) {
      return (
        <div className="flex items-center gap-1.5 text-sm font-medium text-success-fg">
          قبلا در این مصاحبه شرکت کرده اید
        </div>
      );
    }

    return (
      <Button href={`/interview/${advertise.id}/answer/`} text="شرکت در مصاحبه" fullWidth={false} className="min-w-40" />
    );
  }
}
