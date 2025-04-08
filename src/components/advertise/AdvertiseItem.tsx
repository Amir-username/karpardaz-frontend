import { AdvertiseModel } from "@/models/Advertise";
import Button from "../../ui/Button";
import { BASE_LINK } from "@/fetch/config";
import { EmployerModel } from "@/models/Employer";

type AdvertiseItemProps = {
  advertise: AdvertiseModel;
};

function AdvertiseItem({ advertise }: AdvertiseItemProps) {
  return (
    <li className="flex flex-col w-96 rounded-lg gap-3 shadow-md ring-1 ring-gray-200">
      <div className="flex gap-3 px-3 pt-3">
        <div className="flex flex-col justify-start h-full">
          <AdEmployerAvatar />
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

function AdEmployerAvatar() {
  return <div className="w-14 h-14 bg-neutral-mid rounded-lg"></div>;
}

type AdHeaderProps = {
  title: string;
  companyID: number;
};

async function AdHeader({ title, companyID }: AdHeaderProps) {
  const res = await fetch(BASE_LINK + `employer-detail/${companyID}`);
  const data = await res.json();
  const comnpany: EmployerModel = {
    id: data.id,
    name: data.company_name,
  };
  return (
    <div className="flex justify-between w-full">
      <div className="flex flex-col justify-between h-full gap-2">
        <h3 className="font-semibold text-neutral-dark">{title}</h3>
        <h6 className="text-gray-700 text-sm">{comnpany.name}</h6>
      </div>
      <span className="material-symbols-outlined text-neutral-mid">
        favorite
      </span>
    </div>
  );
}

type AdInfoProps = {
  city: string;
  isRemote: boolean;
  isInternship: boolean;
};

function AdInfo({ city, isRemote, isInternship }: AdInfoProps) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-gray-500 text-xs">{city} - حقوق پیشنهادی</p>
      <div className="flex">
        {isRemote && <p className="text-xs text-gray-500">امکان دورکاری</p>}
        {isInternship && (
          <p className="text-xs text-gray-500">امکان کارآموزی</p>
        )}
      </div>
    </div>
  );
}

type AdTagsProps = {
  tags: string[];
};

function AdTags({ tags }: AdTagsProps) {
  return (
    <div className="flex gap-2">
      {tags.map((tag, i) => {
        return <AdTag key={i} name={tag} />;
      })}
    </div>
  );
}

type AdTagProps = {
  name: string;
};

function AdTag({ name }: AdTagProps) {
  return (
    <p className="px-2 py-1 bg-secondary-blue text-white rounded-lg text-xs">
      {name}
    </p>
  );
}
