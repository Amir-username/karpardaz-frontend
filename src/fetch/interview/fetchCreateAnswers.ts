import axios from "axios";
import { BASE_LINK } from "../config";

export async function fetchCreateAnswers(
  token: string,
  interviewID: number,
  answers: string[]
) {
  const res = await axios.post(
    BASE_LINK + `create-answers/?interview_id=${interviewID}`,
    answers,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (res.status === 200) {
    const data = res.data;
    console.log(data);
  }
}
