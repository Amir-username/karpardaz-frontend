import JobSeekerSignupForm from "@/components/auth/JobSeekerSignupForm";
import FormRedirectMessage from "@/ui/FormRedirectMessage";

function JobSeekerSignupPage() {
  return (
    <div className="container flex items-center justify-center h-screen mx-auto">
      <main className="flex flex-col items-center justify-center gap-4">
        <FormRedirectMessage role="employer" action="signup"/>
        <JobSeekerSignupForm />
      </main>
    </div>
  );
}

export default JobSeekerSignupPage;
