"use client";

import { AdvertiseModel } from "@/models/Advertise";
import AdvertiseItem from "./AdvertiseItem";
import { useAdvertiseLike } from "@/hooks/useAdvertiseLike";
import EmptyState from "@/ui/EmptyState";
import { AdCardSkeleton } from "@/ui/Skeleton";

type AdvertiseListProps = {
  advertises: AdvertiseModel[];
  token?: string;
  role?: string;
  isLoading?: boolean;
  /** "wide" for full-width pages (default), "compact" for narrow containers like profiles */
  variant?: "wide" | "compact";
};

function AdvertiseList({
  advertises,
  token,
  role,
  isLoading = false,
  variant = "wide",
}: AdvertiseListProps) {
  const gridClass =
    variant === "compact"
      ? "grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
      : "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full";
  const emptySpan =
    variant === "compact" ? "sm:col-span-2" : "md:col-span-2 xl:col-span-3";
  const { favAdvertises } = useAdvertiseLike("jobseeker-favorites/", token);

  if (isLoading) {
    return (
      <ul className={gridClass}>
        {Array.from({ length: 6 }).map((_, i) => (
          <li key={i}>
            <AdCardSkeleton />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className={gridClass}>
      {advertises.length > 0 ? (
        advertises.map((ad) => {
          return (
            <AdvertiseItem
              key={ad.id}
              advertise={ad}
              isFav={favAdvertises.includes(ad.id)}
              token={token}
              role={role}
            />
          );
        })
      ) : (
        <EmptyState
          title="فعلا آگهی وجود ندارد"
          description="به زودی آگهی های جدید اضافه می شوند؛ بعدا دوباره سر بزنید."
          className={emptySpan}
        />
      )}
    </ul>
  );
}

export default AdvertiseList;
