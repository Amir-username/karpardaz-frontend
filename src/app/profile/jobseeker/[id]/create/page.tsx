"use client";

import CheckBox from "@/ui/CheckBox";
import Form from "@/ui/Form";
import FormHeader from "@/ui/FormHeader";
import Input from "@/ui/Input";
import SelectInput from "@/ui/SelectInput";
import InputTag from "@/ui/InputTag";
import Button from "@/ui/Button";
import PdfFileInput from "@/ui/PdfFileInput";
import ImageFileInput from "@/ui/ImageFileInput";
import { JobSeekerProfileCreateAction } from "@/actions/profile/JobSeekerProfileCreateAction";
import { useActionState } from "react";

function CreateProfilePage() {
  const [formState, action] = useActionState(JobSeekerProfileCreateAction, {
    errors: {},
  });
  return (
    <main className="flex items-center justify-center p-8 mt-8">
      <Form action={action}>
        <FormHeader title="تکمیل پروفایل" subtitle="کارجو" />
        <Input
          name="city"
          placeholder="شهر"
          type="text"
          icon="house"
          isValid={!!formState.errors?.city}
          errorMessage={formState.errors?.city}
        />
        <Input
          name="jobGroup"
          placeholder="گروه شغلی"
          type="text"
          icon="work"
          isValid={!!formState.errors?.jobGroup}
          errorMessage={formState.errors?.jobGroup}
        />
        <SelectInput
          label="جنسیت"
          name="gender"
          isValid={!!formState.errors?.gender}
          errorMessage={formState.errors?.gender}
        >
          <option value="male">آقا</option>
          <option value="female">خانم</option>
        </SelectInput>
        <SelectInput
          label="موقعیت شغلی"
          name="position"
          isValid={!!formState.errors?.position}
          errorMessage={formState.errors?.position}
        >
          <option value="junior">جونیور</option>
          <option value="midlevel">میدلول</option>
          <option value="senior">سنیور</option>
        </SelectInput>
        <SelectInput
          label="سابقه کاری"
          name="experience"
          isValid={!!formState.errors?.experience}
          errorMessage={formState.errors?.experience}
        >
          <option value="بدون سابقه کار">بدون سابقه</option>
          <option value="۱ تا ۲ سال سابفه کار">۱ تا ۲ سال</option>
          <option value="۲ تا ۴ سال سابقه کار">۲ تا ۴ سال</option>
          <option value="۴ سال به بالا">بیش از ۴ سال</option>
        </SelectInput>
        <SelectInput
          label="حقوق درخواستی"
          name="salary"
          isValid={!!formState.errors?.salary}
          errorMessage={formState.errors?.salary}
        >
          <option value="توافقی">توافقی</option>
          <option value="۵ تا ۱۰ میلیون تومان">۵ تا ۱۰ م</option>
          <option value="۱۰ تا ۲۰ میلیون تومان">۱۰ تا ۲۰ م</option>
          <option value="۲۰ تا ۴۰ میلیون تومان">۲۰ تا ۴۰ م</option>
          <option value="۴۰ میلیون به بالا">۴۰ م به بالا</option>
        </SelectInput>
        <CheckBox
          text="امکان دورکاری"
          name="isRemote"
          isValid={!!formState.errors?.isRemote}
          errorMessage={formState.errors?.isRemote}
        />
        <CheckBox
          text="امکان کارآموزی"
          name="isInternship"
          isValid={!!formState.errors?.isInternship}
          errorMessage={formState.errors?.isInternship}
        />
        <CheckBox
          text="دارای نمونه کار"
          name="isPortfolio"
          isValid={!!formState.errors?.isPortfolio}
          errorMessage={formState.errors?.isPortfolio}
        />
        <PdfFileInput
          name="portfolioLink"
          label="فایل نمونه کار"
          isValid={!!formState.errors?.portfolioLink}
          errorMessage={formState.errors?.portfolioLink}
        />
        <ImageFileInput
          name="avatar"
          label="تصویر پروفایل"
          isValid={!!formState.errors?.avatar}
          errorMessage={formState.errors?.avatar}
        />
        <ImageFileInput
          name="backdropImage"
          label="تصویر بکگراند پروفایل"
          isValid={!!formState.errors?.backdropImage}
          errorMessage={formState.errors?.backdropImage}
        />
        <InputTag name="technologies" label="تکنولوژی و ابزار های تخصصی" />
        <InputTag name="educations" label="سوابق تحصیلی" />
        <Button type="submit" text="ایجاد پروفایل" />
      </Form>
    </main>
  );
}

export default CreateProfilePage;
