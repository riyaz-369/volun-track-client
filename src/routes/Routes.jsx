import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
import NeedVolunteer from "../pages/NeedVolunteer/NeedVolunteer";
import VolunteerDetails from "../pages/VolunteerDetails/VolunteerDetails";
import PrivateRoute from "./PrivateRoute";
import UpdatePost from "../pages/MyPost/UpdatePost";
import BeAVolunteerPage from "../pages/BeAVolunteerPage/BeAVolunteerPage";
import Profile from "../pages/Profile/Profile";
import DashboardLayout from "../layout/DashboardLayout";
import VolunteerRequests from "../pages/Dashboard/Admin/VolunteerRequests";
import MyVolunteerReq from "../pages/Dashboard/User/MyVolunteerReq";
import AddPost from "../pages/Dashboard/Common/AddPost";
import MyPost from "../pages/Dashboard/Common/MyPost";
import DashboardProfile from "../pages/Dashboard/Common/DashboardProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/logIn",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/needVolunteer",
        element: <NeedVolunteer />,
      },

      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdatePost />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/volunteers/${params.id}`),
      },
      {
        path: "/volunteerDetails/:id",
        element: (
          <PrivateRoute>
            <VolunteerDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/volunteers/${params.id}`),
      },
      {
        path: "/beVolunteer/:id",
        element: (
          <PrivateRoute>
            <BeAVolunteerPage />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/volunteers/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <MyPost />
          </PrivateRoute>
        ),
      },
      {
        path: "addPost",
        element: (
          <PrivateRoute>
            <AddPost />
          </PrivateRoute>
        ),
      },
      {
        path: "myVolunteerReq",
        element: (
          <PrivateRoute>
            <MyVolunteerReq />
          </PrivateRoute>
        ),
      },
      {
        path: "volunteerRequests",
        element: (
          <PrivateRoute>
            <VolunteerRequests />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <DashboardProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
