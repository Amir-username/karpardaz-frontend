import axios from "axios";
import { BASE_LINK } from "./config";

type fetchCreateEmployerBody = {
  companyName: string;
  email: string;
  password: string;
};

export async function fetchCreateEmployer(body: fetchCreateEmployerBody) {
  try {
    const res = await axios.post(
      BASE_LINK + "employers/",
      {
        company_name: body.companyName,
        email: body.email,
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
