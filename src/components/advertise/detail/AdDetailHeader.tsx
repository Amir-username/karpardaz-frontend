import Image from "next/image";
import AdTitle from "./AdTitle";
import AdSubtitle from "./AdSubtitle";
import DEFAULT_AVATAR from "../../../../public/images/company_default_avatar.png";

type AdDetailHeaderProps = {
  title: string;
  subtitle: string;
};

function AdDetailHeader({ title, subtitle }: AdDetailHeaderProps) {
  return (
    <div className="flex justify-between p-8 bg-primary-blue rounded-lg">
      <div className="flex gap-4 md:gap-8 ">
        <Image
          src={DEFAULT_AVATAR}
          alt="آواتار پیشفرض شرکت"
          className="w-16 h-16 bg-white rounded-xl p-1"
        />
        <div className="flex flex-col gap-2">
          <AdTitle title={title} />
          <AdSubtitle title={subtitle} />
        </div>
      </div>
      <div className="flex items-center">
        <span
          style={{
            fontSize: "36px",
          }}
          className="cursor-pointer material-symbols-outlined text-neutral-mid"
        >
          favorite
        </span>
      </div>
    </div>
  );
}

export default AdDetailHeader;
