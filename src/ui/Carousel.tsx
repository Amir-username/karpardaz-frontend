import Image from "next/image";
import ImagePoster from "../../public/images/company_default_avatar.png";
import React from "react";

type CarouselProps = {
  header: string;
  children: React.ReactNode;
};

export default function Carousel({ header, children }: CarouselProps) {
  return (
    // <div className="flex w-full flex-col gap-4 px-8 py-12">
    //   <header className="flex text-2xl text-primary-blue">{header}</header>
    //   <ul className="flex py-2 gap-4 flex-shrink">{children}</ul>
    // </div>
    <div></div>
  );
}

type CarouselItemProps = {
  title: string;
};

export function CarouselItem({ title }: CarouselItemProps) {
  return (
    <li className="flex flex-col hover:shadow-lg cursor-pointer items-center px-2 py-4 justify-center ring-1 ring-gray-300 rounded-lg shadow-sm gap-3">
      <Image src={ImagePoster} alt="sadas" width={150} height={450} />
      <h3 className="text-xl">{title}</h3>
    </li>
  );
}
