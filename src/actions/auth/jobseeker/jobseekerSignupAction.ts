"use server";

import { fetchCreateJobSeeker } from "@/fetch/jobseeker/fetchCreateJobSeeker";
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
    signupError?: string[];
  };
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
    const status = await fetchCreateJobSeeker(result.data);
    if (status == 200) {
      console.log(status);
      revalidatePath("/auth/jobseeker/login");
      redirect("/auth/jobseeker/login");
    } else {
      return {
        errors: {
          signupError: [..."ایمیل یا شماره همراه تکراری است"],
        },
      };
    }
  }
  return {
    errors: result.error?.flatten().fieldErrors,
  };
}
