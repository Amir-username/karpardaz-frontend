type FileInputProps = { label: string; type: "image" | "pdf" };

function FileInput({ label, type }: FileInputProps) {
  return (
    <div className="flex items-center justify-between w-full h-12 px-4 py-3 text-sm rounded-lg bg-gray-50 text-neutral-dark ring-1 ring-gray-300">
      <span className="text-sm text-neutral-mid">{label}</span>
      <label
        htmlFor="file-input"
        className="flex items-center text-sm font-medium cursor-pointer text-neutral-dark hover:text-gray-900"
      >
        <span className="cursor-pointer material-symbols-outlined text-neutral-mid">
          link
        </span>
      </label>
      <input
        id="file-input"
        type="file"
        className="hidden"
        accept={
          type === "image"
            ? "image/jpeg, image/png, image/gif"
            : "application/pdf"
        }
      />
    </div>
  );
}

export default FileInput;
