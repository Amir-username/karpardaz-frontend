import Button from "@/ui/Button";
import Form from "@/ui/Form";
import FormContent from "@/ui/FormContent";
import FormHeader from "@/ui/FormHeader";
import Input from "@/ui/Input";

function JobSeekerSignupForm() {
  return (
    <Form>
      <FormHeader title="کارپرداز" subtitle="ثبت نام کارجو" />
      <FormContent>
        <Input type="text" name="firstname" placeholder="نام" icon="person" />
        <Input
          type="text"
          name="lastname"
          placeholder="نام خانوادگی"
          icon="person"
        />
        <Input type="email" name="email" placeholder="ایمیل" icon="mail" />
        <Input
          type="number"
          name="number"
          placeholder="شماره تلفن همراه"
          icon="smartphone"
        />
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

export default JobSeekerSignupForm;
