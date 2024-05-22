import React, { useEffect, useState } from "react";
import { UserTile } from "../../../../generalComponents";
import axios from "axios";

// GETTING BASE URL FROM EVN
const baseURL = import.meta.env.VITE_API_BASE_URL;

export const FollowersList = ({ login = null, isLoading, setError }) => {
  const [followers, setFollowers] = useState(null);
  const [isLoadingFollowers, setIsLoadingFollowers] = useState(false);

  // PERFORMING SIDE EFFECT ON COMPONENT MOUNT AND "login"
  // TO FETCH FRESH DATA
  useEffect(() => {
    if (login) {
      // FUNCTION TO MAKE ASYNC CALL FROM "useEffect"
      const getAllFollowers = async () => {
        setIsLoadingFollowers(true);
        try {
          const response = await axios.get(
            `${baseURL}/users/${login}/followers?per_page=5`
          );
          setFollowers(response.data);
          setError(null); // Clear any previous errors
        } catch (err) {
          console.error(err);
          setError(err);
        } finally {
          setIsLoadingFollowers(false);
        }
      };
      getAllFollowers();
    }
  }, [login, login]);

  return isLoading || isLoadingFollowers ? (
    <FollowersListSkeleton />
  ) : (
    <div className="shadow border border-base-200/80 w-full h-full px-5 rounded-lg">
      <div className="divider my-5 text-sm font-bold">Top Followers</div>
      <div className="flex flex-wrap items-center justify-center gap-1 mb-5">
        {login && followers?.length > 0 ? (
          followers?.map((item, index) => <UserTile key={index} user={item} />)
        ) : (
          <div className="w-full p-3 rounded-lg bg-base-100 text-base text-center border-2 border-base-300/80">
            <h1 className="text-xl font-bold">No Followers</h1>
            <p className="text-xs">This profile has no followers yet!</p>
          </div>
        )}
      </div>
    </div>
  );
};

// SKELETON FOR FOLLOWERS SECTION
const FollowersListSkeleton = () => {
  return (
    <div className="w-full grid grid-cols-1 items-center justify-center gap-5">
      {
        // ITS NOT WORKING AFTER DEPLOYING ON VERCEL
        // Array(3)
        //   .fill()
        [1, 2, 3].map((count) => (
          <div
            key={count}
            className="w-full flex items-center gap-3 p-3 rounded-lg bg-base-100 text-base text-center border-2 border-base-300/80 animate-pulse"
          >
            <div className="avatar">
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <div className="h-6 bg-gray-300 rounded w-24 mb-1"></div>
              <div className="h-4 bg-gray-300 rounded w-20"></div>
            </div>
          </div>
        ))
      }
    </div>
  );
};
