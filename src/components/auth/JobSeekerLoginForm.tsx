'use client'

import { JobSeekerLoginAction } from "@/actions/auth/jobseekerActions";
import Button from "@/ui/Button";
import Form from "@/ui/Form";
import FormContent from "@/ui/FormContent";
import FormHeader from "@/ui/FormHeader";
import Input from "@/ui/Input";
import { useActionState } from "react";

function JobeekerLoginForm() {
  const [formState, action] = useActionState(JobSeekerLoginAction, {
    errors: {},
  });

  return (
    <Form action={action}>
      <FormHeader title="کارپرداز" subtitle="ورود کارجو" />
      <FormContent>
        <Input
          type="text"
          name="email"
          placeholder="آدرس ایمیل"
          icon="mail"
          isValid={!!formState.errors?.email}
          errorMessage={formState?.errors?.email}
        />
        <Input
          type="password"
          name="password"
          placeholder="رمز عبور"
          icon="lock"
          isValid={!!formState.errors?.password}
          errorMessage={formState?.errors?.password}
        />
        <Button text="ورود" type="submit" />
      </FormContent>
    </Form>
  );
}

export default JobeekerLoginForm;
