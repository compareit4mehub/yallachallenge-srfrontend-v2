import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "../pages";
import { UsersList } from "../pages/usersList";
import { SingleUserProfile } from "../pages/singleUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Navigate replace to="/users" /> }, // Redirect from "/"
      {
        path: "/users",
        element: <UsersList />,
      },
    ],
  },
  {
    path: "/users/:username",
    element: <SingleUserProfile />,
  },
]);

const AppRouterProvider = () => {
  return <RouterProvider router={router} />;
};

export default AppRouterProvider;
