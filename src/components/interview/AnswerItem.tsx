"use client";

import ClientInput from "@/ui/ClientInput";
import { Dispatch, SetStateAction, useState } from "react";
type AnswerItemProps = {
  question: string;
  setPageNumberAction: Dispatch<SetStateAction<number>>;
  setAnswersAction: Dispatch<SetStateAction<string[]>>;
};

export default function AnswerItem({
  question,
  setAnswersAction,
  setPageNumberAction,
}: AnswerItemProps) {
  const [answer, setAnswer] = useState("");

  const handleAnswer = () => {
    setAnswersAction((answers) => {
      return [...answers, answer];
    });
    setPageNumberAction((num) => num + 1);
    setAnswer('')
  };

  return (
    <>
      <section className="flex flex-col gap-4 w-80">
        <h1 className="text-lg text-primary-blue dark:text-neutral-light">{question}</h1>
        <ClientInput value={answer} setValue={setAnswer} placeholder="پاسخ" />
      </section>
      <button
        onClick={handleAnswer}
        className="w-full py-2 cursor-pointer hover:brightness-110 rounded-lg text-center text-lg text-neutral-light bg-primary-blue dark:bg-primary-blue-dark"
      >
        ثبت و ادامه
      </button>
    </>
  );
}
