import Link from "next/link";

type AdHeaderProps = {
  title: string;
  name?: string;
  role: "jobseeker" | "employer";
  id: number;
  isLikeOpen?: boolean;
  token?: string;
};

export default function AdHeader({
  title,
  name,
  role,
  id,
  isLikeOpen,
}: AdHeaderProps) {
  // const [isLiked, setIsLiked] = useState(false)

  // const handleLikeOrDislike =  () => {
  //   if (isLiked) {
  //     setIsLiked(false)

  //   }
  //   else {
  //     setIsLiked(true)
  //     const fetchLikeAd = async (token: string) => {
  //       const res = await fetch(BASE_LINK + '')
  //     }
  //   }
  // }
  return (
    <div className="flex justify-between w-full">
      <div className="flex flex-col justify-between h-full gap-2">
        <h3 className="font-semibold text-neutral-dark">{title}</h3>
        <Link href={`profile/${role}/${id}`}>
          <h6 className="text-sm text-gray-700">{name ? name : "نام"}</h6>
        </Link>
      </div>
      {isLikeOpen && (
        <span className="cursor-pointer material-symbols-outlined text-neutral-mid">
          favorite
        </span>
      )}
    </div>
  );
}
