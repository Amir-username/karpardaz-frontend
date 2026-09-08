import { AdCardSkeleton } from "@/ui/Skeleton";

export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col items-center gap-8">
      <div className="w-full max-w-2xl h-14 rounded-xl animate-pulse bg-subtle" />
      <div className="w-full max-w-2xl h-14 rounded-2xl animate-pulse bg-subtle" />
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
        {Array.from({ length: 3 }).map((_, i) => (
          <li key={i}>
            <AdCardSkeleton />
          </li>
        ))}
      </ul>
    </div>
  );
}
