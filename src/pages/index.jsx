import React from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-5">
      <div className="text-center">
        <h3 className="text-base lg:text-lg">Welcome to the</h3>
        <h1 className="text-3xl lg:text-5xl poppins-bold">
          <span className="text-primary">GitHub</span>
          <span className="text-secondary">Mine</span>
        </h1>
      </div>
      <div className="container mx-auto w-full items-center justify-start lg:w-10/12 h-full">
        <Outlet />
      </div>
    </div>
  );
};
