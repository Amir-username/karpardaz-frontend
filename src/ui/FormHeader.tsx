type FormHeaderProps = {
    title: string
    subtitle: string
}

function FormHeader({title, subtitle}: FormHeaderProps) {
  return (
    <header className="flex flex-col gap-4 p-4">
      <h1 className="text-3xl font-bold text-center text-primary-blue">
        {title}
      </h1>
      <h3 className="text-lg font-semibold text-center text-secondary-blue">
        {subtitle}
      </h3>
    </header>
  );
}

export default FormHeader;
