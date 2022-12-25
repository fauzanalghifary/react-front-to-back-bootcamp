import axios from "axios";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});

//   Get search users
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  const res = await github.get(`/search/users?${params}`);
  return res.data.items;
};

// GET USER AND REPOS

export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos?per_page=10&sort=created:asc`),
  ]);

  return {
    user: user.data,
    repos: repos.data,
  };
};
