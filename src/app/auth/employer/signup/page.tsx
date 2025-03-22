import EmployerSignupForm from "@/components/auth/EmployerSignupForm";

function EmployerSignupPage() {
  return (
    <div className="container flex items-center justify-center h-screen mx-auto">
      <main className="flex flex-col items-center justify-center gap-4">
        <h3 className="text-neutral-dark">
          کارجو هستید؟{" "}
          <span className="font-bold cursor-pointer text-secondary-blue">
            ورود به بخش کارجو
          </span>
        </h3>
        <EmployerSignupForm />
      </main>
    </div>
  );
}

export default EmployerSignupPage;
