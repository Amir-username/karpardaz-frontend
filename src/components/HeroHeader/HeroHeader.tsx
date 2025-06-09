import Image from "next/image";
import DeveloperILL from "../../../public/Illustrations/DeveloperILL.svg";

export default function HeroHeader() {
  return (
    <header className="bg-primary-blue flex flex-col lg:flex-row gap-8 py-32 px-12 lg:py-40 items-center text-center justify-center lg:px-64 text-neutral-light">
      <Image
        className="fade-in-right w-48 h-48 lg:w-[250px] lg:h-[250px]"
        // width={250}
        // height={250}
        alt="developer illustration"
        src={DeveloperILL}
      />
      <h1 className="fade-in-right font-lalezar lg:text-6xl text-4xl lg:leading-20 leading-12">
        وبسایت استخدام و کاریابی برای سازمان ها و متخصصان فناوری
      </h1>
    </header>
  );
}
