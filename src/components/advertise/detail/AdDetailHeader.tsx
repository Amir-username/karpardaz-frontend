import Avatar from "@/components/avatar/Avatar";
import AdTitle from "./AdTitle";
import AdSubtitle from "./AdSubtitle";
import Link from "next/link";
import Icon from "@/ui/Icon";

type AdDetailHeaderProps = {
  title: string;
  subtitle: string;
  id: number;
  role: "jobseeker" | "employer";
};

function AdDetailHeader({ title, subtitle, role, id }: AdDetailHeaderProps) {
  return (
    <div className="flex justify-between items-center gap-4 p-6 md:p-8 gradient-background text-white">
      <div className="flex items-center gap-4 md:gap-6 min-w-0">
        <Avatar
          id={id}
          role={role}
          className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl p-1.5 ring-2 ring-white/25 shrink-0 object-cover"
        />
        <div className="flex flex-col gap-1.5 min-w-0">
          <AdTitle title={title} />
          <Link
            href={`/profile/${role}/${id}`}
            className="w-fit flex items-center gap-1 text-white/70 hover:text-white transition-colors"
          >
            <AdSubtitle title={subtitle} />
            <Icon name="chevron_left" size={16} />
          </Link>
        </div>
      </div>
      <div className={`${role === "employer" && "hidden"} flex items-center`}>
        <span
          className="flex items-center justify-center w-11 h-11 rounded-full cursor-pointer bg-white/10 ring-1 ring-white/20 hover:bg-white/20 transition-colors"
          title="افزودن به علاقه مندی ها"
        >
          <Icon name="favorite" size={22} />
        </span>
      </div>
    </div>
  );
}

export default AdDetailHeader;
