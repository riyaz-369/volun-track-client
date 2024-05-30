import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import empty from "../../../assets/animation/empty.json";
import Lottie from "lottie-react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import useAxiosCommon from "../../../hooks/useAxiosCommon";

const MyPost = () => {
  const { user } = useAuth();
  const axiosCommon = useAxiosCommon();
  const [myPosts, setMyPosts] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosSecure(
        `/volunteers-email?email=${user?.email}`
      );
      setMyPosts(data);
    };
    getData();
  }, [user]);

  const handleDelete = (id) => {
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
          axiosCommon
            .delete(`/volunteers/${id}`)
            .then((data) => {
              if (data.data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your volunteer post deleted.",
                  icon: "success",
                });
                const remaining = myPosts.filter((myPost) => myPost._id !== id);
                setMyPosts(remaining);
              }
            })
            .catch(() => {
              Swal.fire({
                title: "Something went wrong !",
                icon: "warning",
              });
            });
        }
      });
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="overflow-x-auto max-w-6xl mx-auto mt-8 lg:mt-12 px-2 lg:px-0">
      <Helmet>
        <title>My Need Volunteer Posts</title>
      </Helmet>
      <h3 className="text-center text-[#8cbd51] text-2xl lg:text-3xl font-ubuntu">
        My Need Volunteer Post:{" "}
        <span className="text-[#a86340]">{myPosts.length}</span>
      </h3>
      {myPosts.length ? (
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
            {myPosts.map((myPost, idx) => (
              <tr className="text-base" key={myPost._id}>
                <th>{idx + 1}</th>
                <td>
                  <img className="w-24 rounded-lg" src={myPost.thumbnail} />
                </td>
                <td>{myPost.post_title}</td>
                <td>{myPost.category}</td>
                <td>{myPost.no_of_volunteers_needed}</td>
                <td>{new Date(myPost.deadline).toLocaleDateString()}</td>
                <td className="flex gap-4 text-xl">
                  <Link
                    to={`/update/${myPost._id}`}
                    className="hover:text-[#8cbd51]"
                  >
                    <FiEdit />
                  </Link>
                  <button
                    onClick={() => handleDelete(myPost._id)}
                    className="hover:text-[#a86340]"
                  >
                    <RiDeleteBin6Line />
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

export default MyPost;
