import { EmployerSignupAction } from "@/actions";
import Button from "@/ui/Button";
import Form from "@/ui/Form";
import FormContent from "@/ui/FormContent";
import FormHeader from "@/ui/FormHeader";
import Input from "@/ui/Input";

function EmployerSignupForm() {
  return (
    <Form action={EmployerSignupAction}>
      <FormHeader title="کارپرداز" subtitle="ثبت نام کارفرما" />
      <FormContent>
        <Input type="text" name="companyName" placeholder="عنوان سازمان" icon="source_environment" />
        <Input type="email" name="email" placeholder="آدرس ایمیل (ترجیحا ایمیل سازمانی)" icon="mail" />
        <Input
          type="password"
          name="password"
          placeholder="رمز عبور"
          icon="lock"
        />
        <Button text="ثبت نام" />
      </FormContent>
    </Form>
  );
}

export default EmployerSignupForm;
