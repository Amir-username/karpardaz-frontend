type FormHeaderProps = {
  title: string;
  subtitle: string;
};

function FormHeader({ title, subtitle }: FormHeaderProps) {
  return (
    <header className="flex flex-col gap-3 p-2 text-center">
      <h1 className="font-display text-3xl text-brand">{title}</h1>
      <h3 className="text-base font-medium text-fg-muted">{subtitle}</h3>
    </header>
  );
}

export default FormHeader;
