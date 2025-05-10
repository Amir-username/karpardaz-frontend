import { AdvertiseModel } from "@/models/Advertise";
import AdvertiseItem from "./AdvertiseItem";

type AdvertiseListProps = {
  advertises: AdvertiseModel[];
  token?: string;
  role?: string;
};

function AdvertiseList({ advertises, token, role }: AdvertiseListProps) {
  return (
    <ul className="flex flex-col gap-8 justify-center items-center">
      {advertises.map((ad) => {
        return (
          <AdvertiseItem key={ad.id} advertise={ad} token={token} role={role} />
        );
      })}
    </ul>
  );
}

export default AdvertiseList;
