"use client";

import { useRef } from "react";

type BackdropInputProps = {
  icon: string;
};

function BackdropFileInput({ icon }: BackdropInputProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <input
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
