import { BASE_LINK } from "@/fetch/config";
import { fetchCurrentJobSeeker } from "@/fetch/jobseeker/fetchCurrentJobseeker";
import { JobSeekerDetailModel } from "@/models/JobSeekerDetail";
import { cookies } from "next/headers";
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
      <a href={`${BASE_LINK}get-resume/${id}`}>
        <div className="flex gap-2 px-3 py-2 rounded-lg cursor-pointer ring-2 ring-neutral-mid">
          <span className="text-sm text-neutral-mid">رزومه</span>
        </div>
      </a>
    );
  else if (curentJobseeker) {
    if (curentJobseeker.id === id) {
      return <UploadResume token={token?.value} />;
    }
  }
}

export default Resume;
