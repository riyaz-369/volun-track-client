import loginAnm from "../../assets/animation/logIn.json";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, updatedProfile } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handleRegister = (formData) => {
    const { fullName, email, photoUrl, password } = formData;

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
      createUser(email, password)
        .then(() => {
          updatedProfile(fullName, photoUrl);
          Swal.fire({
            title: "Registration Successful !",
            icon: "success",
            confirmButtonText: "Okay",
          });
          setTimeout(() => {
            navigate("/");
          }, 1500);
        })
        .catch((error) => {
          if (error.code) {
            toast.error("This email already in use.");
          }
        });
    }
  };

  return (
    <div>
      <div>
        <Helmet>
          <title>VolunTrack - Register</title>
        </Helmet>
        <div className="flex flex-row-reverse w-full justify-center items-center max-w-7xl mx-auto my-12">
          <div className="hidden lg:flex flex-col lg:w-1/2 border-b border-l border-gray-300">
            <Lottie animationData={loginAnm} />
          </div>
          <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
            <p className="mt-3 text-2xl text-center font-semibold">
              Register Your Account
            </p>
            {/* registration form */}
            <form onSubmit={handleSubmit(handleRegister)}>
              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-600">
                  Full Name
                </label>
                <input
                  className="block w-full px-4 py-2  border rounded-lg border-gray-600 focus:border-[#553739] focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#553739]"
                  type="text"
                  placeholder="Enter Your Name"
                  {...register("fullName", { required: true })}
                />
              </div>
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
                <label className="block mb-2 text-sm font-medium text-gray-600">
                  PhotoURL
                </label>
                <input
                  className="block w-full px-4 py-2  border rounded-lg border-gray-600 focus:border-[#553739] focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#553739]"
                  type="text"
                  placeholder="https://example.yourphoto.jpg"
                  {...register("photoUrl")}
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

              <span className="text-base text-gray-500">
                Already have an account?{" "}
                <Link
                  to="/logIn"
                  className="hover:btn-link font-bold text-[#83b446] text-lg"
                >
                  Login
                </Link>
              </span>
              <span className="w-1/5 border-b border-gray-600 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
