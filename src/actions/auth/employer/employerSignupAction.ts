'use server'

import { fetchCreateEmployer } from "@/fetch/fetchCreateEmployer";
import { employerSignupSchema } from "@/validation/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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
    if (res instanceof Error) {
      console.log(res.message);
    } else {
      revalidatePath("/auth/employer/login");
      redirect("/auth/employer/login");
    }
  }

  return {
    errors: result.error?.flatten().fieldErrors,
  };
}