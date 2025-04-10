import Image from "next/image";
import DEFAULT_AVATAR from "../../../public/images/company_default_avatar.png";

export default function AdAvatar() {
  // return <div className="w-14 h-14 bg-neutral-mid rounded-lg"></div>;
  return (
    <Image
      src={DEFAULT_AVATAR}
      alt="آواتار پیشفرض شرکت"
      className="w-12 h-12"
    />
  );
}
