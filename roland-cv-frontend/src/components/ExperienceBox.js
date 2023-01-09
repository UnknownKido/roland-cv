export const ExperienceBox = ({
    start_d,
    end_d,
    job_title,
    job_description,
    skills,
  }) => {
    return (
      <div className="font-light ml-8 mt-12">
        <h1 className="text-xl font-bold my-1"> {job_title}</h1>
        {start_d ? <h3 className="text-sm italic m-1">{start_d + " - " + end_d}</h3> : ""}
        <p className="my-2 text-md m-1"> {job_description}</p>
        {skills ? <p className="text-md m-1">{ skills}</p> : ""}
      </div>
    );
  };
  