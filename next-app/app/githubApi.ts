import { GitUser, Repository } from "./types";

const BASE_URL = "https://api.github.com";

export const searchUsers = async (searchTerm: string): Promise<GitUser[]> => {
  const response = await fetch(
    `${BASE_URL}/search/users?q=${searchTerm}&per_page=100`
  );
  const data = await response.json();
  return data.items;
};

export const searchUserRepos = async (
  searchTerm: string,
  username: string
): Promise<Repository[]> => {
  const response = await fetch(
    `${BASE_URL}/search/repositories?q=${searchTerm}+user:${username}&per_page=100`
  );
  const data = await response.json();
  return data.items;
};

export const getUser = async (username: string): Promise<GitUser> => {
  const response = await fetch(`${BASE_URL}/users/${username}`);
  const data = await response.json();
  return data;
};

export const getUserRepos = async (username: string): Promise<Repository[]> => {
  const response = await fetch(
    `${BASE_URL}/users/${username}/repos?per_page=100`
  );
  const data = await response.json();
  return data;
};
