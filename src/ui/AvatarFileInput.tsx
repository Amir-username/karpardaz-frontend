"use client";

import { BASE_LINK } from "@/fetch/config";
import { redirect, usePathname } from "next/navigation";
import Icon from "./Icon";
import { useRef } from "react";

type AvatarInputProps = {
  icon: string;
  token?: string;
  role: "jobseeker" | "employer";
};

function AvatarFileInput({ icon, token, role }: AvatarInputProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const pathName = usePathname();

  const handleUploadAvatar = () => {
    const formData = new FormData();
    const fetchUpload = async (token: string, formData: FormData) => {
      const res = await fetch(BASE_LINK + `${role}-avatar/upload/`, {
        method: "POST",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();
      console.log(data);
    };
    if (fileInputRef.current?.files) {
      formData.append("file", fileInputRef.current.files[0]);
      fetchUpload(token!, formData);
      redirect(pathName);
    }
  };

  return (
    <div>
      <input
        onChange={handleUploadAvatar}
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
      />
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        aria-label="تغییر تصویر پروفایل"
        className="absolute -bottom-1 end-0 p-2 text-white rounded-full cursor-pointer bg-brand ring-2 ring-card hover:bg-brand-hover transition-colors shadow-soft"
      >
        <Icon name={icon} size={18} />
      </button>
    </div>
  );
}

export default AvatarFileInput;
