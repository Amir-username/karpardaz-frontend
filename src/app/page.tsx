import Image from "next/image";
import DeveloperILL from "../../public/Illustrations/DeveloperILL.svg";

export default async function Home() {
  return (
    <main className="w-full flex justify-center">
      <header className="bg-primary-blue flex gap-8 py-40 items-center text-center justify-center px-64 text-neutral-light">
        <h1 className="fade-in-right font-lalezar text-6xl leading-20">
          وبسایت استخدام و کاریابی برای سازمان ها و متخصصان فناوری
        </h1>
        <Image
          className="fade-in-right"
          width={250}
          height={250}
          alt="developer illustration"
          src={DeveloperILL}
        />
      </header>
    </main>
  );
}
