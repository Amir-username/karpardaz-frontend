import JobeekerLoginForm from "@/components/auth/JobSeekerLoginForm";
import FormRedirectMessage from "@/ui/FormRedirectMessage";

function JobeekerLoginPage() {
  return (
    <div className="container flex items-center justify-center mx-auto">
      <main className="flex flex-col items-center justify-center py-16 gap-4">
        <FormRedirectMessage role="employer" action="login" />
        <JobeekerLoginForm />
      </main>
    </div>
  );
}

export default JobeekerLoginPage;
