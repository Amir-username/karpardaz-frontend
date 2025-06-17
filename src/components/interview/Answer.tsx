"use client";

import { fetchCreateAnswers } from "@/fetch/interview/fetchCreateAnswers";
import ClientInput from "@/ui/ClientInput";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import AnswerItem from "./AnswerItem";
import { fetchCurrentJobSeeker } from "@/fetch/jobseeker/fetchCurrentJobseeker";
import { JobSeekerDetailModel } from "@/models/JobSeekerDetail";

export type InterviewType = {
  id: number;
  questions: string[];
  answers?: string[];
  jobseeker_ids: number[]
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
    <main className="flex flex-col gap-12 items-center justify-center">
      {questions[pageNumber] ? (
        <AnswerItem
          question={questions[pageNumber]}
          answers={answers}
          setAnswersAction={setAnswers}
          setPageNumberAction={setPageNumber}
        />
      ) : (
        <section className="flex flex-col gap-8 w-80">
          <ul className="flex flex-col gap-10">
            {questions.map((q, i) => {
              return (
                <li key={i} className="flex flex-col gap-6">
                  <h1 className="text-xl text-primary-blue">{q}</h1>
                  <div className="flex gap-3">
                    <h4 className="text-sm text-neutral-mid">پاسخ شما</h4>
                    <p>{answers[i]}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <button
            onClick={handleCreateAnswers}
            className="w-full py-2 cursor-pointer hover:brightness-110 rounded-lg text-center text-lg text-neutral-light bg-primary-blue"
          >
            ثبت پاسخ ها
          </button>
        </section>
      )}
    </main>
  );
}
