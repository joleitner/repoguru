"use client";

import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Searchbar from "../../components/Searchbar";
import { GitUser, Repository } from "../../types";
import { getUser, getUserRepos, searchUserRepos } from "../../githubApi";
import RepoList from "../../components/RepoList";
import GitUserProfile from "../../components/GitUserProfile";

export default function UserPage({ params }: { params: { name: string } }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState<GitUser | null>(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [userRepos, setUserRepos] = useState<Repository[]>([]); // List of all user repositories -> to not refetch when emptying search term
  const [repos, setRepos] = useState<Repository[]>([]); // List of repositories to display (list can be filtered)
  const [loadingRepos, setLoadingRepos] = useState(true);
  const [foundCount, setFoundCount] = useState(0);

  const handleSearch = async () => {
    // if search term is empty, display all repos
    if (searchTerm === "") {
      setRepos(userRepos);
      setFoundCount(0); // reset found count
    } else {
      setLoadingRepos(true);
      setFoundCount(0);
      searchUserRepos(searchTerm, params.name).then((filteredRepos) => {
        setLoadingRepos(false);
        setRepos(filteredRepos);
        setFoundCount(filteredRepos.length);
      });
    }
  };

  useEffect(() => {
    setLoadingUser(true);
    getUser(params.name).then((user) => {
      setLoadingUser(false);
      setUser(user);
      if (user) {
        setLoadingRepos(true);
        getUserRepos(user.login).then((repos) => {
          setUserRepos(repos);
          setRepos(repos);
          setLoadingRepos(false);
        });
      }
    });
  }, []);

  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <GitUserProfile loading={loadingUser} user={user} />
      </Box>
      {(user || loadingUser) && (
        <Searchbar
          searchType="repository"
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
        />
      )}
      {foundCount > 0 && (
        <Typography variant="body2" sx={{ mx: 3, mt: 2 }}>
          <b>{foundCount} </b> repositories matching <b>{searchTerm}</b> were
          found.
        </Typography>
      )}
      {(user || loadingUser) && (
        <RepoList loading={loadingRepos} repos={repos} />
      )}
    </Container>
  );
}
