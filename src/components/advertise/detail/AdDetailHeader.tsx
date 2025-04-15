import Image from "next/image";
import AdTitle from "./AdTitle";
import AdSubtitle from "./AdSubtitle";
import DEFAULT_AVATAR from "../../../../public/images/company_default_avatar.png";


type AdDetailHeaderProps = {
    title: string;
    subtitle: string
}

function AdDetailHeader({title, subtitle}: AdDetailHeaderProps) {
  return (
    <div className="flex gap-4 p-8 bg-gray-200 rounded-t-lg">
      <Image
        src={DEFAULT_AVATAR}
        alt="آواتار پیشفرض شرکت"
        className="w-16 h-16"
      />
      <div className="flex flex-col gap-2">
        <AdTitle title={title} />
        <AdSubtitle title={subtitle} />
      </div>
    </div>
  );
}

export default AdDetailHeader;
