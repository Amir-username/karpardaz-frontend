import AuthShell from "@/components/auth/AuthShell";
import EmployerLoginForm from "@/components/auth/EmployerLoginForm";

function EmployerLoginPage() {
  return (
    <AuthShell role="employer" mode="login">
      <EmployerLoginForm />
    </AuthShell>
  );
}

export default EmployerLoginPage;
