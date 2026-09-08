import AuthShell from "@/components/auth/AuthShell";
import JobSeekerLoginForm from "@/components/auth/JobSeekerLoginForm";

function JobSeekerLoginPage() {
  return (
    <AuthShell role="jobseeker" mode="login">
      <JobSeekerLoginForm />
    </AuthShell>
  );
}

export default JobSeekerLoginPage;
