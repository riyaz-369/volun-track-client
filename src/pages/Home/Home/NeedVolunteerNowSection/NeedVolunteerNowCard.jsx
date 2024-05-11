import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NeedVolunteerNowCard = ({ volunteer }) => {
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
  } = volunteer || {};

  return (
    <Link
      to={`/volunteerDetails/${_id}`}
      className="card card-compact rounded-lg shadow-md overflow-hidden p-4"
    >
      <figure>
        <img
          className="hover:scale-105 transition-all duration-300 h-64 rounded-lg"
          src={thumbnail}
          alt={post_title}
        />
      </figure>
      <div className="card-body">
        <span className=" text-[#7fad45] font-bold uppercase">{category}</span>
        <h2 className="card-title text-2xl font-semibold transition-colors duration-300 transform hover:underline opacity-90">
          {post_title}
        </h2>
        <p title={description}>{description.substring(0, 80)}...</p>
        <p className="my-4 font-semibold">
          Deadline: <span className="font-medium">{deadline}</span>
        </p>
        <div className="card-actions ">
          <button className="primary-btn w-full">View Details</button>
        </div>
      </div>
    </Link>
  );
};

export default NeedVolunteerNowCard;
