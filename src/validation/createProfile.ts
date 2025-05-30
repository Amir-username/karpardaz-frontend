import { z } from "zod";

export const JobSeekerProfileCreateSchema = z.object({
  city: z.string().min(3, { message: " شهر باید حداقل سه حرف باشد" }),
  job_group: z.string().min(3, { message: "گروه شغلی باید حداقل سه حرف باشد" }),
  gender: z.enum(["آقا", "خانم"]),
  position: z.enum(["جونیور", "میدلول", "سنیور"]),
  experience: z.enum([
    "بدون سابقه",
    "۱ تا ۲ سال",
    "۲ تا ۴ سال",
    "بیش از ۴ سال",
  ]),
  salary: z.enum([
    "توافقی",
    "۵ تا ۱۰ م",
    "۱۰ تا ۲۰ م",
    "۲۰ تا ۴۰ م",
    "۴۰ م به بالا",
  ]),
  // portfolioLink: z.string({ message: "لطفا فایل رزومه را انتخاب کنید" }),
  // avatar: z.string({ message: "لطفا تصویر پروفایل را انتخاب کنید" }),
  // backdropImage: z.string({
  //   message: "لطفا تصویر بکگراند پروفایل را انتخاب کنید",
  // }),
  description: z.string().min(30, { message: "توضیحات باید طولانی تر باشد" }),
});
