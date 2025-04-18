import Link from "next/link";

function Brand({ text }: { text: string }) {
  return (
    <Link href={'/'}>
      <h1 className="pr-8 text-3xl font-bold text-primary-blue">{text}</h1>
    </Link>
  );
}

export default Brand;
