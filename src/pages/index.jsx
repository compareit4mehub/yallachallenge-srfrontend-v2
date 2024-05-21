import React, { useState } from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  const [searchKeyWord, setSearchKeyWord] = useState("");

  const searchOnClick = () => {
    console.log("Search KeyWord", searchKeyWord);
  };

  const searchHitEnter = (event) => {
    if (event.key !== "Enter") return;
    else {
      console.log("Search KeyWord", searchKeyWord);
    }
  };

  return (
    <div className="w-full  flex flex-col justify-center items-center gap-5">
      <div className="text-center">
        <h3 className="text-base lg:text-lg">Welcome to the</h3>
        <h1 className="text-3xl lg:text-5xl poppins-bold">
          <span className="text-primary">GitHub</span>
          <span className="text-secondary">Mine</span>
        </h1>
      </div>
      <div className="flex text-sm w-full lg:w-1/3 items-center gap-3 bg-base-300 p-1 px-2 rounded-lg">
        <input
          type="search"
          className="flex-grow text-primary font-semibold bg-transparent h-10 outline-none focus:outline-none active:outline-none rounded-lg"
          value={searchKeyWord}
          placeholder="Search by Github Username..."
          onChange={(e) => setSearchKeyWord(e?.target?.value)}
          onKeyDown={searchHitEnter}
        />
        <button
          className="bg-secondary/80 whitespace-nowrap text-primary-content h-full p-2 rounded-lg hover:bg-primary transition-all ease-in-out duration-300"
          onClick={searchOnClick}
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
      <div className="container mx-auto w-full lg:w-10/12 h-full">
        <Outlet />
      </div>
    </div>
  );
};
