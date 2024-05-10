import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddVolunteerPost = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="max-w-4xl mx-auto my-12">
      <h3 className="text-3xl font-semibold text-center underline underline-offset-8 font-ubuntu text-[#8cbd51] mb-4">
        Add Your Volunteer Post
      </h3>
      <form>
        <div className="lg:grid grid-cols-2 gap-x-6">
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Thumbnail
            </label>
            <input
              className="block w-full px-4 py-2  border rounded-lg border-gray-600 focus:border-[#553739] focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#553739]"
              type="text"
              placeholder="Enter thumbnail url"
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
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Category
            </label>
            <select className="block w-full px-4 py-2  border rounded-lg border-gray-600 focus:border-[#553739] focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#553739]">
              <option disabled selected>
                Choose Category
              </option>
              <option>Health Care</option>
              <option>Education</option>
              <option>Social Service</option>
              <option>Animal Welfare</option>
              <option>Environment</option>
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
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Location
            </label>
            <input
              className="block w-full px-4 py-2  border rounded-lg border-gray-600 focus:border-[#553739] focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#553739]"
              type="text"
              placeholder="Enter the location"
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
            />
          </div>

          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Organizer Name
            </label>
            <input
              className="block w-full px-4 py-2  border rounded-lg border-gray-600 focus:border-[#553739] focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#553739]"
              type="text"
              placeholder="Enter organizer name"
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Organizer Email
            </label>
            <input
              className="block w-full px-4 py-2  border rounded-lg border-gray-600 focus:border-[#553739] focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#553739]"
              type="text"
              placeholder="Enter organizer email"
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
        <button className="primary-btn w-full mt-4">Add Post</button>
      </form>
    </div>
  );
};

export default AddVolunteerPost;
