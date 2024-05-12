import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { MdOutlineCancel } from "react-icons/md";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyVolunteerReq = () => {
  const [myReq, setMyReq] = useState([]);
  const { user } = useAuth();
  const axiosCommon = useAxiosCommon();

  useEffect(() => {
    getData();
  }, [user]);

  const getData = async () => {
    const { data } = await axiosCommon(
      `/volunteerRequests?email=${user?.email}`
    );
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
          axiosCommon.delete(`/volunteerRequests/${id}`).then((data) => {
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
    <div className="overflow-x-auto max-w-7xl mx-auto my-12">
      <Helmet>
        <title>My Volunteer Request</title>
      </Helmet>
      <h3 className="text-center text-[#8cbd51] mb-6 text-3xl font-ubuntu">
        My Volunteer Requests:{" "}
        <span className="text-[#a86340]">{myReq.length}</span>
      </h3>
      <table className="table">
        <thead>
          <tr className="text-base">
            <th></th>
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
              <td>{req.post_title}</td>
              <td>{req.category}</td>
              <td>{req.no_of_volunteers_needed}</td>
              <td>{new Date(req.deadline).toLocaleDateString()}</td>
              <td className="flex gap-4 text-3xl text-red-500">
                <button
                  onClick={() => handleCancel(req._id)}
                  className="hover:text-[#a86340]"
                >
                  <MdOutlineCancel />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyVolunteerReq;

// /volunteerRequests?email
