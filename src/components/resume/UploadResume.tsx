"use client";

import { BASE_LINK } from "@/fetch/config";
import { useRef } from "react";

function UploadResume({ token }: { token?: string }) {
  const resumeRef = useRef<HTMLInputElement>(null);

  const handleUplaodResume = () => {
    console.log(resumeRef.current?.files![0]);
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
    <div className="flex gap-2 px-3 py-2 rounded-lg cursor-pointer ring-2 ring-neutral-mid">
      <input
        onChange={handleUplaodResume}
        type="file"
        ref={resumeRef}
        className="hidden"
        accept="application/pdf"
      />
      <span
        onClick={() => resumeRef.current?.click()}
        className="text-sm text-neutral-mid"
      >
        درج رزومه
      </span>
    </div>
  );
}

export default UploadResume;
