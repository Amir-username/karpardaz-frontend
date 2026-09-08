import Link from "next/link";

function Brand({ text }: { text: string }) {
  return (
    <Link
      href={"/"}
      className="font-display text-3xl leading-none text-brand hover:text-brand-hover transition-colors"
    >
      {text}
    </Link>
  );
}

export default Brand;
