'use client'

import { BASE_LINK } from "@/fetch/config";
import Button from "@/ui/Button";
import { redirect } from "next/navigation";

export default function CollaborationButton({
  token,
  role,
  adID,
}: {
  token?: string;
  role?: string;
  adID: number;
}) {
  const handleSendReq = () => {
    const fetchSendReq = async (token: string) => {
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
      // const data = await res.json();
    };
    if (role === "employer") {
      fetchSendReq(token!);
      redirect("/jobseeker-ads");
    }
  };

  return (
    <div
      onClick={handleSendReq}
      className={`${role === "jobseeker" && "hidden"} w-full`}
    >
      <Button text="درخواست همکاری" h="h-16" />
    </div>
  );
}
