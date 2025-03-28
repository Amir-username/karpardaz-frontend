import { cookies } from "next/headers";

export async function getAuthToken() {
  const cookieStore = await cookies();
  return cookieStore.get('token')?.value;
}

export default async function Home() {
  const token = getAuthToken()

  return (
    <div className="text-7xl">Home</div>
  );
}
