"use client";

import { BASE_LINK } from "@/fetch/config";
import { useRef } from "react";

type BackdropInputProps = {
  icon: string;
  token: string;
};

function BackdropFileInput({ icon, token }: BackdropInputProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadBackdrop = () => {
    console.log(fileInputRef.current?.files![0]);
    const formData = new FormData();
    const fetchUpload = async (token: string, formData: FormData) => {
      const res = await fetch(BASE_LINK + "jobseeker-backdrop/upload/", {
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
        onChange={handleUploadBackdrop}
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
      />
      <span
        onClick={() => fileInputRef.current?.click()}
        style={{
          fontSize: "32px",
        }}
        className="absolute p-2 cursor-pointer material-symbols-outlined right-6 top-6 text-neutral-mid"
      >
        {icon}
      </span>
    </div>
  );
}

export default BackdropFileInput;
