import { FiAlignLeft } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
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
        to="/addCraft"
        title="Need Volunteer to See"
        className={({ isActive }) => (isActive ? activeLink : deActiveLink)}
      >
        Need Volunteer
      </NavLink>
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
      <div className="space-y-3 lg:hidden">
        <Link to="/logIn" className="primary-btn">
          Login
        </Link>
      </div>
    </>
  );

  return (
    <div>
      <div className="sticky top-0 z-50 shadow-sm bg-base-100 pt-2">
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
                className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-md w-40 space-y-4"
              >
                {navLinks}
              </ul>
            </div>
            <Link
              title="VolunTrack | Home"
              className="text-xl md:text-3xl font-semibold text-[#955E42]"
            >
              <h1 className="">VolunTrack</h1>
            </Link>
          </div>
          <div className="navbar-end flex gap-12">
            <div className="hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-base space-x-8">
                {navLinks}
              </ul>
            </div>
            <div className="flex items-center gap-2">
              <div className="space-x-3 hidden lg:flex">
                <Link to="/logIn" className="primary-btn">
                  Login
                </Link>
              </div>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="rounded-full">
                    <img src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200" />
                  </div>
                </div>

                <div>
                  <div
                    tabIndex={0}
                    className="relative inline-block dropdown-content"
                  >
                    <div className="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800">
                      <a className="flex items-center p-3 -mt-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        <img
                          className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                          src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
                        />
                        <div className="mx-1">
                          <h1 className="font-semibold text-gray-700 dark:text-gray-200">
                            Name
                          </h1>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            email@exampl.com
                          </p>
                        </div>
                      </a>

                      <hr className="border-gray-200 dark:border-gray-700 " />

                      <a className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        <span className="mx-1">View Profile</span>
                      </a>

                      <a className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        <span className="mx-1">Add Post</span>
                      </a>

                      <a className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        <span className="mx-1">My Post</span>
                      </a>
                      <a className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        <span className="mx-1">My Volunteer Requests</span>
                      </a>
                      <a className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        <span className="mx-1">Logout</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
