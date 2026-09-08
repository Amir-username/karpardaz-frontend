type SkeletonProps = {
  className?: string;
};

function Skeleton({ className = "" }: SkeletonProps) {
  return <div className={`animate-pulse rounded-lg bg-subtle ${className}`} />;
}

/**
 * Card-shaped skeleton matching the advertise card layout
 * (avatar, title/company, meta badges, tags row, footer CTA).
 */
export function AdCardSkeleton() {
  return (
    <div
      className="flex flex-col rounded-2xl bg-card ring-1 ring-border shadow-soft overflow-hidden"
      aria-hidden="true"
    >
      <div className="flex gap-3.5 p-4">
        <Skeleton className="w-14 h-14 rounded-xl shrink-0" />
        <div className="flex flex-col gap-2.5 flex-1 min-w-0 py-0.5">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-2/5" />
          <div className="flex gap-2 pt-1">
            <Skeleton className="h-4 w-14 rounded-full" />
            <Skeleton className="h-4 w-20 rounded-full" />
          </div>
        </div>
      </div>
      <div className="flex gap-2 px-4 pt-3 pb-2.5 border-t border-border">
        <Skeleton className="h-5 w-14 rounded-full" />
        <Skeleton className="h-5 w-20 rounded-full" />
        <Skeleton className="h-5 w-16 rounded-full" />
      </div>
      <Skeleton className="h-11 w-full rounded-none mt-2.5" />
    </div>
  );
}

/**
 * Full skeleton for the /jobs and /jobseeker-ads search pages:
 * search input + filter bar + card grid.
 */
export function SearchPageSkeleton({ cards = 6 }: { cards?: number }) {
  return (
    <div
      className="flex flex-col items-center gap-8 w-full"
      aria-hidden="true"
      role="status"
      aria-label="در حال بارگذاری"
    >
      <div className="relative w-full max-w-xl">
        <Skeleton className="w-full h-14 rounded-xl" />
        <span className="absolute start-4 top-1/2 -translate-y-1/2 w-5 h-5 rounded-md bg-fg-muted/20 animate-pulse" />
      </div>
      <Skeleton className="w-full max-w-xl h-13 rounded-2xl" />
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
        {Array.from({ length: cards }).map((_, i) => (
          <li key={i}>
            <AdCardSkeleton />
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Skeleton matching the job/jobseeker-ad detail page:
 * gradient header + spec tile grid + description + chips + CTA.
 */
export function AdDetailSkeleton() {
  return (
    <div className="max-w-4xl mx-auto my-8 px-4" aria-hidden="true">
      <main className="flex flex-col rounded-2xl bg-card ring-1 ring-border shadow-soft overflow-hidden">
        {/* gradient header */}
        <div className="gradient-background p-6 md:p-8" role="status" aria-label="در حال بارگذاری">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/20 animate-pulse shrink-0" />
            <div className="flex flex-col gap-2.5 min-w-0">
              <div className="h-6 w-56 max-w-full rounded-md bg-white/25 animate-pulse" />
              <div className="h-4 w-36 rounded-md bg-white/15 animate-pulse" />
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8 bg-bg flex flex-col gap-6">
          {/* spec tile grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="rounded-xl bg-card ring-1 ring-border p-3 flex flex-col gap-2"
              >
                <Skeleton className="h-3 w-12" />
                <Skeleton className="h-4 w-20" />
              </div>
            ))}
          </div>

          {/* description block */}
          <div className="flex flex-col gap-2.5">
            <Skeleton className="h-5 w-28" />
            <Skeleton className="h-3.5 w-full" />
            <Skeleton className="h-3.5 w-11/12" />
            <Skeleton className="h-3.5 w-4/6" />
          </div>

          {/* technology chips */}
          <div className="flex gap-2 flex-wrap">
            <Skeleton className="h-7 w-20 rounded-lg" />
            <Skeleton className="h-7 w-16 rounded-lg" />
            <Skeleton className="h-7 w-24 rounded-lg" />
            <Skeleton className="h-7 w-14 rounded-lg" />
          </div>

          {/* CTA */}
          <Skeleton className="h-12 w-full rounded-xl" />
        </div>
      </main>
    </div>
  );
}

/**
 * Skeleton matching the profile page: gradient banner with avatar,
 * name/info lines, then a compact ads grid.
 */
export function ProfilePageSkeleton() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 flex flex-col gap-6" aria-hidden="true">
      <div className="rounded-2xl bg-card ring-1 ring-border shadow-soft overflow-hidden" role="status" aria-label="در حال بارگذاری">
        <div className="gradient-background h-36 relative">
          <div className="absolute -bottom-8 start-6 w-24 h-24 rounded-full bg-white/20 animate-pulse ring-4 ring-card" />
        </div>
        <div className="pt-12 pb-6 px-6 flex flex-col gap-3">
          <Skeleton className="h-5 w-44" />
          <Skeleton className="h-3.5 w-3/4" />
          <div className="flex gap-2 pt-1">
            <Skeleton className="h-7 w-24 rounded-lg" />
            <Skeleton className="h-7 w-32 rounded-lg" />
            <Skeleton className="h-7 w-20 rounded-lg" />
          </div>
        </div>
      </div>
      <div className="rounded-2xl bg-card ring-1 ring-border shadow-soft p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <AdCardSkeleton />
          <AdCardSkeleton />
        </div>
      </div>
    </div>
  );
}

export default Skeleton;
