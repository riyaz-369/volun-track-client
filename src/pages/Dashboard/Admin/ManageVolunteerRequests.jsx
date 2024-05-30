import { MdOutlineCancel } from "react-icons/md";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import Lottie from "lottie-react";
import empty from "../../../assets/animation/empty.json";
import { GiConfirmed } from "react-icons/gi";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageVolunteerRequests = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: allVolunteerReq = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allVolunteerRequests"],
    queryFn: async () => {
      const { data } = await axiosSecure("/allVolunteerRequests");
      return data;
    },
  });

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
              refetch();
            }
          });
        }
      });
    } catch (err) {
      toast.error(err.message);
    }
  };

  const { mutateAsync } = useMutation({
    mutationFn: async (item) => {
      const { data } = await axiosSecure.post(
        "/volunteerReqConfirmations",
        item
      );
      return data;
    },
    onSuccess: () => {
      toast.success("Request confirmed");
    },
  });

  const handleVolunteerAccept = async (item) => {
    try {
      mutateAsync(item);
      const { data } = await axiosSecure.delete(
        `/volunteerRequests/${item._id}`
      );
      if (data.deletedCount > 0) {
        refetch();
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  if (isLoading)
    return (
      <span className="loading loading-spinner loading-lg flex items-center justify-center h-screen mx-auto"></span>
    );

  return (
    <div>
      <div className="overflow-x-auto max-w-6xl mx-auto my-8 lg:my-12 px-2 lg:px-0">
        <Helmet>
          <title>All Volunteer Request</title>
        </Helmet>
        <h3 className="text-center text-[#8cbd51] mb-6 text-2xl lg:text-3xl font-ubuntu">
          All Volunteer Requests:{" "}
          <span className="text-[#a86340]">{allVolunteerReq.length}</span>
        </h3>
        {allVolunteerReq.length ? (
          <table className="table">
            <thead>
              <tr className="text-base">
                <th></th>
                <th>Image</th>
                <th>Post Title</th>
                <th>Category</th>
                <th>User Email</th>
                <th>Deadline</th>
                <th>Acton</th>
              </tr>
            </thead>
            <tbody>
              {allVolunteerReq.map((req, idx) => (
                <tr className="text-base" key={req._id}>
                  <th>{idx + 1}</th>
                  <td>
                    <img className="w-24 rounded-lg" src={req.thumbnail} />
                  </td>
                  <td>{req.post_title}</td>
                  <td>{req.category}</td>
                  <td>{req.organizer_email}</td>
                  <td>{new Date(req.deadline).toLocaleDateString()}</td>
                  <td className="flex gap-4 text-2xl pt-7">
                    <button
                      title="Cancel"
                      onClick={() => handleCancel(req._id)}
                      className="hover:text-[#a86340] text-red-400"
                    >
                      <MdOutlineCancel size={26} />
                    </button>
                    <button
                      title="Accept"
                      onClick={() => handleVolunteerAccept(req)}
                      className="hover:text-gray-700 text-[#8cbd51]"
                    >
                      <GiConfirmed />
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
    </div>
  );
};

export default ManageVolunteerRequests;
