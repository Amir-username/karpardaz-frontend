type FormErrorProps = {
  message: string[];
};

function FormError({ message }: FormErrorProps) {
  return (
    <div className="px-3 py-2 text-accent-coral w-full rounded-lg bg-red-100 dark:bg-neutral-dark ring-1 ring-accent-coral">
      {message}
    </div>
  );
}

export default FormError;
