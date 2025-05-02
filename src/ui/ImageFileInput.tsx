type FileInputProps = { label: string };

function ImageFileInput({ label }: FileInputProps) {
  return (
    <div className="flex items-center justify-between w-full h-12 px-4 py-3 text-sm rounded-lg bg-gray-50 text-neutral-dark ring-1 ring-gray-300">
      <span className="text-sm text-neutral-mid">{label}</span>
      <label
        htmlFor={`image-input-${label}`}
        className="flex items-center text-sm font-medium cursor-pointer text-neutral-dark hover:text-gray-900"
      >
        <span className="cursor-pointer material-symbols-outlined text-neutral-mid">
          link
        </span>
      </label>
      <input
        id={`image-input-${label}`}
        type="file"
        className="hidden"
        accept="image/jpeg, image/png, image/gif"
      />
    </div>
  );
}

export default ImageFileInput;
