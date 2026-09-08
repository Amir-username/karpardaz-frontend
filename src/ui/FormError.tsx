import Icon from "./Icon";

type FormErrorProps = {
  message: string[];
};

function FormError({ message }: FormErrorProps) {
  return (
    <div
      role="alert"
      className="flex items-center gap-2 w-full px-3 py-2.5 text-sm text-danger-fg rounded-xl bg-danger-soft ring-1 ring-danger/25"
    >
      <Icon name="error" size={18} className="shrink-0" />
      <span>{message}</span>
    </div>
  );
}

export default FormError;
