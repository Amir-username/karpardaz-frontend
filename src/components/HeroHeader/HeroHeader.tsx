import Button from "@/ui/Button";
import Icon from "@/ui/Icon";
import Badge from "@/ui/Badge";

const valueProps = [
  "ارتباط مستقیم کارجو و کارفرما",
  "آگهی های تازه هر روز",
  "جستجو و فیلتر پیشرفته",
];

export default function HeroHeader() {
  return (
    <section className="relative overflow-hidden bg-bg">
      {/* ─── Decorative background ─── */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 dot-grid opacity-70 [mask-image:radial-gradient(ellipse_65%_60%_at_50%_35%,black,transparent)]" />
        <div className="absolute -top-32 -start-32 w-[28rem] h-[28rem] rounded-full bg-brand/10 blur-3xl" />
        <div className="absolute -bottom-40 -end-28 w-[32rem] h-[32rem] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute top-1/4 end-1/3 w-80 h-80 rounded-full bg-info/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-14 lg:gap-8 items-center">
        {/* ─── Copy ─── */}
        <div className="flex flex-col items-center lg:items-start gap-6 text-center lg:text-start fade-in-right motion-reduce:animate-none">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-soft text-brand-soft-fg ring-1 ring-brand/20 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse motion-reduce:animate-none" />
            پلتفرم کاریابی فناوری
          </span>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.5] text-fg text-balance">
            وبسایت استخدام و کاریابی
            <span className="block bg-gradient-to-l from-brand to-accent bg-clip-text text-transparent pb-2">
              برای سازمان ها و متخصصان فناوری
            </span>
          </h1>

          <p className="max-w-xl text-base lg:text-lg text-fg-muted leading-8">
            آگهی شغلی ثبت کنید یا رزومه خود را بسازید؛ درخواست ها را در یک جا
            مدیریت کنید و بدون واسطه با فرصت مناسب خود در ارتباط باشید.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mt-1">
            <Button
              href="/jobs"
              size="lg"
              fullWidth={false}
              className="w-full sm:w-auto! min-w-44"
            >
              مشاهده فرصت های شغلی
              <Icon name="chevron_left" size={18} />
            </Button>
            <Button
              href="/auth/jobseeker/signup"
              variant="outline"
              size="lg"
              fullWidth={false}
              className="w-full sm:w-auto! min-w-44"
            >
              ثبت رزومه
              <Icon name="arrow_back" size={18} />
            </Button>
          </div>

          <ul className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2 mt-2">
            {valueProps.map((item) => (
              <li
                key={item}
                className="flex items-center gap-1.5 text-sm text-fg-muted"
              >
                <Icon
                  name="check_circle"
                  size={16}
                  fill
                  className="text-success"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ─── Visual composition (CSS-only) ─── */}
        <div className="relative hidden sm:flex items-center justify-center min-h-[28rem] fade-in-up motion-reduce:animate-none">
          {/* glow */}
          <div
            aria-hidden="true"
            className="absolute inset-10 rounded-full bg-brand/10 blur-3xl"
          />

          {/* back card — jobseeker mock */}
          <div className="absolute top-8 -end-2 w-64 rounded-2xl bg-card/70 backdrop-blur-sm ring-1 ring-border shadow-soft p-5 rotate-3">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-11 h-11 rounded-full bg-accent-soft ring-1 ring-accent/20">
                <Icon name="person" size={22} className="text-accent" />
              </span>
              <div className="flex flex-col gap-1 min-w-0">
                <span className="text-sm font-bold text-fg">رزومه کارجو</span>
                <span className="text-xs text-fg-muted">متخصص فناوری</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-4">
              <Badge variant="neutral">Python</Badge>
              <Badge variant="neutral">Django</Badge>
              <Badge variant="neutral">PostgreSQL</Badge>
            </div>
          </div>

          {/* front card — job ad mock */}
          <div className="relative w-80 rounded-2xl bg-card/90 backdrop-blur-sm ring-1 ring-border shadow-lift p-5 -rotate-2">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-soft ring-1 ring-brand/15">
                <Icon name="apartment" size={24} className="text-brand" />
              </span>
              <div className="flex flex-col gap-1 min-w-0">
                <span className="text-sm font-bold text-fg">
                  برنامه نویس فرانت اند
                </span>
                <span className="text-xs text-fg-muted">
                  شرکت فناوری نمونه
                </span>
              </div>
              <Icon
                name="favorite"
                size={20}
                fill
                className="text-accent ms-auto"
              />
            </div>

            <div className="flex flex-wrap gap-1.5 mt-4">
              <Badge variant="brand">React</Badge>
              <Badge variant="brand">TypeScript</Badge>
              <Badge variant="neutral">تمام وقت</Badge>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-4 pt-4 border-t border-border text-xs text-fg-muted">
              <span className="flex items-center gap-1">
                <Icon name="location_on" size={14} />
                تهران
              </span>
              <span className="flex items-center gap-1">
                <Icon name="payments" size={14} />
                ۲۰ تا ۳۰ میلیون تومان
              </span>
              <span className="flex items-center gap-1 text-success">
                <Icon name="home_work" size={14} />
                دورکاری
              </span>
            </div>
          </div>

          {/* floating chips */}
          <span className="absolute -top-1 start-4 animate-float motion-reduce:animate-none">
            <Badge
              variant="success"
              size="md"
              className="shadow-soft backdrop-blur-sm"
            >
              <Icon name="home_work" size={15} />
              دورکاری
            </Badge>
          </span>
          <span className="absolute top-28 -start-6 animate-float-delay motion-reduce:animate-none">
            <Badge
              variant="brand"
              size="md"
              className="shadow-soft backdrop-blur-sm"
            >
              <Icon name="code" size={15} />
              React
            </Badge>
          </span>
          <span className="absolute -bottom-2 end-12 animate-float-slow motion-reduce:animate-none">
            <Badge
              variant="accent"
              size="md"
              className="shadow-soft backdrop-blur-sm"
            >
              <Icon name="work" size={15} />
              استخدام فعال
            </Badge>
          </span>
        </div>
      </div>
    </section>
  );
}
