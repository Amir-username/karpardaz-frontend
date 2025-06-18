import Questions from "@/components/interview/Questions";
import { cookies } from "next/headers";

async function CreateInterviewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  return (
    <main className="flex items-center justify-center pt-20">
      {token && <Questions token={token?.value} advertiseID={Number(id)} />}
    </main>
  );
}

export default CreateInterviewPage;
