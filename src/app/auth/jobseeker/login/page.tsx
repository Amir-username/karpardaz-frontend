import JobeekerLoginForm from "@/components/auth/JobSeekerLoginForm";

function JobeekerLoginPage() {
  return (
    <div className="container flex items-center justify-center h-screen mx-auto">
      <main className="flex flex-col items-center justify-center gap-4">
        <h3 className="text-neutral-dark">
          کارفرما هستید؟{" "}
          <span className="font-bold cursor-pointer text-secondary-blue">ورود به بخش کارفرما</span>
        </h3>
        <JobeekerLoginForm />
      </main>
    </div>
  );
}

export default JobeekerLoginPage;
