import EmployerDetailCreateForm from "@/components/employerDetailForm/EmployerDetailCreateForm";
import { cookies } from "next/headers";

async function EmployerCreateDetailPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const role = cookieStore.get("role");

  if (token && role) {
    return <EmployerDetailCreateForm token={token?.value} role={role?.value} />;
  }
}

export default EmployerCreateDetailPage;
