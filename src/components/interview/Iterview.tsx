import { fetchGetInterview } from "@/fetch/interview/fetchGetInterview";
import Link from "next/link";

export default async function Interview({
  advertiseID,
}: {
  advertiseID: number;
}) {
  const interview = await fetchGetInterview(advertiseID);

  return (
    <section className="flex gap-6 items-center justify-center p-8 flex-col">
      <h1 className="text-2xl text-primary-blue">مصاحبه آنلاین</h1>
      {interview ? (
        <Link href={`/interview/${advertiseID}/answer/`}>
          <div className="bg-primary-blue px-3 hover:brightness-105 py-2 text-neutral-light rounded-lg text-sm cursor-pointer">
            شرکت در مصاحبه
          </div>
        </Link>
      ) : (
        <Link href={`/interview/${advertiseID}/create/`}>
          <div className="bg-primary-blue px-3 hover:brightness-105 py-2 text-neutral-light rounded-lg text-sm cursor-pointer">
            ایجاد مصاحبه
          </div>
        </Link>
      )}
    </section>
  );
}
