import React from "react";
import { UserCard } from "./components";

export const UsersList = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-5">
      <UserCard />
    </div>
  );
};
