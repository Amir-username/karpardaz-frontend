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
          ? " bg-neutral-light dark:bg-neutral-950 text-primary-blue dark:text-neutral-light hover:bg-primary-blue hover:dark:bg-primary-blue-dark hover:text-neutral-light"
          : "text-neutral-light bg-primary-blue dark:bg-primary-blue-dark hover:bg-primary-blue/95 hover:dark:bg-primary-blue-dark/100"
      } text-center duration-300  cursor-pointer ring-2 ring-primary-blue dark:ring-primary-blue-dark`}
      type={type}
    >
      {text}
    </button>
  );
}

export default Button;
