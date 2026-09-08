"use client";

import { BASE_LINK } from "@/fetch/config";
import Icon from "@/ui/Icon";
import { useRef } from "react";

function UploadResume({ token }: { token?: string }) {
  const resumeRef = useRef<HTMLInputElement>(null);

  const handleUplaodResume = () => {
    const formData = new FormData();
    const fetchUpload = async (token: string, formData: FormData) => {
      const res = await fetch(BASE_LINK + `resume/upload/`, {
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
    if (resumeRef.current?.files) {
      formData.append("file", resumeRef.current.files[0]);
      fetchUpload(token!, formData);
    }
  };

  return (
    <button
      type="button"
      onClick={() => resumeRef.current?.click()}
      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium text-brand-soft-fg bg-brand-soft ring-1 ring-brand/20 hover:bg-brand hover:text-brand-fg transition-colors cursor-pointer"
    >
      <Icon name="upload_file" size={16} />
      درج رزومه
      <input
        onChange={handleUplaodResume}
        type="file"
        ref={resumeRef}
        className="hidden"
        accept="application/pdf"
      />
    </button>
  );
}

export default UploadResume;
