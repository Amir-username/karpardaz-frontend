"use server";

import { JobSeekerProfileCreateSchema } from "@/validation/createProfile";

export type JobSeekerProfileCreateState = {
  errors?: {
    city?: string[];
    jobGroup?: string[];
    gender?: string[];
    position?: string[];
    experience?: string[];
    salary?: string[];
    isRemote?: string[];
    isInternship?: string[];
    isPortfolio?: string[];
    portfolioLink?: string[];
    avatar?: string[];
    backdropImage?: string[];
    description?: string[]
    // specializedJobs?: string[]
    // educations: string[];
    // technologies: string[]
  };
};

export async function JobSeekerProfileCreateAction(
  formState: JobSeekerProfileCreateState,
  formData: FormData
): Promise<JobSeekerProfileCreateState> {
  const rawData = {
    city: formData.get("city"),
    // educations: formData.getAll("educations"),
    jobGroup: formData.get("jobGroup"),
    position: formData.get("position"),
    experience: formData.get("experience"),
    gender: formData.get("gender"),
    // specialized_jobs: formData.getAll("specialized_jobs"),
    avatar: formData.get("avatar"),
    backdropImage: formData.get("backdropImage"),
    // technologies: formData.getAll("technologies"),
    isRemote: formData.get("isRemote") === "on",
    isInternship: formData.get("isInternship") === "on",
    isPortfolio: formData.get("isPortfolio") === "on",
    portfolioLink: formData.get("portfolioLink"),
    salary: formData.get("salary"),
    description: formData.get('description')
  };

  const result = JobSeekerProfileCreateSchema.safeParse(rawData);

  console.log(rawData);

  return {
    errors: result.error?.flatten().fieldErrors,
  };
}
