function CheckBox({ text }: { text: string }) {
  return (
    <label className="flex items-center justify-between w-full h-12 px-4 py-3 text-sm rounded-lg cursor-pointer bg-gray-50 text-neutral-dark ring-1 ring-gray-300">
      <span className="text-sm text-neutral-mid">{text}</span>
      <input
        type="checkbox"
        className="w-4 h-4 transition-colors duration-500 rounded-tr-full cursor-pointer accent-primary-blue"
      />
    </label>
  );
}

export default CheckBox;
