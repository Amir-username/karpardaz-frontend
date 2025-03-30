'use server'

import { BASE_LINK } from "@/fetch/config";
import { employerLoginSchema } from "@/validation/auth";
import axios from "axios";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type EmployerLoginFormState = {
    errors?: {
      email?: string[];
      password?: string[];
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
      const res = await axios.post(
        BASE_LINK + "employer/login/",
        { username: result.data.email, password: result.data.password },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
  
      const data = await res.data;
      const token = await data.access_token;
  
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