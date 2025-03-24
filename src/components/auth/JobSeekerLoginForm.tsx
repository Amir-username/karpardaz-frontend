import { JobSeekerLoginAction } from "@/actions";
import Button from "@/ui/Button";
import Form from "@/ui/Form";
import FormContent from "@/ui/FormContent";
import FormHeader from "@/ui/FormHeader";
import Input from "@/ui/Input";

function JobeekerLoginForm() {
  return (
    <Form action={JobSeekerLoginAction}>
      <FormHeader title="کارپرداز" subtitle="ورود کارجو" />
      <FormContent>
        <Input type="text" name="email" placeholder="آدرس ایمیل" icon="mail" />
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

export default JobeekerLoginForm;
