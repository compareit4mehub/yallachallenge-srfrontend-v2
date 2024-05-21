import React, { useEffect, useState } from "react";
import {
  FollowersList,
  FollowingsList,
  ProfileCard,
  ProfileOverview,
} from "./components";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const SingleUserProfile = () => {
  // INITIALIZING NAVIGATOR
  const navigate = useNavigate();

  // INITIALIZING SOURCE LOCATOR
  const location = useLocation();

  // EXTRACTING ACTIVE PATH
  const currentRoute = location.pathname;

  // GETTING USERNAME FROM PARAMS
  const { username } = useParams();

  const [searchUsername, setSearchUsername] = useState(username ?? "");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // FUNCTION TO GET DATA AS PER USER INPUT
  const getUserProfileData = async () => {
    setIsLoading(true);
    try {
      const url = `https://api.github.com/users/${searchUsername}`;
      const response = await axios.get(url);
      setUser(response.data);
      setError(null); // Clear any previous errors
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  // PERFORMING SIDE EFFECT ON COMPONENT MOUNT AND "username"
  // TO FETCH FRESH DATA
  useEffect(() => {
    if (username) {
      // FUNCTION TO MAKE ASYNC CALL FROM "useEffect"
      const getAllUsers = async () => {
        setIsLoading(true);
        try {
          const url = `https://api.github.com/users/${username}`;
          const response = await axios.get(url);
          setUser(response.data);
          setError(null); // Clear any previous errors
        } catch (err) {
          console.error(err);
          setError(err);
        } finally {
          setIsLoading(false);
        }
      };
      getAllUsers();
    }
  }, [username]);

  return (
    <div className="w-full lg:w-2/3 flex flex-col justify-center items-center gap-5">
      {/* RENDERING BACK LINK WHEN NEEDED */}
      {currentRoute !== "/users" && (
        <button
          type="button"
          className="absolute top-5 left-5"
          onClick={() => navigate("/users")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
          </svg>
        </button>
      )}

      {/* ERROR HANDLING */}
      {error && (
        <div
          role="alert"
          className="w-full lg:w-1/3 flex items-center font-semibold text-black bg-red-600/60 p-3 gap-1 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            onClick={() => setError(null)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-xs">
            Error! Something went wrong wile fetching data. Check logs for more
            details.
          </span>
        </div>
      )}

      <div className="text-center">
        <h1 className="text-xl lg:text-3xl poppins-bold flex items-center gap-1">
          <span className="text-primary">
            <span className="capitalize">Explore</span>
          </span>
          <span className="text-secondary">GitHub Profile</span>
        </h1>
      </div>

      <div className="flex text-sm w-full lg:w-2/3 items-center gap-3 bg-base-300 p-1 px-2 rounded-lg">
        <input
          type="search"
          className="flex-grow text-primary font-semibold bg-transparent h-10 outline-none focus:outline-none active:outline-none rounded-lg"
          placeholder="Search by Github Username..."
          onChange={(e) => setSearchUsername(e?.target?.value)}
        />
        <button
          onClick={getUserProfileData}
          className="bg-secondary/80 whitespace-nowrap text-primary-content h-full p-2 rounded-lg hover:bg-primary transition-all ease-in-out duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
      {user && (
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto w-full h-full gap-5">
          <ProfileCard user={user} isLoading={isLoading} />
          <ProfileOverview user={user} isLoading={isLoading} />
          <FollowersList
            login={user?.login}
            isLoading={isLoading}
            setError={setError}
          />
          <FollowingsList
            login={user?.login}
            isLoading={isLoading}
            setError={setError}
          />
        </div>
      )}
    </div>
  );
};
