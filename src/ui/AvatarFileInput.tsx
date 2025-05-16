"use client";

import { BASE_LINK } from "@/fetch/config";
import { useRef } from "react";

type AvatarInputProps = {
  icon: string;
  token: string;
};

function AvatarFileInput({ icon, token }: AvatarInputProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadAvatar = () => {
    console.log(fileInputRef.current?.files![0]);
    const formData = new FormData();
    const fetchUpload = async (token: string, formData: FormData) => {
      const res = await fetch(BASE_LINK + "jobseeker-avatar/upload/", {
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
      fetchUpload(token, formData);
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
      <span
        onClick={() => fileInputRef.current?.click()}
        className="absolute p-1.5 text-white rounded-full cursor-pointer material-symbols-outlined top-20 bg-primary-blue"
      >
        {icon}
      </span>
    </div>
  );
}

export default AvatarFileInput;
