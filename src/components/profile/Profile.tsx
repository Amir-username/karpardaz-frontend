import React from "react";
import { AdTag } from "../advertise/AdTags";
import EmployerAds from "./EmployerAds";
import JobSeeekerAds from "./JobSeekerAds";
import { BASE_LINK } from "@/fetch/config";
import { cookies } from "next/headers";
import { JobSeekerModel } from "@/models/JobSeeker";
import { EmployerModel } from "@/models/Employer";
import BackdropFileInput from "@/ui/BackdropFileInput";
import Avatar from "../avatar/Avatar";
import AvatarFileInput from "@/ui/AvatarFileInput";

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

  const backdropRes = await fetch(BASE_LINK + `get-${role}-backdrop/${id}`);
  const buffer = await backdropRes.arrayBuffer();
  const base64 = Buffer.from(buffer).toString("base64");
  const mimeType = backdropRes.headers.get("content-type") || "image/jpeg";
  const backdropSRC = `data:${mimeType};base64,${base64}`;

  return (
    <div className="flex flex-col gap-6 p-4 sm:p-8 max-w-3xl mx-auto">
      <Container image={backdropRes.status === 200 ? backdropSRC : "empty"}>
        {res.status === 200 && data.id === id && (
          <BackdropFileInput
            icon="add_a_photo"
            token={token?.value}
            role={role}
          />
        )}
        <div className="relative">
          <Avatar id={id} role={role} />
          {res.status === 200 && data.id === id && (
            <AvatarFileInput
              icon="add_a_photo"
              token={token?.value}
              role={role}
            />
          )}
        </div>
        <h1 className="text-2xl font-bold text-white">{name}</h1>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 -mt-2">
          {children}
        </div>
      </Container>
      <Container bg="neutral">
        <p className="px-4 md:px-8 py-4 text-base leading-8 text-fg/90 text-center whitespace-pre-line">
          {description}
        </p>
      </Container>
      {technologies && (
        <Container bg="neutral">
          <ul className="flex flex-wrap items-center justify-center gap-2.5 px-8 py-2">
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

type ContainerProps = {
  children: React.ReactNode;
  bg?: "primary" | "neutral";
  image?: string | "empty";
};

export function Container({
  children,
  bg = "primary",
  image = "empty",
}: ContainerProps) {
  if (image === "empty") {
    return (
      <div
        className={`relative flex flex-col items-center gap-5 py-8 rounded-2xl shadow-soft overflow-hidden ${
          bg === "primary"
            ? "gradient-background"
            : "bg-card ring-1 ring-border"
        }`}
      >
        {children}
      </div>
    );
  }
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className={`relative rounded-2xl overflow-hidden shadow-soft`}
    >
      <div
        style={{
          background: "rgba(15, 23, 42, 0.55)",
        }}
        className="flex flex-col items-center gap-5 h-full py-10"
      >
        {children}
      </div>
    </div>
  );
}
