type FormProps = {
  children: React.ReactNode;
};

function Form({ children }: FormProps) {
  return (
    <form
      action=""
      className="flex flex-col items-center justify-center w-full gap-4 p-8 rounded-lg bg-neutral-light md:w-sm ring-1 ring-gray-300"
    >
      {children}
    </form>
  );
}

export default Form;
