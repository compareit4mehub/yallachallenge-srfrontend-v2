import React from "react";
import CountUp from "react-countup";

export const ProfileOverview = ({ user, isLoading }) => {
  return isLoading ? (
    <ProfileOverviewSkeleton />
  ) : (
    <div className="shadow border border-base-200/80 w-full h-full px-5 rounded-lg">
      <div className="divider my-5 text-sm font-bold">Profile Overview</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
        <div className="p-3 rounded-lg bg-base-100 text-base text-center border-2 border-base-300/80">
          <h1 className="text-xl lg:text-3xl font-bold">
            <CountUp end={user?.followers} decimal="," delay={2} />
          </h1>
          <p className="text-xs">No. of Follower(s)</p>
        </div>

        <div className="p-3 rounded-lg bg-base-100 text-base text-center border-2 border-base-300/80">
          <h1 className="text-xl lg:text-3xl font-bold">
            <CountUp end={user?.following} decimal="," delay={2} />
          </h1>
          <p className="text-xs">No. of Following(s)</p>
        </div>

        <a
          href={`https://github.com/${user?.login}?tab=repositories`}
          target="_blank"
          className="group p-3 rounded-lg bg-base-100 text-base text-center border-2 border-base-300/80 hover:border-primary hover:scale-95 transition-all ease-in-out duration-300"
        >
          <h1 className="text-xl lg:text-3xl font-bold group-hover:text-primary transition-all ease-in-out duration-300">
            <CountUp end={user?.public_repos} decimal="," delay={2} />
          </h1>
          <p className="text-xs">No. of Public Repo(s)</p>
        </a>

        <a
          href={`https://gist.github.com/${user?.login}`}
          target="_blank"
          className="group p-3 rounded-lg bg-base-100 text-base text-center border-2 border-base-300/80 hover:border-primary hover:scale-95 transition-all ease-in-out duration-300"
        >
          <h1 className="text-xl lg:text-3xl font-bold group-hover:text-primary transition-all ease-in-out duration-300">
            <CountUp end={user?.public_gists} decimal="," delay={2} />
          </h1>
          <p className="text-xs">No. of Gist(s)</p>
        </a>
      </div>
    </div>
  );
};

// SKELETON FOR PROFILE OVERVIEW SECTION
const ProfileOverviewSkeleton = () => {
  return (
    <div className="shadow border border-base-200/80 w-full h-full px-5 rounded-lg">
      <div className="divider my-5 text-sm font-bold">Profile Overview</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
        <div className="p-3 rounded-lg bg-gray-200 animate-pulse text-center border-2 border-gray-300/80">
          <h1 className="text-xl lg:text-3xl font-bold">0</h1>{" "}
          <p className="text-xs">Loading Follower(s)</p>
        </div>

        <div className="p-3 rounded-lg bg-gray-200 animate-pulse text-center border-2 border-gray-300/80">
          <h1 className="text-xl lg:text-3xl font-bold">0</h1>{" "}
          <p className="text-xs">Loading Following(s)</p>
        </div>

        <div className="p-3 rounded-lg bg-gray-200 animate-pulse text-center border-2 border-gray-300/80">
          <h1 className="text-xl lg:text-3xl font-bold">0</h1>{" "}
          <p className="text-xs">Loading Public Repo(s)</p>
        </div>

        <div className="p-3 rounded-lg bg-gray-200 animate-pulse text-center border-2 border-gray-300/80">
          <h1 className="text-xl lg:text-3xl font-bold">0</h1>{" "}
          <p className="text-xs">Loading Gist(s)</p>
        </div>
      </div>
    </div>
  );
};
