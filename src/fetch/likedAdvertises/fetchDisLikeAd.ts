export const fetchDisLikeAd = async (token: string, id: number) => {
  const res = await fetch(`http://127.0.0.1:7000/jobseeker-dislike-ad/${id}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();

  console.log(data);
};
