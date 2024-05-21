import React from "react";

const user = {
  login: "octocat",
  id: 1,
  node_id: "MDQ6VXNlcjE=",
  avatar_url: "https://github.com/images/error/octocat_happy.gif",
  gravatar_id: "",
  url: "https://api.github.com/users/octocat",
  html_url: "https://github.com/octocat",
  followers_url: "https://api.github.com/users/octocat/followers",
  following_url: "https://api.github.com/users/octocat/following{/other_user}",
  gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
  starred_url: "https://api.github.com/users/octocat/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
  organizations_url: "https://api.github.com/users/octocat/orgs",
  repos_url: "https://api.github.com/users/octocat/repos",
  events_url: "https://api.github.com/users/octocat/events{/privacy}",
  received_events_url: "https://api.github.com/users/octocat/received_events",
  type: "User",
  site_admin: false,
  name: "monalisa octocat",
  company: "GitHub",
  blog: "https://github.com/blog",
  location: "San Francisco",
  email: "octocat@github.com",
  hireable: false,
  bio: "There once was...",
  twitter_username: "monatheoctocat",
  public_repos: 2,
  public_gists: 1,
  followers: 20,
  following: 0,
  created_at: "2008-01-14T04:33:35Z",
  updated_at: "2008-01-14T04:33:35Z",
  private_gists: 81,
  total_private_repos: 100,
  owned_private_repos: 100,
  disk_usage: 10000,
  collaborators: 8,
  two_factor_authentication: true,
  plan: {
    name: "Medium",
    space: 400,
    private_repos: 20,
    collaborators: 0,
  },
};

export const SingleUserProfile = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-5">
      <div className="text-center">
        <h1 className="text-3xl poppins-bold flex items-center gap-1">
          <span className="text-primary">
            <span className="capitalize">{user?.name}</span>&apos;s
          </span>
          <span className="text-secondary">Profile</span>
        </h1>
      </div>
      <div className="flex text-sm w-full lg:w-1/3 items-center gap-3 bg-base-300 p-1 px-2 rounded-lg">
        <input
          type="search"
          className="flex-grow text-primary font-semibold bg-transparent h-10 outline-none focus:outline-none active:outline-none rounded-lg"
          placeholder="Search by Github Username..."
        />
        <button className="bg-secondary/80 whitespace-nowrap text-primary-content h-full p-2 rounded-lg hover:bg-primary transition-all ease-in-out duration-300">
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
      <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto w-full h-full gap-5">
        <div className="col-span-1 lg:col-span-2 shadow border border-base-200/80 w-full h-full p-5 rounded-lg">
          <div className="flex flex-col gap-3 mb-3">
            <div className="flex items-center gap-5 mb-3">
              <div className="avatar">
                <div className="w-16 rounded-full ring ring-base-300 ring-offset-base-100 ring-offset-4 group-hover:ring-secondary transition-all ease-in-out duration-300">
                  <img src={user?.avatar_url} alt={user?.login} />
                </div>
              </div>
              <div className="flex-grow w-full">
                <h1 className="text-lg font-bold capitalize mb-0">
                  {user?.name}
                </h1>
                {/* <a
                  href={user?.html_url}
                  className="-mt-5 text-sm text-primary font-medium hover:text-secondary transition-colors ease-in-out duration-300"
                  target="_blank"
                  title="Login"
                >
                  {`@${user?.login}`}
                </a> */}
                <div className="grid grid-cols-3 lg:grid-cols-4 flex-wrap items-center gap-3">
                  <div className="flex items-center text-sm gap-1">
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
                  <div className="flex items-center text-sm gap-1">
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
                  <div className="flex items-center text-sm gap-1">
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

                    <p>{user?.company}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start w-full gap-3">
              <div className="">
                <h1 className="text-sm font-bold capitalize">Bio</h1>
                <p className="text-sm font-medium">{user?.bio}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow border border-base-200/80 w-full h-full px-5 rounded-lg">
          <div className="divider my-5 text-sm font-bold">Profile Overview</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
            <div
              target="_blank"
              className="p-3 rounded-lg bg-base-100 text-base text-center border-2 border-base-300/80"
            >
              <h1 className="text-xl lg:text-3xl font-bold">
                {user?.followers}
              </h1>
              <p className="text-xs">No. of Follower(s)</p>
            </div>

            <div
              target="_blank"
              className="p-3 rounded-lg bg-base-100 text-base text-center border-2 border-base-300/80"
            >
              <h1 className="text-xl lg:text-3xl font-bold">
                {user?.following}
              </h1>
              <p className="text-xs">No. of Following(s)</p>
            </div>

            <a
              href={`https://github.com/${user?.login}?tab=repositories`}
              target="_blank"
              className="group p-3 rounded-lg bg-base-100 text-base text-center border-2 border-base-300/80 hover:border-primary hover:scale-95 transition-all ease-in-out duration-300"
            >
              <h1 className="text-xl lg:text-3xl font-bold group-hover:text-primary transition-all ease-in-out duration-300">
                {user?.public_repos}
              </h1>
              <p className="text-xs">No. of Public Repo(s)</p>
            </a>

            <a
              href={`https://gist.github.com/${user?.login}`}
              target="_blank"
              className="group p-3 rounded-lg bg-base-100 text-base text-center border-2 border-base-300/80 hover:border-primary hover:scale-95 transition-all ease-in-out duration-300"
            >
              <h1 className="text-xl lg:text-3xl font-bold group-hover:text-primary transition-all ease-in-out duration-300">
                {user?.private_gists + user?.public_gists}
              </h1>
              <p className="text-xs">No. of Gist(s)</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
