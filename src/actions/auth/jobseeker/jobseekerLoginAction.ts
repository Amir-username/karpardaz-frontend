"use server";

import { fetchLoginJobSeeker } from "@/fetch/fetchLoginJobSeeker";
import { jobSeekerLoginSchema } from "@/validation/auth";
import { AxiosError } from "axios";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type JobSeekerLoginFormState = {
  errors?: {
    email?: string[];
    password?: string[];
    loginError?: string[];
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
    try {
      const res = await fetchLoginJobSeeker({
        username: result.data.email,
        password: result.data.password,
      });

      cookieStore.set("token", res, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
      });

      cookieStore.set("role", "jobseeker");
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        return {
          errors: {
            loginError: [..."ایمیل یا رمز عبور اشتباه است"],
          },
        };
      } else {
        return {
          errors: {
            loginError: [..."مشکلی پیش آمده است. لطفا بعدا تلاش کنید"],
          },
        };
      }
    }

    revalidatePath("/");
    redirect("/");
  }

  return {
    errors: result.error?.flatten().fieldErrors,
  };
}
