import { SearchPageSkeleton } from "@/ui/Skeleton";

export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 flex items-center justify-center">
      <SearchPageSkeleton />
    </div>
  );
}
