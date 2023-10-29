import { type } from "os";

export type Repository = {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  watchers: number;
  forks: number;
  language: string;
  owner: GitUser;
};

export type GitUser = {
  id: number;
  login: string;
  avatar_url: string;
  html_url?: string;
  name?: string;
  location?: string;
  bio?: string;
  public_repos?: number;
  followers?: number;
  following?: number;
};
