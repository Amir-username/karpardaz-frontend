import JobsResult from "@/components/search/JobsResult";

async function Page() {
  return (
    <div className="container flex items-center justify-center mx-auto py-12 bg-neutral-light">
      <JobsResult />
    </div>
  );
}

export default Page;
