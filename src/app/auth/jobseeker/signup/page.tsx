import AuthShell from "@/components/auth/AuthShell";
import JobSeekerSignupForm from "@/components/auth/JobSeekerSignupForm";

function JobSeekerSignupPage() {
  return (
    <AuthShell role="jobseeker" mode="signup">
      <JobSeekerSignupForm />
    </AuthShell>
  );
}

export default JobSeekerSignupPage;
