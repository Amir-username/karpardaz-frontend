"use client";

import { JobSeekrAdModel } from "@/models/JobSeekerAd";
import JobSeekerAdItem from "./JobseekerAdItem";
import { useAdvertiseLike } from "@/hooks/useAdvertiseLike";
import EmptyState from "@/ui/EmptyState";
import { AdCardSkeleton } from "@/ui/Skeleton";

type JobSeekerAdListProps = {
  advertises: JobSeekrAdModel[];
  token?: string;
  role?: string;
  isLoading?: boolean;
  /** "wide" for full-width pages (default), "compact" for narrow containers like profiles */
  variant?: "wide" | "compact";
};

function JobSeekerAdList({
  advertises,
  token,
  role,
  isLoading = false,
  variant = "wide",
}: JobSeekerAdListProps) {
  const gridClass =
    variant === "compact"
      ? "grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
      : "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full";
  const emptySpan =
    variant === "compact" ? "sm:col-span-2" : "md:col-span-2 xl:col-span-3";
  const { favAdvertises } = useAdvertiseLike(
    "employer-favorites/",
    token,
    role
  );

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
            <JobSeekerAdItem
              key={ad.id}
              advertise={ad}
              token={token}
              role={role}
              isFav={favAdvertises.includes(ad.id)}
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

export default JobSeekerAdList;
