type AdInfoProps = {
  city: string | undefined;
  isRemote: boolean | undefined;
  isInternship: boolean | undefined;
  salary: string | undefined;
};

export default function AdInfo({
  city,
  isRemote,
  isInternship,
  salary,
}: AdInfoProps) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-gray-500 text-xs">
        {city} - {salary}
      </p>
      <div className="flex">
        {isRemote && <p className="text-xs text-gray-500">امکان دورکاری</p>}
        {isInternship && (
          <p className="text-xs text-gray-500">امکان کارآموزی</p>
        )}
      </div>
    </div>
  );
}
