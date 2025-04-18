type AdHeaderProps = {
  title: string;
  name?: string;
};

export default function AdHeader({ title, name }: AdHeaderProps) {
  return (
    <div className="flex justify-between w-full">
      <div className="flex flex-col justify-between h-full gap-2">
        <h3 className="font-semibold text-neutral-dark">{title}</h3>
        <h6 className="text-sm text-gray-700">{name ? name : "نام"}</h6>
      </div>
      <span className="cursor-pointer material-symbols-outlined text-neutral-mid">
        favorite
      </span>
    </div>
  );
}
