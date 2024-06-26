import { FiAlignLeft } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { CgLogOut, CgProfile } from "react-icons/cg";
import useLogOut from "../../../hooks/useLogOut";
import { MdDashboard } from "react-icons/md";

const Navbar = () => {
  const { user } = useAuth();
  const handleLogOut = useLogOut();

  const activeLink =
    "text-[#83b446] font-bold underline underline-offset-8 text-base flex items-center gap-1";
  const deActiveLink =
    "transition-all font-semibold hover:underline underline-offset-8 hover:text-[#955E42] flex items-center gap-1";

  const [theme, setTheme] = useState("light");

  const handleTheme = (e) => {
    const userTheme = e.target.checked ? "dark" : "light";
    setTheme(userTheme);
    localStorage.setItem("theme", userTheme);
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  const navLinks = (
    <>
      <NavLink
        to="/"
        title="Home"
        className={({ isActive }) => (isActive ? activeLink : deActiveLink)}
      >
        Home
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) => (isActive ? activeLink : deActiveLink)}
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/needVolunteer"
        title="Need Volunteer to See"
        className={({ isActive }) => (isActive ? activeLink : deActiveLink)}
      >
        Need Volunteer
      </NavLink>
      {!user ? (
        <div className="space-y-3 lg:hidden">
          <Link to="/logIn" className="primary-btn">
            Login
          </Link>
        </div>
      ) : (
        <Link
          onClick={handleLogOut}
          className="flex items-center gap-1 px-1 py-2 rounded-lg text-base transition-colors duration-300 transform hover:bg-gray-700 text-[#cf7a4f] font-bold lg:hidden"
        >
          <span className="text-xl">
            <CgLogOut />
          </span>
          <span className="">Logout</span>
        </Link>
      )}
    </>
  );

  return (
    <div className="sticky top-0 z-50 py-2 bg-base-100 shadow-md">
      <div>
        <div className="navbar max-w-7xl mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <span className="text-xl">
                  <FiAlignLeft />
                </span>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-10 p-6 shadow w-52 space-y-6 bg-[#1A1A1A] text-gray-200 rounded-lg"
              >
                {navLinks}
              </ul>
            </div>
            <Link
              title="VolunTrack | Home"
              className="text-xl md:text-3xl font-bold text-[#955E42] flex items-center gap-2 hover:scale-[1.03] transition-all"
            >
              <img className="w-7 md:w-9" src="/vt.png" />
              <h1>VolunTrack</h1>
            </Link>
          </div>
          <div className="navbar-end flex gap-12">
            <div className="hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-base space-x-8">
                {navLinks}
              </ul>
            </div>
            <div className="flex items-center gap-2">
              {/* theme controller */}
              <label className="cursor-pointer grid place-items-center">
                <input
                  onChange={handleTheme}
                  type="checkbox"
                  className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
                />
                <svg
                  className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
                <svg
                  className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </label>
              {/* conditional user profile */}
              {!user ? (
                <div className="space-x-3 hidden lg:flex">
                  <Link to="/logIn" className="primary-btn">
                    Login
                  </Link>
                </div>
              ) : (
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div title={user?.displayName} className="rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                  <div>
                    <div
                      tabIndex={0}
                      className="relative inline-block dropdown-content"
                    >
                      <div className="absolute right-0 z-20 w-72 py-2 mt-2 overflow-hidden origin-top-right rounded-lg shadow-xl bg-[#1A1A1A]">
                        <div className="flex items-center p-3 -mt-2 transition-colors duration-300 transform text-gray-200 hover:bg-gray-700 hover:text-white">
                          <img
                            className="flex-shrink-0 object-cover mx-1 rounded-full w-12 h-12"
                            src={user?.photoURL}
                          />
                          <div className="mx-1">
                            <h1 className="font-semibold text-gray-200">
                              {user?.displayName}
                            </h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {user?.email}
                            </p>
                          </div>
                        </div>

                        <hr className="border-[#553739]" />

                        <Link
                          to="/profile"
                          className="flex items-center p-3 text-base transition-colors duration-300 font-medium transform text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                          <CgProfile size={25} />
                          <span className="mx-2">View Profile</span>
                        </Link>
                        <Link
                          to="/dashboard"
                          className="flex items-center p-3 text-base transition-colors duration-300 font-medium transform text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                          <MdDashboard size={25} />
                          <span className="mx-2">Dashboard</span>
                        </Link>
                        <Link
                          onClick={handleLogOut}
                          className="flex items-center gap-2 p-3 text-base transition-colors duration-300 transform hover:bg-gray-700 text-[#cf7a4f] font-bold"
                        >
                          <span>
                            <CgLogOut size={25} />
                          </span>
                          <span>Logout</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
