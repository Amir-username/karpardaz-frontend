"use client";

import { BASE_LINK } from "@/fetch/config";
import Icon from "./Icon";
import { useRef } from "react";

type BackdropInputProps = {
  icon: string;
  token?: string;
  role: "jobseeker" | "employer";
};

function BackdropFileInput({ icon, token, role }: BackdropInputProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadBackdrop = () => {
    const formData = new FormData();
    const fetchUpload = async (token: string, formData: FormData) => {
      const res = await fetch(BASE_LINK + `${role}-backdrop/upload/`, {
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
    }
  };

  return (
    <div className="rounded-xl">
      <input
        onChange={handleUploadBackdrop}
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
      />
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        aria-label="تغییر تصویر پس‌زمینه"
        className="absolute top-6 end-6 p-2.5 rounded-xl cursor-pointer bg-black/35 text-white backdrop-blur-sm hover:bg-black/55 transition-colors"
      >
        <Icon name={icon} size={26} />
      </button>
    </div>
  );
}

export default BackdropFileInput;
