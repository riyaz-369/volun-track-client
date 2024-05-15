import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";

const VolunteerDetails = () => {
  const volunteerDetails = useLoaderData();

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
    organizer_photo,
  } = volunteerDetails || {};

  return (
    <div className=" max-w-7xl mx-auto my-8 lg:my-12 px-2 lg:px-0">
      <Helmet>
        <title>Details - {post_title}</title>
      </Helmet>
      <div className="text-center mb-8">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-semibold mb-2 border-b-2 pb-2 border-[#8cbd51]">
            Join Us as a Volunteer
          </h2>
          <p className="w-2/3 text-sm lg:text-base opacity-80">
            Become a part of our community and make a difference! By
            volunteering with us, you will have the opportunity to contribute
            your time and skills towards meaningful projects that positively
            impact others. Whether it is supporting healthcare initiatives,
            tutoring students, or participating in community clean-up efforts,
            your dedication can create lasting change. Join us today and be a
            volunteer for a brighter tomorrow!
          </p>
        </div>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-md rounded-lg bg-[#955E42] bg-opacity-[0.02]">
        <figure>
          <img
            className="rounded-lg h-full bg-cover"
            src={thumbnail}
            alt={post_title}
          />
        </figure>
        <div className="card-body">
          <span className=" text-[#7fad45] text-sm font-bold uppercase">
            {category}
          </span>
          <h2 className="card-title text-2xl font-semibold">{post_title}</h2>
          <p className="text-sm lg:text-base opacity-80">{description}</p>
          <div className="md:flex justify-between mt-4">
            <div className="space-y-2">
              <p>
                <span className=" font-semibold">No. of Volunteer Need:</span>{" "}
                {no_of_volunteers_needed}
              </p>
              <p>
                <span className=" font-semibold">Deadline:</span>{" "}
                {new Date(deadline).toLocaleDateString()}
              </p>
              <p>
                <span className=" font-semibold">Location:</span> {location}
              </p>
            </div>
            <div>
              <div className="space-y-1">
                <img
                  className="w-16 rounded-lg mt-4 md:mt-0"
                  src={organizer_photo}
                />
                <h3 className="font-semibold">Organizer Information:</h3>
                <h3>
                  <span className="font-semibold">Name:</span> {organizer_name}
                </h3>
                <h3>
                  <span className="font-semibold">Email:</span>{" "}
                  {organizer_email}
                </h3>
              </div>
            </div>
          </div>
          <Link className="mt-4" to={`/beVolunteer/${_id}`}>
            <button className="primary-btn btn w-full lg:w-1/2">
              Be a Volunteer
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VolunteerDetails;
