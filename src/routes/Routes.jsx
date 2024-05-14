import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
import NeedVolunteer from "../pages/NeedVolunteer/NeedVolunteer";
import VolunteerDetails from "../pages/VolunteerDetails/VolunteerDetails";
import PrivateRoute from "./PrivateRoute";
import AddVolunteerPost from "../pages/AddVolunteerPost/AddVolunteerPost";
import MyPost from "../pages/MyPost/MyPost";
import UpdatePost from "../pages/MyPost/UpdatePost";
import BeAVolunteerPage from "../pages/BeAVolunteerPage/BeAVolunteerPage";
import MyVolunteerReq from "../pages/MyVolunteerReq/MyVolunteerReq";
import Profile from "../pages/Profile/Profile";

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
        element: <Profile />,
      },
      {
        path: "/needVolunteer",
        element: <NeedVolunteer />,
      },
      {
        path: "/addPost",
        element: (
          <PrivateRoute>
            <AddVolunteerPost />
          </PrivateRoute>
        ),
      },
      {
        path: "/myPost",
        element: (
          <PrivateRoute>
            <MyPost />
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: <UpdatePost />,
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
      {
        path: "/myVolunteerReq",
        element: (
          <PrivateRoute>
            <MyVolunteerReq />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
