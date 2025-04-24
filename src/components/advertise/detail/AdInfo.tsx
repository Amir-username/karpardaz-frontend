type AdInfoProps = {
  text: string;
  icon: string
};

function AdDetailInfo({ text, icon }: AdInfoProps) {
  return (
    <div className="flex gap-2 md:gap-4 items-center p-2 md:p-4">
      <span className="material-symbols-outlined text-neutral-dark">{icon}</span>
      <h3 className="md:text-lg text-neutral-dark">{text}</h3>
    </div>
  );
}

export default AdDetailInfo;
