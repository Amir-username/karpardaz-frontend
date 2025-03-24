import axios from "axios";
import { BASE_LINK } from "./config";

type fetchCreateJobSeekerBody = {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  password: string;
};

export async function fetchCreateJobSeeker(
  url: string,
  body: fetchCreateJobSeekerBody
) {
  try {
    const res = await axios.post(
      BASE_LINK + url,
      {
        firstname: body.firstname,
        lastname: body.lastname,
        email: body.email,
        phonenumber: body.phonenumber,
        password: body.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    return error;
  }
}
