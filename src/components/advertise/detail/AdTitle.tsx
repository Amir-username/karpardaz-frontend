function AdTitle({ title }: { title: string }) {
  return (
    <h1 className="text-2xl md:text-3xl font-bold text-white leading-10 line-clamp-2">
      {title}
    </h1>
  );
}

export default AdTitle;
