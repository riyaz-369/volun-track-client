import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NeedVolunteerCard = ({ volunteer }) => {
  const { _id, thumbnail, post_title, description, category, deadline } =
    volunteer || {};

  return (
    <Link
      to={`/volunteerDetails/${_id}`}
      className="card card-compact rounded-3xl shadow-md overflow-hidden bg-[#955E42] bg-opacity-[0.02]"
    >
      <figure>
        <img
          className="hover:scale-105 transition-all duration-300 h-64 w-full"
          src={thumbnail}
          alt={post_title}
        />
      </figure>
      <div className="card-body">
        <span className=" text-[#7fad45] font-bold uppercase">{category}</span>
        <h2 className="card-title font-bold text-2xl hover:underline">
          {post_title}
        </h2>
        <p className="text-base" title={description}>
          {description.substring(0, 80)}...
        </p>
        <p className="mt-4 mb-1 font-semibold text-base">
          Deadline:{" "}
          <span className="font-medium">
            {new Date(deadline).toLocaleDateString()}
          </span>
        </p>
        <button className="primary-btn w-full btn">View Details</button>
      </div>
    </Link>
  );
};

export default NeedVolunteerCard;

NeedVolunteerCard.propTypes = {
  volunteer: PropTypes.object,
};
