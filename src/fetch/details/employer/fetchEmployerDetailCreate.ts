import { BASE_LINK } from "@/fetch/config";

type BodyType = {};

export const fetchAddEmployerDetail = async (
  accessToken: string,
  body: BodyType
) => {
  const res = await fetch(BASE_LINK + "employer-detail/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  console.log(data);
};
