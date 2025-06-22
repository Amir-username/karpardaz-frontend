"use client";
import { JobSeekerSignupAction } from "@/actions/auth/jobseeker/jobseekerSignupAction";
import Button from "@/ui/Button";
import Form from "@/ui/Form";
import FormContent from "@/ui/FormContent";
import FormError from "@/ui/FormError";
import FormHeader from "@/ui/FormHeader";
import Input from "@/ui/Input";
import { useActionState } from "react";


function JobSeekerSignupForm() {
  const [formState, action] = useActionState(JobSeekerSignupAction, {
    errors: {},
  });

  return (
    <Form action={action}>
      <FormHeader title="کارپرداز" subtitle="ثبت نام کارجو" />
      <FormContent>
        <Input
          type="text"
          name="firstname"
          placeholder="نام"
          icon='person'
          isValid={!!formState.errors?.firstname}
          errorMessage={formState?.errors?.firstname}
        />
        <Input
          type="text"
          name="lastname"
          placeholder="نام خانوادگی"
          icon="person"
          isValid={!!formState.errors?.lastname}
          errorMessage={formState?.errors?.lastname}
        />
        <Input
          type="email"
          name="email"
          placeholder="آدرس ایمیل"
          icon="mail"
          isValid={!!formState.errors?.email}
          errorMessage={formState?.errors?.email}
        />
        <Input
          type="number"
          name="phonenumber"
          placeholder="شماره تلفن همراه"
          icon="smartphone"
          isValid={!!formState.errors?.phonenumber}
          errorMessage={formState?.errors?.phonenumber}
        />
        <Input
          type="password"
          name="password"
          placeholder="رمز عبور"
          icon="lock"
          isValid={!!formState.errors?.password}
          errorMessage={formState?.errors?.password}
        />
        <Button text="ثبت نام" type="submit" />
        {formState.errors?.signupError && (
          <FormError message={formState.errors.signupError} />
        )}
      </FormContent>
    </Form>
  );
}

export default JobSeekerSignupForm;
