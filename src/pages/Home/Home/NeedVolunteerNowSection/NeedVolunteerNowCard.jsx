import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NeedVolunteerNowCard = ({ volunteer }) => {
  const { _id, thumbnail, post_title, description, category, deadline } =
    volunteer || {};

  return (
    <Link
      to={`/volunteerDetails/${_id}`}
      className="card card-compact rounded-3xl shadow-md overflow-hidden p-4 bg-[#955E42] bg-opacity-[0.02]"
    >
      <figure>
        <img
          className="hover:scale-105 transition-all duration-300 h-64 rounded-3xl"
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
        <p className="mt-4 mb-1 font-semibold">
          Deadline:{" "}
          <span className="font-medium">
            {new Date(deadline).toLocaleDateString()}
          </span>
        </p>
        <div className="card-actions ">
          <button className="primary-btn w-full btn">View Details</button>
        </div>
      </div>
    </Link>
  );
};

export default NeedVolunteerNowCard;

NeedVolunteerNowCard.propTypes = {
  volunteer: PropTypes.object,
};
