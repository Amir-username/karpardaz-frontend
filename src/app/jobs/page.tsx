import { BASE_LINK } from "@/fetch/config";
import AdvertiseList from "@/components/advertise/AdvertiseList";

async function Page() {
  const res = await fetch(BASE_LINK + "advertisements", {
    cache: "force-cache",
    next: {revalidate: 300}
  });
  const jobsData = await res.json();

  return (
    <div className="container flex items-center justify-center mx-auto py-12 bg-neutral-light">
      <main className="flex justify-center">
        <AdvertiseList advertises={jobsData}/>
      </main>
    </div>
  );
}

export default Page;
