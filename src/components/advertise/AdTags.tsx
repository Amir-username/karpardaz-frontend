import Badge from "@/ui/Badge";

type AdTagsProps = {
  tags: string[] | undefined;
};

export default function AdTags({ tags }: AdTagsProps) {
  return (
    <div className="flex flex-wrap gap-1.5">
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
  return (
    <Badge variant="brand" size={size === "lg" ? "md" : "sm"}>
      {name}
    </Badge>
  );
}
