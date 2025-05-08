import { FormEvent } from "react";

type FormProps = {
  action?: (payload: FormData) => void;
  children: React.ReactNode;
  onFormSubmit?: (e: FormEvent<HTMLFormElement>) => void;
};

function Form({ children, action, onFormSubmit }: FormProps) {
  if (onFormSubmit) {
    return (
      <form
        onSubmit={(e) => onFormSubmit(e)}
        className="flex flex-col items-center justify-center w-full gap-4 p-8 rounded-lg bg-neutral-light md:w-sm ring-1 ring-gray-300"
      >
        {children}
      </form>
    );
  }
  return (
    <form
      action={action}
      className="flex flex-col items-center justify-center w-full gap-4 p-8 rounded-lg bg-neutral-light md:w-sm ring-1 ring-gray-300"
    >
      {children}
    </form>
  );
}

export default Form;
