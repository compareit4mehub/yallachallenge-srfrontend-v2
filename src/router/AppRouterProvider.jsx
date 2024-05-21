import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
]);

const AppRouterProvider = () => {
  return <RouterProvider router={router} />;
};

export default AppRouterProvider;
