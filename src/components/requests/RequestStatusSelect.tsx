"use client";

import { BASE_LINK } from "@/fetch/config";
import SelectInput from "@/ui/SelectInput";
import { useEffect, useState } from "react";

// type StatusType =
//   | "در صف بررسی"
//   | "توسط کارفرما دیده شد"
//   | "تایید اولیه"
//   | "تایید برای مصاحبه"
//   | "رد شده";

function RequestStatusSelect({
  advertiseID,
  token,
  jobseekerID,
}: {
  advertiseID: number;
  token?: string;
  jobseekerID?: number;
}) {
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    const fetchChangeStatus = async () => {
      const res = await fetch(
        BASE_LINK +
          `change-request-status/?request_id=${jobseekerID}&status=${status}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.status);
    };

    const fetchGetStatus = async () => {
      const res = await fetch(
        BASE_LINK +
          `get-request-status/${jobseekerID}?advertise_id=${advertiseID}`,
        {
          headers: {
            accept: "Application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();
      if (res.status === 200) {
        setStatus(data);
      }
    };

    if (token) {
      if (status === "") {
        fetchGetStatus();
      } else {
        fetchChangeStatus();
      }
    }
  }, [status]);

  return (
    <div className="w-72">
      <SelectInput
        value={status}
        setValue={setStatus}
        label="وضعیت درخواست"
        name="status"
      >
        <option value="در صف بررسی">در صف بررسی</option>
        <option value="توسط کارفرما دیده شد">دیده شده</option>
        <option value="تایید اولیه">تایید اولیه</option>
        <option value="تایید برای مصاحبه">تایید برای مصاحبه</option>
        <option value="رد شده">رد کردن</option>
      </SelectInput>
    </div>
  );
}

export default RequestStatusSelect;
