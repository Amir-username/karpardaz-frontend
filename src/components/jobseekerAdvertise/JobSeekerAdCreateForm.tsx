"use client";

import { BASE_LINK } from "@/fetch/config";
import Button from "@/ui/Button";
import CheckBox from "@/ui/CheckBox";
import ClientInput from "@/ui/ClientInput";
import Form from "@/ui/Form";
import FormHeader from "@/ui/FormHeader";
import InputTag from "@/ui/InputTag";
import SelectInput from "@/ui/SelectInput";
import TextAreaInput from "@/ui/TextAreaInput";
import { redirect } from "next/navigation";
import { FormEvent, useState } from "react";

function JobSeekerAdCreateForm({
  role,
  token,
}: {
  role: string;
  token: string;
}) {
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = {
      title: title,
      description: description,
    };

    const fetchAddJobSeekerAd = async (accessToken: string) => {
      const res = await fetch(BASE_LINK + "jobseeker-ads/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      console.log(data);
    };
    if (role === "jobseeker") {
      fetchAddJobSeekerAd(token);
      redirect("/");
    }
  };

  return (
    <main className="flex items-center justify-center p-8 mt-32">
      <Form onFormSubmit={handleFormSubmit}>
        <FormHeader title="ایجاد آگهی" subtitle="کارجو" />
        <ClientInput
          placeholder="عنوان آگهی"
          icon="campaign"
          value={title}
          setValue={setTitle}
          // isValid={!!formState.errors?.city}
          // errorMessage={formState.errors?.city}
        />
        <TextAreaInput
          name="description"
          label="توضیحات"
          value={description}
          setValue={setDescription}
          // isValid={!!formState.errors?.description}
          // errorMessage={formState.errors?.description}
        />
        <Button type="submit" text="ایجاد آگهی" />
      </Form>
    </main>
  );
}

export default JobSeekerAdCreateForm;
