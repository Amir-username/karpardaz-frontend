'use client'
import { EmployerSignupAction } from "@/actions/auth/employer/employerSignupAction";
import Button from "@/ui/Button";
import Form from "@/ui/Form";
import FormContent from "@/ui/FormContent";
import FormHeader from "@/ui/FormHeader";
import Input from "@/ui/Input";
import { useActionState } from "react";

function EmployerSignupForm() {
  const [formState, action] = useActionState(EmployerSignupAction, {
    errors: {},
  });
  return (
    <Form action={action}>
      <FormHeader title="کارپرداز" subtitle="ثبت نام کارفرما" />
      <FormContent>
        <Input
          type="text"
          name="companyName"
          placeholder="عنوان سازمان"
          icon="source_environment"
          isValid={!!formState.errors?.companyName}
          errorMessage={formState?.errors?.companyName}
        />
        <Input
          type="email"
          name="email"
          placeholder="آدرس ایمیل (ترجیحا ایمیل سازمانی)"
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
        <Button text="ثبت نام" type="submit"/>
      </FormContent>
    </Form>
  );
}

export default EmployerSignupForm;
