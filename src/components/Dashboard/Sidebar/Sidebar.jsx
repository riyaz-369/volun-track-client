import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { CgLogOut, CgProfile } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";
import useLogOut from "../../../hooks/useLogOut";
import { MdOutlinePostAdd } from "react-icons/md";
import { FaCodePullRequest } from "react-icons/fa6";
import { BsFileEarmarkPostFill } from "react-icons/bs";
import { BiHome } from "react-icons/bi";

const Sidebar = () => {
  const [isActive, setActive] = useState(false);

  const handleLogOut = useLogOut();

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold"></div>
        </div>

        <button
          onClick={handleToggle}
          className="p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-6 w-6" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-[#553739] w-72 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full md:flex px-4 py-2 shadow-lg">
              <Link to="/" className="flex items-center text-white gap-3">
                <img
                  className="md:block"
                  src="./vt.png"
                  alt="logo"
                  width="35"
                />
                <h3 className="text-2xl font-semibold">VolunTrack</h3>
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              {/* COMMON */}
              <NavLink
                to="/dashboard"
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300 text-gray-100 hover:text-black ${
                    isActive ? "bg-gray-300 font-medium text-gray-800" : ""
                  }`
                }
              >
                <BsFileEarmarkPostFill className="w-5 h-5" />
                <span className="mx-3">My Post</span>
              </NavLink>
              <NavLink
                to="addPost"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300 text-gray-100 hover:text-black ${
                    isActive ? "text-gray-800 bg-gray-300 font-medium" : ""
                  }`
                }
              >
                <MdOutlinePostAdd className="w-6 h-6" />
                <span className="mx-3">Add Post</span>
              </NavLink>

              {/* ADMIN: all volunteer requests */}
              <NavLink
                to="volunteerRequests"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300 text-gray-100 hover:text-black ${
                    isActive ? "bg-gray-300 font-medium text-gray-800" : ""
                  }`
                }
              >
                <FaCodePullRequest className="w-5 h-5" />
                <span className="mx-3">Volunteer Requests</span>
              </NavLink>

              {/* for user */}
              <NavLink
                to="myVolunteerReq"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300 text-gray-100 hover:text-black ${
                    isActive ? "bg-gray-300 font-medium text-gray-800" : ""
                  }`
                }
              >
                <FaCodePullRequest className="w-5 h-5" />
                <span className="mx-3">My Volunteer Requests</span>
              </NavLink>
            </nav>
          </div>
        </div>

        <div>
          <hr />
          <NavLink
            to="/"
            className="flex w-full items-center px-4 py-2 mt-5 text-white hover:bg-gray-300 hover:text-gray-700 transition-colors duration-300 transform"
          >
            <BiHome className="w-5 h-5" />
            <span className="mx-3 font-medium">Home</span>
          </NavLink>
          <NavLink
            to="profile"
            className="flex w-full items-center px-4 py-2 mt-5 text-white hover:bg-gray-300 hover:text-gray-700 transition-colors duration-300 transform"
          >
            <CgProfile className="w-5 h-5" />
            <span className="mx-3 font-medium">Profile</span>
          </NavLink>

          <button
            onClick={handleLogOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-white hover:bg-gray-300 hover:text-gray-700 transition-colors duration-300 transform"
          >
            <CgLogOut size={25} />
            <span className="mx-3 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
