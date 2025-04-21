import Image from "next/image";
import DEFAULT_AVATAR from "../../../public/images/company_default_avatar.png";
import React from "react";

type ProfileProps = {
  name: string;
  children: React.ReactNode;
  description: string;
};

function Profile({ children, name, description }: ProfileProps) {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="flex flex-col gap-6 items-center py-8 bg-primary-blue rounded-lg">
        <Image
          src={DEFAULT_AVATAR}
          alt="آواتار پیشفرض شرکت"
          className="w-28 h-28 rounded-full ring-2 ring-neutral-mid bg-white p-1"
        />
        <h1 className="text-2xl font-semibold text-neutral-light">{name}</h1>
        {children}
      </div>
      <p className="text-lg text-neutral-dark">{description}</p>
    </div>
  );
}

export default Profile;
