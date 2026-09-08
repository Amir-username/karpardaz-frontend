import axios from "axios";
import { BASE_LINK } from "../config";

export async function fetchCreateInterview(
  token: string,
  advertiseID: number,
  questions: string[]
) {
  const res = await axios.post(
    BASE_LINK + `create-interview/?advertise_id=${advertiseID}`,
    questions,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (res.status === 200) {
    const data = await res.data;
    console.log(data);
  }
}
