import AdvertiseList from "@/components/advertise/AdvertiseList";
import JobsResult from "@/components/search/JobsResult";
import SearchBox from "@/components/search/SearchBox";
import { fetchAdvertisements } from "@/fetch/fetchAdvertisements";

async function Page() {
  const jobsData = await fetchAdvertisements();
  return (
    <div className="container flex items-center justify-center mx-auto py-12 bg-neutral-light">
      <JobsResult />
    </div>
  );
}

export default Page;
