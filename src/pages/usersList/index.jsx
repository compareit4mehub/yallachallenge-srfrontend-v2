import React, { useEffect, useState } from "react";
import { UserCard } from "./components";
import axios from "axios";

// GETTING BASE URL FROM EVN
const baseURL = import.meta.env.VITE_API_BASE_URL;

export const UsersList = () => {
  const [filterKeyword, setFilterKeyword] = useState("");
  const [userPerPage, setUserPerPage] = useState(5);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [usersList, setUsersList] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  // PERFORMING SIDE EFFECT ON COMPONENT MOUNT AND ON PER
  // USER COUNT CHANGE TO FETCH FRESH DATA
  useEffect(() => {
    // FUNCTION TO MAKE ASYNC CALL FROM "useEffect"
    const getAllUsers = async () => {
      setIsLoading(true);
      try {
        const url = `${baseURL}/users?per_page=${userPerPage}`;
        const response = await axios.get(url);
        setUsersList(response.data);
        setFilteredUsers(response.data);
        setError(null); // Clear any previous errors
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    getAllUsers();
  }, [userPerPage]);

  // FUNCTION TO FILTER-OUT MATCHING PROFILES BASED ON USER INPUT
  const filterProfiles = () => {
    if (usersList?.length > 0 && filterKeyword?.length > 0) {
      const filteredList = usersList?.filter(
        (user) =>
          user?.name?.toLowerCase().includes(filterKeyword.toLowerCase()) ||
          user?.login?.toLowerCase().includes(filterKeyword.toLowerCase())
      );

      setFilteredUsers(filteredList);
    } else {
      setFilteredUsers(usersList);
    }
  };

  // PERFORMING SIDE EFFECT ON "filterKeyword" TO PERFORM
  // REAL-TIME FILTRATION ON FETCHED PROFILES/DATA
  useEffect(() => filterProfiles(), [usersList, filterKeyword]);

  return (
    <div className="flex flex-col justify-center items-center gap-5">
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

      <div className="w-full lg:w-2/3 flex flex-row items-center justify-center gap-3">
        <div className="flex text-sm w-full lg:w-2/3 items-center gap-3 bg-base-300 p-1 px-2 rounded-lg">
          <input
            type="search"
            className="flex-grow text-primary font-semibold bg-transparent h-10 outline-none focus:outline-none active:outline-none rounded-lg"
            value={filterKeyword}
            placeholder="Filter profiles by name..."
            onChange={(e) => setFilterKeyword(e?.target?.value)}
          />
          <button
            className="bg-secondary/80 whitespace-nowrap text-primary-content h-full p-2 rounded-lg hover:bg-primary transition-all ease-in-out duration-300"
            onClick={filterProfiles}
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
        <div className="flex text-sm w-full lg:w-1/12 items-center gap-3 bg-base-300 p-1 px-2 rounded-lg">
          <input
            type="number"
            min={0}
            className="w-full text-primary font-semibold bg-transparent h-10 outline-none focus:outline-none active:outline-none rounded-lg"
            value={userPerPage}
            placeholder="No. of records"
            onChange={(e) =>
              setUserPerPage(e?.target?.value < 5 ? 5 : e?.target?.value)
            }
          />
        </div>
      </div>
      {isLoading ? (
        <SkeletonGrid />
      ) : (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-5">
          {filteredUsers?.length > 0 ? (
            filteredUsers.map((item, index) => (
              <UserCard key={index} user={item} />
            ))
          ) : (
            <div className="col-span-1 lg:col-span-3 w-full p-3 rounded-lg bg-base-100 text-base text-center">
              <h1 className="text-xl font-bold">Oops!</h1>
              <p className="text-xs">No profile found!</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// SKELETON GRID FOR LOADING STATE
const SkeletonGrid = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-5">
      {Array(3)
        .fill()
        .map((count) => (
          <div
            key={count}
            className="group bg-gray-100 flex flex-col items-center justify-center w-full h-full p-8 rounded-lg cursor-default hover:no-underline animate-pulse" // Removed hover effects
          >
            <div className="avatar mb-3 animate-pulse">
              <div className="w-24 rounded-full bg-gray-200 ring ring-gray-300 ring-offset-gray-400 transition-all ease-in-out duration-300" />
            </div>
            <div className="w-2/3 rounded-xl h-3 bg-slate-300 animate-pulse mb-3" />
            <div className="w-1/3 rounded-xl h-3 bg-slate-300 animate-pulse" />
          </div>
        ))}
    </div>
  );
};
