"use client";

import Image from "next/image";
import DEFAULT_AVATAR from "../../../public/images/company_default_avatar.png";
import { useEffect, useState } from "react";
import { BASE_LINK } from "@/fetch/config";

type AdAvatarProps = {
  id: number;
  role: "jobseeker" | "employer";
  /** Renders a small circular avatar (navbar chip) */
  compact?: boolean;
};

export default function AdAvatar({ id, role, compact = false }: AdAvatarProps) {
  const [avatarSRC, setAvatarSRC] = useState<string | "empty">("empty");

  useEffect(() => {
    const fetchAvatar = async (id: number, role: "jobseeker" | "employer") => {
      try {
        const avatarRes = await fetch(BASE_LINK + `get-${role}-avatar/${id}`);

        const buffer = await avatarRes.arrayBuffer();
        const base64 = Buffer.from(buffer).toString("base64");
        const mimeType = avatarRes.headers.get("content-type") || "image/jpeg";
        const avatarImage = `data:${mimeType};base64,${base64}`;
        setAvatarSRC(avatarRes.status === 200 ? avatarImage : "empty");
      } catch (error) {
        console.log(error);
      }
    };

    fetchAvatar(id, role);
  }, []);

  return (
    <Image
      src={avatarSRC === "empty" ? DEFAULT_AVATAR : avatarSRC}
      alt="آواتار کاربر"
      className={`${
        compact ? "w-8 h-8 rounded-full" : "w-14 h-14 rounded-xl"
      } object-cover bg-card`}
      width={56}
      height={56}
    />
  );
}
