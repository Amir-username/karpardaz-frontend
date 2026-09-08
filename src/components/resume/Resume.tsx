import { BASE_LINK } from "@/fetch/config";
import { fetchCurrentJobSeeker } from "@/fetch/jobseeker/fetchCurrentJobseeker";
import { JobSeekerDetailModel } from "@/models/JobSeekerDetail";
import { cookies } from "next/headers";
import Icon from "@/ui/Icon";
import UploadResume from "./UploadResume";

async function Resume({ id }: { id: number }) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  const curentJobseeker: JobSeekerDetailModel = await fetchCurrentJobSeeker(
    token?.value
  );

  const res = await fetch(BASE_LINK + `get-resume/${id}`);
  if (res.status === 200)
    return (
      <a
        href={`${BASE_LINK}get-resume/${id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium text-brand-soft-fg bg-brand-soft ring-1 ring-brand/20 hover:bg-brand hover:text-brand-fg transition-colors cursor-pointer"
      >
        <Icon name="description" size={16} />
        مشاهده رزومه
      </a>
    );
  else if (curentJobseeker) {
    if (curentJobseeker.id === id) {
      return <UploadResume token={token?.value} />;
    }
  }
}

export default Resume;
