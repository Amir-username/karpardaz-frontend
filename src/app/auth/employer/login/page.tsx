import EmployerLoginForm from "@/components/auth/EmployerLoginForm";
import FormRedirectMessage from "@/ui/FormRedirectMessage";

function EmployerLoginPage() {
  return (
    <div className="container flex items-center justify-center mx-auto">
      <main className="flex flex-col items-center justify-center py-16 gap-4">
        <FormRedirectMessage role="jobseeker" action="login"/>
        <EmployerLoginForm />
      </main>
    </div>
  );
}

export default EmployerLoginPage;
