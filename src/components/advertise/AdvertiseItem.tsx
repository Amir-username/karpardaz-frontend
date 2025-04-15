import { AdvertiseModel } from "@/models/Advertise";
import Button from "../../ui/Button";
import AdAvatar from "./AdAvater";
import AdHeader from "./AdHeader";
import AdInfo from "./AdInfo";
import AdTags from "./AdTags";
import Link from "next/link";

type AdvertiseItemProps = {
  advertise: AdvertiseModel;
};

function AdvertiseItem({ advertise }: AdvertiseItemProps) {
  return (
    <li className="flex flex-col gap-3 rounded-lg shadow-md md:w-96 w-sm ring-1 ring-gray-200">
      <div className="flex gap-3 px-3 pt-3">
        <div className="flex flex-col justify-start h-full">
          <AdAvatar />
        </div>
        <div className="flex-2">
          <div className="flex flex-col gap-3">
            <AdHeader
              title={advertise.title}
              companyID={advertise.employer_id}
            />
            <AdInfo
              city={advertise.city}
              isRemote={advertise.is_remote}
              isInternship={advertise.is_internship}
            />
            <AdTags tags={advertise.technologies} />
          </div>
        </div>
      </div>
      <Link href={`jobs/${advertise.id}`}>
        <Button text="مشاهده" card />
      </Link>
    </li>
  );
}

export default AdvertiseItem;
