import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Components/ErrorElement/ErrorPage";
import Home from "../Components/Home/Home";
import CourseDetails from "../Components/Pages/Courses/CourseDetails";
import Courses from "../Components/Pages/Courses/Courses";
import Checkout from "../Components/Pages/PrivateRoutes/Checkout";
import PrivateRoute from "../Components/Pages/PrivateRoutes/PrivateRoute";
import Login from "../Components/UserCredintials/Login";
import Signup from "../Components/UserCredintials/Signup";
import Main from "../Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement : <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/courses/:id",
        element: <CourseDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses/${params.id}`),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses/${params.id}`),
      },
    ],
  },
]);

export default router;
