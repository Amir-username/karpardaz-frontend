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
    <div className="relative flex flex-col gap-8 p-8 lg:px-96">
      <Container image={backdropRes.status === 200 ? backdropSRC : "empty"}>
        {res.status === 200 && data.id === id && (
          <BackdropFileInput icon="add_a_photo" token={token?.value!} />
        )}
        <div className="relative">
          <Avatar id={id} role={role} />
          {res.status === 200 && data.id === id && (
            <AvatarFileInput icon="add_a_photo" token={token?.value!} />
          )}
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
        className={`relative flex flex-col items-center gap-6 py-8 rounded-lg ${
          bg === "primary" ? "bg-primary-blue" : "bg-neutral-light"
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
      className={`relative rounded-lg`}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.6)",
        }}
        className="flex flex-col items-center gap-6 h-full py-8"
      >
        {children}
      </div>
    </div>
  );
}
