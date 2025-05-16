import Image from "next/image";
import DEFAULT_AVATAR from "../../../public/images/company_default_avatar.png";
import React from "react";
import { AdTag } from "../advertise/AdTags";
import EmployerAds from "./EmployerAds";
import JobSeeekerAds from "./JobSeekerAds";
import { BASE_LINK } from "@/fetch/config";
import { cookies } from "next/headers";
import { JobSeekerModel } from "@/models/JobSeeker";
import { EmployerModel } from "@/models/Employer";
import Link from "next/link";
import ImageFileInput from "@/ui/AvatarFileInput";
import BackdropFileInput from "@/ui/BackdropFileInput";

type ProfileProps = {
  name: string;
  children: React.ReactNode;
  description: string;
  technologies?: string[];
  role: "employer" | "jobseeker";
  id: number;
};

async function Profile({
  children,
  name,
  description,
  technologies,
  role,
  id,
}: ProfileProps) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  const res = await fetch(BASE_LINK + `current-${role}/`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token?.value}`,
    },
  });

  const data: JobSeekerModel | EmployerModel = await res.json();

  return (
    <div className="relative flex flex-col gap-8 p-8 lg:px-96">
      <Container>
        {res.status === 200 && data.id === id && (
          <BackdropFileInput icon="add_a_photo" />
        )}
        <div className="relative">
          <Image
            src={DEFAULT_AVATAR}
            alt="آواتار پیشفرض شرکت"
            className="p-1 bg-white rounded-full w-28 h-28 ring-2 ring-neutral-mid"
          />
          {res.status === 200 && data.id === id && (
            <ImageFileInput icon="add_a_photo" />
          )}
          {/* <span className="absolute p-1.5 text-white rounded-full cursor-pointer material-symbols-outlined top-20 bg-primary-blue">
            add_a_photo
          </span> */}
        </div>
        <h1 className="text-2xl font-semibold text-neutral-light">{name}</h1>
        {children}
      </Container>
      <Container>
        <p className="px-8 text-lg text-neutral-light">{description}</p>
      </Container>
      {technologies && (
        <Container>
          <ul className="flex flex-wrap items-center justify-center gap-3 px-8">
            {technologies.map((tech, i) => {
              return <AdTag name={tech} key={i} size="lg" />;
            })}
          </ul>
        </Container>
      )}
      {role === "employer" ? (
        <EmployerAds id={id} />
      ) : (
        <JobSeeekerAds id={id} />
      )}
    </div>
  );
}

export default Profile;

export function Container({
  children,
  bg = "primary",
}: {
  children: React.ReactNode;
  bg?: "primary" | "neutral";
}) {
  return (
    <div
      className={`relative flex flex-col gap-6 items-center py-8  rounded-lg ${
        bg === "primary"
          ? "bg-primary-blue"
          : "bg-neutral-light ring-1 ring-primary-blue"
      }`}
    >
      {children}
    </div>
  );
}
