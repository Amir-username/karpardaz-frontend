"use client";

import { BASE_LINK } from "@/fetch/config";
import Button from "@/ui/Button";
import { redirect } from "next/navigation";

export default function SendResumeButton({
  token,
  role,
  adID,
}: {
  token?: string;
  role?: string;
  adID: number;
}) {
  const handleSendResume = () => {
    const fetchSendResume = async (token: string) => {
      const res = await fetch(BASE_LINK + `ad-request/?advertise_id=${adID}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res);
      // const data = await res.json();
    };
    if (role === "jobseeker") {
      fetchSendResume(token!);
      redirect("/jobs");
    }
  };
  return (
    <div
      onClick={handleSendResume}
      className={`${role === "employer" && "hidden"} w-full`}
    >
      <Button text="ارسال رزومه" h="h-16" />
    </div>
  );
}
