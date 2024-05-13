import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  axiosSecure.interceptors.response.use((res) => {
    return res;
  });
  async (err) => {
    if (err.response.status === 401 || err.response.status === 403) {
      logOut();
      navigate("/logIn");
    }
    return Promise.reject(err);
  };
  return axiosSecure;
};

export default useAxiosSecure;
