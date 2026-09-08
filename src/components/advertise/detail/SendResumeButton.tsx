"use client";

import { BASE_LINK } from "@/fetch/config";
import Button from "@/ui/Button";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function SendResumeButton({
  token,
  role,
  adID,
}: {
  token?: string;
  role?: string;
  adID: number;
}) {
  const [isSending, setIsSending] = useState(false);

  const handleSendResume = () => {
    const fetchSendResume = async (token: string) => {
      setIsSending(true);
      const res = await fetch(BASE_LINK + `ad-request/?advertise_id=${adID}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res);
      setIsSending(false);
    };
    if (role === "jobseeker") {
      fetchSendResume(token!);
      redirect("/jobs");
    }
  };
  return (
    <div
      id="apply-section"
      onClick={handleSendResume}
      className={`${role === "employer" && "hidden"} w-full px-8 pb-8`}
    >
      <Button text="ارسال رزومه" size="lg" loading={isSending} />
    </div>
  );
}
