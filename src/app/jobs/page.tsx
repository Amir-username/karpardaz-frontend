import { BASE_LINK } from "@/fetch/config";
import AdvertiseList from "@/components/advertise/AdvertiseList";

async function Page() {
  const jobsData = await fetchAdvertisements();
  return (
    <div className="container flex items-center justify-center mx-auto py-12 bg-neutral-light">
      <main className="flex justify-center">
        {jobsData ? (
          <AdvertiseList advertises={jobsData} />
        ) : (
          <div>not found</div>
        )}
      </main>
    </div>
  );
}

export default Page;

async function fetchAdvertisements() {
  const res = await fetch(BASE_LINK + "advertisements");
  const jobsData = await res.json();
  return jobsData;
}
