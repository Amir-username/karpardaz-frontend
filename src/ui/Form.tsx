import { FormEvent } from "react";

type FormProps = {
  action?: (payload: FormData) => void;
  children: React.ReactNode;
  onFormSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  className?: string;
};

/**
 * Card-style form shell used by every auth/profile form.
 */
function Form({ children, action, onFormSubmit, className = "" }: FormProps) {
  const classes = `flex flex-col items-center justify-center w-full max-w-md gap-4 p-8 rounded-2xl bg-card ring-1 ring-border shadow-soft ${className}`;

  if (onFormSubmit) {
    return (
      <form onSubmit={(e) => onFormSubmit(e)} className={classes}>
        {children}
      </form>
    );
  }
  return (
    <form action={action} className={classes}>
      {children}
    </form>
  );
}

export default Form;
