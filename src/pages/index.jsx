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
    <div className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-5">
      <div className="text-center">
        <h3 className="text-sm">Welcome to the</h3>
        <h1 className="text-xl md:text-3xl lg:text-5xl poppins-bold">
          <span className="text-primary">GitHub</span>
          <span className="text-secondary">Mine</span>
        </h1>
      </div>
      <div className="flex w-full lg:w-1/2 items-center gap-3 bg-base-300 px-3 py-2 rounded-lg">
        <input
          type="search"
          className="flex-grow bg-transparent h-10 outline-none focus:outline-none active:outline-none rounded-lg"
          value={searchKeyWord}
          placeholder="Search by Github Username..."
          onChange={(e) => setSearchKeyWord(e?.target?.value)}
          onKeyDown={searchHitEnter}
        />
        <button
          className="bg-primary text-primary-content h-full p-2 rounded-lg"
          onClick={searchOnClick}
        >
          Search
        </button>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
