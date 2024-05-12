import { Link } from "react-router-dom";

const NeedVolunteerCard = ({ volunteer }) => {
  const { _id, thumbnail, post_title, description, category, deadline } =
    volunteer || {};

  return (
    <Link
      to={`/volunteerDetails/${_id}`}
      className="card card-compact rounded-lg shadow-md overflow-hidden"
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
        <h2 className="card-title text-2xl hover:underline">{post_title}</h2>
        <p title={description}>{description.substring(0, 80)}...</p>
        <p className="my-4 font-semibold">
          Deadline:{" "}
          <span className="font-medium">
            {new Date(deadline).toLocaleDateString()}
          </span>
        </p>
        <button className="primary-btn w-full">View Details</button>
      </div>
    </Link>
  );
};

export default NeedVolunteerCard;
