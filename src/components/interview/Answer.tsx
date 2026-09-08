"use client";

import { fetchCreateAnswers } from "@/fetch/interview/fetchCreateAnswers";
import Button from "@/ui/Button";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import AnswerItem from "./AnswerItem";

export type InterviewType = {
  id: number;
  questions: string[];
  answers?: string[];
  jobseeker_ids: number[];
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
  const [questions, setQuestions] = useState<string[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [pageNumber, setPageNumber] = useState(0);

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
    <main className="flex flex-col gap-10 items-center justify-center w-full">
      {questions[pageNumber] ? (
        <AnswerItem
          question={questions[pageNumber]}
          setAnswersAction={setAnswers}
          setPageNumberAction={setPageNumber}
        />
      ) : (
        <section className="flex flex-col gap-8 w-full max-w-md rounded-2xl bg-card ring-1 ring-border shadow-soft p-6">
          <ul className="flex flex-col gap-8">
            {questions.map((q, i) => {
              return (
                <li key={i} className="flex flex-col gap-3">
                  <h1 className="text-lg font-semibold text-fg leading-7">{q}</h1>
                  <div className="flex gap-2.5">
                    <span className="text-xs font-medium text-fg-muted shrink-0 pt-0.5">
                      پاسخ شما:
                    </span>
                    <p className="text-sm text-fg/90 leading-6">{answers[i]}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <Button onClick={handleCreateAnswers} text="ثبت پاسخ ها" />
        </section>
      )}
    </main>
  );
}
