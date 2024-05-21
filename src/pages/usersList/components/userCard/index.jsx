import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const UserCard = ({ user }) => {
  const navigate = useNavigate();
  const profileCardRef = useRef(null);

  const viewProfile = (event, element) => {
    if (event.target === element.querySelector("a")) {
      event.stopPropagation();
      console.log(event);
    } else {
      console.log(event);
      navigate(`/users/${user?.login}`);
    }
  };

  useEffect(() => {
    const element = profileCardRef.current;

    if (element) {
      element.addEventListener("click", (event) => viewProfile(event, element));

      // Cleanup function to remove the event listener on unmount
      return () => element.removeEventListener("click", viewProfile);
    }
  }, [profileCardRef]);

  return (
    <div
      ref={profileCardRef}
      className="group bg-base-100 flex flex-col items-center justify-center w-full h-full p-8 rounded-lg cursor-pointer border border-base-300 hover:border-secondary hover:shadow-md hover:shadow-base-300 transition-all ease-in-out duration-300"
    >
      <div className="avatar mb-3">
        <div className="w-24 rounded-full ring ring-base-300 ring-offset-base-100 ring-offset-4 group-hover:ring-secondary transition-all ease-in-out duration-300">
          <img src={user?.avatar_url} alt={user?.login} />
        </div>
      </div>
      <h1 className="text-xl font-bold capitalize text-secondary">
        {user?.name}
      </h1>
      <a
        href={user?.html_url}
        className="text-primary font-medium hover:text-secondary transition-colors ease-in-out duration-300"
        target="_blank"
        title="Login"
      >
        {user?.login}
      </a>
    </div>
  );
};
