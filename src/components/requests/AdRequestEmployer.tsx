import { EmployerDetail } from "@/models/EmployerDetail";
import AdAvatar from "../advertise/AdAvater";
import Icon from "@/ui/Icon";

export default function AdRequestEmployers({
  employers,
}: {
  employers: EmployerDetail[];
}) {
  return (
    <section className="max-w-4xl mx-auto px-4 pb-8 w-full">
      <h2 className="flex items-center justify-center gap-2 mb-4 text-xl font-bold text-fg">
        <span className="w-1.5 h-5 rounded-full bg-brand" aria-hidden="true" />
        کارفرمایان درخواست دهنده
      </h2>
      <ul className="flex flex-col gap-3">
        {employers.map((employer) => {
          return (
            <li key={employer.id}>
              <a
                href={`/profile/employer/${employer.id}`}
                className="flex items-center gap-3.5 px-4 py-3 rounded-xl bg-card ring-1 ring-border shadow-soft hover:ring-brand/40 hover:bg-subtle/50 transition-all cursor-pointer"
              >
                <AdAvatar id={employer.id!} role="employer" />
                <div className="flex flex-col min-w-0">
                  <h3 className="text-base font-medium text-fg">
                    {employer.company_name}
                  </h3>
                  <h6 className="text-xs text-fg-muted">{employer.population}</h6>
                </div>
                <Icon
                  name="chevron_left"
                  size={18}
                  className="ms-auto text-fg-muted"
                />
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
