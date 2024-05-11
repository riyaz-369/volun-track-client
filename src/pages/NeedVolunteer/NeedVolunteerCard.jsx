const NeedVolunteerCard = ({ volunteer }) => {
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
    <div className="card card-compact rounded-lg shadow-md overflow-hidden">
      <figure>
        <img
          className="hover:scale-105 transition-all duration-300 h-64"
          src={thumbnail}
          alt={post_title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{post_title}</h2>
        <p title={description}>{description.substring(0, 80)}...</p>
        <div className="card-actions ">
          <button className="primary-btn w-full">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default NeedVolunteerCard;
