import Image from "next/image";
import DEFAULT_AVATAR from "../../../public/images/company_default_avatar.png";
import React from "react";
import { AdTag } from "../advertise/AdTags";

type ProfileProps = {
  name: string;
  children: React.ReactNode;
  description: string;
  technologies?: string[];
};

function Profile({ children, name, description, technologies }: ProfileProps) {
  return (
    <div className="flex flex-col gap-8 p-8">
      <Container>
        <Image
          src={DEFAULT_AVATAR}
          alt="آواتار پیشفرض شرکت"
          className="w-28 h-28 rounded-full ring-2 ring-neutral-mid bg-white p-1"
        />
        <h1 className="text-2xl font-semibold text-neutral-light">{name}</h1>
        {children}
      </Container>
      <Container>
        <p className="text-lg text-neutral-light px-8">{description}</p>
      </Container>
      {technologies && (
        <Container>
          <ul className="flex gap-3 items-center justify-center flex-wrap px-8">
            {technologies.map((tech, i) => {
              return <AdTag name={tech} key={i} size="lg" />;
            })}
          </ul>
        </Container>
      )}
    </div>
  );
}

export default Profile;

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-6 items-center py-8 bg-primary-blue rounded-lg">
      {children}
    </div>
  );
}
