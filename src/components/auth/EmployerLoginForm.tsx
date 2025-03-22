import { EmployerLoginAction } from "@/actions";
import Button from "@/ui/Button";
import Form from "@/ui/Form";
import FormContent from "@/ui/FormContent";
import FormHeader from "@/ui/FormHeader";
import Input from "@/ui/Input";

function EmployerLoginForm() {
  return (
    <Form action={EmployerLoginAction}>
      <FormHeader title="کارپرداز" subtitle="ورود کارفرما" />
      <FormContent>
        <Input type="text" name="email" placeholder="آدرس ایمیل (ترجیحا ایمیل سازمانی)" icon="mail" />
        <Input
          type="password"
          name="password"
          placeholder="رمز عبور"
          icon="lock"
        />
        <Button text="ورود" type="submit" />
      </FormContent>
    </Form>
  );
}

export default EmployerLoginForm;
