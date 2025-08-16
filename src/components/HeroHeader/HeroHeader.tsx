import Image from "next/image";
import DeveloperILL from "../../../public/Illustrations/DeveloperILL.svg";

export default function HeroHeader() {
  return (
    <header className="flex h-[700px] gradient-background bg-gradient-to-tr from-primary-blue to-slate-500 dark:from-slate-800 dark:to-primary-blue backdrop-blur-3xl  text-neutral-light">
      <div className="flex flex-col items-center justify-center gap-8 px-8 py-32 text-center lg:flex-row lg:py-40 lg:px-64 fade-out-view ">
        <Image
          className="w-48 h-48 lg:w-[250px] lg:h-[250px]"
          // width={250}
          // height={250}
          alt="developer illustration"
          src={DeveloperILL}
        />
        <h1 className="text-4xl font-lalezar lg:text-6xl lg:leading-20 leading-12">
          وبسایت استخدام و کاریابی برای سازمان ها و متخصصان فناوری
        </h1>
      </div>
    </header>
  );
}
