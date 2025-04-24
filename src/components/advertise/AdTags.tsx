type AdTagsProps = {
  tags: string[] | undefined;
};

export default function AdTags({ tags }: AdTagsProps) {
  return (
    <div className="flex gap-2">
      {tags?.slice(0, 3).map((tag, i) => {
        return <AdTag key={i} name={tag} />;
      })}
    </div>
  );
}

type AdTagProps = {
  name: string;
  size?: "sm" | "lg";
};

export function AdTag({ name, size = "sm" }: AdTagProps) {
  if (size === "lg") {
    return (
      <p
        className={`px-4 py-2 bg-secondary-blue text-white rounded-lg text-sm h-9 text-center md:text-lg md:h-10`}
      >
        {name}
      </p>
    );
  }
  return (
    <p className={`px-2 py-1 bg-secondary-blue text-white rounded-lg text-xs`}>
      {name}
    </p>
  );
}
