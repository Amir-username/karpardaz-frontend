"use server";

const BASE_LINK = "http://127.0.0.1:8000/";

import { fetchCreateJobSeeker } from "@/fetch/fetchCreateJobSeeker";
import {
  employerLoginSchema,
  employerSignupSchema,
  jobSeekerLoginSchema,
  jobSeekerSignupSchema,
} from "@/validation/auth";

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
    const res = fetchCreateJobSeeker("jobseekers/", result.data);
    console.log(res);
  }
  return {
    errors: result.error?.flatten().fieldErrors,
  };
}

export async function EmployerSignupAction(formData: FormData) {
  const result = employerSignupSchema.safeParse({
    companyName: formData.get("companyName"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  console.log(result);
}

export async function JobSeekerLoginAction(formData: FormData) {
  const result = jobSeekerLoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  console.log(result?.error);
}

export async function EmployerLoginAction(formData: FormData) {
  const result = employerLoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  console.log(result?.error);
}
