import Link from "next/link";

type FormRedirectMessageProps = {
  role: "jobseeker" | "employer";
  action: "signup" | "login";
};

function FormRedirectMessage({ role, action }: FormRedirectMessageProps) {
  return (
    <p className="text-sm text-fg-muted">
      {role === "employer" ? "کارفرما هستید؟" : "کارجو هستید؟"}
      <Link
        href={`/auth/${role}/${action}`}
        className="inline-block ms-2 font-semibold text-brand hover:text-brand-hover hover:underline underline-offset-4 transition-colors"
      >
        {role === "employer" ? "ورود به بخش کارفرما" : "ورود به بخش کارجو"}
      </Link>
    </p>
  );
}

export default FormRedirectMessage;
