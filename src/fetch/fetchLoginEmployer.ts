import axios from "axios";
import { BASE_LINK } from "./config";

type fetchLoginEmployerBody = {
  email: string;
  password: string;
};

export async function fetchLoginEmployer(body: fetchLoginEmployerBody) {
  try {
    const res = await axios.post(
      BASE_LINK + "employer/login/",
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
