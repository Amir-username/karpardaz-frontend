import { BASE_LINK } from "@/fetch/config";
import Image from "next/image";
import DEFAULT_AVATAR from "../../../public/images/company_default_avatar.png";

async function Avatar({
  id,
  role,
  className,
}: {
  id: number;
  role: string;
  className?: string;
}) {
  const avatarRes = await fetch(BASE_LINK + `get-${role}-avatar/${id}`);

  const buffer = await avatarRes.arrayBuffer();
  const base64 = Buffer.from(buffer).toString("base64");
  const mimeType = avatarRes.headers.get("content-type") || "image/jpeg";
  const avatarSRC = `data:${mimeType};base64,${base64}`;

  return (
    <Image
      src={avatarRes.status === 200 ? avatarSRC : DEFAULT_AVATAR}
      alt="آواتار کاربر"
      className={
        className ?? "object-cover rounded-full w-24 h-24 ring-4 ring-white/25 bg-card"
      }
      width={96}
      height={96}
    />
  );
}

export default Avatar;
