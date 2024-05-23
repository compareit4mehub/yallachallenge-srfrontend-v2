import React from "react";

export const ProfileCard = ({ user, isLoading }) => {
  return isLoading ? (
    <ProfileCardSkeleton />
  ) : (
    <div className="shadow border border-base-200/80 w-full h-full p-5 rounded-lg">
      <div className="flex flex-col gap-3 mb-3">
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-base-300 ring-offset-base-100 ring-offset-4 group-hover:ring-secondary transition-all ease-in-out duration-300">
              <img src={user?.avatar_url} alt={user?.login} />
            </div>
          </div>
          <div className="flex-grow w-full">
            <h1 className="text-lg font-bold capitalize mb-0">{user?.name}</h1>
            <div className="flex flex-col gap-1 text-xs">
              {user?.email && (
                <div className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  <a href={`mailto:${user?.email}`} className="link-primary">
                    {user?.email}
                  </a>
                </div>
              )}
              {user?.location && (
                <div className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  <a
                    href={`https://www.google.com/maps/place/${user?.location}`}
                    target="_blank"
                    className="link-primary"
                  >
                    {user?.location}
                  </a>
                </div>
              )}
              {user?.blog && (
                <div className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>

                  <a
                    href={`${user?.blog}`}
                    target="_blank"
                    className="link-primary"
                  >
                    {user?.blog}
                  </a>
                </div>
              )}
              {user?.company && (
                <div className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
                    />
                  </svg>
                  <p className="whitespace-break-spaces">
                    {user?.company?.split(",")[0]}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start w-full gap-3">
          <div className="">
            <h1 className="text-lg font-bold capitalize">Bio</h1>
            {user?.bio ? (
              <p className="text-sm font-normal">{user?.bio}</p>
            ) : (
              <p className="text-sm font-normal">
                No biography by <strong>{user?.name}</strong>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// SKELETON FOR PROFILE CARD SECTION
export const ProfileCardSkeleton = () => {
  return (
    <div className="shadow border border-base-200/80 w-full h-full p-5 rounded-lg animate-pulse">
      <div className="flex flex-col gap-3 mb-3">
        <div className="flex items-center gap-5 mb-3">
          <div className="avatar">
            <div className="w-16 h-16 rounded-full bg-gray-300"></div>
          </div>
          <div className="flex-grow w-full">
            <div className="h-6 bg-gray-300 rounded w-1/2 mb-2"></div>
            <div className="flex flex-wrap items-center gap-1">
              <div className="flex items-center text-sm gap-1">
                <div className="w-4 h-4 bg-gray-300 rounded"></div>
                <div className="w-24 h-4 bg-gray-300 rounded"></div>
              </div>
              <div className="flex items-center text-sm gap-1">
                <div className="w-4 h-4 bg-gray-300 rounded"></div>
                <div className="w-24 h-4 bg-gray-300 rounded"></div>
              </div>
              <div className="flex items-center text-sm gap-1">
                <div className="w-4 h-4 bg-gray-300 rounded"></div>
                <div className="w-24 h-4 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start w-full gap-3">
          <div className="w-full">
            <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
