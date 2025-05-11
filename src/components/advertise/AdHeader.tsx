import FILL_FAV from "../../../public/icons/FILL_FAV.svg";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { fetchDisLikeAd } from "@/fetch/likedAdvertises/fetchDisLikeAd";
import { fetchLikeAd } from "@/fetch/likedAdvertises/fetchLikeAd";

type AdHeaderProps = {
  title: string;
  name?: string;
  adId: number;
  role: "jobseeker" | "employer";
  id: number;
  isLikeOpen?: boolean;
  token?: string;
};

export default function AdHeader({
  title,
  name,
  adId,
  role,
  id,
  isLikeOpen,
  token,
}: AdHeaderProps) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeOrDislike = () => {
    if (isLiked) {
      setIsLiked(false);
      if (token) {
        fetchDisLikeAd(token, adId);
      }
    } else {
      setIsLiked(true);
      if (token) {
        fetchLikeAd(token, adId);
      }
    }
  };
  return (
    <div className="flex justify-between w-full">
      <div className="flex flex-col justify-between h-full gap-2">
        <h3 className="font-semibold text-neutral-dark">{title}</h3>
        <Link href={`profile/${role}/${id}`}>
          <h6 className="text-sm text-gray-700">{name ? name : "نام"}</h6>
        </Link>
      </div>
      {isLikeOpen && (
        <div onClick={handleLikeOrDislike}>
          {isLiked ? (
            <Image src={FILL_FAV} alt="fill fav icon" />
          ) : (
            <span className="cursor-pointer material-symbols-outlined text-neutral-mid">
              favorite
            </span>
          )}
        </div>
      )}
    </div>
  );
}
