import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AddPost = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const handleAddPost = async (e) => {
    const {
      thumbnail,
      post_title,
      description,
      category,
      location,
      volunteers_needed,
    } = e;

    const no_of_volunteers_needed = parseInt(volunteers_needed);

    if (no_of_volunteers_needed == 0)
      return toast.error("Volunteers numbers minimum 1 or many.");

    const addPostFormData = {
      thumbnail,
      post_title,
      description,
      category,
      location,
      deadline: startDate,
      no_of_volunteers_needed,
      organizer_name: user?.displayName,
      organizer_email: user?.email,
      organizer_photo: user?.photoURL,
    };

    try {
      const { data } = await axiosSecure.post("/volunteers", addPostFormData);
      if (data.insertedId) {
        toast.success("Post added successfully !");
        navigate("/dashboard/myPost");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="max-w-6xl mx-auto my-8 lg:my-12">
      <Helmet>
        <title>Add Volunteer Post</title>
      </Helmet>
      <h3 className="text-2xl lg:text-3xl font-semibold text-center underline underline-offset-8 font-ubuntu text-[#8cbd51] mb-4">
        Add Your Volunteer Post
      </h3>
      <form onSubmit={handleSubmit(handleAddPost)} className="px-2 lg:px-0">
        <div className="lg:grid grid-cols-2 gap-x-6">
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Thumbnail
            </label>
            <input
              className="block w-full px-4 py-2  border rounded-lg border-gray-600 focus:border-[#553739] focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#553739]"
              type="text"
              placeholder="Enter thumbnail url"
              {...register("thumbnail", { required: true })}
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Title
            </label>
            <input
              className="block w-full px-4 py-2  border rounded-lg border-gray-600 focus:border-[#553739] focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#553739]"
              type="text"
              placeholder="Enter post title"
              {...register("post_title", { required: true })}
            />
          </div>
          <div className="mt-4 col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Description
            </label>
            <textarea
              className="block w-full px-4 py-2  border rounded-lg border-gray-600 focus:border-[#553739] focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#553739]"
              type="text"
              placeholder="Enter post description"
              {...register("description", { required: true })}
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Category
            </label>
            <select
              className="block w-full px-4 py-2  border rounded-lg border-gray-600 focus:border-[#553739] focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#553739]"
              {...register("category", { required: true })}
            >
              <option disabled selected>
                Choose Category
              </option>
              <option value="Health Care">Health Care</option>
              <option value="Education">Education</option>
              <option value="Social Service">Social Service</option>
              <option value="Animal Welfare">Animal Welfare</option>
              <option value="Environment">Environment</option>
            </select>
          </div>
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Location
            </label>
            <input
              className="block w-full px-4 py-2  border rounded-lg border-gray-600 focus:border-[#553739] focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#553739]"
              type="text"
              placeholder="Enter the location"
              {...register("location", { required: true })}
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Numbers of volunteer
            </label>
            <input
              className="block w-full px-4 py-2  border rounded-lg border-gray-600 focus:border-[#553739] focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#553739]"
              type="number"
              placeholder="Enter number of volunteers"
              {...register("volunteers_needed", { required: true })}
            />
          </div>

          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Organizer Name
            </label>
            <input
              className="block w-full px-4 py-2  border rounded-lg border-gray-600 focus:border-[#553739] focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#553739]"
              type="text"
              defaultValue={user?.displayName}
              {...register("organizer_name")}
              disabled
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Organizer Email
            </label>
            <input
              className="block w-full px-4 py-2  border rounded-lg border-gray-600 focus:border-[#553739] focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#553739]"
              type="text"
              defaultValue={user?.email}
              {...register("organizer_email")}
              disabled
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Deadline
            </label>
            {/* date picker input */}
            <ReactDatePicker
              className="block w-full px-4 py-2  border rounded-lg border-gray-600 focus:border-[#553739] focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#553739]"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div>
        <button className="primary-btn btn w-full mt-6">Add Post</button>
      </form>
    </div>
  );
};

export default AddPost;
