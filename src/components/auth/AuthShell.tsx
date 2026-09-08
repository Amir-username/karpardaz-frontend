import Link from "next/link";
import Icon from "@/ui/Icon";

type AuthShellProps = {
  role: "jobseeker" | "employer";
  mode: "login" | "signup";
  children: React.ReactNode;
};

const panelContent = {
  jobseeker: {
    badge: "پلتفرم کاریابی فناوری",
    headline: "شغل رویایی‌ات همین‌جاست",
    description:
      "رزومه‌ات را بساز، برای آگهی‌ها درخواست بفرست و بدون واسطه با کارفرماها در ارتباط باش.",
    features: [
      { icon: "badge", text: "ساخت رزومه آنلاین" },
      { icon: "send", text: "ارسال درخواست برای آگهی‌ها" },
      { icon: "tips_and_updates", text: "پیشنهادهای شغلی متناسب با مهارت‌ها" },
    ],
  },
  employer: {
    badge: "پلتفرم استخدام فناوری",
    headline: "استعدادهای برتر را جذب کن",
    description:
      "آگهی شغلی‌ات را ثبت کن، رزومه‌های دریافتی را بررسی کن و با مصاحبه آنلاین بهترین‌ها را استخدام کن.",
    features: [
      { icon: "work", text: "ثبت آگهی شغلی" },
      { icon: "groups", text: "بررسی رزومه‌های دریافتی" },
      { icon: "videocam", text: "مصاحبه آنلاین با کارجویان" },
    ],
  },
} as const;

const stats = [
  { value: "۵۰۰+", label: "آگهی فعال" },
  { value: "۱۰۰+", label: "کارفرما" },
  { value: "۱۰۰۰+", label: "کارجو" },
];

/**
 * Split-screen auth layout: role switcher + form on one side,
 * a role-aware CSS-only brand panel on the other (collapses to a slim
 * brand row on mobile).
 */
function AuthShell({ role, mode, children }: AuthShellProps) {
  const content = panelContent[role];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 lg:py-14">
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
        {/* ─── Form side ─── */}
        <div className="flex flex-col justify-center items-center gap-5 fade-in-right motion-reduce:animate-none">
          {/* Slim brand row — the brand panel is hidden below lg */}
          <div className="lg:hidden flex flex-col items-center gap-1 text-center">
            <span className="font-display text-3xl leading-none text-brand">
              کارپرداز
            </span>
            <span className="text-xs text-fg-muted">پلتفرم کاریابی فناوری</span>
          </div>

          {/* Role switcher — keeps the current mode when flipping roles */}
          <div
            className="grid grid-cols-2 w-full max-w-md gap-1 p-1 rounded-xl bg-subtle ring-1 ring-border"
            role="tablist"
            aria-label="انتخاب نوع حساب کاربری"
          >
            <RoleTab
              href={`/auth/jobseeker/${mode}`}
              icon="person"
              label="کارجو"
              active={role === "jobseeker"}
            />
            <RoleTab
              href={`/auth/employer/${mode}`}
              icon="apartment"
              label="کارفرما"
              active={role === "employer"}
            />
          </div>

          {children}
        </div>

        {/* ─── Brand panel (CSS-only, fixed white text on navy gradient) ─── */}
        <aside className="relative hidden lg:flex flex-col justify-between gap-10 overflow-hidden rounded-3xl gradient-background text-white p-10 fade-in-up motion-reduce:animate-none">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 dot-grid opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />
            <div className="absolute -top-24 -end-24 w-80 h-80 rounded-full bg-accent/15 blur-3xl" />
            <div className="absolute -bottom-28 -start-20 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
          </div>

          <div className="relative flex items-center justify-between gap-4">
            <span className="font-display text-4xl leading-none">کارپرداز</span>
            <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 ring-1 ring-white/20 text-sm font-medium backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse motion-reduce:animate-none" />
              {content.badge}
            </span>
          </div>

          <div className="relative flex flex-col gap-6">
            <h2 className="font-display text-4xl leading-[1.6] text-balance">
              {content.headline}
            </h2>
            <p className="text-white/75 leading-8 max-w-md">
              {content.description}
            </p>
            <ul className="flex flex-col gap-3.5">
              {content.features.map((feature) => (
                <li
                  key={feature.text}
                  className="flex items-center gap-3 text-sm text-white/90"
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/10 ring-1 ring-white/15 shrink-0">
                    <Icon name={feature.icon} size={18} />
                  </span>
                  {feature.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex items-center pt-6 border-t border-white/15">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-1 items-center flex-1"
              >
                <span className="font-display text-2xl">{stat.value}</span>
                <span className="text-xs text-white/60">{stat.label}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

function RoleTab({
  href,
  icon,
  label,
  active,
}: {
  href: string;
  icon: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`flex items-center justify-center gap-2 h-10 rounded-lg text-sm font-medium transition-all duration-200 ${
        active
          ? "bg-card text-fg shadow-soft ring-1 ring-border"
          : "text-fg-muted hover:text-fg"
      }`}
    >
      <Icon name={icon} size={17} />
      {label}
    </Link>
  );
}

export default AuthShell;
