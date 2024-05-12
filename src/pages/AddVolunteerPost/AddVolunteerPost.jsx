import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const AddVolunteerPost = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();
  const axiosCommon = useAxiosCommon();
  const navigate = useNavigate();

  const handleAddPost = async (e) => {
    const {
      thumbnail,
      post_title,
      description,
      category,
      location,
      no_of_volunteers_needed,
    } = e;

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
      const { data } = await axiosCommon.post("/volunteers", addPostFormData);
      if (data.insertedId) {
        toast.success("Post added successfully !");
        navigate("/myPost");
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-12">
      <Helmet>
        <title>Add Volunteer Post</title>
      </Helmet>
      <h3 className="text-3xl font-semibold text-center underline underline-offset-8 font-ubuntu text-[#8cbd51] mb-4">
        Add Your Volunteer Post
      </h3>
      <form onSubmit={handleSubmit(handleAddPost)}>
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
              {...register("no_of_volunteers_needed", { required: true })}
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

export default AddVolunteerPost;
