"use client";

import ClientInput from "@/ui/ClientInput";
import Button from "@/ui/Button";
import Icon from "@/ui/Icon";
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
    setAnswer("");
  };

  return (
    <section className="flex flex-col gap-6 w-full max-w-md rounded-2xl bg-card ring-1 ring-border shadow-soft p-6">
      <div className="flex items-start gap-3">
        <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-brand-soft text-brand-soft-fg text-sm font-bold shrink-0">
          <Icon name="help" size={20} />
        </span>
        <h1 className="text-lg font-semibold text-fg leading-7">{question}</h1>
      </div>
      <ClientInput
        value={answer}
        setValue={setAnswer}
        placeholder="پاسخ خود را وارد کنید"
      />
      <Button onClick={handleAnswer} text="ثبت و ادامه" />
    </section>
  );
}
