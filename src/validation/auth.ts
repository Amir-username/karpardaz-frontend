import { z } from "zod";

export const jobSeekerSignupSchema = z.object({
  firstname: z.string().min(3, { message: "نام باید حداقل سه حرف باشد" }),
  lastname: z
    .string()
    .min(3, { message: "نام خانوادگی باید حداقل سه حرف باشد" }),
  email: z.string().email({ message: "آدرس ایمیل نا معتبر" }),
  phonenumber: z
    .string()
    .regex(/^(\+?98|0)9\d{9}$/, { message: "شماره تلفن نامعتبر" }),
  password: z.string().min(8, { message: "رمز عبور باید حداقل ۸ رقم باشد" }),
});

export const employerSignupSchema = z.object({
  companyName: z
    .string()
    .min(3, { message: "عنوان سازمان باید حداقل سه حرف باشد" }),
  email: z.string().email({ message: "آدرس ایمیل نا معتبر" }),
  password: z
    .string()
    .min(8, { message: "رمز عبور باید حداقل ۸ رقم باشد" })
    .regex(/[A-Z]/, "رمز عبور باید حداقل یک حرف بزرگ داشته باشد")
    .regex(/[a-z]/, "رمز عبور باید حداقل یک حرف کوچک داشته باشد")
    .regex(/[0-9]/, "رمز عبور باید حداقل یک عدد داشته باشد")
    .regex(/[^A-Za-z0-9]/, "رمز عبور باید حداقل یک حرف خاص داشته باشد"),
});

export const jobSeekerLoginSchema = z.object({
  email: z.string().email({ message: "آدرس ایمیل نا معتبر" }),
  password: z.string().min(8, { message: "رمز عبور باید حداقل ۸ رقم باشد" }),
});

export const employerLoginSchema = z.object({
  email: z.string().email({ message: "آدرس ایمیل نا معتبر" }),
  password: z
    .string()
    .min(8, { message: "رمز عبور باید حداقل ۸ رقم باشد" })
    // .regex(/[A-Z]/, "رمز عبور باید حداقل یک حرف بزرگ داشته باشد")
    // .regex(/[a-z]/, "رمز عبور باید حداقل یک حرف کوچک داشته باشد")
    // .regex(/[0-9]/, "رمز عبور باید حداقل یک عدد داشته باشد")
    // .regex(/[^A-Za-z0-9]/, "رمز عبور باید حداقل یک حرف خاص داشته باشد"),
});
