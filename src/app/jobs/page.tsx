import AdvertiseList from "@/components/advertise/AdvertiseList";
import SearchBox from "@/components/search/SearchBox";
import { fetchAdvertisements } from "@/fetch/fetchAdvertisements";

async function Page() {
  const jobsData = await fetchAdvertisements();
  return (
    <div className="container flex items-center justify-center mx-auto py-12 bg-neutral-light">
      <div className="flex flex-col gap-12">
        <SearchBox />
        <main className="flex justify-center">
          {jobsData ? (
            <AdvertiseList advertises={jobsData} />
          ) : (
            <div>not found</div>
          )}
        </main>
      </div>
    </div>
  );
}

export default Page;
