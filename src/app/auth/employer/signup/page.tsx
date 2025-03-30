import EmployerSignupForm from "@/components/auth/EmployerSignupForm";
import FormRedirectMessage from "@/ui/FormRedirectMessage";

function EmployerSignupPage() {
  return (
    <div className="container flex items-center justify-center h-screen mx-auto">
      <main className="flex flex-col items-center justify-center gap-4">
        <FormRedirectMessage role="jobseeker" action="signup"/>
        <EmployerSignupForm />
      </main>
    </div>
  );
}

export default EmployerSignupPage;
