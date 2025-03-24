import axios from "axios";
import { BASE_LINK } from "./config";

type fetchLoginJobSeekerBody = {
  email: string;
  password: string;
};

export async function fetchLoginJobSeeker(body: fetchLoginJobSeekerBody) {
  try {
    const res = await axios.post(
      BASE_LINK + "jobseeker/login/",
      { username: body.email, password: body.password },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    console.log(res.data);

    return res.data;
  } catch (error) {
    return error;
  }
}
