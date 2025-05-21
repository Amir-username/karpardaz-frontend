"use client";

import Image from "next/image";
import DEFAULT_AVATAR from "../../../public/images/company_default_avatar.png";
import { useEffect, useState } from "react";
import { BASE_LINK } from "@/fetch/config";

type AdAvatarProps = {
  id: number;
  role: "jobseeker" | "employer";
};

export default function AdAvatar({ id, role }: AdAvatarProps) {
  const [avatarSRC, setAvatarSRC] = useState<string | "empty">("empty");

  useEffect(() => {
    const fetchAvatar = async (id: number, role: "jobseeker" | "employer") => {
      const avatarRes = await fetch(BASE_LINK + `get-${role}-avatar/${id}`);

      const buffer = await avatarRes.arrayBuffer();
      const base64 = Buffer.from(buffer).toString("base64");
      const mimeType = avatarRes.headers.get("content-type") || "image/jpeg";
      const avatarImage = `data:${mimeType};base64,${base64}`;
      setAvatarSRC(avatarRes.status === 200 ? avatarImage : "empty");
    };

    fetchAvatar(id, role);
  }, []);
  return (
    <Image
      src={avatarSRC === "empty" ? DEFAULT_AVATAR : avatarSRC}
      alt="آواتار پیشفرض شرکت"
      className="w-12 h-12 rounded-lg"
      width={500}
      height={300}
    />
  );
}
