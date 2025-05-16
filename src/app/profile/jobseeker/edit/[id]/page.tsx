async function JobSeekerProfileEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <div className="p-32">page edit {id}</div>;
}

export default JobSeekerProfileEditPage;
