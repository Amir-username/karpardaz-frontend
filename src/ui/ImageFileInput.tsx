type FileInputProps = {
  label: string;
  name: string;
  isValid?: boolean;
  errorMessage?: string[];
};

function ImageFileInput({
  label,
  name,
  isValid,
  errorMessage = [],
}: FileInputProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <div
        className={`flex items-center justify-between w-full h-12 px-4 py-3 text-sm rounded-lg bg-gray-50 text-neutral-dark ring-1 ${
          !isValid ? "ring-gray-300" : "ring-accent-coral"
        }`}
      >
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
          name={name}
          id={`image-input-${label}`}
          type="file"
          className="hidden"
          accept="image/jpeg, image/png, image/gif"
        />
      </div>
      {errorMessage.map((message, i) => (
        <p key={i} className="text-xs text-accent-coral">
          {message}
        </p>
      ))}
    </div>
  );
}

export default ImageFileInput;
