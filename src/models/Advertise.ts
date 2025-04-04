export type AdvertiseModel = {
  title: string;
  position: "junior" | "senior" | "midlevel";
  is_experience: boolean;
  job_group: string;
  city: string;
  is_remote: boolean;
  is_internship: boolean;
  gender: "male" | "female" | "no difference";
  benefits: string[];
  technologies: string[];
  is_portfolio: boolean;
  description: string;
  id: number;
  employer_id: number;
};
