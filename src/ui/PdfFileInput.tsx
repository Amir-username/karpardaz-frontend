"use client";

import { ChangeEvent, useState } from "react";
import Icon from "./Icon";

type PdfFileInputProps = {
  label: string;
  name: string;
  hasError?: boolean;
  errorMessage?: string[];
  className?: string;
};

/**
 * PDF file picker styled as a dropzone row. Shows the selected
 * file name once a file is chosen.
 */
function PdfFileInput({
  label,
  name,
  hasError = false,
  errorMessage = [],
  className = "",
}: PdfFileInputProps) {
  const [fileName, setFileName] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      <label
        htmlFor={`pdf-input-${name}`}
        className={`flex items-center justify-between w-full gap-3 h-auto min-h-12 px-4 py-3 text-sm rounded-xl bg-card ring-1 ring-dashed cursor-pointer transition-colors duration-200 ${
          hasError
            ? "ring-danger ring-2"
            : "ring-border-strong hover:ring-brand hover:bg-brand-soft/40"
        }`}
      >
        <span className="flex items-center gap-2 min-w-0">
          <Icon
            name={fileName ? "picture_as_pdf" : "upload_file"}
            size={20}
            className={hasError ? "text-danger" : "text-fg-muted"}
          />
          <span className={`truncate ${fileName ? "text-fg font-medium" : "text-fg-muted"}`}>
            {fileName || label}
          </span>
        </span>
        <span className="text-xs font-medium text-brand shrink-0">انتخاب فایل</span>
        <input
          name={name}
          id={`pdf-input-${name}`}
          type="file"
          onChange={handleChange}
          className="hidden"
          accept="application/pdf"
        />
      </label>
      {hasError &&
        errorMessage.map((message, i) => (
          <p key={i} className="flex items-center gap-1 text-xs text-danger-fg">
            <Icon name="error" size={14} />
            {message}
          </p>
        ))}
    </div>
  );
}

export default PdfFileInput;
