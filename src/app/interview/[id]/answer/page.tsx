import Answer, { InterviewType } from "@/components/interview/Answer";
import { fetchGetInterview } from "@/fetch/interview/fetchGetInterview";
import { cookies } from "next/headers";

export default async function AnswerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const role = cookieStore.get("role");

  const interview: InterviewType = await fetchGetInterview(Number(id));

  return (
    <main className="flex items-center justify-center pt-20">
      {role?.value === "jobseeker" && (
        <Answer
          token={token?.value!}
          interview={interview}
          advertiseID={Number(id)}
        />
      )}
    </main>
  );
}
