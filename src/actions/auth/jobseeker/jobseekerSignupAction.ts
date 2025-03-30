"use server";

import { fetchCreateJobSeeker } from "@/fetch/fetchCreateJobSeeker";
import { jobSeekerSignupSchema } from "@/validation/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type JobSeekerSignupFormState = {
  errors?: {
    firstname?: string[];
    lastname?: string[];
    email?: string[];
    phonenumber?: string[];
    password?: string[];
  };
  fetchError?: string;
};

export async function JobSeekerSignupAction(
  formState: JobSeekerSignupFormState,
  formData: FormData
): Promise<JobSeekerSignupFormState> {
  const result = jobSeekerSignupSchema.safeParse({
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname"),
    email: formData.get("email"),
    phonenumber: formData.get("phonenumber"),
    password: formData.get("password"),
  });

  if (result.success) {
    const res = fetchCreateJobSeeker(result.data);
    if (res instanceof Error) {
      // console.log(res.message);
    } else {
      console.log(res);
      revalidatePath("/auth/jobseeker/login");
      redirect("/auth/jobseeker/login");
    }
  }
  return {
    errors: result.error?.flatten().fieldErrors,
  };
}
