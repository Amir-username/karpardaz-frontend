import { LogoutAction } from "@/actions/auth/logout/LogoutAction";
import CheckBox from "@/ui/CheckBox";
import Form from "@/ui/Form";
import FormHeader from "@/ui/FormHeader";
import Input from "@/ui/Input";
import SelectInput from "@/ui/SelectInput";
import FileInput from "@/ui/FileInput";
import InputTag from "@/ui/InputTag";
import Button from "@/ui/Button";

function CreateProfilePage() {
  return (
    <main className="flex items-center justify-center p-8 mt-32">
      <Form action={LogoutAction}>
        <FormHeader title="تکمیل پروفایل" subtitle="کارجو" />
        <Input name="city" placeholder="شهر" type="text" icon="house" />
        <Input
          name="jobGroup"
          placeholder="گروه شغلی"
          type="text"
          icon="work"
        />
        <SelectInput label="جنسیت">
          <option value="male">آقا</option>
          <option value="female">خانم</option>
        </SelectInput>
        <SelectInput label="موقعیت شغلی">
          <option value="junior">جونیور</option>
          <option value="midlevel">میدلول</option>
          <option value="senior">سنیور</option>
        </SelectInput>
        <SelectInput label="سابقه کاری">
          <option value="بدون سابقه کار">بدون سابقه</option>
          <option value="۱ تا ۲ سال سابفه کار">۱ تا ۲ سال</option>
          <option value="۲ تا ۴ سال سابقه کار">۲ تا ۴ سال</option>
          <option value="۴ سال به بالا">بیش از ۴ سال</option>
        </SelectInput>
        <SelectInput label="حقوق درخواستی">
          <option value="توافقی">توافقی</option>
          <option value="۵ تا ۱۰ میلیون تومان">۵ تا ۱۰ م</option>
          <option value="۱۰ تا ۲۰ میلیون تومان">۱۰ تا ۲۰ م</option>
          <option value="۲۰ تا ۴۰ میلیون تومان">۲۰ تا ۴۰ م</option>
          <option value="۴۰ میلیون به بالا">۴۰ م به بالا</option>
        </SelectInput>
        <CheckBox text="امکان دورکاری" />
        <CheckBox text="امکان کارآموزی" />
        <CheckBox text="دارای نمونه کار" />
        <FileInput label="فایل نمونه کار" type="pdf" />
        <FileInput label="تصویر پروفایل" type="image" />
        <FileInput label="تصویر بکگراند پروفایل" type="image" />
        <InputTag label="تکنولوژی و ابزار های تخصصی" />
        <InputTag label="سوابق تحصیلی" />
        <Button  type="submit" text="ایجاد پروفایل"/>
      </Form>
    </main>
  );
}

export default CreateProfilePage;
