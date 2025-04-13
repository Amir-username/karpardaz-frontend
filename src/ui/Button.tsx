type ButtonProps = {
  text: string;
  type?: "button" | "submit";
  card?: boolean;
  h?: string;
  outline?: boolean;
};

function Button({
  text,
  type = "button",
  card = false,
  h = "h-12",
  outline = false,
}: ButtonProps) {
  return (
    <button
      className={`${card ? "rounded-b-lg" : "rounded-lg"} w-full ${h} ${
        outline
          ? " bg-neutral-light text-primary-blue hover:bg-primary-blue hover:text-neutral-light"
          : "text-neutral-light bg-primary-blue hover:bg-primary-blue/95"
      } text-center duration-300  cursor-pointer ring-2 ring-primary-blue`}
      type={type}
    >
      {text}
    </button>
  );
}

export default Button;
