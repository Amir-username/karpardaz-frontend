type InputProps = {
  type: "text" | "email" | "password" | "number" | "search";
  name: string;
  placeholder: string;
  icon?: string;
  isValid?: boolean;
  errorMessage?: string[];
};

function Input({
  type = "text",
  name,
  placeholder,
  icon,
  isValid = true,
  errorMessage = [],
}: InputProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div
        className={`relative w-full rounded-lg ${
          isValid && "ring-2 ring-accent-coral"
        }`}
      >
        <input
          className={`w-full h-12 px-4 ${
            type == "search" ? "pr-10" : "pl-8"
          } text-sm rounded-lg bg-gray-50 text-neutral-dark placeholder:text-neutral-mid ring-1 ring-gray-300`}
          type={type}
          name={name}
          placeholder={placeholder}
        />
        {icon ? (
          <span
            className={`absolute material-symbols-outlined ${
              type == "search" ? "right-2" : "left-2"
            } top-3 text-neutral-mid`}
          >
            {icon}
          </span>
        ) : null}
      </div>
      {errorMessage.map((message, i) => (
        <p key={i} className="text-xs text-accent-coral">
          {message}
        </p>
      ))}
    </div>
  );
}

export default Input;
