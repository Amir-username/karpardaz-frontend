"use client";

import { BASE_LINK } from "@/fetch/config";
import SelectInput from "@/ui/SelectInput";
import axios from "axios";
import { useEffect, useState } from "react";

type StatusType =
  | "در صف بررسی"
  | "توسط کارفرما دیده شد"
  | "تایید اولیه"
  | "تایید برای مصاحبه"
  | "رد شده";

function RequestStatusSelect() {
  const [status, setStatus] = useState<StatusType | string>("در صف بررسی");

  useEffect(() => {
    const fetchChangeStatus = async () => {
      const res = await axios.patch(
        BASE_LINK + `change-request-status/?request_id=${1}&status=${status}`
      );
    };
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
