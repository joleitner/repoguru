import { GitUser, Repository } from "./types";

const BASE_URL = "https://api.github.com";

/**
 * function to search for github users
 *
 * @param searchTerm
 * @returns git users
 */
export const searchUsers = async (searchTerm: string): Promise<GitUser[]> => {
  const query = "q=" + encodeURIComponent(searchTerm);
  const response = await fetch(
    `${BASE_URL}/search/users?${query}&per_page=100`
  );
  const data = await response.json();
  return data.items;
};

/**
 * function to search for repositories
 * has a possiblitly to search with searchTerm and/or language
 *
 * @param searchTerm
 * @param language
 * @returns
 */
export const searchUserRepos = async (
  username: string,
  searchTerm: string,
  language: string | null
): Promise<Repository[]> => {
  let queryString = `user:${username}`;
  // create query string with available parameters
  if (searchTerm) {
    queryString += ` ${searchTerm}`;
  }
  if (language) {
    queryString += ` language:${language}`;
  }
  // its important to encode the query string otherwise with special characters it will not work
  const url = `${BASE_URL}/search/repositories?q=${encodeURIComponent(
    queryString
  )}&per_page=100`;
  const response = await fetch(url);
  const data = await response.json();
  return data.items;
};

/**
 * function to fetch a single user
 *
 * @param username
 * @returns
 */
export const getUser = async (username: string): Promise<GitUser | null> => {
  const response = await fetch(
    `${BASE_URL}/users/${encodeURIComponent(username)}`
  );
  const data = await response.json();
  // check if the user actually exists otherwise return null
  // can happen if name is entered directly in the url
  const login = data?.login;
  if (login === undefined) {
    return null;
  }
  return data;
};

/**
 * function to fetch all repositories of a user
 *
 * @param username
 * @returns
 */
export const getUserRepos = async (username: string): Promise<Repository[]> => {
  const response = await fetch(
    `${BASE_URL}/users/${encodeURIComponent(username)}/repos?per_page=100`
  );
  const data = await response.json();
  return data;
};
