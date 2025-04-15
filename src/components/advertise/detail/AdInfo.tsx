type AdInfoProps = {
  text: string;
};

function AdDetailInfo({ text }: AdInfoProps) {
  return (
    <div className="flex gap-3 items-center justify-center p-4">
      <h3 className="text-lg text-neutral-dark">{text}</h3>
    </div>
  );
}

export default AdDetailInfo;
