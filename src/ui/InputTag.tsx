function InputTag({ label }: { label: string }) {
  return (
    <div className="flex items-center w-full px-4 py-3 text-sm rounded-lg bg-gray-50 text-neutral-dark ring-1 ring-gray-300">
      <div className="flex flex-col w-full gap-3">
        <div className="flex items-center justify-between w-full">
          <span className="text-sm text-neutral-mid">{label}</span>
          <span className="cursor-pointer material-symbols-outlined text-neutral-mid">
            add_circle
          </span>
        </div>
      </div>
    </div>
  );
}

export default InputTag;
