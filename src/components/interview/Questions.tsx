"use client";

import { fetchCreateInterview } from "@/fetch/interview/fetchCreateInterview";
import InputTag from "@/ui/InputTag";
import Button from "@/ui/Button";
import { redirect } from "next/navigation";
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
    redirect(`/jobs/${advertiseID}/`);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 pt-16 pb-20 px-4 w-full max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-fg">ایجاد مصاحبه</h1>
      <InputTag
        label="ایجاد سوال"
        name="questiontag"
        items={questions}
        setItems={setQuestions}
        placeholder="متن سوال را وارد کنید"
      />
      <Button onClick={handleCreateInterview} text="ثبت" size="lg" />
    </div>
  );
}

export default Questions;
