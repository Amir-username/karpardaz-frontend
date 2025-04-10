type AdTagsProps = {
  tags: string[];
};

export default function AdTags({ tags }: AdTagsProps) {
  return (
    <div className="flex gap-2">
      {tags.slice(0, 3).map((tag, i) => {
        return <AdTag key={i} name={tag} />;
      })}
    </div>
  );
}

type AdTagProps = {
  name: string;
};

function AdTag({ name }: AdTagProps) {
  return (
    <p className="px-2 py-1 bg-secondary-blue text-white rounded-lg text-xs h-6">
      {name}
    </p>
  );
}
