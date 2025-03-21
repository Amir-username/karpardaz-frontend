type ButtonProps = {
  text: string;
  type?: "button" | "submit";
};

function Button({ text, type = "button" }: ButtonProps) {
  return (
    <button
      className="w-full h-12 text-center duration-300 rounded-lg cursor-pointer text-neutral-light bg-primary-blue hover:bg-primary-blue/95"
      type={type}
    >
      {text}
    </button>
  );
}

export default Button;
