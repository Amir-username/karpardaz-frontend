import Image from "next/image";
import LoadingCode from "../../../public/Illustrations/CodeILL.svg";

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="animate-ping">
        <Image src={LoadingCode} alt="در حال انتظار" width={40} height={40} />
      </div>
    </div>
  )
}
