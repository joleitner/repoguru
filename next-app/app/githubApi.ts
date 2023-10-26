import { GithubUser, Repository } from "./types";

const BASE_URL = "https://api.github.com";

export const searchUsers = async (
  searchTerm: string
): Promise<GithubUser[]> => {
  const response = await fetch(`${BASE_URL}/search/users?q=${searchTerm}`);
  const data = await response.json();
  return data.items;
};

export const searchRepositories = async (
  searchTerm: string
): Promise<Repository[]> => {
  const response = await fetch(
    `${BASE_URL}/search/repositories?q=${searchTerm}`
  );
  const data = await response.json();
  return data.items;
};

export const getUser = async (username: string): Promise<GithubUser> => {
  const response = await fetch(`${BASE_URL}/users/${username}`);
  const data = await response.json();
  return data;
};

export const getUserRepositories = async (
  username: string
): Promise<Repository[]> => {
  const response = await fetch(`${BASE_URL}/users/${username}/repos`);
  const data = await response.json();
  return data;
};
