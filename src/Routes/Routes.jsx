import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import CourseDetails from "../Components/Pages/Courses/CourseDetails";
import Courses from "../Components/Pages/Courses/Courses";
import Login from "../Components/UserCredintials/Login";
import Signup from "../Components/UserCredintials/Signup";
import Main from "../Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
        path : '/login',
        element : <Login/>
     },
     {
        path : '/courses',
        element : <Courses/>
     },
     {
      path : '/courses/:id',
      element : <CourseDetails/>,
      loader : ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
     }
     

    ],
  },
]);

export default router;
