import { useEffect, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { Helmet } from "react-helmet";
import Lottie from "lottie-react";
import empty from "../../../assets/animation/empty.json";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyVolunteerReq = () => {
  const [myReq, setMyReq] = useState([]);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    getData();
  }, [user]);

  const getData = async () => {
    const { data } = await axiosSecure(`/volunteerRequests/${user?.email}`);
    setMyReq(data);
  };

  const handleCancel = (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#748E54",
        cancelButtonColor: "#553739",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/volunteerRequests/${id}`).then((data) => {
            if (data.data.deletedCount > 0) {
              Swal.fire({
                title: "Canceled your volunteer request.",
                icon: "success",
              });
            }
            getData();
          });
        }
      });
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="overflow-x-auto max-w-6xl mx-auto my-8 lg:my-12 px-2 lg:px-0">
      <Helmet>
        <title>My Volunteer Request</title>
      </Helmet>
      <h3 className="text-center text-[#8cbd51] mb-6 text-2xl lg:text-3xl font-ubuntu">
        My Volunteer Requests:{" "}
        <span className="text-[#a86340]">{myReq.length}</span>
      </h3>
      {myReq.length ? (
        <table className="table">
          <thead>
            <tr className="text-base">
              <th></th>
              <th>Image</th>
              <th>Post Title</th>
              <th>Category</th>
              <th>No. of Volunteer</th>
              <th>Deadline</th>
              <th>Acton</th>
            </tr>
          </thead>
          <tbody>
            {myReq.map((req, idx) => (
              <tr className="text-base" key={req._id}>
                <th>{idx + 1}</th>
                <td>
                  <img className="w-24 rounded-lg" src={req.thumbnail} />
                </td>
                <td>{req.post_title}</td>
                <td>{req.category}</td>
                <td>{req.no_of_volunteers_needed}</td>
                <td>{new Date(req.deadline).toLocaleDateString()}</td>
                <td className="flex gap-4 text-red-400">
                  <button
                    onClick={() => handleCancel(req._id)}
                    className="hover:bg-[#ffcbcb] btn btn-ghost"
                  >
                    <MdOutlineCancel size={26} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="flex items-center justify-center">
          <Lottie className="w-2/5" animationData={empty} />
        </div>
      )}
    </div>
  );
};

export default MyVolunteerReq;
