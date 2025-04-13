import { AdvertiseModel } from "@/models/Advertise";
import Button from "../../ui/Button";
import AdAvatar from "./AdAvater";
import AdHeader from "./AdHeader";
import AdInfo from "./AdInfo";
import AdTags from "./AdTags";

type AdvertiseItemProps = {
  advertise: AdvertiseModel;
};

function AdvertiseItem({ advertise }: AdvertiseItemProps) {
  return (
    <li className="flex flex-col md:w-96 w-sm rounded-lg gap-3 shadow-md ring-1 ring-gray-200">
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
      <Button text="مشاهده" card />
    </li>
  );
}

export default AdvertiseItem;
