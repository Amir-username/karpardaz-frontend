function ProfileInfoItem({ content }: { content: string }) {
  if (!content) return null;
  return (
    <span className="text-sm text-white/85 bg-white/10 ring-1 ring-white/15 rounded-full px-3 py-1 backdrop-blur-sm">
      {content}
    </span>
  );
}

export default ProfileInfoItem;
