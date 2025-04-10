type AdInfoProps = {
  city: string;
  isRemote: boolean;
  isInternship: boolean;
};

export default function AdInfo({ city, isRemote, isInternship }: AdInfoProps) {
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
