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
        element: <MyPost />,
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
    ],
  },
]);

export default router;
