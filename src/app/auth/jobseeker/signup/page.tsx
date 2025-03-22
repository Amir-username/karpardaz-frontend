import JobSeekerSignupForm from "@/components/auth/JobSeekerSignupForm";

function JobSeekerSignupPage() {
  return (
    <div className="container flex items-center justify-center h-screen mx-auto">
      <main className="flex flex-col items-center justify-center gap-4">
        <h3 className="text-neutral-dark">
          کارفرما هستید؟{" "}
          <span className="font-bold cursor-pointer text-secondary-blue">ورود به بخش کارفرما</span>
        </h3>
        <JobSeekerSignupForm />
      </main>
    </div>
  );
}

export default JobSeekerSignupPage;
