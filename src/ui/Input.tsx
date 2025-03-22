type InputProps = {
  type: "text" | "email" | "password" | "number";
  name: string;
  placeholder: string;
  icon?: string;
};

function Input({ type = "text", name, placeholder, icon }: InputProps) {
  return (
    <div className="relative w-full">
      <input
        className="w-full h-12 px-4 pl-8 text-sm rounded-lg bg-gray-50 text-neutral-dark placeholder:text-neutral-mid ring-1 ring-gray-300"
        type={type}
        name={name}
        placeholder={placeholder}
      />
      {icon ? (
        <span className="absolute material-symbols-outlined left-2 top-3 text-neutral-mid">
          {icon}
        </span>
      ) : null}
    </div>
  );
}

export default Input;
