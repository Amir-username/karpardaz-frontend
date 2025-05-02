type PdfFileInputProps = {
  label: string;
  name: string;
  isValid?: boolean;
  errorMessage?: string[];
};

function PdfFileInput({
  label,
  name,
  isValid,
  errorMessage = [],
}: PdfFileInputProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <div
        className={`flex items-center justify-between w-full h-12 px-4 py-3 text-sm rounded-lg bg-gray-50 text-neutral-dark ring-1 ${
          !isValid ? "ring-gray-300" : "ring-accent-coral"
        }`}
      >
        <span className="text-sm text-neutral-mid">{label}</span>
        <label
          htmlFor={`pdf-input-${label}`}
          className="flex items-center text-sm font-medium cursor-pointer text-neutral-dark hover:text-gray-900"
        >
          <span className="cursor-pointer material-symbols-outlined text-neutral-mid">
            link
          </span>
        </label>
        <input
          name={name}
          id={`pdf-input-${label}`}
          type="file"
          className="hidden"
          accept="application/pdf"
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

export default PdfFileInput;
