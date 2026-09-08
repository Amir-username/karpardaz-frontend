'use client'

import { BASE_LINK } from "@/fetch/config";
import Button from "@/ui/Button";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function CollaborationButton({
  token,
  role,
  adID,
}: {
  token?: string;
  role?: string;
  adID: number;
}) {
  const [isSending, setIsSending] = useState(false);

  const handleSendReq = () => {
    const fetchSendReq = async (token: string) => {
      setIsSending(true);
      const res = await fetch(
        BASE_LINK + `jobseeker-ad-request/?advertise_id=${adID}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
      setIsSending(false);
    };
    if (role === "employer") {
      fetchSendReq(token!);
      redirect("/jobseeker-ads");
    }
  };

  return (
    <div
      onClick={handleSendReq}
      className={`${role === "jobseeker" && "hidden"} w-full px-8 pb-8`}
    >
      <Button text="درخواست همکاری" size="lg" loading={isSending} />
    </div>
  );
}
