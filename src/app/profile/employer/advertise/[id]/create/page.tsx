import EmployerAdCreateForm from "@/components/advertise/advertiseCreateForm/EmployerAdCreateForm";
import { cookies } from "next/headers";

async function EmployerAdCreatePage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const role = cookieStore.get("role");

  if (token && role) {
    return <EmployerAdCreateForm token={token.value} role={role.value} />;
  }
}

export default EmployerAdCreatePage;
