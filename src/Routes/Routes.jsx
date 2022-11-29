import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
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
     

    ],
  },
]);

export default router;