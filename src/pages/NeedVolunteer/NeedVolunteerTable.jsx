import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NeedVolunteerTable = ({ volunteer, idx }) => {
  const { _id, post_title, no_of_volunteers_needed, category, deadline } =
    volunteer || {};

  return (
    <tr className="text-base">
      <th>{idx + 1}</th>
      <td>{post_title}</td>
      <td>{category}</td>
      <td>{no_of_volunteers_needed}</td>
      <td>{new Date(deadline).toLocaleDateString()}</td>
      <td className="flex gap-4">
        <Link
          to={`/volunteerDetails/${_id}`}
          className="btn btn-sm text-white transition-colors duration-300 transform bg-[#754447] rounded-full hover:bg-[#955E42]"
        >
          View Details
        </Link>
      </td>
    </tr>
  );
};

export default NeedVolunteerTable;

NeedVolunteerTable.propTypes = {
  volunteer: PropTypes.object,
  idx: PropTypes.number,
};
