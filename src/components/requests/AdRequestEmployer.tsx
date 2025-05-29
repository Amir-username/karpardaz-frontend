import { EmployerDetail } from "@/models/EmployerDetail";
import AdAvatar from "../advertise/AdAvater";
import Link from "next/link";

export default function AdRequestEmployers({
  employers,
}: {
  employers: EmployerDetail[];
}) {
  return (
    <>
      <h2 className="px-8 w-full text-center text-2xl text-primary-blue">
        درخواست ها
      </h2>
      <ul className="flex flex-col gap-3 p-4">
        {employers.map((employer) => {
          return (
            <Link key={employer.id} href={`/profile/employer/${employer.id}`}>
              <li className="flex gap-3 hover:bg-gray-200 cursor-pointer px-4 py-2 ring-1 ring-gray-300 rounded-lg">
                <AdAvatar id={employer.id!} role="employer" />
                <div className="flex flex-col">
                  <h3 className="text-lg text-neutral-dark">{`${employer.company_name}`}</h3>
                  <h6 className="text-gray-500 text-sm">
                    {employer.population}
                  </h6>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
}
