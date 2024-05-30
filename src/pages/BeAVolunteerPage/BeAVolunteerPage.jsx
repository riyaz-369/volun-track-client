import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const BeAVolunteerPage = () => {
  const beVolunteer = useLoaderData();

  const { register, handleSubmit } = useForm();
  const { user } = useAuth();
  const axiosCommon = useAxiosCommon();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

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
  } = beVolunteer || {};
  const [startDate, setStartDate] = useState(new Date(deadline) || new Date());

  const handleVolunteerRequests = async (e) => {
    const { status, suggestion } = e;

    const volunteerReqData = {
      thumbnail,
      post_title,
      description,
      category,
      location,
      no_of_volunteers_needed,
      deadline,
      status,
      suggestion,
      organizer_name,
      organizer_email,
      volunteer: {
        name: user?.displayName,
        email: user?.email,
      },
    };

    if (organizer_email === user?.email) {
      return toast.error("Action not permitted !");
    }

    try {
      const { data } = await axiosSecure.post(
        "/volunteerRequests",
        volunteerReqData
      );
      if (data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Your Request Send Successfully !",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          navigate("/dashboard/myVolunteerReq");
        }, 1500);
      }
    } catch (err) {
      toast.error(err.message);
    }

    try {
      await axiosCommon.patch(`/volunteerRequests/${_id}`);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-8 lg:my-12 px-2 lg:px-0">
      <Helmet>
        <title>Be a Volunteer - {post_title}</title>
      </Helmet>
      <h3 className="text-2xl lg:text-3xl font-semibold text-center underline underline-offset-8 font-ubuntu text-[#8cbd51] mb-4">
        Be a Volunteer
      </h3>
      <form onSubmit={handleSubmit(handleVolunteerRequests)}>
        <div className="lg:grid grid-cols-2 gap-x-6">
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Thumbnail
            </label>
            <input
              className="block w-full px-4 py-2  border rounded-lg border-gray-600 focus:border-[#553739] focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#553739]"
              type="text"
              placeholder="Enter thumbnail url"
              {...register("thumbnail")}
              disabled
              defaultValue={thumbnail}
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
              {...register("post_title")}
              disabled
              defaultValue={post_title}
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
              {...register("description")}
              disabled
              defaultValue={description}
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Category
            </label>
            <select
              className="block w-full px-4 py-2  border rounded-lg border-gray-600 focus:border-[#553739] focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#553739]"
              defaultValue={category}
              {...register("category")}
              disabled
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
              {...register("location")}
              defaultValue={location}
              disabled
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
              {...register("no_of_volunteers_needed")}
              defaultValue={no_of_volunteers_needed}
              disabled
            />
          </div>

          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Organizer Name
            </label>
            <input
              className="block w-full px-4 py-2  border rounded-lg border-gray-600 focus:border-[#553739] focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#553739]"
              type="text"
              defaultValue={organizer_name}
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
              defaultValue={organizer_email}
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
              disabled
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Your Email Address
            </label>
            <input
              className="block w-full px-4 py-2  border rounded-lg border-gray-600 focus:border-[#553739] focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#553739]"
              type="text"
              defaultValue={user?.email}
              {...register("volunteer_email")}
              disabled
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Your Name
            </label>
            <input
              className="block w-full px-4 py-2  border rounded-lg border-gray-600 focus:border-[#553739] focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#553739]"
              type="text"
              defaultValue={user?.displayName}
              {...register("volunteer_name")}
              disabled
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Suggestion
            </label>
            <textarea
              className="block w-full px-4 py-2 size-10  border rounded-lg border-gray-600 focus:border-[#553739] focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#553739]"
              type="text"
              placeholder="Your suggestions"
              {...register("suggestion")}
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Status
            </label>
            <select
              className="block w-full px-4 py-2  border rounded-lg border-gray-600 focus:border-[#553739] focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#553739]"
              {...register("status")}
            >
              <option value="Request">Requested</option>
            </select>
          </div>
        </div>
        <button className="primary-btn btn w-full mt-6">Request</button>
      </form>
    </div>
  );
};

export default BeAVolunteerPage;
