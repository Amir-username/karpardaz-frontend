"use client";

import Button from "@/ui/Button";
import InputTag from "@/ui/InputTag";
import { useState } from "react";

function Questions() {
  const [questions, setQuestions] = useState<string[]>([]);
  return (
    <div className="flex flex-col items-center justify-center gap-12 pt-20 px-8 lg:w-xl">
      <h1 className="text-2xl lg:text-3xl text-primary-blue">ایجاد مصاحبه</h1>
      <InputTag
        label="ایجاد سوال"
        name="questiontag"
        items={questions}
        setItems={setQuestions}
      />
      <Button text="ثبت" />
    </div>
  );
}

export default Questions;
