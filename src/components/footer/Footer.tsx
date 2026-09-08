import Link from "next/link";
import Image from "next/image";
import github from "../../../public/icons/github.svg";
import email from "../../../public/icons/Emailicon.png";

const quickLinks = [
  { href: "/jobs", label: "فرصت های شغلی" },
  { href: "/jobseeker-ads", label: "آگهی کارجویان" },
  { href: "/auth/jobseeker/signup", label: "ثبت نام کارجو" },
  { href: "/auth/employer/signup", label: "ثبت نام کارفرما" },
];

function Footer() {
  return (
    <footer className="w-full mt-8 bg-card ring-1 ring-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <span className="font-display text-3xl text-brand">کارپرداز</span>
            <p className="text-sm leading-7 text-fg-muted max-w-xs">
              پلتفرم استخدام و کاریابی برای سازمان ها و متخصصان فناوری؛ آگهی
              ثبت کنید، رزومه بفرستید و فرصت مناسب خود را پیدا کنید.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-fg">دسترسی سریع</h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-fg-muted hover:text-brand transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-fg">ارتباط با ما</h4>
            <div className="flex flex-col items-start gap-2.5">
              <a
                href="https://github.com/Amir-username"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-fg-muted hover:text-brand transition-colors"
              >
                <Image
                  className="dark:bg-white dark:rounded-full"
                  src={github}
                  width={22}
                  height={22}
                  alt="github icon"
                />
                <span dir="ltr">github.com/Amir-username</span>
              </a>
              <span className="flex items-center gap-2.5 text-sm text-fg-muted">
                <Image src={email} width={22} height={22} alt="email icon" />
                <span dir="ltr">najiamirdesktop@gmail.com</span>
              </span>
            </div>
          </div>
        </div>

        <div className="pt-10 mt-10 border-t border-border text-center text-xs text-fg-muted">
          کارپرداز — تمامی حقوق محفوظ است
        </div>
      </div>
    </footer>
  );
}

export default Footer;
