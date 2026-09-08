import Link from "next/link";
import Icon from "@/ui/Icon";
import { useState } from "react";
import { fetchDisLikeAd } from "@/fetch/likedAdvertises/fetchDisLikeAd";
import { fetchLikeAd } from "@/fetch/likedAdvertises/fetchLikeAd";

type AdHeaderProps = {
  title: string;
  name?: string;
  adId: number;
  role: "jobseeker" | "employer";
  id: number;
  isLikeOpen?: boolean;
  isFav: boolean;
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
  isFav = false,
}: AdHeaderProps) {
  const [isLiked, setIsLiked] = useState(isFav);

  const handleLikeOrDislike = () => {
    if (isLiked) {
      if (token && isFav) {
        fetchDisLikeAd(
          token,
          adId,
          role === "jobseeker" ? "employer" : "jobseeker"
        );
        setIsLiked(false);
      }
    } else {
      if (token && !isFav) {
        fetchLikeAd(
          token,
          adId,
          role === "jobseeker" ? "employer" : "jobseeker"
        );
        setIsLiked(true);
      }
    }
  };

  return (
    <div className="flex justify-between items-start w-full gap-2">
      <div className="flex flex-col justify-between gap-1 min-w-0">
        <h3 className="font-semibold text-fg leading-6 line-clamp-1 group-hover:text-brand transition-colors">
          {title}
        </h3>
        {name && (
          <Link
            href={`profile/${role}/${id}`}
            className="w-fit text-xs text-fg-muted hover:text-brand transition-colors"
          >
            {name}
          </Link>
        )}
      </div>
      {isLikeOpen && (
        <button
          type="button"
          onClick={handleLikeOrDislike}
          aria-label={isLiked ? "حذف از علاقه مندی ها" : "افزودن به علاقه مندی ها"}
          className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors cursor-pointer hover:bg-accent-soft"
        >
          <Icon
            name="favorite"
            size={20}
            fill={isLiked}
            className={isLiked ? "text-accent" : "text-fg-muted"}
          />
        </button>
      )}
    </div>
  );
}
