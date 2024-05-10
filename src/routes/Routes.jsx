import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
import NeedVolunteer from "../pages/NeedVolunteer/NeedVolunteer";
import VolunteerDetails from "../pages/VolunteerDetails/VolunteerDetails";
import PrivateRoute from "./PrivateRoute";

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
        path: "/volunteerDetails/:id",
        element: (
          <PrivateRoute>
            <VolunteerDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/volunteers/${params.id}`),
      },
    ],
  },
]);

export default router;
