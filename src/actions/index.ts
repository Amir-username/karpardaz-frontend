"use server";

const BASE_LINK = "http://127.0.0.1:8000/";

import { fetchCreateEmployer } from "@/fetch/fetchCreateEmployer";
import { fetchCreateJobSeeker } from "@/fetch/fetchCreateJobSeeker";
import { fetchLoginJobSeeker } from "@/fetch/fetchLoginJobSeeker";
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
    const res = fetchCreateJobSeeker(result.data);
    console.log(res);
  }
  return {
    errors: result.error?.flatten().fieldErrors,
  };
}

type EmployerSignupFormState = {
  errors?: {
    companyName?: string[];
    email?: string[];
    password?: string[];
  };
};

export async function EmployerSignupAction(
  formState: EmployerSignupFormState,
  formData: FormData
): Promise<EmployerSignupFormState> {
  const result = employerSignupSchema.safeParse({
    companyName: formData.get("companyName"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (result.success) {
    const res = fetchCreateEmployer(result.data);
    console.log(res);
  }

  return {
    errors: result.error?.flatten().fieldErrors,
  };
}

type JobSeekerLoginFormState = {
  errors?: {
    email?: string[];
    password?: string[];
  };
};

export async function JobSeekerLoginAction(
  formState: JobSeekerLoginFormState,
  formData: FormData
): Promise<JobSeekerLoginFormState> {
  const result = jobSeekerLoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (result.success) {
    const res = fetchLoginJobSeeker(result.data);
    console.log(res);
  }

  return {
    errors: result.error?.flatten().fieldErrors,
  };
}

export async function EmployerLoginAction(formData: FormData) {
  const result = employerLoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  console.log(result?.error);
}
