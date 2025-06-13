import axios from "axios";
import { BASE_LINK } from "../config";

export async function fetchCreateInterview(
  token: string,
  advertiseID: number,
  questions: string[]
) {
  const res = await axios.post(
    BASE_LINK + `create-interview/`,
    {
      questions
    },
    {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (res.status === 200) {
    const data = await res.data;
    console.log(data);
  }
}
