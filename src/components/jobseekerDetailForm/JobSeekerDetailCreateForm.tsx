"use client";

import { fetchAddJobSeekerDetail } from "@/fetch/details/jobseeker/fetchJobSeekerDetailCreate";
import Button from "@/ui/Button";
import CheckBox from "@/ui/CheckBox";
import ClientInput from "@/ui/ClientInput";
import Form from "@/ui/Form";
import FormHeader from "@/ui/FormHeader";
import InputTag from "@/ui/InputTag";
import SelectInput from "@/ui/SelectInput";
import TextAreaInput from "@/ui/TextAreaInput";
import { redirect } from "next/navigation";
import { FormEvent, useState } from "react";

type JobSeekerDetailCreateFormProps = {
  role: string;
  token: string;
};

function JobSeekerDetailCreateForm({
  token,
  role,
}: JobSeekerDetailCreateFormProps) {
  const [city, setCity] = useState("");
  const [jobGroup, setJobGroup] = useState("");

  const [gender, setGender] = useState<"آقا" | "خانم" | string>("آقا");
  const [position, setPosition] = useState<
    "جونیور" | "سنیور" | "میدلول" | string
  >("جونیور");
  const [experience, setExperience] = useState<
    | "بدون سابقه کار"
    | "۱ تا ۲ سال سابفه کار"
    | "۲ تا ۴ سال سابقه کار"
    | "۴ سال به بالا"
    | string
  >("بدون سابقه کار");
  const [salary, setSalary] = useState<
    | "توافقی"
    | "۵ تا ۱۰ میلیون تومان"
    | "۱۰ تا ۲۰ میلیون تومان"
    | "۲۰ تا ۴۰ میلیون تومان"
    | "۴۰ میلیون به بالا"
    | string
  >("توافقی");

  const [isRemote, setIsRemote] = useState(false);
  const [isInternship, setIsInternship] = useState(false);
  const [isPortfolio, setIsPortfolio] = useState(false);

  const [technologieItems, setTechnologieItems] = useState<string[]>([]);
  const [educationItems, setEducationItems] = useState<string[]>([]);
  const [specializedJobsItems, setSpecializedJobsItems] = useState<string[]>(
    []
  );

  const [description, setDescription] = useState("");

  // const bindAction = JobSeekerProfileCreateAction.bind(
  //   null,
  //   technologieItems,
  //   educationItems,
  //   specializedJobsItems,
  //   isRemote,
  //   isPortfolio,
  //   isInternship
  // );
  // const [formState, action] = useActionState(bindAction, {
  //   errors: {},
  // });

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = {
      city: city,
      job_group: jobGroup,
      position:
        position === "جونیور"
          ? "junior"
          : position === "میدلول"
          ? "midlevel"
          : "senior",
      experience:
        experience === "بدون سابقه"
          ? "بدون سابقه کار"
          : experience === "۱ تا ۲ سال"
          ? "۱ تا ۲ سال سابفه کار"
          : experience === "۲ تا ۴ سال"
          ? "۲ تا ۴ سال سابقه کار"
          : "۴ سال به بالا",
      gender: gender === "آقا" ? "male" : "female",
      is_remote: isRemote,
      is_internship: isInternship,
      is_portfolio: isPortfolio,
      salary:
        salary === "۵ تا ۱۰ م"
          ? "۵ تا ۱۰ میلیون تومان"
          : salary === "۱۰ تا ۲۰ م"
          ? "۱۰ تا ۲۰ میلیون تومان"
          : salary === "۲۰ تا ۴۰ م"
          ? "۲۰ تا ۴۰ میلیون تومان"
          : salary === "۴۰ م به بالا"
          ? "۴۰ میلیون به بالا"
          : "توافقی",
      description: description,
      educations: educationItems,
      technologies: technologieItems,
      specialized_jobs: specializedJobsItems,
    };

    if (role === "jobseeker") {
      fetchAddJobSeekerDetail(token, body);
      redirect("/");
    }
  };

  return (
    <main className="flex items-center justify-center p-8 mt-8">
      <Form onFormSubmit={handleFormSubmit}>
        <FormHeader title="تکمیل پروفایل" subtitle="کارجو" />
        <ClientInput
          placeholder="شهر"
          icon="house"
          value={city}
          setValue={setCity}
          // isValid={!!formState.errors?.city}
          // errorMessage={formState.errors?.city}
        />
        <ClientInput
          placeholder="گروه شغلی"
          icon="work"
          value={jobGroup}
          setValue={setJobGroup}
          // isValid={!!formState.errors?.jobGroup}
          // errorMessage={formState.errors?.jobGroup}
        />
        <SelectInput
          label="جنسیت"
          name="gender"
          value={gender}
          setValue={setGender}
          // isValid={!!formState.errors?.gender}
          // errorMessage={formState.errors?.gender}
        >
          <option value="آقا">آقا</option>
          <option value="خانم">خانم</option>
        </SelectInput>
        <SelectInput
          label="موقعیت شغلی"
          name="position"
          value={position}
          setValue={setPosition}
          // isValid={!!formState.errors?.position}
          // errorMessage={formState.errors?.position}
        >
          <option value="جونیور">جونیور</option>
          <option value="میدلول">میدلول</option>
          <option value="سنیور">سنیور</option>
        </SelectInput>
        <SelectInput
          label="سابقه کاری"
          name="experience"
          value={experience}
          setValue={setExperience}
          // isValid={!!formState.errors?.experience}
          // errorMessage={formState.errors?.experience}
        >
          <option value="بدون سابقه کار">بدون سابقه</option>
          <option value="۱ تا ۲ سال سابفه کار">۱ تا ۲ سال</option>
          <option value="۲ تا ۴ سال سابقه کار">۲ تا ۴ سال</option>
          <option value="۴ سال به بالا">بیش از ۴ سال</option>
        </SelectInput>
        <SelectInput
          label="حقوق درخواستی"
          name="salary"
          value={salary}
          setValue={setSalary}
          // isValid={!!formState.errors?.salary}
          // errorMessage={formState.errors?.salary}
        >
          <option value="توافقی">توافقی</option>
          <option value="۵ تا ۱۰ میلیون تومان">۵ تا ۱۰ م</option>
          <option value="۱۰ تا ۲۰ میلیون تومان">۱۰ تا ۲۰ م</option>
          <option value="۲۰ تا ۴۰ میلیون تومان">۲۰ تا ۴۰ م</option>
          <option value="۴۰ میلیون به بالا">۴۰ م به بالا</option>
        </SelectInput>

        <CheckBox
          text="امکان دورکاری"
          name="is_remote"
          isChecked={isRemote}
          setIsChecked={setIsRemote}
          // isValid={!!formState.errors?.isRemote}
          // errorMessage={formState.errors?.isRemote}
        />
        <CheckBox
          text="امکان کارآموزی"
          name="is_Internship"
          isChecked={isInternship}
          setIsChecked={setIsInternship}
          // isValid={!!formState.errors?.isInternship}
          // errorMessage={formState.errors?.isInternship}
        />
        <CheckBox
          text="دارای نمونه کار"
          name="is_portfolio"
          isChecked={isPortfolio}
          setIsChecked={setIsPortfolio}
          // isValid={!!formState.errors?.isPortfolio}
          // errorMessage={formState.errors?.isPortfolio}
        />
        {/* <PdfFileInput
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
        /> */}
        <InputTag
          name="technologies"
          label="تکنولوژی و ابزار های تخصصی"
          items={technologieItems}
          setItems={setTechnologieItems}
        />
        <InputTag
          name="educations"
          label="سوابق تحصیلی"
          items={educationItems}
          setItems={setEducationItems}
        />
        <InputTag
          name="specialized_jobs"
          label="مشاغل مورد علاقه"
          items={specializedJobsItems}
          setItems={setSpecializedJobsItems}
        />
        <TextAreaInput
          name="description"
          label="معرفی و توضیحات"
          value={description}
          setValue={setDescription}
          // isValid={!!formState.errors?.description}
          // errorMessage={formState.errors?.description}
        />
        <Button type="submit" text="ایجاد پروفایل" />
      </Form>
    </main>
  );
}

export default JobSeekerDetailCreateForm;
