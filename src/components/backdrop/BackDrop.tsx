import React from "react";

type BackDropProps = {
  children: React.ReactNode;
};

function BackDrop({ children }: BackDropProps) {
  return (
    <div className="absolute top-0 w-full h-64 p-8 md:h-96 bg-primary-blue">
      {children}
    </div>
  );
}

export default BackDrop;
