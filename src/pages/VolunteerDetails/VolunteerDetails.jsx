import { useLoaderData } from "react-router-dom";

const VolunteerDetails = () => {
  const volunteerDetails = useLoaderData();

  console.log(volunteerDetails);

  const {
    _id,
    thumbnail,
    post_title,
    description,
    category,
    location,
    no_of_volunteers_needed,
    deadline,
    organizer_name,
    organizer_email,
  } = volunteerDetails;

  return (
    <div className="card card-side bg-base-100 shadow-md rounded-lg max-w-7xl mx-auto my-12">
      <figure>
        <img src={thumbnail} alt={post_title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{post_title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default VolunteerDetails;
