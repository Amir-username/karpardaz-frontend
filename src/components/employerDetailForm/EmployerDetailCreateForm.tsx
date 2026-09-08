"use client";
import { fetchAddEmployerDetail } from "@/fetch/details/employer/fetchEmployerDetailCreate";
import Button from "@/ui/Button";
import ClientInput from "@/ui/ClientInput";
import Form from "@/ui/Form";
import FormHeader from "@/ui/FormHeader";
import SelectInput from "@/ui/SelectInput";
import TextAreaInput from "@/ui/TextAreaInput";
import { redirect } from "next/navigation";
import { FormEvent, useState } from "react";

type EmployerDetailCreateFormProps = {
  role: string;
  token: string;
};

function EmployerDetailCreateForm({
  role,
  token,
}: EmployerDetailCreateFormProps) {
  const [address, setAddress] = useState("");
  const [population, setPopulation] = useState<
    "small" | "medium" | "large" | "very large" | string
  >("medium");
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState("");

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = {
      address: address,
      population:
        population === "small"
          ? "۵ تا ۲۰ نفر"
          : population === "medium"
          ? "۲۰ تا ۵۰ نفر"
          : population === "large"
          ? "۵۰ تا ۱۰۰ نفر"
          : "۱۰۰ نفر به بالا",
      description: description,
      website: website,
    };

    if (role === "employer") {
      fetchAddEmployerDetail(token, body);
      redirect("/");
    }
  };

  return (
    <main className="flex items-center justify-center p-8 mt-28">
      <Form onFormSubmit={handleFormSubmit}>
        <FormHeader title="تکمیل پروفایل" subtitle="کارفرما" />
        <ClientInput
          placeholder="آدرس کامل سازمان"
          value={address}
          setValue={setAddress}
          icon="apartment"
        />
        <ClientInput
          placeholder="آدرس وب سایت"
          value={website}
          setValue={setWebsite}
          icon="link"
        />
        <SelectInput
          name="population"
          value={population}
          setValue={setPopulation}
          label="جمعیت سازمان"
        >
          <option value="small">۵ تا ۲۰ نفر</option>
          <option value="medium">۲۰ تا ۵۰ نفر</option>
          <option value="large">۵۰ تا ۱۰۰ نفر</option>
          <option value="very large">۱۰۰ نفر به بالا</option>
        </SelectInput>
        <TextAreaInput
          label="معرفی سازمان و توضیحات"
          name="description"
          value={description}
          setValue={setDescription}
        />
        <Button text="ایجاد پروفایل" type="submit" />
      </Form>
    </main>
  );
}

export default EmployerDetailCreateForm;
