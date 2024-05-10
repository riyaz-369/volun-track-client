import Lottie from "lottie-react";
import loginAnm from "../../assets/animation/logIn.json";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const LogIn = () => {
  const { logIn, logInWithGoogle } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogIn = (data) => {
    const { email, password } = data;
    logIn(email, password);

    if (password.length < 6) {
      toast.error("Length must be at least 6 character.");
      return;
    } else if (!/^(?=.*[A-Z])/.test(password)) {
      toast.error("Password must have an uppercase letter");
      return;
    } else if (!/^(?=.*[a-z])/.test(password)) {
      toast.error("Password must have an lowercase letter");
      return;
    } else {
      logIn(email, password)
        .then(() => {
          Swal.fire({
            title: "Login Successful !",
            icon: "success",
            confirmButtonText: "Okay",
          });
          setTimeout(() => {
            navigate(location?.state ? location.state : "/");
          }, 2500);
        })
        .catch((error) => {
          const errorMsg = error.code.slice(5, 12);
          const err = errorMsg.charAt(0).toUpperCase() + errorMsg.slice(1);
          toast.error(`${err} account or password`);
        });
      return;
    }
  };

  const handleGoogleLogIn = () => {
    logInWithGoogle()
      .then(() => {
        Swal.fire({
          title: "Login Successful !",
          icon: "success",
          confirmButtonText: "Okay",
        });
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 2500);
      })
      .catch(() => {
        Swal.fire({
          title: "Something went wrong !",
          icon: "error",
          confirmButtonText: "Okay",
        });
      });
  };

  return (
    <div>
      <Helmet>
        <title>VolunTrack | Login</title>
      </Helmet>
      <div className="flex w-full justify-center items-center max-w-7xl mx-auto my-12">
        <div className="hidden lg:flex flex-col lg:w-1/2 border-b border-r border-gray-300">
          <Lottie animationData={loginAnm} />
        </div>
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <p className="mt-3 text-2xl text-center font-semibold">
            Login Your Account
          </p>
          <a
            onClick={handleGoogleLogIn}
            className="flex items-center justify-center mt-4  border rounded-lg btn-outline btn hover:bg-gray-50 hover:text-black"
          >
            <div className="text-3xl">
              <FcGoogle />
            </div>
            <span className="w-5/6 px-4 py-3 font-bold text-center">
              Login in with Google
            </span>
          </a>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b border-gray-600 lg:w-1/4"></span>

            <span className="text-xs text-center uppercase text-gray-400">
              or login with email
            </span>

            <span className="w-1/5 border-b border-gray-400 lg:w-1/4"></span>
          </div>

          <form onSubmit={handleSubmit(handleLogIn)}>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                className="block w-full px-4 py-2  border rounded-lg border-gray-600 focus:border-[#553739] focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#553739]"
                type="email"
                placeholder="Enter Your Email Address"
                {...register("email", { required: true })}
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block mb-2 text-sm font-medium text-gray-600">
                  Password
                </label>
                <a className="text-xs text-gray-500 hover:underline">
                  Forget Password?
                </a>
              </div>

              <div className="relative flex items-center mt-2">
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 focus:outline-none rtl:left-0 rtl:right-auto"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Your Password"
                  className="block w-full px-4 py-2  border rounded-lg border-gray-600 focus:border-[#553739] focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#553739]"
                  {...register("password", { required: true })}
                />
              </div>
            </div>

            <div className="mt-6">
              <button className="w-full primary-btn btn">Login</button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b border-gray-600 md:w-1/4"></span>

            <span className="text-xs text-gray-500 uppercase">
              Don not have an account?{" "}
              <Link
                to="/register"
                className="hover:btn-link font-bold text-[#83b446]"
              >
                Register
              </Link>
            </span>
            <span className="w-1/5 border-b border-gray-600 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
