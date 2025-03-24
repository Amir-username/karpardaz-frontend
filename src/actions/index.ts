"use server";

const BASE_LINK = "https://karpardaz-backend.onrender.com/";

import {
  employerLoginSchema,
  employerSignupSchema,
  jobSeekerLoginSchema,
  jobSeekerSignupSchema,
} from "@/validation/auth";
import axios from "axios";
import { headers } from "next/headers";

export type JobSeekerSignupFormState = {
  errors?: {
    firstname?: string[];
    lastname?: string[];
    email?: string[];
    phonenumber?: string[];
    password?: string[];
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

  console.log(JSON.stringify(result.data));

  if (result.success) {
    // const res = await fetch("http://127.0.0.1:8000/jobseekers/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     accept: "application/json",
    //   },
    //   body: JSON.stringify(result.data),
    // });

    const res = await axios.post(
      "http://127.0.0.1:8000/jobseekers/",
      {
        firstname: result.data.firstname,
        lastname: result.data.lastname,
        email: result.data.email,
        phonenumber: result.data.phonenumber,
        password: result.data.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      }
    );

    console.log(res.data);
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
