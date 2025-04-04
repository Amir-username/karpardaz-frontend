type ButtonProps = {
  text: string;
  type?: "button" | "submit";
  card?: boolean;
};

function Button({ text, type = "button", card = false }: ButtonProps) {
  return (
    <button
      className={`${
        card ? "rounded-b-lg" : "rounded-lg"
      } w-full h-12 text-center duration-300  cursor-pointer text-neutral-light bg-primary-blue hover:bg-primary-blue/95`}
      type={type}
    >
      {text}
    </button>
  );
}

export default Button;
