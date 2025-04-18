import JobSeekerAdItem from "./JobseekerAdItem";

type JobSeekerAdListProps = {
    advertises: JobSeekrAdModel[]
}

function JobSeekerAdList({advertises}: JobSeekerAdListProps) {
  return (
    <ul className="flex flex-col gap-8">
      {advertises.map((ad) => {
        return <JobSeekerAdItem key={ad.id} advertise={ad} />;
      })}
    </ul>
  );
}

export default JobSeekerAdList;
