function PdfFileInput({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between w-full h-12 px-4 py-3 text-sm rounded-lg bg-gray-50 text-neutral-dark ring-1 ring-gray-300">
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
        id={`pdf-input-${label}`}
        type="file"
        className="hidden"
        accept="application/pdf"
      />
    </div>
  );
}

export default PdfFileInput;
