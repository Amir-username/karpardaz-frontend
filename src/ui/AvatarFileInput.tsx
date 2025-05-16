'use client'

import { useRef } from "react";

type AvatarInputProps = {
  icon: string;
};

function AvatarFileInput({ icon }: AvatarInputProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <input type="file" ref={fileInputRef} className="hidden" accept="image/*"/>
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
