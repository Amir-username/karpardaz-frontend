"use server";

import { fetchLoginJobSeeker } from "@/fetch/fetchLoginJobSeeker";
import { jobSeekerLoginSchema } from "@/validation/auth";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

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
  const cookieStore = await cookies();

  const result = jobSeekerLoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (result.success) {
    const token = await fetchLoginJobSeeker({
      username: result.data.email,
      password: result.data.password,
    });

    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    revalidatePath("/");
    redirect("/");
  }

  return {
    errors: result.error?.flatten().fieldErrors,
  };
}

