import { BASE_LINK } from "@/fetch/config";

async function Resume({ id }: { id: number }) {
  const res = await fetch(BASE_LINK + `get-resume/${id}`);
  if (res.status === 200)
    return (
      <a href={`${BASE_LINK}get-resume/${id}`}>
        <div className="flex gap-2 px-3 py-2 rounded-lg cursor-pointer ring-2 ring-neutral-mid">
          <span className="text-sm text-neutral-mid">رزومه</span>
        </div>
      </a>
    );
}

export default Resume;
