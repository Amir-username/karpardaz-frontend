"use client";

import { fetchCreateInterview } from "@/fetch/interview/fetchCreateInterview";
import InputTag from "@/ui/InputTag";
import { useState } from "react";

function Questions({
  token,
  advertiseID,
}: {
  token: string;
  advertiseID: number;
}) {
  const [questions, setQuestions] = useState<string[]>([]);

  const handleCreateInterview = () => {
    fetchCreateInterview(token, advertiseID, questions);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-12 pt-20 px-8 lg:w-xl">
      <h1 className="text-2xl lg:text-3xl text-primary-blue">ایجاد مصاحبه</h1>
      <InputTag
        label="ایجاد سوال"
        name="questiontag"
        items={questions}
        setItems={setQuestions}
      />
      <button
        onClick={handleCreateInterview}
        className="w-full py-2 cursor-pointer hover:brightness-110 rounded-lg text-center text-lg text-neutral-light bg-primary-blue"
      >
        ثبت
      </button>
    </div>
  );
}

export default Questions;
