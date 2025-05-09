import Link from "next/link";

type FormRedirectMessageProps = {
  role: "jobseeker" | "employer";
  action: "signup" | "login";
};

function FormRedirectMessage({ role, action }: FormRedirectMessageProps) {
  return (
    <h3 className="text-neutral-dark">
      {role === "employer" ? "کارفرما هستید؟" : "کارجو هستید؟"}
      <Link href={`/auth/${role}/${action}`}>
        <span className="font-bold cursor-pointer text-secondary-blue">
          {role === "employer" ? "ورود به بخش کارفرما" : "ورود به بخش کارجو"}
        </span>
      </Link>
    </h3>
  );
}

export default FormRedirectMessage;
