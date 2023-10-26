import { type } from "os";

export type Repository = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  open_issues_count: number;
  language: string;
  owner: {
    login: string;
    avatar_url: string;
  };
};

export type GithubUser = {
  login: string;
  avatar_url: string;
  followers: number;
  following: number;
  public_repos: number;
  public_gists: number;
};