import React from "react";

type FormContentProps = {
  children: React.ReactNode;
};

function FormContent({ children }: FormContentProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-4 w-72">
      {children}
    </div>
  );
}

export default FormContent;
