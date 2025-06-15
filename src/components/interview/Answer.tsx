"use client";

import { fetchCreateAnswers } from "@/fetch/interview/fetchCreateAnswers";
import ClientInput from "@/ui/ClientInput";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export type InterviewType = {
  id: number;
  questions: string[];
  answers?: string[];
};

export default function Answer({
  token,
  advertiseID,
  interview,
}: {
  token: string;
  advertiseID: number;
  interview: InterviewType;
}) {
  const [questions, setQuestions] = useState<string[]>(["1", "2"]);
  const [answers, setAnswers] = useState<string[]>([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      if (interview) {
        setQuestions(interview.questions);
      }
    };

    fetchQuestions();
  }, []);

  const handleCreateAnswers = () => {
    fetchCreateAnswers(token, interview.id, answers);
    redirect(`/jobs/${advertiseID}`);
  };

  return (
    <main className="flex flex-col gap-12 items-center justify-center">
      <ul className="flex items-center justify-center flex-col gap-6">
        {questions.map((q, i) => {
          return (
            <li key={i} className="flex flex-col gap-4 w-80">
              <h1 className="text-lg text-primary-blue">{q}</h1>
              <ClientInput placeholder="پاسخ" />
            </li>
          );
        })}
      </ul>
      <button
        onClick={handleCreateAnswers}
        className="w-full py-2 cursor-pointer hover:brightness-110 rounded-lg text-center text-lg text-neutral-light bg-primary-blue"
      >
        ثبت
      </button>
    </main>
  );
}
