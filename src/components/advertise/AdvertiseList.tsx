import { AdvertiseModel } from "@/models/Advertise";
import AdvertiseItem from "./AdvertiseItem";

type AdvertiseListProps = {
  advertises: AdvertiseModel[];
};

function AdvertiseList({ advertises }: AdvertiseListProps) {
  return (
    <ul className="flex flex-col gap-4">
      {advertises.map((ad) => {
        return <AdvertiseItem key={ad.id} advertise={ad} />;
      })}
    </ul>
  );
}

export default AdvertiseList;
