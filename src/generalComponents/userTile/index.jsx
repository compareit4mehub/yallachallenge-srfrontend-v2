import React from "react";

export const UserTile = ({ user, isFollowing }) => {
  return (
    <div className="w-full flex items-center gap-3 p-3 rounded-lg bg-base-100 text-base text-center border-2 border-base-300/80">
      <div className="avatar">
        <div
          className={`w-10 rounded-full ring ${
            isFollowing ? "ring-teal-600" : "ring-primary"
          } ring-offset-base-100 ring-offset-2 transition-all ease-in-out duration-300`}
        >
          <img src={user?.avatar_url} alt={user?.login} />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start">
        <h1 className="text-lg font-bold capitalize">{user?.login}</h1>
        <a
          href={user?.html_url}
          className={`${
            isFollowing
              ? "text-teal-600/80 hover:text-teal-600"
              : "text-primary/80 hover:text-primary"
          } text-xs font-medium transition-colors ease-in-out duration-300`}
          target="_blank"
          title="Login"
        >
          visit profile
        </a>
      </div>
    </div>
  );
};
