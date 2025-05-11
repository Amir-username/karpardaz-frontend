"use server";

import { fetchLoginEmployer } from "@/fetch/employer/fetchLoginEmployer";
import { employerLoginSchema } from "@/validation/auth";
import { AxiosError } from "axios";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type EmployerLoginFormState = {
  errors?: {
    email?: string[];
    password?: string[];
    loginError?: string[];
  };
};

export async function EmployerLoginAction(
  formState: EmployerLoginFormState,
  formData: FormData
): Promise<EmployerLoginFormState> {
  const cookieStore = await cookies();

  const result = employerLoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (result.success) {
    try {
      const res = await fetchLoginEmployer({
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

      cookieStore.set("role", "employer");
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
