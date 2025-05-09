"use server";

import { JobSeekerDetailModel } from "@/models/JobSeekerDetail";
import { JobSeekerProfileCreateSchema } from "@/validation/createProfile";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export type JobSeekerProfileCreateState = {
  errors?: {
    city?: string[];
    jobGroup?: string[];
    gender?: string[];
    position?: string[];
    experience?: string[];
    salary?: string[];
    // isRemote?: string[];
    // isInternship?: string[];
    // isPortfolio?: string[];
    portfolioLink?: string[];
    avatar?: string[];
    backdropImage?: string[];
    description?: string[];
  };
};

export async function JobSeekerProfileCreateAction(
  technologieItems: string[],
  educationsItems: string[],
  specializedJobsItems: string[],
  is_remote: boolean,
  is_portfolio: boolean,
  is_internship: boolean,
  formState: JobSeekerProfileCreateState,
  formData: FormData
): Promise<JobSeekerProfileCreateState> {
  console.log(formData);
  const rawData = {
    city: formData.get("city"),
    jobGroup: formData.get("job_group"),
    position: formData.get("position"),
    experience: formData.get("experience"),
    gender: formData.get("gender"),
    // avatar: formData.get("avatar"),
    // backdropImage: formData.get("backdropImage"),
    // is_remote: formData.get("is_remote") === "on",
    // is_internship: formData.get("is_internship") === "on",
    // is_portfolio: formData.get("is_portfolio") === "on",
    // portfolioLink: formData.get("portfolioLink"),
    salary: formData.get("salary"),
    description: formData.get("description"),
  };

  const result = JobSeekerProfileCreateSchema.safeParse(rawData);

  if (result.success) {
    const cookieStore = await cookies();
    const token = cookieStore.get("token");
    const role = cookieStore.get("role");

    if (token && role?.value === "jobseeker") {
      const detail: JobSeekerDetailModel = {
        city: result.data.city,
        job_group: result.data.job_group,
        position:
          result.data.position === "جونیور"
            ? "junior"
            : result.data.position === "میدلول"
            ? "midlevel"
            : "senior",
        experience:
          result.data.experience === "بدون سابقه"
            ? "بدون سابقه کار"
            : result.data.experience === "۱ تا ۲ سال"
            ? "۱ تا ۲ سال سابفه کار"
            : result.data.experience === "۲ تا ۴ سال"
            ? "۲ تا ۴ سال سابقه کار"
            : "۴ سال به بالا",
        gender: result.data.gender === "آقا" ? "male" : "female",
        is_remote: is_remote,
        is_internship: is_internship,
        is_portfolio: is_portfolio,
        salary:
          result.data.salary === "۵ تا ۱۰ م"
            ? "۵ تا ۱۰ میلیون تومان"
            : result.data.salary === "۱۰ تا ۲۰ م"
            ? "۱۰ تا ۲۰ میلیون تومان"
            : result.data.salary === "۲۰ تا ۴۰ م"
            ? "۲۰ تا ۴۰ میلیون تومان"
            : result.data.salary === "۴۰ م به بالا"
            ? "۴۰ میلیون به بالا"
            : "توافقی",
        description: result.data.description,
        educations: educationsItems,
        technologies: technologieItems,
        specialized_jobs: specializedJobsItems,
      };
      const res = await fetch("http://127.0.0.1:7000/jobseeker-detail/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(detail),
      });

      const data = await res.json();

      console.log(data);

      revalidatePath("/");
      redirect("/");
    }
  }

  return {
    errors: result.error?.flatten().fieldErrors,
  };
}
