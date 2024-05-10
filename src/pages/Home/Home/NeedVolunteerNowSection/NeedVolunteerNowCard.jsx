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
  } = volunteer;

  return (
    <Link
      to={`/volunteerDetails/${_id}`}
      className="overflow-hidden rounded-lg shadow-md hover:scale-[1.03] transition-all duration-300"
    >
      <figure>
        <img className="object-cover w-full h-64" src={thumbnail} />
      </figure>
      <div className="p-6">
        <div>
          <span className=" text-[#7fad45] font-bold uppercase">
            {category}
          </span>
          <h3
            className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform hover:underline"
            role="link"
          >
            {post_title}
          </h3>
          <p title={description} className="mt-2 text-sm text-gray-700">
            {description.substring(0, 80)}...
          </p>
        </div>
        <div className="mt-4">
          <Link
            to={`/volunteerDetails/${_id}`}
            className="flex items-center gap-2"
          >
            <span className="font-semibold">View Details</span>
            <span className="text-[#955E42]">
              <FaArrowRightLong />
            </span>
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default NeedVolunteerNowCard;
