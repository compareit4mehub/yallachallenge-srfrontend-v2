import React, { useEffect, useState } from "react";
import { UserTile } from "../../../../generalComponents";
import axios from "axios";

// GETTING BASE URL FROM EVN
const baseURL = import.meta.env.VITE_API_BASE_URL;

export const FollowingsList = ({ login = null, isLoading, setError }) => {
  const [followings, setFollowings] = useState(null);
  const [isLoadingFollowings, setIsLoadingFollowings] = useState(false);

  // PERFORMING SIDE EFFECT ON COMPONENT MOUNT AND "login"
  // TO FETCH FRESH DATA
  useEffect(() => {
    if (login) {
      // FUNCTION TO MAKE ASYNC CALL FROM "useEffect"
      const getAllFollowings = async () => {
        setIsLoadingFollowings(true);
        try {
          const response = await axios.get(
            `${baseURL}/users/${login}/following?per_page=5`
          );
          setFollowings(response.data);
          setError(null); // Clear any previous errors
        } catch (err) {
          console.error(err);
          setError(err);
        } finally {
          setIsLoadingFollowings(false);
        }
      };
      getAllFollowings();
    }
  }, [login]);

  return isLoading || isLoadingFollowings ? (
    <FollowingsListSkeleton />
  ) : (
    <div className="shadow border border-base-200/80 w-full h-full px-5 rounded-lg">
      <div className="divider my-5 text-sm font-bold">Top Followings</div>
      <div className="flex flex-col items-center justify-center gap-1 mb-5">
        {login && followings?.length > 0 ? (
          followings?.map((item, index) => (
            <UserTile key={index} user={item} isFollowing={true} />
          ))
        ) : (
          <div className="w-full p-3 rounded-lg bg-base-100 text-base text-center border-2 border-base-300/80">
            <h1 className="text-xl font-bold">No Followings</h1>
            <p className="text-xs">This profile has no followings yet!</p>
          </div>
        )}
      </div>
    </div>
  );
};

// SKELETON FOR FOLLOWING SECTION
const FollowingsListSkeleton = () => {
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
