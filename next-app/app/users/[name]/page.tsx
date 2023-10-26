"use client";

import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Searchbar from "../../components/Searchbar";
import { GitUser, Repository } from "../../types";
import { getUser, getUserRepositories } from "../../githubApi";
import { get } from "http";
import RepoList from "../../components/RepoList";
import GitUserProfile from "../../components/GitUserProfile";

export default function UserPage({ params }: { params: { name: string } }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState<GitUser | null>();
  const [userRepos, setUserRepos] = useState<Repository[]>([]); // List of all user repositories
  const [repos, setRepos] = useState<Repository[]>([]); // List of repositories to display (list can be filtered)

  const handleSearch = async () => {
    // if search term is empty, display all repos
    if (searchTerm === "") {
      setRepos(userRepos);
    } else {
      const filteredRepos = repos.filter((repo) =>
        repo.name.includes(searchTerm)
      );
      setRepos(filteredRepos);
    }
  };

  useEffect(() => {
    getUser(params.name).then((user) => {
      setUser(user);
      if (user) {
        getUserRepositories(user.login).then((repos) => {
          setUserRepos(repos);
          setRepos(repos);
        });
      }
    });
  }, []);

  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {user && <GitUserProfile user={user} />}
      </Box>
      <Searchbar
        searchType="repository"
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      {repos && <RepoList repos={repos} />}
    </Container>
  );
}
