import React from "react";

type FormContentProps = {
  children: React.ReactNode;
  className?: string;
};

function FormContent({ children, className = "" }: FormContentProps) {
  return (
    <div className={`flex flex-col items-center justify-center gap-4 py-2 w-full max-w-72 ${className}`}>
      {children}
    </div>
  );
}

export default FormContent;
