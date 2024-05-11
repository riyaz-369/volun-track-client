import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import toast from "react-hot-toast";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import Swal from "sweetalert2";

const MyPost = () => {
  const { user } = useAuth();
  const axiosCommon = useAxiosCommon();
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    getData();
  }, [user]);

  const getData = async () => {
    const { data } = await axiosCommon(
      `/volunteers-email?email=${user?.email}`
    );
    setMyPosts(data);
  };

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
              console.log(data);
              if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your volunteer post deleted.",
                  icon: "success",
                });
                getData();
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
    <div className="overflow-x-auto max-w-7xl mx-auto my-12">
      <h3 className="text-center text-[#8cbd51] mb-6 text-3xl font-ubuntu">
        My Volunteer Post:{" "}
        <span className="text-[#a86340]">{myPosts.length}</span>
      </h3>
      <table className="table">
        <thead>
          <tr className="text-base">
            <th></th>
            <th>Post Title</th>
            <th>Category</th>
            <th>Deadline Color</th>
            <th>Acton</th>
          </tr>
        </thead>
        <tbody>
          {myPosts.map((myPost, idx) => (
            <tr className="text-base" key={myPost._id}>
              <th>{idx + 1}</th>
              <td>{myPost.post_title}</td>
              <td>{myPost.category}</td>
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
    </div>
  );
};

export default MyPost;
