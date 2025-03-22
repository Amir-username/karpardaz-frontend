"use server";

import {
  employerLoginSchema,
  employerSignupSchema,
  jobSeekerLoginSchema,
  JobSeekerSignupSchema,
} from "@/validation/auth";

export async function JobSeekerSignupAction(formData: FormData) {
  const result = JobSeekerSignupSchema.safeParse({
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname"),
    email: formData.get("email"),
    phoneNumber: formData.get("phoneNumber"),
    password: formData.get("password"),
  });

  console.log(result);
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

  console.log(result);
}

export async function EmployerLoginAction(formData: FormData) {
  const result = employerLoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  console.log(result.error);
}
