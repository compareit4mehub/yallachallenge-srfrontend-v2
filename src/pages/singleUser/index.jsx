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
      <div className="container mx-auto w-full h-full">
        <div className="bg-base-200 flex flex-col items-center justify-center w-full h-full p-5 rounded-md">
          <div className="avatar mb-3">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user?.avatar_url} alt={user?.login} />
            </div>
          </div>
          <h1 className="text-xl font-bold capitalize">{user?.name}</h1>
          <a
            href={user?.html_url}
            className="text-primary font-medium hover:text-secondary transition-colors ease-in-out duration-300"
            target="_blank"
            title="Login"
          >
            {user?.login}
          </a>
        </div>
      </div>
    </div>
  );
};
