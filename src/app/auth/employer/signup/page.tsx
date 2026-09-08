import AuthShell from "@/components/auth/AuthShell";
import EmployerSignupForm from "@/components/auth/EmployerSignupForm";

function EmployerSignupPage() {
  return (
    <AuthShell role="employer" mode="signup">
      <EmployerSignupForm />
    </AuthShell>
  );
}

export default EmployerSignupPage;
